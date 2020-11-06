import React, { useEffect, useState } from 'react';

import {
    UserNickName,
    UserComment,
    Hr,
} from './style/CommentList_Styled';

const CommnentList = (reply) => {
    return (
        reply.replyData === false ? <p>loading...</p> :
            <>
            {
                reply.replyData.map(e => 
                    <>
                        <UserNickName>{e.nickName}</UserNickName>
                        <UserComment>{e.comment}</UserComment>
                        <Hr />
                    </>)
            }
            </>
    );
}

export default CommnentList;