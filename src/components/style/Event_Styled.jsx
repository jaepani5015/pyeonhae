import styled from 'styled-components';

export const Span = styled.span`
    font-size: ${props => props.size === 'xs' ? 15 : 20}px;
    font-weight: ${props => props.event === true ? '900' : '100'};
    color : ${props => props.event === true ? 'red' : '#cccccc'};
`;