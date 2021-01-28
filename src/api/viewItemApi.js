import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_URL_BACK;

export const viewItemApi = (id) => {
    const res = axios({
        method: 'get',
        url: `/viewItem/${id}`,
    });
    return res;
}

export const replyListApi = (saleItemID) => {
    const res = axios({
        method: 'post',
        url: '/replyList',
        data: {
            'saleItemId': saleItemID
        }
    });
    return res;
}