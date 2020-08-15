import React, { useState, useCallback } from 'react';

import { Col, Row } from 'antd';
import { Link, NavLink } from 'react-router-dom';

import styled from 'styled-components';
import useWindowSize from '../hooks/useWindowSize';

import '../css/layout.css';

const Row_Store = styled(Row)`
    margin-top: 10;
`;
const Col_CU = styled(Col)`
    background-color : ${props => props.event === true ? '#8C1480' : '#bbc0c4'};
    color : white;
    font-weight: 500;
    text-align: center;
    border-radius: 15px;
    padding: 10px;
`;
const Col_GS = styled(Col)`
    background-color : ${props => props.event === true ? '#027CFE' : '#bbc0c4'};
    color : white;
    text-align: center;
    font-weight: 500;
    margin-left : 10px;
    border-radius: 15px;
    padding: 10px;
`;
const Col_7E = styled(Col)`
    background-color : ${props => props.event === true ? '#1B932A' : '#bbc0c4'};
    color: white;
    text-align: center;
    font-weight: 500;
    margin-left : 10px;
    border-radius: 15px;
    padding: 10px;
`;

const Col_Login = styled(Col).attrs(props => ({
    offset: props.offset,
}))`
`;

const Span_Title = styled.span`
    font-size: 20px;
`;

const Span = styled.span`
    font-size: 15px;
`;

const AppLayout = () => {
    const size = useWindowSize();

    const [cu, setCu] = useState(false);
    const [gs25, setgs25] = useState(false);
    const [_7eleven, set7eleven] = useState(false);

    const onClickCu = useCallback(e => {
        setCu(!cu);
    }, [cu]);

    const onClickGs25 = useCallback(e => {
        setgs25(!gs25);
    }, [gs25]);

    const onClick7eleven = useCallback(e => {
        set7eleven(!_7eleven);
    }, [_7eleven]);

    return (
        <Row_Store className="appLayout">
            <Col xs={1} md={5} />
            <Col xs={22} md={14}>
                <Row align='bottom'>
                    <Col xs={7} md={3} style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
                        <Link style={{ color: "black" }} to='/'>
                            <Span_Title>편할까</Span_Title>
                        </Link>
                    </Col>
                    <Col xs={4} md={2} style={{ fontSize: 16, textAlign: "center" }}>
                        <NavLink exact style={{ color: "#bbc0c4" }} to='/'>
                            <Span>행사</Span>
                        </NavLink>
                    </Col>
                    <Col xs={4} md={2} style={{ fontSize: 16, textAlign: "center" }}>
                        <NavLink style={{ color: "#bbc0c4" }} to='/newProduct'>
                            <Span>신제품</Span>
                        </NavLink>
                    </Col>
                    <Col_Login xs={4} md={2} offset={size.width < 420 ? 3 : 13} style={{ fontSize: 16, textAlign: "center" }}>
                        <Link style={{ color: "black" }} to='/login'>
                            <Span>로그인</Span>
                        </Link>
                    </Col_Login>
                </Row>

                {/* 편의점 선택 */}
                <Row style={{ padding: '15px 0' }}>
                    <Col_CU xs={6} md={5} onClick={onClickCu} event={cu}>CU</Col_CU>
                    <Col_GS xs={6} md={5} onClick={onClickGs25} event={gs25}>GS25</Col_GS>
                    <Col_7E xs={6} md={5} onClick={onClick7eleven} event={_7eleven}>7eleven</Col_7E>
                </Row>
            </Col>
            <Col xs={1} md={5} />
        </Row_Store>
    );
}

export default AppLayout;