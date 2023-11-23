import { styled } from 'styled-components';

export const Wrapper = styled.div`
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
    justify-content: flex-start;
    align-items: center;
    position: sticky;
    top: 0px;
    background-color: white;
    z-index: 2;
`;

// 뒤로가기 버튼
export const BackButton = styled.button`
    display: flex;
    border-radius: 30px;
    align-items: center;
    left:0;
    background-color: white;
    width: 24px;
    height: 24px;

    * {
        width: 16px;
        height: 16px;
    }
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
