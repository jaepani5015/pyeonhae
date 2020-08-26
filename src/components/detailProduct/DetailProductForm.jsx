import React, { useState, useCallback, useEffect } from 'react';

import WriteComment from './WriteComment';
import CommentList from './CommentList';

import { RollbackOutlined } from '@ant-design/icons';
import Star from 'react-rating-stars-component';

import {
    Div_wrap,
    BackBtn,
    MainImg_wrap,
    MainImg,
    Title,
    Price,
    Hr,
    Comment_wrap,
    WriteComment_wrap,
    Span,
    CommentList_wrap,
} from './style/DetailProduct_Styled';

import { Row, Col } from 'antd';
import { useParams, useHistory } from 'react-router-dom';

const DetailProductForm = () => {
    const { id } = useParams();
    const history = useHistory();

    const onClickBack = useCallback(e => {
        history.goBack();
    }, []);

    useEffect(e => {
        window.scrollTo(0,0);
    }, []);

    const [login, setLogin] = useState(true);

    return (
        <Row>
            <Col xs={1} md={5}/>
            <Col xs={22} md={14}>
                <Div_wrap>
                    <BackBtn onClick={onClickBack}>
                        뒤로가기 <RollbackOutlined />
                    </BackBtn>
                    <MainImg_wrap>
                        <MainImg src='../image/cu_product.jpg' title='store product image' />
                    </MainImg_wrap>
                    <Title>롯데푸드)요구하이 145ml</Title>
                    <Star value={3.5} size={20} isHalf={true} edit={false} />
                    <Price>1,000원</Price>
                    <Hr />
                    <Comment_wrap>
                        {/* 댓글작성 폼 래핑 */}
                        {
                            login &&
                            <WriteComment_wrap>
                                <WriteComment />
                            </WriteComment_wrap>
                        }

                        <Span>댓글</Span>
                        {/* 댓글리스트 폼 래핑 */}
                        <CommentList_wrap>
                            <CommentList />
                            <CommentList />
                            <CommentList />
                            <CommentList />
                            <CommentList />
                        </CommentList_wrap>
                    </Comment_wrap>
                </Div_wrap>
            </Col>
            <Col xs={1} md={5}/>
        </Row>
    );
}

export default DetailProductForm;