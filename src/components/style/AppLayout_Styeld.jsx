import styled from 'styled-components';

import { Col, Row } from 'antd';

export const Row_Store = styled(Row)`
    position: sticky;
    top: 0;
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

export const Span_Title = styled.span`
    font-size: 20px;
`;

export const Span = styled.span`
    font-size: 15px;
`;