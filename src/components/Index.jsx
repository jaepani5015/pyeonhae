import React from 'react';

import Card from './Card';
import useWindowSize from '../hooks/useWindowSize';

import { Row, Col, Menu, Dropdown, Button, Typography } from 'antd';
import { UnorderedListOutlined, DownOutlined, UserSwitchOutlined } from '@ant-design/icons';
import styled from 'styled-components';


const category = (
    <Menu>
        <Menu.Item>전체보기</Menu.Item>
        <Menu.Item>음료</Menu.Item>
        <Menu.Item>과자</Menu.Item>
    </Menu>
);

const menu = (
    <Menu>
        <Menu.Item>인기순</Menu.Item>
        <Menu.Item>추천순</Menu.Item>
        <Menu.Item>등록일순</Menu.Item>
    </Menu>
);

const Span = styled.span`
    font-size: 20px;
    font-weight: 700;
`;

const Index = () => {
    const size = useWindowSize();

    return (
        // home, 기준잡기
        <Row style={{ marginTop: 10 }}>
            <Col xs={1} md={5} />
            <Col xs={22} md={14}>
                {/* 1+1 2+1 구역 */}
                <Row style={{ position: 'relative' }}>
                    <Col xs={5} md={2}>
                        <Span>1+1</Span>
                    </Col>
                    <Col xs={5} md={2}>
                        <Span>2+1</Span>
                    </Col>
                    {
                        console.log(size),
                        size.width < 450 ?
                            <>
                                <Col xs={5} offset={6}>
                                    <Dropdown overlay={category} trigger={['click']}>
                                        <span>카테고리 <DownOutlined /></span>
                                    </Dropdown>
                                </Col>
                                <Col xs={2}>
                                    <Dropdown overlay={menu} trigger={['click']}>
                                        <UnorderedListOutlined />
                                    </Dropdown>
                                </Col>
                            </>
                            :
                            <>
                                <Col md={2} offset={16}>
                                    <Dropdown overlay={category} trigger={['click']}>
                                        <span>카테고리 <DownOutlined /></span>
                                    </Dropdown>
                                </Col>
                                <Col md={2}>
                                    <Dropdown overlay={menu} trigger={['click']}>
                                        <UnorderedListOutlined />
                                    </Dropdown>
                                </Col>
                            </>
                    }
                </Row>

                {/* 제품리스트 구역 */}
                <Row style={{ backgroundColor: '', width: '100%', height: '100%', textAlign: 'center' }}>
                    {/* <Col xs={12} md={6}><img src='./image/card.png' /></Col> */}
                    <Col xs={12} md={6}><Card /></Col>
                </Row>
            </Col>
            <Col xs={1} md={5} />
        </Row>
    );
}

export default Index;