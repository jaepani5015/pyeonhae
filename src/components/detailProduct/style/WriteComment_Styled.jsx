import styled from 'styled-components';

export const Input = styled.input`
    width: 100%;
    height: 50px;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #000;
`;

export const InputBtn = styled.input`
    width: 10%;
    height: 35px;
    margin-top: 10px;
    border-radius: 10px;
    float: right;
    background-color: #fff;
    border: none;

    &:focus {
        outline: 0;
    }

    &:hover {
        font-weight: 900;
    }
`;