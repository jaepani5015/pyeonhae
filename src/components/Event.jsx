import React, { useState, useCallback, useEffect } from 'react';

import Cu from './cardList/Cu';
import Gs from './cardList/Gs';
import Seven from './cardList/Seven';

import useWindowSize from '../hooks/useWindowSize';

import { Row, Col, Menu, Dropdown } from 'antd';
import { UnorderedListOutlined, DownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getSaleAction } from '../modules/saleItem';

import { Span } from './style/Event_Styled';

const Event = () => {
    const size = useWindowSize();
    const dispatch = useDispatch();
    const selectSaleItem = useSelector((state) => state.saleItem.data);
    // 선택 브랜드 selector로 가져오기
    const selectBrand = useSelector((state) => state.brand.selectBrand);
    // 검색한 데이터 가져오기
    const selectSearchData = useSelector((state) => state.brand.searchValue);

    const [opo, setOpo] = useState(false);
    const [tpo, setTpo] = useState(false);
    const [all, setAll] = useState(true);

    // category : default -> "" 빈 값, order : default -> "popular"(인기순)
    const [category, setCategory] = useState("showAll");
    const [order, setOrder] = useState("popular");

    // 1+1클릭 이벤트
    const onClickOpo = useCallback(e => {
        setOpo(!opo);
        setTpo(false);
        setAll(false);
    }, [opo, tpo, all]);

    // 2+1클릭 이벤트
    const onClickTpo = useCallback(e => {
        setTpo(!tpo);
        setOpo(false);
        setAll(false);
    }, [opo, tpo, all]);

    // all클릭 이벤트
    const onClickAll = useCallback(e => {
        setAll(!all);
        setOpo(false);
        setTpo(false);
    }, [opo, tpo, all]);

    // 카테고리 선택 이벤트
    const onClickCategory = useCallback(e => {
        setCategory(e.key);
    }, [category]);

    // 정렬순서 선택 이벤트
    const onClickOrder = useCallback(e => {
        setOrder(e.key);
    }, [order]);

    
    // 첫 화면 로딩시 출력할 제품리스트 dispatchs
    useEffect(() => {
        // 카테고리 파싱
        let changeCategory = "";
        if (category === "showAll") { changeCategory = "" }
        else if (category === "drink") { changeCategory = "음료" }
        else if (category === "snack") { changeCategory = "과자" }
        else if (category === "food") { changeCategory = "식품" }
        else if (category === "icecream") { changeCategory = "아이스크림" }
        else if (category === "suplies") { changeCategory = "생활용품" }
        else { changeCategory = "" }

        // 삼항연산자 적용이 안됨...
        // category === "showAll" ? changeCategory = "전체보기" : null
        // category === "drink" ? changeCategory = "음료" : 
        // category === "snack" ? changeCategory = "과자" : 
        // category === "food" ? changeCategory = "식품" : 
        // category === "icecream" ? changeCategory = "아이스크림" : 
        // category === "suplies" ? changeCategory = "생활용품" : "";
        
        // // 1+1, 2+1 파싱
        let arr = [];
        if(opo === true && tpo === false && all === false) {
            arr.push("1+1")
        } else if(tpo === true && opo === false && all === false) {
            arr.push("2+1")
        } else if(all === true && tpo === false && opo === false){
            arr.push("1+1", "2+1")
        } else arr.push("")

        // // 조회방법 파싱
        let changeView = 0;
        if(order === "popular") changeView = 0;
        else if(order === "views") changeView = 1;
        else if(order === "rating") changeView = 2;
        // 삼항연산자 적용이 안됨...
        // order === "popular" ? changeView = 0 : 
        // order === "views" ? changeView = 1 : 
        // order === "rating" ? changeView = 2 : 0;

        dispatch(getSaleAction(selectBrand, changeCategory, selectSearchData, JSON.stringify(arr), changeView, 1));
    }, [opo, tpo, all, category, order, selectBrand, selectSearchData]);
    
    const categoryList = (
        <Menu onClick={onClickCategory}>
            <Menu.Item key="showAll">전체보기</Menu.Item>
            <Menu.Item key="drink">음료</Menu.Item>
            <Menu.Item key="snack">과자</Menu.Item>
            <Menu.Item key="food">식품</Menu.Item>
            <Menu.Item key="icecream">아이스크림</Menu.Item>
            <Menu.Item key="suplies">생활용품</Menu.Item>
        </Menu>
    );

    const orderList = (
        <Menu onClick={onClickOrder}>
            <Menu.Item key="popular">인기순</Menu.Item>
            <Menu.Item key="views">조회순</Menu.Item>
            <Menu.Item key="rating">평점순</Menu.Item>
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
                        <Span onClick={onClickOpo} size={size.width < 420 ? 'xs' : 'md'} event={opo}>1+1</Span>
                    </Col>
                    <Col xs={5} md={2}>
                        <Span onClick={onClickTpo} size={size.width < 420 ? 'xs' : 'md'} event={tpo}>2+1</Span>
                    </Col>
                    <Col xs={5} md={2}>
                        <Span onClick={onClickAll} size={size.width < 420 ? 'xs' : 'md'} event={all}>All</Span>
                    </Col>
                    {
                        size.width < 450 ?
                            <>
                                <Col xs={6}>
                                    <Dropdown overlay={categoryList} trigger={['click']}>
                                        <span>카테고리 <DownOutlined /></span>
                                    </Dropdown>
                                </Col>
                                <Col xs={3}>    
                                    <Dropdown overlay={orderList} trigger={['click']}>
                                        <UnorderedListOutlined />
                                    </Dropdown>
                                </Col>
                            </>
                            :
                            <>
                                <Col md={2} offset={14}>
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
                <Row style={{ width: '100%', height: '100%', marginTop: 10 }}>
                    {/* <Col xs={12} md={6}>
                        <Link to={`/detailProduct/${1}`}>
                            <Cu />
                        </Link>
                    </Col> */}
                    {selectSaleItem[0].id === null ? <p>noData</p> : selectSaleItem.map(e => {
                        if (e.brand === "CU") {
                            return <Col xs={12} md={6}>
                                <Link to={`/detailProduct/${e.id}`}>
                                    <Cu data={e} />
                                </Link>
                            </Col>;
                        } else if (e.brand === "GS25") {
                            return <Col xs={12} md={6}>
                                <Link to={`/detailProduct/${e.id}`}>
                                    <Gs data={e} />
                                </Link>
                            </Col>;
                        } else {
                            return <Col xs={12} md={6}>
                                <Link to={`/detailProduct/${e.id}`}>
                                    <Seven data={e} />
                                </Link>
                            </Col>;
                        }
                    })}

                    {/* <Col xs={12} md={6}>
                        <Link to={`/detailProduct/${2}`}>
                            <Gs />
                        </Link>
                    </Col>

                    <Col xs={12} md={6}>
                        <Link to={`/detailProduct/${3}`}>
                            <Seven />
                        </Link>
                    </Col> */}

                </Row>
            </Col>
            <Col xs={1} md={5} />


        </Row>
    );
}

export default Event;