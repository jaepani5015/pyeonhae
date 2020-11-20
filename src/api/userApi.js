import axios from 'axios';

export const userLogin = (email, password) => {
    console.log('userlogin get data', email, password);
    const res = axios({
        method: 'post',
        headers: {
            "Content-Type" : "application/json"
        },
        url: 'http://3.34.200.65/login',
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
        url: 'http://3.34.200.65/deleteUser',
        data: {
            "id": id
        }
    });
    return res;
}