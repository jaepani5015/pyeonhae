// 루트 리듀서
import { combineReducers } from 'redux';
import user from './user';
import userReg from './userReg';

const rootReducer = combineReducers({
    user,
    userReg,
});

export default rootReducer;