import React from 'react';

import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Col_CU = styled(Col)`
    background-color : #8C1480;
    color : white;
    font-weight: 500;
    text-align: center;
    border-radius: 15px;
    padding: 10px;
`;
const Col_GS = styled(Col)`
    background-color : #027CFE;
    color : white;
    text-align: center;
    font-weight: 500;
    margin-left : 10px;
    border-radius: 15px;
    padding: 10px;
`;
const Col_7E = styled(Col)`
    background-color : #1B932A;
    color: white;
    text-align: center;
    font-weight: 500;
    margin-left : 10px;
    border-radius: 15px;
    padding: 10px;
`;

const AppLayout = () => {
    return (
        <Row style={{ marginTop: 10 }}>
            <Col xs={1} md={5} />
            <Col xs={22} md={14}>
                <Row align='bottom'>
                    <Col xs={9} md={3} style={{ fontSize: 20, fontWeight: 'bold' }}>
                        <Link to='/' style={{ color: "black" }}>편의점 모아</Link>
                    </Col>
                    <Col xs={5} md={2} style={{ fontSize: 16, textAlign: "center" }}>
                        <Link style={{ color: "black" }} to='/newProduct'>신제품</Link>
                    </Col>
                    <Col xs={3} md={2} style={{ fontSize: 16, textAlign: "center" }}>
                        <Link style={{ color: "black" }} to='/'>행사</Link>
                    </Col>
                </Row>

                {/* 편의점 선택 */}
                <Row style={{ padding: '15px 0' }}>
                    <Col_CU xs={4} md={3}>CU</Col_CU>
                    <Col_GS xs={5} md={3}>GS25</Col_GS>
                    <Col_7E xs={6} md={3}>7-eleven</Col_7E>
                </Row>
            </Col>
            <Col xs={1} md={5} />
        </Row>
    );
}

export default AppLayout;