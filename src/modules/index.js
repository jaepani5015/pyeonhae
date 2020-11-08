// 루트 리듀서
import { combineReducers } from 'redux';
import user from './user';
import userReg from './userReg';
import saleItem from './saleItem';
import viewItem from './viewItem';
import brand from './brand';
import reply from './reply';

const rootReducer = combineReducers({
    user,
    userReg,
    saleItem,
    viewItem,
    brand,
    reply,
});

export default rootReducer;