const axios = require('axios');

const getUserInfo

// 상태관리할 초기값
const initialState = {
    isLoggedIn: false,
    user: {
        email: null,
        password: null,
    }
};

// 액션 타입
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';

// 액션 생성함수
export const loginAction = (email, password) => ({
    type: LOG_IN,
    data: {
        isLoggedIn: true,
        email: email,
        password: password,
    }
});

export const logoutAction = () => ({
    type: LOG_OUT,
    data: {
        isLoggedIn: false,
        email: null,
        password: null,
    }
});

// 리듀서 선언
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                isLoggedIn: action.data.isLoggedIn,
                user: {
                    email: action.data.email,
                    password: action.data.password,
                }
            };

        case LOG_OUT:
            return {
                ...state,
                isLoggedIn: action.data.isLoggedIn,
                user: {
                    email: action.data.email,
                    password: action.data.password,
                }
            };

        default:
            return state;
    }
}

export default reducer;