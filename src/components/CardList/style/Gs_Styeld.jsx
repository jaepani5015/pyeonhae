import styled from 'styled-components';

export const Div_wrap = styled.div`
    width: 200px;
    height: 350px;
    border: 2px solid #027CFE;
    border-radius: 10px;
    box-shadow: 5px 5px 5px #eaeaea;

    @media only screen and (max-width: 768px) {
        width: 170px;
        height: 330px;
    }
`;

export const Header = styled.div`
    width: 100%;
    height: 45px;
    position: relative;
`;

export const Logo = styled.div`
    float: left;
    padding: 8px;
`;

export const LogoImg = styled.img`
    width: 60px;
    height: auto;

    @media only screen and (max-width: 768px) {
        width: 50px;
    }
`;

export const Event = styled.div`
    float: right;
    padding: 7px;
`;

export const EventImg = styled.div`
    width:0;
    height:0;
    border-width:25px 20px 20px 20px;
    border-style:solid;
    border-color:#027CFE #027CFE transparent #027CFE;

    @media only screen and (max-width: 768px) {
        border-width: 22px 17px 17px 17px;
    }
`;

export const EventSpan = styled.span`
    color: #ffffff;
    position: relative;
    top: -20px;
    right: 12px;

    @media only screen and (max-width: 768px) {
        font-size: 13px;
        left: -11px;
    }
`;

export const Content = styled.div`
    width: 100%;
    height: 190px;

    @media only screen and (max-width: 768px) {
        height: 177px;
    }
`;

export const ProductImg = styled.img`
    width: 90px;
    height: auto;
    position: relative;
    left: 55px;
    top: 30px;

    @media only screen and (max-width: 768px) {
        width: 80px;
        left: 45px;
        top: 40px;
    }
`;
export const Footer = styled.div`
    width: 100%;
    height: 85px;
`;

export const FooterTitle = styled.span`
    display: block;
    text-align: left;
    padding: 2px;
    margin-left: 7px;
    font-size: 15px;
    text-align: left;
    font-weight: 900;
    color: #000000;

    @media only screen and (max-width: 768px) {
        font-size: 13px;
    }
`;

export const StarWrap = styled.span`
    display: block;
    text-align: left;
    padding: 2px;
    margin-left: 7px;
    text-align: left;
`;

export const FooterPrice = styled.span`
    display: block;
    text-align: left;
    padding: 2px;
    margin-left: 7px;
    font-size: 15px;
    text-align: left;
    color: #000000;

    @media only screen and (max-width: 768px) {
        font-size: 13px;
    }
`;