import { viewItemApi, replyListApi } from '../api/viewItemApi';

const GET_VIEWITEM_CHECK = 'GET_VIEWITEM_CHECK';
const GET_VIEWITEM_CHECK_SUCCESS = 'GET_VIEWITEM_CHECK_SUCCESS';
const GET_VIEWITEM_CHECK_ERROR = 'GET_VIEWITEM_CHECK_ERROR';

const GET_REPLY_LIST_CHECK = 'GET_REPLY_LIST_CHECK';
const GET_REPLY_LIST_CHECK_SUCCESS = 'GET_REPLY_LIST_CHECK_SUCCESS';
const GET_REPLY_LIST_CHECK_ERROR = 'GET_REPLY_LIST_CHECK_ERROR';

export const viewItem = (saleItemID) => async dispatch => {
    const payload = await viewItemApi(saleItemID);

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
    replyLoading : false,
    reply: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        // 아이템 조회 관련
        case GET_VIEWITEM_CHECK:
            console.log('GET_VIEWITEM_CHECK');

        case GET_VIEWITEM_CHECK_SUCCESS:
            console.log('GET_VIEWITEM_CHECK_SUCCESS');
            return state;

        case GET_VIEWITEM_CHECK_ERROR:
            console.log('GET_VIEWITEM_CHECK_ERROR');
            return state;

        // 댓글관련
        case GET_REPLY_LIST_CHECK:
            console.log('GET_REPLY_LIST_CHECK');
            return state;

        case GET_REPLY_LIST_CHECK_SUCCESS:
            console.log('GET_REPLY_LIST_CHECK_SUCCESS');
            return {
                ...state,
                replyLoading : true,
                reply : action.payload.data.searchItemList.map(e => e),
            };

        case GET_REPLY_LIST_CHECK_ERROR:
            console.log('GET_REPLY_LIST_CHECK_ERROR');
            return state;

        default: return state;
    }
}

export default reducer;