import React, { useState, useCallback, useEffect } from 'react';

import {
    TextArea,
    InputBtn,
} from './style/WriteComment_Styled';

const WriteComment = () => {
    const [comment, setComment] = useState('');

    const onClickSubmit = useCallback(e => {
        e.preventDefault();
        console.log(e.target.value);
    }, []);

    const onChangeComment = useCallback(e => {
        console.log("12321321321");
        setComment(e.target.value);
    }, []);

    useEffect(() => {
        console.log('useEffect: ', comment);
    }, [comment])

    useEffect(() => {
        console.log('fhjsdfjskldfjsdlkfsdf');
    },[])

    return(
        <>
            {/* <TextArea onChange={onChangeComment} /> */}
            <TextArea onChange={console.log('hohohoohoho')} />
            <InputBtn type='button' value="댓글등록" onClick={onClickSubmit} />
        </>
    );
}

export default WriteComment;