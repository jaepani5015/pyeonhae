import styled from 'styled-components';

export const Div_wrap = styled.div`
    width: 100%;
    height: auto;
`;

export const MainImg_wrap = styled.div`
    width: 100%;
    height: auto;
    margin: 0 auto;
    text-align: center;
`;

export const MainImg = styled.img`
    width: 200px;
    height: auto;

    @media only screen and (max-width: 768px) {
        width: 150px;
    }
`;

export const Title = styled.div`
    font-size: 30px;
    font-weight: 900;
    color: #000;

    @media only screen and (max-width: 768px) {
        font-size: 15px;
    }
`;

export const Star = styled.div`
    font-size: 20px;

    @media only screen and (max-width: 768px) {
        font-size: 13px;
    }
`;

export const Price = styled.div`
    font-size: 20px;
    font-weight: 500;

    @media only screen and (max-width: 768px) {
        font-size: 13px;
    }
`;

export const Hr = styled.hr`
    margin: 30px 0;
    border: thin solid #bdbdbd;

    @media only screen and (max-width: 768px) {
        margin: 20px 0;
    }
`;

export const Comment_wrap = styled.div`
    width: 100%;
    height: auto;
`;

export const WriteComment_wrap = styled.div`
    width: 100%;
    height: 100px;

    @media only screen and (max-width: 768px) {
        height: 70px;
    }
`;

export const Span = styled.span`
    display: block;
    margin: 15px 0 30px 0;
    font-size: 25px;
    font-weight: 900;
    color: #000;

    @media only screen and (max-width: 768px) {
        font-size: 20px;
        margin: 10px 0 20px 0;
    }
`;

export const CommentList_wrap = styled.div`
    width: 100%;
    height: auto;
`;