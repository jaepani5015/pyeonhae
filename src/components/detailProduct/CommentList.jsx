import React from 'react';

import {
    UserNickName,
    UserComment,
    Hr,
} from './style/CommentList_Styled';

const CommnentList = () => {
    return(
        <>
            <UserNickName>재파니</UserNickName>
            <UserComment>
                hellohellohellohellohellohellohellohello
                hellohellohellohellohellohellohellohello
                hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello
                hellohellohellohellohellohellohellohello
                hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello
                hellohellohellohellohellohellohellohello
            </UserComment>
            <Hr />
        </>
    );
}

export default CommnentList;