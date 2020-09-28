import axios from 'axios';

export const nickNameCheckApi = (nickName) => {
    const res = axios({
        method: 'post',
        url: 'http://3.34.200.65/nickNameCheck',
        data: {
            "nickName": nickName
        }
    });
    return res;
}

export const emailCheckApi = (email) => {
    const res = axios({
        method: 'post',
        url: 'http://3.34.200.65/emailCheck',
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
            "password" : password,
            "nickname" : nickName,
        }
    });
    return res;
}

export const authApi = (auth, id) => {
    const res = axios({
        method: 'post',
        url: `http://3.34.200.65/`,
        data: {
            "email": email,
            "password" : password,
            "nickname" : nickName,
        }
    });
    return res;
}