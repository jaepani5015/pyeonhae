import { replyApi } from '../api/replyApi';

const REPLY_SEND = "REPLY_SEND";
const REPLY_SEND_SUCCESS = 'REPLY_SEND_SUCCESS';
const REPLY_SEND_ERROR = 'REPLY_SEND_ERROR';

export const replyAction = (userId, saleItemId, rating, comment) => async (dispatch) => {
    const payload = await replyApi(userId, saleItemId, rating, comment);

    dispatch({ type: REPLY_SEND });
    try {
        dispatch({ type: REPLY_SEND_SUCCESS, payload });
    } catch (e) {
        dispatch({ type: REPLY_SEND_ERROR, error: e })
    }
};

export const initialState = {
    data : ""
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case REPLY_SEND:{
            console.log("reply send");
            return { ...state }
        }
        case REPLY_SEND_SUCCESS:{
            console.log("reply send success");
            console.log(action.payload);
            return { ...state }
        }
        case REPLY_SEND_ERROR:{
            console.log("reply send error");
            return { ...state }
        }
        default: return { ...state}
    }
}; 

export default reducer;