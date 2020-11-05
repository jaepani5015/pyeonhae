// 루트 리듀서
import { combineReducers } from 'redux';
import user from './user';
import userReg from './userReg';
import saleItem from './saleItem';

const rootReducer = combineReducers({
    user,
    userReg,
    saleItem,
});

export default rootReducer;