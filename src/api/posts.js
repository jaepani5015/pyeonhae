import axios from 'axios';

export const getUser = (email, password) => {
    const res = axios({
        method: 'post',
        url: 'http://3.34.200.65/login',
        data: {
            "email": email,
            "password": password,
        }
    });
    return res;
}