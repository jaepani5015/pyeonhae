// 루트 리듀서
import { combineReducers } from 'redux';
import user from './user';

const rootReducer = combineReducers({
    user,
});

export default rootReducer;