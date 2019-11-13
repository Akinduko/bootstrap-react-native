import AsyncStorage from '@react-native-community/async-storage';
import { APIRequest } from '<services>/api-services';
import { config } from '<config>';
import { handleError } from '<services>/notification-service';
import NavigationService from '<utils>/NavigationService';
import authConstants from '<state>/constants';

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

      const { password } = data;
      // Navigate to Main page
      NavigationService.navigate('Home', { password });
    } catch (error) {
      handleError(error);
      dispatch(failure(error));
    }
  };
}
