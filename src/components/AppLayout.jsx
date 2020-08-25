import React, { useState, useCallback, useEffect } from 'react';

import { Col, Row } from 'antd';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loginAction, logoutAction } from '../modules/login';

import useWindowSize from '../hooks/useWindowSize';

import '../css/layout.css';
import {
    Row_Store,
    Col_CU,
    Col_GS,
    Col_7E,
    Col_Login,
    Span_Title,
    Span
} from './style/AppLayout_Styeld';

const AppLayout = () => {
    // 리덕스 start
    const { isLoggedIn } = useSelector(state => ({
        isLoggedIn: state.login.isLoggedIn,
    }));

    const dispatch = useDispatch();
    const onClickLogout = useCallback(e => {
        dispatch(logoutAction());
    }, []);
    
    const onClickLogin = useCallback(e => {
        dispatch(loginAction());
    }, []);
    // 리덕스 end

    const size = useWindowSize();

    const [cu, setCu] = useState(true);
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

    useEffect(e => {
        console.log('isLoggedIn: ', isLoggedIn);
    }, []);

    return (
        <Row_Store className="appLayout">
            <Col xs={1} md={5} />
            <Col xs={22} md={14}>
                <Row align='bottom'>
                    <Col xs={7} md={3} style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
                        <Link style={{ color: "black" }} to='/'>
                            <Span_Title>편해</Span_Title>
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
                        {
                            isLoggedIn === false ?
                                <Link style={{ color: "black" }} to='/login'>
                                    <Span>로그인</Span>
                                </Link>
                                :
                                <Span onClick={onClickLogout}>로그아웃</Span>
                        }
                    </Col_Login>
                </Row>

                {/* 편의점 선택 */}
                <Row style={{ padding: '15px 0', textAlign: 'center' }}>
                    <Col_CU xs={8} md={8} onClick={onClickCu} event={cu}>
                        <img src='./image/logo/logo_cu.png' width='70px' height='auto' />
                    </Col_CU>
                    <Col_GS xs={8} md={8} onClick={onClickGs25} event={gs25}>
                        <img src='./image/logo/logo_gs.png' width='70px' height='auto' />
                    </Col_GS>
                    <Col_7E xs={8} md={8} onClick={onClick7eleven} event={_7eleven}>
                        <img src='./image/logo/logo_seven.png' width='70px' height='auto' />
                    </Col_7E>
                </Row>
            </Col>
            <Col xs={1} md={5} />
        </Row_Store>
    );
}

export default AppLayout;