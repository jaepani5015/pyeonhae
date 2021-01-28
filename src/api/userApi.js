import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_URL_BACK;

export const userLogin = (email, password) => {
    console.log('userlogin get data', email, password);
    const res = axios({
        method: 'post',
        headers: {
            "Content-Type" : "application/json"
        },
        url: '/login',
        data: {
            "email": email,
            "password": password,
        }
    });
    console.log('loginAction return', res);
    return res;
};

export const userDeleteApi = (id) => {
    const res = axios({
        method: 'post',
        url: '/deleteUser',
        data: {
            "id": id
        }
    });
    return res;
}