// 상태관리할 초기값
const initialState = {
    isLoggedIn: false,
};

// 액션 타입
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';

// 액션 생성함수
export const loginAction = () => ({
    type: LOG_IN,
    data: {
        isLoggedIn: true,
    }
});

export const logoutAction = () => ({
    type: LOG_OUT,
    data: {
        isLoggedIn: false,
    }
});

// 리듀서 선언
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                isLoggedIn: action.data.isLoggedIn,
            };

        case LOG_OUT:
            return {
                ...state,
                isLoggedIn: action.data.isLoggedIn,
            };

        default:
            return state;
    }
}

export default reducer;