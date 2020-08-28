import { getUser } from '../api/posts';

// action type
const GET_USER = 'GET_USER';
const GET_USER_SUCCES = 'GET_USER_SUCCESS';
const GET_USER_ERROR = 'GET_USER_ERROR';

// redux-thunk 함수생성
export const loginAction = (email, password) => async dispatch => {
    console.log('get user dispatch');
    const payload = await getUser(email, password);

    dispatch({ type: GET_USER });
    try {
        console.log('try');
        dispatch({ type: GET_USER_SUCCES, payload });
        // console.log('try success : ', payload);
    } catch (e) {
        dispatch({ type: GET_USER_ERROR, error: e });
        console.log('error', e);
    }
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
        case GET_USER:
            return {
                ...state,
                loading: true,
                isLoggedIn: false,
                error: null,
                User: {
                    ...state.User,
                }
            };
            
        case GET_USER_SUCCES:
            const wl = action.payload.data.wishList.map(staet => (staet));
            return {
                ...state,
                loading: true,
                isLoggedIn: true,
                error: null,
                User: {
                    id: action.payload.data.id,
                    nickName: action.payload.data.nickName,
                    email: action.payload.data.email,
                    mainAuth: action.payload.data.mainAuth,
                    createAt: action.payload.data.createAt,
                    wishList: wl,
                    barcodes: action.payload.data.barcodes,
                }
            };

        case GET_USER_ERROR:
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