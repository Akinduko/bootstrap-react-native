import {authConstants} from  '<state>/constants'

const INITIAL_STATE = {
    token: null
  };

  
export function account(state = INITIAL_STATE, action) {
    switch (action.type) {
      case authConstants.LOGIN_SUCCESS:
        return {
          ...state,
          token: action.user.access_token,
          loggedIn: true
        };
      case authConstants.LOGOUT:
        return {
          ...INITIAL_STATE
        };
      default:
        return state;
    }
  }
  