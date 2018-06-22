import { combineReducers } from 'redux';
import commonReducer from './common.reducer';
import userReducer from './user.reducer';
import candidatesReducer from './candidates.reducer';

const rootReducer = combineReducers({
  common: commonReducer,
  user: userReducer,
  candidates: candidatesReducer,
});

export default rootReducer;
