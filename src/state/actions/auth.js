import AsyncStorage from '@react-native-community/async-storage';
import { APIRequest } from '<services>/api-services';
import { config } from '<config>';
import { handleError } from '<services>/notification-service';
import NavigationService from '<utils>/NavigationService';
import { feedbackAction } from '<state>/actions/feedback';
import authConstants from  '<state>/constants'

const apiRequest = new APIRequest(config.auth_base_url);

export function loginAction(data) {
  function request() {
    return { type: authConstants.LOGIN_REQUEST };
  }
  function success(user) {
    return { type: authConstants.LOGIN_SUCCESS, user };
  }
  const failure = error => {
    return { type: authConstants.LOGIN_FAILURE, error };
  };

  return async dispatch => {
    try {
      const apis = await dispatch(request());
      const userDetails = await apiRequest.logIn(data, apis);
      await AsyncStorage.setItem('loginUsername', data.username);
  
      dispatch(success({ ...userDetails, username: data.username }));
      await dispatch(fetchWalletList());
      const { password } = data;
      // Navigate to Main page
      NavigationService.navigate('Home', { password });
    } catch (error) {
      handleError(error);
      dispatch(failure(error));
    }
  };
}

export function refreshToken(refreshtoken, type) {
  function request() {
    return { type: authConstants.REFRESH_TOKEN_REQUEST };
  }
  function success(token) {
    return { type: authConstants.REFRESH_TOKEN_SUCCESS, token };
  }
  const failure = error => {
    return { type: authConstants.REFRESH_TOKEN_FAILURE, error };
  };
  return async dispatch => {
    try {
      const apis = await dispatch(request());
      const userDetails = await apiRequest.refresh(refreshtoken, apis);
      await dispatch(success(userDetails));
      // Navigate to Main page
      if (type) {
        return NavigationService.navigate('Main');
      }
    } catch (error) {
      handleError(error);
      dispatch(failure(error));
      if (type) {
        return NavigationService.navigate('Login');
      }
    }
  };
}

export function ForgotPasswordAction(token, data, type, step) {
  function request() {
    return { type: authConstants.RESET_REQUEST };
  }
  function success(user) {
    return { type: authConstants.RESET_SUCCESS, user };
  }
  function failure(error) {
    return { type: authConstants.RESET_FAILURE, error };
  }
  const level = level => {
    return { type: authConstants.RESET_LEVEL, level };
  };

  return async dispatch => {
    try {
      await dispatch(request());
      const res = await apiRequest.forgotPassword(token, data, type);
      if (type === 'complete' && res.success) {
        const body = {
          username: data.address,
          password: data.password
        };
        return await dispatch(loginAction(body));
      }
      dispatch(success(true));
      dispatch(level({ ...data, ...(step ? { level: step } : {}) }));
    } catch (error) {
      if (error.error && error.error.toLowerCase() === 'conflict') {
        error['error'] = 'user with phone number already exist';
      }
      if (error.error && error.error.toLowerCase() !== 'conflict') {
        error['error'] = 'Service unavailable, Please try again.';
      }
      dispatch(failure());
      handleError(error);
    }
  };
}

export function SignUpAction(token, data, type, step) {
  function request() {
    return { type: authConstants.SIGNUP_REQUEST };
  }
  function success(user) {
    return { type: authConstants.SIGNUP_SUCCESS, user };
  }
  function failure(error) {
    return { type: authConstants.SIGNUP_FAILURE, error };
  }
  function failureSignin(error) {
    return { type: authConstants.LOGIN_FAILURE, error };
  }
  const level = level => {
    return { type: authConstants.SIGNUP_LEVEL, level };
  };
  return async dispatch => {
    try {
      await dispatch(request());

      const res = await apiRequest.SignUp(token, data, type);

      if (type === 'complete' && res.data) {
        try {
          const body = {
            username: data.address,
            password: data.password
          };
          await dispatch(loginAction(body));
          dispatch(success(true));
        } catch (error) {
          handleError(error);
          dispatch(failureSignin());
        }
      }
      dispatch(success(true));
      dispatch(level({ ...data, ...(step ? { level: step } : {}) }));
    } catch (error) {
      if (error.error && error.error.toLowerCase() === 'conflict') {
        error['error'] = 'user with phone number already exist';
      }
      if (error.error && error.error.toLowerCase() !== 'conflict') {
        error['error'] = 'Service unavailable, Please try again.';
      }
      dispatch(failure());
      handleError(error);
    }
  };
}

export function FetchTokenAction(data, type) {
  const request = () => {
    return { type: authConstants.CLIENT_REQUEST };
  };
  const success = token => {
    return { type: authConstants.CLIENT_SUCCESS, token };
  };
  const failure = error => {
    return { type: authConstants.CLIENT_FAILURE, error };
  };

  return async dispatch => {
    dispatch(request());
    try {
      const clientToken = await apiRequest.fetchClientToken(data, type);
      dispatch(success(clientToken));
    } catch (error) {
      dispatch(failure());
      handleError(error);
    }
  };
}

export function profileAction(data) {
  const request = () => {
    return { type: authConstants.PROFILE_REQUEST };
  };
  const success = profile => {
    return { type: authConstants.PROFILE_SUCCESS, profile };
  };
  const failure = error => {
    return { type: authConstants.PROFILE_FAILURE, error };
  };

  return async dispatch => {
    dispatch(request());
    try {
      await apiRequest.updateProfile(data);
      const profile = { firstName: data.first_name, lastName: data.last_name };
      dispatch(success(profile));
    } catch (error) {
      dispatch(failure());
      handleError(error);
    }
  };
}

export function settingsAction(data) {
  const request = () => {
    return { type: authConstants.SETTINGS_REQUEST };
  };
  const success = settings => {
    return { type: authConstants.SETTINGS_SUCCESS, settings };
  };
  const failure = error => {
    return { type: authConstants.SETTINGS_FAILURE, error };
  };

  return async dispatch => {
    dispatch(request());
    try {
      const settings = data;
      dispatch(success(settings));
    } catch (error) {
      dispatch(failure());
      handleError(error);
    }
  };
}
export function passwordAction(data, type) {
  const request = () => {
    return { type: authConstants.PASSWORD_REQUEST };
  };
  const success = res => {
    return { type: authConstants.PASSWORD_SUCCESS, res };
  };
  const failure = error => {
    return { type: authConstants.PASSWORD_FAILURE, error };
  };

  return async dispatch => {
    const apis = await dispatch(request());
    try {
      if (type) {
        await apiRequest.logIn(data, apis);
        dispatch(success({}));
        const { password } = data;
        return NavigationService.navigate('ChangePassword', {
          data: { status: 'confirmed', payload: { password } }
        });
      }
      await apiRequest.updatePassword(data);
      dispatch(success({}));
      dispatch(
        feedbackAction(
          {
            data: {
              type: 'success',
              title: '',
              share: false,
              content: 'Your Password has been changed successfully',
              buttonText: 'Done',
              onSuccessClose: () => NavigationService.navigate('Login')
            }
          },
          'FEEDBACK_SUCCESS'
        )
      );
      return NavigationService.navigate('Feedback');
    } catch (error) {
      dispatch(failure());
      handleError(error);
      setTimeout(() => NavigationService.navigate('ChangePassword'), 3000);
    }
  };
}

export function passcodeAction(data, type) {
  const request = () => {
    return { type: authConstants.PASSCODE_REQUEST };
  };
  const success = res => {
    return { type: authConstants.PASSCODE_SUCCESS, res };
  };
  const failure = error => {
    return { type: authConstants.PASSCODE_FAILURE, error };
  };
  const passcodeSuccess = profile => {
    return { type: authConstants.SETTINGS_SUCCESS, profile };
  };
  return async dispatch => {
    try {
      const apis = await dispatch(request());
      if (type === 'check') {
        await apiRequest.logIn(data, apis);
        dispatch(success({}));
        const { password } = data;
        return NavigationService.navigate('SetPasscode', {
          data: {
            status: 'choose',
            type: 'authentication',
            payload: { password, origin: 'change' }
          }
        });
      }
      await apiRequest.setPasscode(data);
      dispatch(passcodeSuccess({ passcode: data.passcode }));
      dispatch(success({}));
      if (type === 'change') {
        dispatch(
          feedbackAction(
            {
              data: {
                type: 'success',
                title: '',
                share: false,
                content: 'Your passcode has been updated successfully',
                buttonText: 'Done',
                onSuccessClose: () => NavigationService.navigate('Home')
              }
            },
            'FEEDBACK_SUCCESS'
          )
        );
        return NavigationService.navigate('Feedback');
      }
      if (type === 'set') {
        return NavigationService.navigate('Home');
      }
    } catch (error) {
      handleError(error);
      dispatch(failure(error));
      if (type === 'set') {
        return setTimeout(
          () =>
            NavigationService.navigate('SetPasscode', {
              data: { status: 'choose', type: 'authentication', payload: {} }
            }),
          3000
        );
      }
      setTimeout(() => NavigationService.navigate('ChangePasscode'), 3000);
    }
  };
}

export function logoutAction() {
  function success() {
    return { type: authConstants.LOGOUT };
  }
  return async dispatch => {
    dispatch(success({}));
    NavigationService.navigate('Login');
  };
}

export function uploadAvatarAction(file) {
  const request = () => {
    return { type: authConstants.AVATAR_UPLOAD_REQUEST };
  };
  const success = avatar => {
    return { type: authConstants.AVATAR_UPLOAD_SUCCESS, avatar };
  };
  const failure = error => {
    return { type: authConstants.AVATAR_UPLOAD_FAILURE, error };
  };

  return async dispatch => {
    const uploadRequest = new APIRequest(config.upload_base_url);
    dispatch(request());
    try {
      await dispatch(request());
      const avatar = await uploadRequest.uploads(file);
      dispatch(success(avatar));
    } catch (error) {
      dispatch(failure());
      handleError(error);
    }
  };
}
