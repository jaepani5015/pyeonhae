import { userLogin, userLogout } from '../api/user';

// action type
const GET_USER_LOGIN = 'GET_USER_LOGIN';
const GET_USER_LOGIN_SUCCESS = 'GET_USER_LOGIN_SUCCESS';
const GET_USER_LOGIN_ERROR = 'GET_USER_LOGIN_ERROR';

const GET_USER_LOGOUT = 'GET_USER_LOGOUT';
const GET_USER_LOGOUT_SUCCESS = 'GET_USER_LOGOUT_SUCCESS';
const GET_USER_LOGOUT_ERROR = 'GET_USER_LOGOUT_ERROR';

// redux-thunk 함수생성
export const loginAction = (email, password) => async dispatch => {
    console.log('get user dispatch');
    const payload = await userLogin(email, password);

    dispatch({ type: GET_USER_LOGIN });
    try {
        console.log('try');
        dispatch({ type: GET_USER_LOGIN_SUCCESS, payload });
    } catch (e) {
        dispatch({ type: GET_USER_LOGIN_ERROR, error: e });
        console.log('error', e);
    }
};

export const logoutAction = () => async dispatch => {
    console.log('logout action dispatch redux thunk');

    const payload = await userLogout();

    console.log('logout action payload : ', payload);

    // dispatch({ type: GET_USER_LOGOUT });
    // try {
    //     dispatch({ type: GET_USER_LOGOUT_SUCCESS, payload });
    // } catch (e) {
    //     dispatch({ type: GET_USER_LOGOUT_ERROR, error: e });
    //     console.log('logout action error!!! : ', e);
    // }
};

// 초기 상태 선언
const initialState = {
    isLoggedIn: false,
    loading: false,
    error: null,
    User: {
        id: null,
        nickName: null,
        email: null,
        mainAuth: false,
        createAt: null,
        wishList: [
            {
                id: null,
                brand: null,
                title: null,
                price: null,
                imageURL: null,
                rating: null,
                replyCount: null,
                viewCount: null,
                category: null,
                saleTypeList: [
                    {
                        salePeriod: null,
                        saleType: null,
                    }
                ]
            }
        ],
        barcodes: null,
    }
};


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_LOGIN:
            return {
                ...state,
                loading: true,
                isLoggedIn: false,
                error: null,
                User: {
                    ...state.User,
                }
            };
            
        case GET_USER_LOGIN_SUCCESS:
            const wl = action.payload.data.wishList.map(staet => (staet));
            return {
                ...state,
                loading: true,
                isLoggedIn: true,
                error: null,
                User: {
                    ...action.payload.User,
                    id: action.payload.data.id,
                    nickName: action.payload.data.nickName,
                    email: action.payload.data.email,
                    mainAuth: action.payload.data.mainAuth,
                    createAt: action.payload.data.createAt,
                    wishList: wl,
                    barcodes: action.payload.data.barcodes,
                },
            };

        case GET_USER_LOGIN_ERROR:
            return {
                ...state,
                loading: true,
                isLoggedIn: false,
                error: action.error,
                User: {
                    ...state.User,
                }
            };

        default: return state;
    }
}

export default reducer;