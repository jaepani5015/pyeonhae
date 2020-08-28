import axios from 'axios';

export const getUser = (email, password) => {
    const res = axios({withCredentials
        method: 'post',
        url: 'http://3.34.200.65/login',
        data: {
            "email": email,
            "password": passwords
        }
    });
    return res;
}