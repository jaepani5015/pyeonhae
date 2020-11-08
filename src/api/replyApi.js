import axios from 'axios';

export const replyApi = (userId, saleItemId, rating, comment) => {
    const res = axios({
        method: "post",
        url: "http://3.34.200.65/reply",
        data: {
            userId: userId,
            saleItemId: saleItemId,
            rating: rating,
            comment: comment
        },
    });
    return res;
};
