import styled from 'styled-components';

import { Col, Row } from 'antd';

export const Row_Store = styled(Row)`
    height: auto;
    // position: sticky;
    // top: 0;
    background-color: #fff;
    z-index: 2;
    padding: 20px 0 0 0;
`;
export const Col_CU = styled(Col)`
    color : white;
    font-weight: 500;
    text-align: center;
    border-radius: 15px;
    filter: grayscale(${props => props.event === true ? 0 : 100}%);
`;
export const Col_GS = styled(Col)`
    color : white;
    text-align: center;
    font-weight: 500;
    border-radius: 15px;
    filter: grayscale(${props => props.event === true ? 0 : 100}%);
    margin-top : 9px;
`;
export const Col_7E = styled(Col)`
    color: white;
    text-align: center;
    font-weight: 500;
    border-radius: 15px;
    filter: grayscale(${props => props.event === true ? 0 : 100}%);
`;

export const Col_Login = styled(Col).attrs(props => ({
    offset: props.offset,
}))`
`;

export const MenuWrap = styled.div`
    display : ${props => props.state === true ? 
        props.size < 400 ? 'block' : 'none' : 'none'};
    width: 100%;
    height: auto;
    padding: 10px;
    position: relative;
    top: 10px;
`;

export const Ul = styled.ul`
    padding: 0;
    margin: 0;
`;

export const Li = styled.li`
    text-align: center;
    list-style: none;
`;

export const LiContent = styled.div`
    font-size: 16px;
    padding: 10px 0;
`;

export const SKTBarcodeWrap = styled.div`
    display: ${props => props.state === true ? 'block' : 'none'};
    width: 100%;
    height: auto;
    padding: 10px;
    box-shadow: 5px 5px 5px 5px #dddddd;
    border-radius: 5px;
`;

export const KTBarcodeWrap = styled.div`
    display: ${props => props.state === true ? 'block' : 'none'};
    width: 100%;
    height: auto;
    padding: 10px;
    box-shadow: 5px 5px 5px 5px #dddddd;
    border-radius: 5px;
`;

export const LGUBarcodeWrap = styled.div`
    display: ${props => props.state === true ? 'block' : 'none'};
    width: 100%;
    height: auto;
    padding: 10px;
    box-shadow: 5px 5px 5px 5px #dddddd;
    border-radius: 5px;
`;

export const InputBarcode = styled.input`
        width: 70%;
        padding: 5px;
        text-align: center;
        border: none;
        border-bottom: thin solid #000;
`;

export const SaveBarcode = styled.input`
        width: 15%;
        padding: 5px;
        border: none;
        background: none;
`;

export const BarcodeDelete = styled.div`
    width: 50%;
    height: auto;
    margin: 0 auto;
    font-size: 15px;
    font-weight: 900;
    color: #fff;
    background-color: red;
    border-radius: 5px;
    padding: 8px;
`;

export const SaleTitle = styled.div`
    text-align: center;
    font-size: 20px;
    font-wight: 900;
    color: #000;
    padding: 15px 0;
    background-color: #f2f2f2;
`;

export const Span_Title = styled.span`
    font-size: 20px;
`;

export const Span = styled.span`
    font-size: 15px;
`;