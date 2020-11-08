import React, { useState, useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { replyAction } from '../../modules/reply';

import {
    TextArea,
    InputBtn,
} from './style/WriteComment_Styled';

const WriteComment = (saleItemId, userId) => {
    const dispatch = useDispatch();

    const [comment, setComment] = useState('');

    useEffect(() => {
        console.log("_______________________");
        console.log(saleItemId, userId);
    }, [saleItemId, userId]);

    const onClickSubmit = useCallback(e => {
        e.preventDefault();
        dispatch(replyAction(userId, saleItemId, "4.5", e.target.value));
    }, []);

    const onChangeComment = useCallback(e => {
        setComment(e.target.value);
    }, [comment]);

    return (
        <>
            <TextArea onChange={onChangeComment} />
            <InputBtn type='button' value="댓글등록" onClick={onClickSubmit} />
        </>
    );
}

export default WriteComment;