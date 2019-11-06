import { combineReducers } from 'redux';

import { account } from '<state>/reducers/account';
import { loader } from '<state>/reducers/loader';
import { feedback } from '<state>/reducers/feedback';

export default combineReducers({
  account,
  loader,
  feedback
});
