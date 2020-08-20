import styled from 'styled-components';

export const Div_wrap = styled.div`
    width: 200px;
    height: 330px;
    border: 1px solid #8C1480;
    border-radius: 10px;
`;

export const Header = styled.div`
    width: 100%;
    height: 45px;
`;

export const Logo = styled.div`
    float: left;
    padding: 5px;
`;

export const LogoImg = styled.img`
    width: 60px;
    height: auto;
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
    border-color:#8C1480 #8C1480 transparent #8C1480;
`;

export const EventSpan = styled.span`
    color: #ffffff;
    position: relative;
    top: -20px;
    right: 12px;
`;

export const Content = styled.div`
    width: 100%;
    height: 190px;
    position: relative;
    top: 6px;
`;

export const Product = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ProductImg = styled.img`
    width: 100px;
    height: auto;
`;

export const Footer = styled.div`
    width: 100%;
    height: 85px;
`;

export const FooterTitle = styled.span`
    display: block;
    text-align: left;
    padding: 2px;
    font-size: 15px;
    text-align: center;
    font-weight: 900;
    color: #000000;
`;

export const FooterStar = styled.span`
    display: block;
    text-align: left;
    padding: 2px;
    font-size: 15px;
    text-align: center;
`;

export const FooterPrice = styled.span`
    display: block;
    text-align: left;
    padding: 2px;
    font-size: 15px;
    text-align: center;
`;