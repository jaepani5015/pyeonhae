import React, { useState, useCallback, useEffect } from 'react';

import { Col, Row } from 'antd';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutAction } from '../modules/user';

import useWindowSize from '../hooks/useWindowSize';

import { MenuOutlined } from '@ant-design/icons';

import '../css/layout.css';
import {
    Row_Store,
    Col_CU,
    Col_GS,
    Col_7E,
    Col_Login,
    MenuWrap,
    Ul,
    Li,
    LiContent,
    SaleTitle,
    Span_Title,
    Span
} from './style/AppLayout_Styeld';

const AppLayout = () => {
    // 리덕스 start
    const { isLoggedIn } = useSelector(state => ({
        isLoggedIn: state.user.isLoggedIn,
    }));

    const dispatch = useDispatch();
    const onClickLogout = useCallback(e => {
        dispatch(logoutAction());
    }, []);
    // 리덕스 end

    const size = useWindowSize();

    const [cu, setCu] = useState(true);
    const [gs25, setgs25] = useState(false);
    const [_7eleven, set7eleven] = useState(false);
    const [menu, setMenu] = useState(false);

    const onClickCu = useCallback(e => {
        setCu(!cu);
    }, [cu]);

    const onClickGs25 = useCallback(e => {
        setgs25(!gs25);
    }, [gs25]);

    const onClick7eleven = useCallback(e => {
        set7eleven(!_7eleven);
    }, [_7eleven]);

    const onClickMenu = useCallback(e => {
        setMenu(!menu);
    }, [menu]);
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
                            {/* <img src='./image/mainLogo.jpeg' width='50px' height='auto'/> */}
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
                            size.width < 400 ?
                                // 모바일 화면
                                <>
                                    <MenuOutlined style={{ marginLeft: 40 }} onClick={onClickMenu} />
                                </>
                                :
                                // 데스크탑 화면에서
                                isLoggedIn === false ?
                                    <Link style={{ color: "black" }} to='/login'>
                                        <Span>로그인</Span>
                                    </Link>
                                    :
                                    <Span onClick={onClickLogout}>로그아웃</Span>

                        }
                    </Col_Login>
                </Row>

                {/* 모바일화면 드롭다운 */}
                <MenuWrap state={menu} size={size.width}>
                    {/* 로그인 메뉴 */}
                    <Ul>
                        <Li>
                            {
                                isLoggedIn === false ?
                                    <Link style={{ color: "black" }} to='/login'>
                                        <LiContent>로그인</LiContent>
                                    </Link>
                                    :
                                    <LiContent onClick={onClickLogout}>로그아웃</LiContent>
                            }
                        </Li>
                        {/* 할인 바코드 */}
                        <SaleTitle>통신사 할인</SaleTitle>
                        <Li>
                            <LiContent>SKT</LiContent>
                        </Li>
                        <Li>
                            <LiContent>KT</LiContent>
                        </Li>
                        <Li>
                            <LiContent>LGU+</LiContent>
                        </Li>
                    </Ul>
                </MenuWrap>

                {/* 편의점 선택 */}
                <Row style={{ padding: '10px 0', textAlign: 'center' }}>
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