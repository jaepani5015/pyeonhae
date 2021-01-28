import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_URL_BACK;

export const nickNameCheckApi = (nickName) => {
    const res = axios({
        method: 'post',
        url: '/nickNameCheck',
        data: {
            "nickName": nickName
        }
    });
    return res;
}

export const emailCheckApi = (email) => {
    const res = axios({
        method: 'post',
        url: '/emailCheck',
        data: {
            "email": email
        }
    });
    return res;
}

export const userRegSendApi = (email, nickName, password) => {
    const res = axios({
        method: 'post',
        url: 'http://3.34.200.65/userReg',
        data: {
            "email": email,
            "password": password,
            "nickname": nickName,
        }
    });
    return res;
}

export const authApi = (auth, id) => {
    const res = axios({
        method: 'post',
        url: `http://3.34.200.65/verify/${auth}`,
        data: {
            "id": id,
        }
    });
    return res;
}

export const reAuthApi = (id, email) => {
    const res = axios({
        method: 'post',
        url: 'http://3.34.200.65/resendMail',
        data: {
            "id": id,
            "email": email,
        }
    });
    return res;
}