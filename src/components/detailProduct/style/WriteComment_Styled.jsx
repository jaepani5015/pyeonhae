import styled from 'styled-components';

export const TextArea = styled.textarea`
    width: 90%;
    height: 100px;
    padding: 10px;
    border-radius: 5px;
    border: 0.1px solid #000;
    resize: none;

    @media only screen and (max-width: 768px) {
        width: 80%;
    }
`;

export const InputBtn = styled.input`
    width: 10%;
    height: 70px;
    float: right;
    background-color: #fff;
    border: none;

    @media only screen and (max-width: 768px) {
        width: 20%;
    }

    &:focus {
        outline: 0;
    }

    &:hover {
        font-weight: 900;
    }
`;