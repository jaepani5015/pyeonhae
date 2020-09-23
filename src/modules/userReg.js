import { nickNameCheckAPI } from '../api/userReg';

// action type
const GET_NICKNAME_CHECK = 'GET_NICKNAME_CHECK';
const GET_NICKNAME_CHECK_SUCCESS = 'GET_NICKANEM_CHECK_SUCCESS';
const GET_NICKNAME_CHECK_ERROR = 'GET_NICNAME_CHECK_ERROR';

// redux-thunk 함수생성
// nickname check
export const nickNameCheck = (nickName) => async dispatch => {
    console.log('nickname check dispatch');
    const payload = await nickNameCheckAPI(nickName);

    dispatch({ type: GET_NICKNAME_CHECK });
    try {
        dispatch({ type: GET_NICKNAME_CHECK_SUCCESS, payload });
    } catch (e) {
        dispatch({ type: GET_NICKNAME_CHECK_ERROR, error: e });
    }
}

// 초기상태
const initialState = {
    nickName : null,
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_NICKNAME_CHECK:
            console.log('get nickname check', action.payload);
            return {}
        case GET_NICKNAME_CHECK_SUCCESS:
            console.log('get nickname success', action.payload);
            return {}
        case GET_NICKNAME_CHECK_ERROR:
            console.log('get nickname error', action.payload);
            return {}
        default: return state;
    }
}

export default reducer;