import axios from 'axios';

export const userLogin = (email, password) => {
    const res = axios({
        method: 'post',
        url: 'http://3.34.200.65/login',
        data: {
            "email": email,
            "password": password,
        }
    });
    return res;
};

export const userLogout = () => {
    const res = axios({
        method: 'get',
        url: 'http://3.34.200.65/logout',
    });
    return res;
};