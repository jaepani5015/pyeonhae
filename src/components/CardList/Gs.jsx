import React from 'react';

import Star from 'react-rating-stars-component';

import {
    Div_wrap,
    Header,
    Logo,
    LogoImg,
    Event,
    EventImg,
    EventSpan,
    Content,
    ProductImg,
    Footer,
    FooterTitle,
    StarWrap,
    FooterPrice,
} from './style/Gs_Styeld';

const Gs = () => {
    return (
        <Div_wrap>
            {/* 상단 로고 행사 안내 */}
            <Header>
                <Logo>
                    <LogoImg src='./image/logo/logo_gs.png' title='store logo gs' />
                </Logo>
                <Event>
                    <EventImg>
                        <EventSpan>1+1</EventSpan>
                    </EventImg>
                </Event>
            </Header>

            {/* 제품 */}
            <Content>
                <ProductImg src='./image/cu_product.jpg' title='store product image' />
            </Content>

            {/* 제품설명 */}
            <Footer>
                <FooterTitle>롯데푸드)요구하이 145ml</FooterTitle>
                <StarWrap>
                    <Star value={3.5} size={17} isHalf={true} edit={false} />
                </StarWrap>
                <FooterPrice>1,000원</FooterPrice>
            </Footer>
        </Div_wrap>
    );
}

export default Gs;