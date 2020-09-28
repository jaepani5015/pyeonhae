import { emailCheckApi, nickNameCheckApi, userRegSendApi, authApi } from '../api/userRegApi';

// action type
// 닉네임 체크
const GET_NICKNAME_CHECK = 'GET_NICKNAME_CHECK';
const GET_NICKNAME_CHECK_SUCCESS = 'GET_NICKANEM_CHECK_SUCCESS';
const GET_NICKNAME_CHECK_ERROR = 'GET_NICNAME_CHECK_ERROR';

// 이메일 체크
const GET_EMAIL_CHECK = 'GET_EMAIL_CHECK';
const GET_EMAIL_CHECK_SCUCCESS = 'GET_EMAIL_CHECK_SUCCESS';
const GET_EMAIL_CHECK_ERROR = 'GET_EMAIL_CHECK_ERROR';

// 회원가입
const GET_USERREG_CHECK = 'GET_USERREG_CHECK';
const GET_USERREG_CHECK_SUCCESS = 'GET_USERREG_CHECK_SUCCESS';
const GET_USERREG_CHECK_ERROR = 'GET_USERREG_CHECK_ERROR';

// 이메일 인증
const GET_AUTH_CHECK = 'GET_AUTH_CHECK';
const GET_AUTH_CHECK_SUCCESS = 'GET_AUTH_CHECK_SUCCESS';
const GET_AUTH_CHECK_ERROR = 'GET_AUTH_CHECK_ERROR';

// redux-thunk 함수생성
// nickname check
export const nickNameCheck = (nickName) => async dispatch => {
    const payload = await nickNameCheckApi(nickName);

    dispatch({ type: GET_NICKNAME_CHECK });
    try {
        dispatch({ type: GET_NICKNAME_CHECK_SUCCESS, payload });
    } catch (e) {
        dispatch({ type: GET_NICKNAME_CHECK_ERROR, error: e });
    }
}

// email check
export const emailCheck = (email) => async dispatch => {
    const payload = await emailCheckApi(email);

    dispatch({ type: GET_EMAIL_CHECK });
    try {
        dispatch({ type: GET_EMAIL_CHECK_SCUCCESS, payload });
    } catch (e) {
        dispatch({ type: GET_EMAIL_CHECK_ERROR, error: e });
    }
}

// 회원가입
export const userRegSend = (email, nickName, password) => async dispatch => {
    const payload = await userRegSendApi(email, nickName, password);

    dispatch({ type: GET_USERREG_CHECK });
    try {
        dispatch({ type: GET_USERREG_CHECK_SUCCESS, payload });
    } catch (e) {
        dispatch({ type: GET_USERREG_CHECK_ERROR, error: e });
    }
}

// 이메일 인증
export const auth = (auth, id) => async dispatch => {
    const payload = await authApi(auth, id);

    dispatch({ type: GET_AUTH_CHECK });
    try {
        dispatch({ type: GET_AUTH_CHECK_SUCCESS, payload });
    } catch (e) {
        dispatch({ type: GET_AUTH_CHECK_ERROR, error: e });
    }
}

// 초기상태
const initialState = {
    loading: false,
    error: null,
    check: {
        nickName: null,
        email: null,
    },
    regStatus: {
        email: null,
        id: null,
    },
    emailAuth: null,
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        // 닉네임 체크
        case GET_NICKNAME_CHECK:
            return {
                ...state,
                loading: true,
            }
        // 닉네임 체크 성공
        case GET_NICKNAME_CHECK_SUCCESS:
            return {
                ...state,
                loading: true,
                error: null,
                check: {
                    nickName: action.payload.data,
                }
            }
        // 닉네임 체크 에러
        case GET_NICKNAME_CHECK_ERROR:
            return {
                ...state,
                loading: true,
                error: action.error,
            }

        // 이메일 체크
        case GET_EMAIL_CHECK:
            return {
                ...state,
                loading: true,
            }
        // 이메일 체크 성공
        case GET_EMAIL_CHECK_SCUCCESS:
            return {
                ...state,
                loading: true,
                error: null,
                check: {
                    email: action.payload.data,
                }
            }
        // 이메일 체크 에러
        case GET_EMAIL_CHECK_ERROR:
            return {
                ...state,
                loading: true,
                error: action.error,
            }

        // 회원가입
        case GET_USERREG_CHECK:
            return {
                ...state,
                loading: true,
            }
        // 회원가입 체크 성공
        case GET_USERREG_CHECK_SUCCESS:
            return {
                ...state,
                loading: true,
                regStatus: {
                    email: action.payload.data.email,
                    id: action.payload.data.id,
                },
            }
        // 회원가입 체크 에러
        case GET_USERREG_CHECK_ERROR:
            return {
                ...state,
                loading: true,
                error: action.error,
            }

        // 이메일 인증
        case GET_AUTH_CHECK:
            return {}
        // 이메일 인증 성공
        case GET_AUTH_CHECK_SUCCESS:
            return {}
        // 이메일 인증 에러
        case GET_AUTH_CHECK_ERROR:
            return {}
        default: return state;
    }
}

export default reducer;