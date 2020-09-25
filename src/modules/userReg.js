import { nickNameCheckAPI } from '../api/userRegApi';

// action type
// 닉네임 체크
const GET_NICKNAME_CHECK = 'GET_NICKNAME_CHECK';
const GET_NICKNAME_CHECK_SUCCESS = 'GET_NICKANEM_CHECK_SUCCESS';
const GET_NICKNAME_CHECK_ERROR = 'GET_NICNAME_CHECK_ERROR';

// 이메일 체크
const GET_EMAIL_CHECK = 'GET_EMAIL_CHECK';
const GET_EMAIL_CHECK_SCUCCESS = 'GET_EMAIL_CHECK_SUCCESS';
const GET_EMAIL_CHECK_ERROR = 'GET_EMAIL_CHECK_ERROR';

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
    loading: false,
    error: null,
    reg: {
        nickName: null,
        email: null,
    },    
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_NICKNAME_CHECK:
            console.log('get nickname check', action.payload);
            return {
                ...state,
                loading: true,
            }
        case GET_NICKNAME_CHECK_SUCCESS:
            console.log('get nickname success', action.payload);
            console.log('get nickname success', action.payload.data);
            return {
                ...state,
                loading: true,
                error: null,
                reg: {
                    nickName: action.payload.data,
                }
            }
        case GET_NICKNAME_CHECK_ERROR:
            console.log('get nickname error', action.payload);
            return {
                ...state,
                loading: true,
                error: action.error,
            }
        default: return state;
    }
}

export default reducer;