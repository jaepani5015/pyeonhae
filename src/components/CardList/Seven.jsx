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
} from './style/Seven_Styled';

const Seven = (data) => {
    return (
        <Div_wrap>
            {/* 상단 로고 행사 안내 */}
            <Header>
                <Logo>
                    <LogoImg src='./image/logo/logo_seven.png' title='store logo cu' />
                </Logo>
                {/* <Event>
                    <EventImg>
                        <EventSpan>1+1</EventSpan>
                    </EventImg>
                </Event> */}
            </Header>

            {/* 제품 */}
            <Content>
            <ProductImg src={data.data.imageURL !== null ? data.data.imageURL : './image/null_image.png'} title='store product image' />
            </Content>

            {/* 제품설명 */}
            <Footer>
                <FooterTitle>{data.data.title}</FooterTitle>
                <StarWrap>
                    <Star value={data.data.rating} size={17} isHalf={true} edit={false} />
                </StarWrap>
                <FooterPrice>{data.data.price}</FooterPrice>
            </Footer>
        </Div_wrap>
    );
}

export default Seven;