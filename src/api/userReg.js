import axios from 'axios';

export const nickNameCheckAPI = (nickName) => {
    const res = axios({
        method: 'post',
        url: 'http://3.34.200.65/nickNameCheck',
        data: {
            "nickName": nickName
        }
    });
    return res;
}