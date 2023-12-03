import { styled } from 'styled-components';

export const Wrapper = styled.div`
    min-height: 700px;
    display: flex;
    flex-direction: column;
    font-family: NotoSansKR_Regular;
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

export const Container = styled.form`
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
    width: 300px;
    min-height: 38px;
    text-align: center;
    font: 24px bold;
    font-family: NotoSansKR_Bold;
    margin-top: 20px;
    margin-bottom: 10px;
    border-bottom: 2px solid black;
    padding-bottom: 10px;
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


export const ButtonArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
    margin-top: auto;

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

export const ImageArea = styled.div`
    display: flex;  
    flex-direction: column;
`;

export const ThumbnailArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
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