import { styled } from 'styled-components';

/*****************************
 *         정보 영역          *
 *****************************/
export const EventInfo = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;
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

export const CategoryArea = styled.div`
    width: 100px;
    height: 12px;
    font-size: 8px;
`;

// 방문 인증 영역
export const AuthArea = styled.div`
    font-size: 12px;
`;

export const MyArea = styled.div`
    width: 300px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 10px;
`;

export const StarArea = styled.div`
    width: 100%;
    height: 180px;
`;

export const ReviewButton = styled.button`
    display: block;
    width: 280px;
    height: 32px;
    border-radius: 10px;
    border: 0px;
    background-color: #018c0d;
    color: white;
    margin-top: 20px;
`;