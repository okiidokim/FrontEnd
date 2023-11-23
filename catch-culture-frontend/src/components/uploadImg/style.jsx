import { styled } from 'styled-components';
import NotoSansKR_Thin from '../../assets/fonts/NotoSansKR-Thin.ttf';
import NotoSansKR_Light from '../../assets/fonts/NotoSansKR-Light.ttf';
import NotoSansKR_Regular from '../../assets/fonts/NotoSansKR-Regular.ttf';
import NotoSansKR_Medium from '../../assets/fonts/NotoSansKR-Medium.ttf';
import NotoSansKR_Bold from '../../assets/fonts/NotoSansKR-Bold.ttf';


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
    font-family: NotoSansKR_Medium;
    font-size: 8px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.3px;
`;