import { APIRequest } from '<services>/api-services';

import { authConstants } from '<state>/actions/auth';
import { config } from '<config>';

const apiRequest = new APIRequest();
const authApiRequest = new APIRequest(config.auth_base_url);

export function requestMiddleware() {
  return ({ dispatch, getState }) => next => async action => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }

    if (typeof action === 'object' && typeof action.type === 'string') {
      if (action.type.startsWith('@auth')) {
        next(action);
        return apiRequest;
      }
    } else {
      return next(action);
    }

    // if not a request, end here
    if (!action.type.endsWith('REQUEST') && !action.type.endsWith('INIT')) return next(action);
    else next(action); // Start the loader anyways

    const { tokenExpiration, refreshToken } = getState().account;

    //  2 minutes things
    const refreshThreshold = new Date(tokenExpiration * 1000 - 10000).getTime();
    const currentDateTime = new Date().getTime();
    const expired = refreshThreshold < currentDateTime;

    if (refreshToken && expired) {
      try {
        const refreshResponse = await authApiRequest.refresh(refreshToken, apiRequest);
        dispatch({ type: authConstants.REFRESH_TOKEN_SUCCESS, token: refreshResponse });
      } catch (error) {
        if (error.response && error.response.status === 401) {
          // if refresh token has expired, dispatch LOGOUT THINGS
          dispatch({ type: authConstants.LOGOUT });
          throw error;
          // return next(error);
        }
      }
    }
    // next(action); done on line 26
    return apiRequest;
  };
}
