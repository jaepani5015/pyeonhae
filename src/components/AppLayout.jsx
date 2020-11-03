import React, { useState, useCallback, useEffect } from "react";

import { Col, Row, Input } from "antd";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../modules/user";

import useWindowSize from "../hooks/useWindowSize";
import Barcode from "react-barcode";

import { MenuOutlined } from "@ant-design/icons";

import "../css/layout.css";
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
  SKTBarcodeWrap,
  KTBarcodeWrap,
  LGUBarcodeWrap,
  InputBarcode,
  SaveBarcode,
  BarcodeDelete,
  SaleTitle,
  Span_Title,
  Span,
  InputSearch
} from "./style/AppLayout_Styeld";

const AppLayout = () => {
  // 리덕스 start
  const selectLogin = useSelector((state) => state.user.isLoggedIn);

  const dispatch = useDispatch();
  // 로그아웃 디스패치
  const onClickLogout = useCallback((e) => {
    dispatch(logoutAction());
  }, []);

  // 제품검색 디스패치
  const searchItem = useCallback(() => {
    dispatch();
  }, []);
  // 리덕스 end

  // const [getLoginState, seTgetLoginState] = useState(selectLogin);
  const [loginState, setLoginState] = useState(selectLogin);
  const size = useWindowSize();

  const [cu, setCu] = useState(true);
  const [gs25, setgs25] = useState(false);
  const [_7eleven, set7eleven] = useState(false);
  const [menu, setMenu] = useState(false);
  const [sktWrap, setSktWrap] = useState(false);
  const [ktWrap, setKtWrap] = useState(false);
  const [lguWrap, setLguWrap] = useState(false);
  const [skt, setSkt] = useState(null);
  const [kt, setKt] = useState(null);
  const [lgu, setLgu] = useState(null);
  const [barcode, setBarcode] = useState(null);
  const [searchProduct, setSearchProduct] = useState(null);

  const onClickCu = useCallback(
    (e) => {
      setCu(!cu);
    },
    [cu]
  );

  const onClickGs25 = useCallback(
    (e) => {
      setgs25(!gs25);
    },
    [gs25]
  );

  const onClick7eleven = useCallback(
    (e) => {
      set7eleven(!_7eleven);
    },
    [_7eleven]
  );

  const onClickMenu = useCallback(
    (e) => {
      setMenu(!menu);
    },
    [menu]
  );

  const onClickSKT = useCallback(
    (e) => {
      setSktWrap(!sktWrap);
    },
    [sktWrap]
  );

  const onClickKT = useCallback(
    (e) => {
      setKtWrap(!ktWrap);
    },
    [ktWrap]
  );

  const onClickLGU = useCallback(
    (e) => {
      setLguWrap(!lguWrap);
    },
    [lguWrap]
  );

  const onChangeBarcode = useCallback(
    (e) => {
      setBarcode(e.target.value);
    },
    [barcode]
  );

  const onClickSaveBarcode = useCallback(
    (e) => {
      localStorage.setItem(e.target.name, barcode);
      e.target.name === "skt"
        ? setSkt(barcode)
        : "kt"
        ? setKt(barcode)
        : "lgu"
        ? setLgu(barcode)
        : console.log("error");
    },
    [barcode]
  );

  const onClickDeleteBarcode = useCallback(
    (e) => {
      localStorage.removeItem(e.target.id);
      if (e.target.id === "skt") setSkt(null);
      if (e.target.id === "kt") setKt(null);
      if (e.target.id === "lgu") setLgu(null);
      console.log(skt, kt, lgu);
    },
    [skt, kt, lgu]
  );

  useEffect(() => {
    setLoginState(selectLogin);

    const BarcodeSKT = localStorage.getItem("skt");
    const BarcodeKT = localStorage.getItem("kt");
    const BarcodeLGU = localStorage.getItem("lgu");

    if (BarcodeSKT !== null) setSkt(BarcodeSKT);
    if (BarcodeKT !== null) setKt(BarcodeKT);
    if (BarcodeLGU !== null) setLgu(BarcodeLGU);
  }, [skt, kt, lgu, selectLogin]);

  return (
    <Row_Store className="appLayout">
      <Col xs={1} md={5} />
      <Col xs={22} md={14}>
        <Row align="bottom">
          <Col
            xs={7}
            md={3}
            style={{
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
              //   backgroundColor: "green",
            }}
          >
            <Link style={{ color: "black" }} to="/">
              <Span_Title>편해</Span_Title>
              {/* <img src='./image/mainLogo.jpeg' width='50px' height='auto'/> */}
            </Link>
          </Col>
          {/* 제품검색부분 */}
          <Col xs={8} md={4}>
            <InputSearch
              onSearch={() => console.log(searchProduct)}
              onChange={(e) => setSearchProduct(e.target.value)}
              size={size.width}
            />
          </Col>
          {/* <Col xs={4} md={2} style={{ fontSize: 16, textAlign: "center" }}>
                        <NavLink exact style={{ color: "#bbc0c4" }} to='/'>
                            <Span>행사</Span>
                        </NavLink>
                    </Col>
                    <Col xs={4} md={2} style={{ fontSize: 16, textAlign: "center" }}>
                        <NavLink style={{ color: "#bbc0c4" }} to='/newProduct'>
                            <Span>신제품</Span>
                        </NavLink>
                    </Col> */}
          <Col_Login
            xs={4}
            md={2}
            offset={size.width < 420 ? 3 : 13}
            style={{
              fontSize: 16,
              textAlign: "center",
              //   backgroundColor: "green",
            }}
          >
            {size.width < 400 ? (
              // 모바일 화면
              <>
                <MenuOutlined
                  style={{ marginLeft: 40 }}
                  onClick={onClickMenu}
                />
              </>
            ) : // 데스크탑 화면에서
            loginState === false ? (
              <Link style={{ color: "black" }} to="/login">
                <Span>로그인</Span>
              </Link>
            ) : (
              <Span onClick={onClickLogout}>로그아웃</Span>
            )}
          </Col_Login>
        </Row>

        {/* 모바일화면 드롭다운 */}
        <MenuWrap state={menu} size={size.width}>
          {/* 로그인 메뉴 */}
          <Ul>
            <Li>
              {loginState === false ? (
                <Link style={{ color: "black" }} to="/login">
                  <LiContent>로그인</LiContent>
                </Link>
              ) : (
                <LiContent onClick={onClickLogout}>로그아웃</LiContent>
              )}
            </Li>

            {/* 할인 바코드 */}
            <SaleTitle>통신사 할인</SaleTitle>
            <Li>
              <LiContent onClick={onClickSKT}>SKT</LiContent>
              <SKTBarcodeWrap state={sktWrap}>
                {skt === null ? (
                  <>
                    <InputBarcode
                      placeholder="바코드 입력"
                      onChange={onChangeBarcode}
                    />
                    <SaveBarcode
                      onClick={onClickSaveBarcode}
                      name="skt"
                      type="button"
                      value="저장"
                    />
                  </>
                ) : (
                  <>
                    <Barcode value={skt} />
                    <BarcodeDelete onClick={onClickDeleteBarcode} id="skt">
                      삭제
                    </BarcodeDelete>
                  </>
                )}
              </SKTBarcodeWrap>
            </Li>
            <Li>
              <LiContent onClick={onClickKT}>KT</LiContent>
              <KTBarcodeWrap state={ktWrap}>
                {kt === null ? (
                  <>
                    <InputBarcode
                      placeholder="바코드 입력"
                      onChange={onChangeBarcode}
                    />
                    <SaveBarcode
                      onClick={onClickSaveBarcode}
                      name="kt"
                      type="button"
                      value="저장"
                    />
                  </>
                ) : (
                  <>
                    <Barcode value={kt} />
                    <BarcodeDelete onClick={onClickDeleteBarcode} id="kt">
                      삭제
                    </BarcodeDelete>
                  </>
                )}
              </KTBarcodeWrap>
            </Li>
            <Li>
              <LiContent onClick={onClickLGU}>LGU</LiContent>
              <LGUBarcodeWrap state={lguWrap}>
                {lgu === null ? (
                  <>
                    <InputBarcode
                      placeholder="바코드 입력"
                      onChange={onChangeBarcode}
                    />
                    <SaveBarcode
                      onClick={onClickSaveBarcode}
                      name="lgu"
                      type="button"
                      value="저장"
                    />
                  </>
                ) : (
                  <>
                    <Barcode value={lgu} />
                    <BarcodeDelete onClick={onClickDeleteBarcode} id="lgu">
                      삭제
                    </BarcodeDelete>
                  </>
                )}
              </LGUBarcodeWrap>
            </Li>
          </Ul>
        </MenuWrap>

        {/* 편의점 선택 */}
        <Row style={{ padding: "10px 0", textAlign: "center" }}>
          <Col_CU xs={8} md={8} onClick={onClickCu} event={cu}>
            <img src="./image/logo/logo_cu.png" width="70px" height="auto" />
          </Col_CU>
          <Col_GS xs={8} md={8} onClick={onClickGs25} event={gs25}>
            <img src="./image/logo/logo_gs.png" width="70px" height="auto" />
          </Col_GS>
          <Col_7E xs={8} md={8} onClick={onClick7eleven} event={_7eleven}>
            <img src="./image/logo/logo_seven.png" width="70px" height="auto" />
          </Col_7E>
        </Row>
      </Col>
      <Col xs={1} md={5} />
    </Row_Store>
  );
};

export default AppLayout;
