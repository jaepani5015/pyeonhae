import axios from 'axios';

export const viewItemApi = (id) => {
    const res = axios({
        method: 'get',
        url: `http://3.34.200.65/viewItem/${id}`,
    });
    return res;
}

export const replyListApi = (saleItemID) => {
    const res = axios({
        method: 'post',
        url: 'http://3.34.200.65/replyList',
        data: {
            'saleItemId': saleItemID
        }
    });
    return res;
}