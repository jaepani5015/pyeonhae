const axios = require('axios');

// 상태관리할 초기값
const initialState = {
    isLoggedIn: false,
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

const getUser = async () => {
    try {
        const response = await axios({
            method: 'post',
            url: 'http://192.168.0.6/login',
            data: {
                "email": "pjhyl1127@gmail.com",
                "password": "12341234"
            }
        });
        console.log('response: ', response.data);
    } catch {
        console.log('error');
    }
}

// 액션 타입
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';

// 액션 생성함수
export const loginAction = (email, password) => (
    console.log('loginAction!!!'),
    getUser(), {
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