// import * as postAPI from '../api/posts';
import { getUser } from '../api/posts';

const GET_POST = 'GET_POST';
const GET_POST_SUCCES = 'GET_POST_SUCCESS';
const GET_POST_FAIL = 'GET_POST_FAIL';

export const getPost = () => async dispatch => {
    dispatch({ type: GET_POST });
    try {
        const post = await getUser();
        dispatch({ type: GET_POST_SUCCES, data: post });
    } catch (error) {
        dispatch({ type: GET_POST_FAIL, error: error });
    }
};

const initialState = {
    loading: false,
    data: null,
    error: null,
}

export const post = (state = initialState, action) => {
    switch (action.type) {
        case GET_POST:
            return {
                ...state,
                loading: true,
                data: null,
                error: null,
            };
        case GET_POST_SUCCES:
            console.log('hihihihihi', action.data.data.id);
            return {
                ...state,
                loading: true,
                data: action.data,
                error: null,
            };
        case GET_POST_FAIL:
            return {
                ...state,
                loading: true,
                data: null,
                error: action.error
            };

        default: return state;
    }
}

export default post;