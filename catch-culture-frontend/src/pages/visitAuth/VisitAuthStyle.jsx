import { styled } from 'styled-components';

export const Wrapper = styled.div`
    min-height: 700px;
    display: flex;
    flex-direction: column;
    font-family: noto Sans KR;
`;

/************
 * 헤더 영역 *
 ************/
export const Header = styled.div`
    width: 100%;
    height: 75px;
    display: flex;
    justify-content: center;
    align-content: center;
    position: sticky;
    background-color: white;
    z-index: 2;
`;

export const Container = styled.div`
    margin-top: 50px;
    padding: 30px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;
    background-color: white;
    flex-grow: 5;
`;

export const TitleArea = styled.div`
    width: 200px !important;
    height: 38px;
    text-align: center;
    font: 20px bold;
    font-weight: bold;
    font-family: noto Sans KR;
    margin-top: 20px;
    margin-bottom: 10px;
    border-bottom: 2px solid black;
`;


export const SubTitle = styled.div`
    width: 100%;
    height: 20px;
    font: 14px;
    font-weight: bold;
    text-align: left;
    margin-top: 60px;
    margin-bottom: 30px;
`;


export const ButtonSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;

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