import {authConstants} from '<state>/constants';

const initialState = {requests: []};

/**
 *
 * @param {Object} state - the state of the loader reducer in the store
 * @param {string[]} state.requests - All pending requests in the store
 * @param {Object} action - the payload action
 * @param {string} action.type - the type of the action
 */
export function loader (state = initialState, action) {
  if (typeof action.type !== 'string') {
    return state;
  }
  // On Logout, return to loading
  if (action.type === authConstants.LOGOUT) {
    return initialState;
  }

  const actionType = action.type.substring (0, action.type.length - 8) || '';
  if (action.type.endsWith ('/REQUEST')) {
    return {
      ...state,
      requests: [...state.requests, actionType],
    };
  }
  if (action.type.endsWith ('/SUCCESS')) {
    return {
      ...state,
      requests: [
        ...state.requests.filter (_request => {
          return _request !== actionType;
        }),
      ],
    };
  }
  if (action.type.endsWith ('FAILURE')) {
    return {
      ...state,
      requests: [
        ...state.requests.filter (_request => {
          return _request !== actionType;
        }),
      ],
    };
  }
  return state;
}
