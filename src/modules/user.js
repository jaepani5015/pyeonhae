import { userLogin } from '../api/userApi';

// action type
const GET_USER_LOGIN = 'GET_USER_LOGIN';
const GET_USER_LOGIN_SUCCESS = 'GET_USER_LOGIN_SUCCESS';
const GET_USER_LOGIN_ERROR = 'GET_USER_LOGIN_ERROR';

const GET_USER_LOGOUT = 'GET_USER_LOGOUT';

const GET_USER_DELETE = 'GET_USER_DELETE';
const GET_USER_DELETE_SUCCESS = 'GET_USER_DELETE_SUCCESS';
const GET_USER_DELETE_ERROR = 'GET_USER_DELETE_ERROR';

// redux-thunk 함수생성
// login
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

// logout
export const logoutAction = () => {
    console.log('this is logout action');
    return {
        type: GET_USER_LOGOUT,
    }
}

export const deleteUser = (id) => async dispatch => {
    const payload = await userDeleteApi(id);

    dispatch({ type: GET_USER_DELETE });
    try {
        dispatch({ type: GET_USER_DELETE_SUCCESS, payload });
    } catch (e) {
        dispatch({ type: GET_USER_DELETE_ERROR, error: e });
    }
}

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
        // 유저 로그인 시도
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
        // 유저 로그인 성공
        case GET_USER_LOGIN_SUCCESS:
            const wl = action.payload.data.wishList !== null ?
                action.payload.data.wishList.map(staet => (staet)) : null;
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
        // 유저 로그인 실패
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

        // 유저 로그아웃
        case GET_USER_LOGOUT:
            return {
                ...state,
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
            }

        // 유저 삭제
        case GET_USER_DELETE:
            return {
                ...state,
                loading: true,
            }
        // 유저 삭제 성공
        case GET_USER_DELETE_SUCCESS:
            return {
                ...state,
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
            }
        // 유저 삭제 에러
        case GET_USER_DELETE_ERROR:
            return {
                ...state,
                loading: true,
                error: action.error
            }

        default: return state;
    }
}

export default reducer;