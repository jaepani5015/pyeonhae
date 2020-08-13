import React, { useState, useCallback, useEffect } from 'react';

import Cu from './CardList/Cu';
import useWindowSize from '../hooks/useWindowSize';

import { Row, Col, Menu, Dropdown, Button, Typography } from 'antd';
import { UnorderedListOutlined, DownOutlined, UserSwitchOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const Span = styled.span`
    font-size: 20px;
    font-weight: 700;
    color : ${props => props.event === true ? 'red' : 'black'}
`;

const Index = () => {
    const size = useWindowSize();

    const [opo, setOpo] = useState(true);
    const [tpo, setTpo] = useState(false)
    const [category, setCategory] = useState(null);
    const [order, setOrder] = useState(null)

    // 1+1클릭 이벤트
    const onClickOpo = useCallback(e => {
        setOpo(!opo);
    }, [opo]);

    // 2+1클릭 이벤트
    const onClickTpo = useCallback(e => {
        setTpo(!tpo);
    }, [tpo]);

    // 카테고리 선택 이벤트
    const onClickCategory = useCallback(e => {
        setCategory(e.key);
    }, [category]);

    // 정렬순서 선택 이벤트
    const onClickOrder = useCallback(e => {
        setOrder(e.key);
    }, [order]);

    useEffect(() => {
        // console.log(event);
        console.log(category, order);
    }, [opo, tpo, category, order]);

    const categoryList = (
        <Menu onClick={onClickCategory}>
            <Menu.Item key="showAll">전체보기</Menu.Item>
            <Menu.Item key="drink">음료</Menu.Item>
            <Menu.Item key="snack">과자</Menu.Item>
        </Menu>
    );

    const orderList = (
        <Menu onClick={onClickOrder}>
            <Menu.Item key="popular">인기순</Menu.Item>
            <Menu.Item key="recommended">추천순</Menu.Item>
            <Menu.Item key="registration">등록일순</Menu.Item>
        </Menu>
    );

    return (
        // home, 기준잡기
        <Row style={{ marginTop: 10 }}>
            <Col xs={1} md={5} />
            <Col xs={22} md={14}>
                {/* 1+1 2+1 구역 */}
                <Row style={{ position: 'relative' }}>
                    <Col xs={5} md={2}>
                        <Span onClick={onClickOpo} event={opo}>1+1</Span>
                    </Col>
                    <Col xs={5} md={2}>
                        <Span onClick={onClickTpo} event={tpo}>2+1</Span>
                    </Col>
                    {
                        size.width < 450 ?
                            <>
                                <Col xs={5} offset={6}>
                                    <Dropdown overlay={categoryList} trigger={['click']}>
                                        <span>카테고리 <DownOutlined /></span>
                                    </Dropdown>
                                </Col>
                                <Col xs={2}>
                                    <Dropdown overlay={orderList} trigger={['click']}>
                                        <UnorderedListOutlined />
                                    </Dropdown>
                                </Col>
                            </>
                            :
                            <>
                                <Col md={2} offset={16}>
                                    <Dropdown overlay={categoryList} trigger={['click']}>
                                        <span>카테고리 <DownOutlined /></span>
                                    </Dropdown>
                                </Col>
                                <Col md={2}>
                                    <Dropdown overlay={orderList} trigger={['click']}>
                                        <UnorderedListOutlined />
                                    </Dropdown>
                                </Col>
                            </>
                    }
                </Row>

                {/* 제품리스트 구역 */}
                <Row style={{ backgroundColor: '', width: '100%', height: '100%', textAlign: 'center', marginTop: 20 }}>
                    <Col xs={12} md={8}><Cu /></Col>
                    <Col xs={12} md={8}><Cu /></Col>
                    <Col xs={12} md={8}><Cu /></Col>
                    <Col xs={12} md={8}><Cu /></Col>
                </Row>
            </Col>
            <Col xs={1} md={5} />
        </Row>
    );
}

export default Index;