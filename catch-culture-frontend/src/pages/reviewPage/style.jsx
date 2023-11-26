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

export const Content = styled.form`
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

export const SubTitle = styled.div`
    width: 300px;
    display: flex;
    color: #000;
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.3px;
    margin-bottom: 16px;
    margin-top: 32px;
`;

// TextArea
export const ReviewTextAreaWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const ReviewTextArea = styled.textarea`
  display: flex;
  width: 268px;
  height: 100px;
  padding: 16px;
  border: 1px solid black;
  border-radius: 5px;
  align-items: center;
  resize: none;
  font-family: NotoSansKR_Regular;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.3px;

  &:focus {
    border: none;
    outline: 2px solid #71be77;
    border-radius: 3px;
    color: #018c0d;
  }
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