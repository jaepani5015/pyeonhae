import { viewItemApi, replyListApi } from '../api/viewItemApi';

const GET_VIEWITEM_CHECK = 'GET_VIEWITEM_CHECK';
const GET_VIEWITEM_CHECK_SUCCESS = 'GET_VIEWITEM_CHECK_SUCCESS';
const GET_VIEWITEM_CHECK_ERROR = 'GET_VIEWITEM_CHECK_ERROR';

const GET_REPLY_LIST_CHECK = 'GET_REPLY_LIST_CHECK';
const GET_REPLY_LIST_CHECK_SUCCESS = 'GET_REPLY_LIST_CHECK_SUCCESS';
const GET_REPLY_LIST_CHECK_ERROR = 'GET_REPLY_LIST_CHECK_ERROR';

export const viewItem = (id) => async dispatch => {
    const payload = await viewItemApi(id);

    dispatch({ type: GET_VIEWITEM_CHECK });
    try {
        dispatch({ type: GET_VIEWITEM_CHECK_SUCCESS, payload });
    } catch (e) {
        dispatch({ type: GET_VIEWITEM_CHECK_ERROR, error: e });
    }
}

export const replyList = (saleItemID) => async dispatch => {
    const payload = await replyListApi(saleItemID);

    dispatch({ type: GET_REPLY_LIST_CHECK });
    try {
        dispatch({ type: GET_REPLY_LIST_CHECK_SUCCESS, payload })
    } catch (e) {
        dispatch({ type: GET_REPLY_LIST_CHECK_ERROR, error: e });
    }
}

const initialState = {
    
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_VIEWITEM_CHECK:
        case GET_VIEWITEM_CHECK_SUCCESS:
            console.log('VIEW ITEM : ', action.payload);
            return state;
        case GET_VIEWITEM_CHECK_ERROR:

        case GET_REPLY_LIST_CHECK:
        case GET_REPLY_LIST_CHECK_SUCCESS:
            console.log('REPLY_LIST : ', action.payload);
            return state;
        case GET_REPLY_LIST_CHECK_ERROR:
        default: return state;
    }
}

export default reducer;