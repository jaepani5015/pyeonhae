import React, { useState, useCallback, useEffect } from 'react';

import WriteComment from './WriteComment';
import CommentList from './CommentList';

import { RollbackOutlined } from '@ant-design/icons';
import Star from 'react-rating-stars-component';

import { useSelector, useDispatch } from 'react-redux';
import { viewItem, replyList } from '../../modules/viewItem';

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

    const login = useSelector((state) => state.user.isLoggedIn);
    const itemList = useSelector((state) => state.saleItem.data);
    const dispatch = useDispatch();

    const onClickBack = useCallback(e => {
        history.goBack();
    }, []);

    const [state, setState] = useState(null)

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(viewItem(id));
        dispatch(replyList(id));
        itemList.map(e => e.id === id ? setState(e) : null);
    }, []);

    useEffect(() => {
        console.log('STATE : ', state);
        console.log('State rating : ', state !== null ? parseInt(state.rating) : null);
    }, [state]);

    return (
        <Row>
            <Col xs={1} md={5} />
            <Col xs={22} md={14}>
                <Div_wrap>
                    <BackBtn onClick={onClickBack}>
                        뒤로가기 <RollbackOutlined />
                    </BackBtn>
                    <MainImg_wrap>
                        <MainImg src={state !== null ? state.imageURL : null} title='store product image' />
                    </MainImg_wrap>
                    <Title>{state !== null ? state.title : null}</Title>
                    <Star value={state !== null ? state.rating : 1} size={20} isHalf={true} edit={false} />
                    <Price>{state !== null ? state.price : null}</Price>
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
                        </CommentList_wrap>
                    </Comment_wrap>
                </Div_wrap>
            </Col>
            <Col xs={1} md={5} />
        </Row>
    )
}

export default DetailProductForm;