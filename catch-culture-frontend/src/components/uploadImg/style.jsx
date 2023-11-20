import { styled } from 'styled-components';

export const Label = styled.label`
    width: 300px;
    min-height: 120px;
    border-radius: 8px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const Input = styled.input `
    display:none;
`;

export const InfoText = styled.p `
    height: 10px;
    color: #777;
    font-family: Noto Sans KR;
    font-size: 8px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.3px;
`;