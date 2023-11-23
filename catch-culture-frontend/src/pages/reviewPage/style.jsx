import { styled } from 'styled-components';
import NotoSansKR_Thin from '../../assets/fonts/NotoSansKR-Thin.ttf';
import NotoSansKR_Light from '../../assets/fonts/NotoSansKR-Light.ttf';
import NotoSansKR_Regular from '../../assets/fonts/NotoSansKR-Regular.ttf';
import NotoSansKR_Medium from '../../assets/fonts/NotoSansKR-Medium.ttf';
import NotoSansKR_Bold from '../../assets/fonts/NotoSansKR-Bold.ttf';


export const Wrapper = styled.div`
    min-height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: NotoSansKR_Thin;

`;

export const Content = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const TitleArea = styled.div`
    width: auto;
    height: 38px;
    text-align: center;
    font: 16px bold;
    font-weight: bold;
    font-family: NotoSansKR_Bold;
    margin-top: 20px;
    margin-bottom: 10px;
    border-bottom: 2px solid black;
`;

export const ButtonSection = styled.div`
    display: flex;
    

    button {
        display: block;
        width: 280px;
        height: 32px;
        border-radius: 10px;
        border: 0px;
        background-color: #018c0d;
        color: white;
        margin-top: 20px;
    }
`;