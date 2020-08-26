import React, { useState, useCallback, useEffect } from 'react';

import {
    TextArea,
    InputBtn,
} from './style/WriteComment_Styled';

const WriteComment = () => {
    const [comment, setComment] = useState('');

    const onClickSubmit = useCallback(e => {
        e.preventDefault();
    }, []);

    const onChangeComment = useCallback(e => {
        setComment(e.target.value);
    }, [comment]);

    useEffect(() => {
        console.log('useEffect: ', comment);
    }, [comment])

    return(
        <form>
            <TextArea onChange={onChangeComment} />
            <InputBtn type='button' value="댓글등록" onClick={onClickSubmit} />
        </form>
    );
}

export default WriteComment;