import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_URL_BACK;

export const replyApi = (userId, saleItemId, rating, comment) => {
    const res = axios({
        method: "post",
        url: "/reply",
        data: {
            userId: userId,
            saleItemId: saleItemId,
            rating: rating,
            comment: comment
        },
    });
    return res;
};
