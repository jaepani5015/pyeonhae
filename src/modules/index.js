// 루트 리듀서
import { combineReducers } from 'redux';
import login from './login';

const rootReducer = combineReducers({
    login,
});

export default rootReducer;