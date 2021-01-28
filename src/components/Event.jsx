import React, { useState, useCallback, useEffect } from 'react';

import Cu from './CardList/Cu';
import Gs from './CardList/Gs';
import Seven from './CardList/Seven';

import useWindowSize from '../hooks/useWindowSize';

import { Row, Col, Menu, Dropdown } from 'antd';
import { UnorderedListOutlined, DownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getSaleAction, resetSaleItem } from '../modules/saleItem';

import { Span } from './style/Event_Styled';

const Event = () => {
    const size = useWindowSize();
    const dispatch = useDispatch();
    const selectSaleItem = useSelector((state) => state.saleItem);
    // 선택 브랜드 selector로 가져오기
    const selectBrand = useSelector((state) => state.brand.selectBrand);
    // 검색한 데이터 가져오기
    const selectSearchData = useSelector((state) => state.brand.searchValue);

    useEffect(() => {
        console.log(selectSaleItem);
    }, [selectSaleItem]);

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

    const [parsing, setParsing] = useState({
        loading: false,
        selectBrand: selectBrand,
        changeCategory: "",
        selectSearchData: selectSearchData,
        arr: ["1+1", "2+1"],
        changeView: 0,
        page: 1
    });

    // 첫 화면 로딩시 출력할 제품리스트 dispatchs
    useEffect(() => {
        setParsing({ loading: true })
        if (category === "showAll") { setParsing({ ...parsing, changeCategory: "" }) }
        else if (category === "drink") { setParsing({ ...parsing, changeCategory: "음료" }) }
        else if (category === "snack") { setParsing({ ...parsing, changeCategory: "과자" }) }
        else if (category === "food") { setParsing({ ...parsing, changeCategory: "식품" }) }
        else if (category === "icecream") { setParsing({ ...parsing, changeCategory: "아이스크림" }) }
        else if (category === "suplies") { setParsing({ ...parsing, changeCategory: "생활용품" }) }
        else { setParsing({ ...parsing, changeCategory: "" }) }
        dispatch(resetSaleItem());
    }, [category]);

    useEffect(() => {
        setParsing({ loading: true })
        if (opo === true && tpo === false && all === false) {
            setParsing({ ...parsing, arr: ["1+1"] })
        } else if (tpo === true && opo === false && all === false) {
            setParsing({ ...parsing, arr: ["2+1"] })
        } else if (all === true && tpo === false && opo === false) {
            setParsing({ ...parsing, arr: ["1+1", "2+1"] })
        } else setParsing({ ...parsing, arr: [""] })
        dispatch(resetSaleItem());
    }, [opo, tpo, all]);

    useEffect(() => {
        setParsing({ loading: true })
        if (order === "popular") setParsing({ ...parsing, page: 0 });
        else if (order === "views") setParsing({ ...parsing, page: 1 });
        else if (order === "rating") setParsing({ ...parsing, page: 2 });
        dispatch(resetSaleItem());
    }, [order]);

    useEffect(() => {
        setParsing({ ...parsing, loading: true, selectBrand: selectBrand });
        dispatch(resetSaleItem());
    }, [selectBrand]);

    useEffect(() => {
        setParsing({ ...parsing, loading: true, selectSearchData: selectSearchData });
        dispatch(resetSaleItem());
    }, [selectSearchData]);

    useEffect(() => {
        dispatch(getSaleAction(parsing.selectBrand, parsing.changeCategory, parsing.selectSearchData, parsing.arr, parsing.changeView, parsing.page));
    }, [parsing]);

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

    const handleScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;
        if (scrollTop + clientHeight >= scrollHeight) {
            // 페이지 끝에 도달하면 추가 데이터를 받아온다
            setParsing({ ...parsing, page: parsing.page + 1 })
        }
    };

    useEffect(() => {
        // scroll event listener 등록
        window.addEventListener("scroll", handleScroll);
        return () => {
            // scroll event listener 해제
            window.removeEventListener("scroll", handleScroll);
        };
    });

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

                    {/* {
                        selectSaleItem.loading === false ? <p>loading...</p> :
                            // forEach로 했을때는 안되는데 map으로 하면 된다???
                            selectSaleItem.data.map((e, index) => {
                                    return e.map(item => {
                                        // console.log(item)
                                        if (item.brand === "CU") {
                                            return <Col xs={12} md={6}>
                                                <Link to={`/detailProduct/${item.id}`}>
                                                    <Cu data={item} />
                                                </Link>
                                            </Col>;
                                        } else if (item.brand === "GS25") {
                                            return <Col xs={12} md={6}>
                                                <Link to={`/detailProduct/${item.id}`}>
                                                    <Gs data={item} />
                                                </Link>
                                            </Col>;
                                        } else {
                                            return <Col xs={12} md={6}>
                                                <Link to={`/detailProduct/${item.id}`}>
                                                    <Seven data={item} />
                                                </Link>
                                            </Col>;
                                        }
                                    })
                            })
                    } */}

                    {
                        selectSaleItem.loading === false ? <p>loading...</p> :
                            // forEach로 했을때는 안되는데 map으로 하면 된다???
                            selectSaleItem.data.map((e, index) => {
                                if (selectSaleItem.loading !== false && index === 0) return null;
                                else if (selectSaleItem.loading !== false && index > 0) {
                                    return e.map(item => {
                                        // console.log(item)
                                        if (item.brand === "CU") {
                                            return <Col xs={12} md={6}>
                                                <Link to={`/detailProduct/${item.id}`}>
                                                    <Cu data={item} />
                                                </Link>
                                            </Col>;
                                        } else if (item.brand === "GS25") {
                                            return <Col xs={12} md={6}>
                                                <Link to={`/detailProduct/${item.id}`}>
                                                    <Gs data={item} />
                                                </Link>
                                            </Col>;
                                        } else {
                                            return <Col xs={12} md={6}>
                                                <Link to={`/detailProduct/${item.id}`}>
                                                    <Seven data={item} />
                                                </Link>
                                            </Col>;
                                        }
                                    })
                                }
                            })
                    }

                </Row>
            </Col>
            <Col xs={1} md={5} />


        </Row>
    );
}

export default Event;