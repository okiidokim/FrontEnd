import { styled } from 'styled-components';
import { Swiper } from 'swiper/react';

/************
 * 헤더 영역 *
 ************/ 
export const Header = styled.div`
    width:100%;
    height:75px;
    display:flex;
    border: 1px solid black;
    justify-content: flex-start;
    align-items: center;
`;

// 뒤로가기 버튼
export const BackButton = styled.button`
    display: flex;
    margin-right: auto;
    margin-left: 30px;
    border-radius: 30px;
    align-items: center;
    aspect-ratio: 1;
    background-color: white;
    width: 24px;
    height: 24px;

    * {
        width:16px;
        height:16px;
    }
`;

// 화면 전환 선택
export const PageChangeArea = styled.div`
    margin-right: 30px;

    * {
        font-size: 8px;
        width: 64px;
        height: 24px;
        background-color: white;
    }

    * .active {
        background-color: #247E2C;
        color:white;
    }
`;

// 상세 정보 버튼
export const DetailInfoButton = styled.button`
    border-radius: 12px 0px 0px 12px;
    margin-right: -2px;
`;

// 리뷰 버튼
export const EventReviewButton = styled.button`
    border-radius: 0px 12px 12px 0px;
`;


/*****************************
 *         정보 영역          *
 *****************************/
export const InfoArea = styled.div`
    text-align: center;
    
    div {
        width: 300px;
        min-height: 25px;
        margin-left: 45px;
        margin-right: 45px;
        display:inline-block;s
    }
`;

export const TitleArea = styled.div`
    width: 200px;
    height: 38px;
    text-align: center;
    font: 20px bold;
    font-weight: bold;
    font-family: 'Inter'; /* 적용 안되는듯 */
    margin-top: 40px;
    border-bottom: 2px solid black;
`;

export const CategoryArea = styled.div`
    width: 40px !important;
    height: 12px !important;
    font-size: 8px;
`;

export const PictureArea = styled.div`
    width; 100%;
    margin-top: 35px;
    display: flex;
`;

export const PersonalButtonArea = styled.div`
    button {
        width: 64px;
        height: 28px;
        border-radius: 32px;
        text-align: center;
        font-size: 12px;
        display: inline-flex;
        align-items: center;
        justify-items: center;
        text-align: center;
        background-color: white;
        margin-left: 4px;
        margin-right: 4px;
    }

    button > svg {
        width: 20px;
        height: 202px;
    }

    button > text {
        height: 20px;
        font-size: 12px;
        margin-left: 5px;
        display: flex;
        align-items: center;
    }
`;

export const MySwiper = styled(Swiper)`
    width: 336px;
    height: auto;
    padding-bottom: 30px;

    .swiper-pagination-bullet {
        width: 8px;
        height: 8px;
    }

    .swiper pagination-bullet-active {
        background-color: #018c0d;
        width: 8px;
        height: 8px;
    }
`;

export const SwiperSlideImg = styled.img`
    width: 100%;
    height: 188px;
    border-radius: 5px;
`;

export const SubTitle = styled.div`
    width: 100%;
    height: 20px;
    background-color:red;
    font: 14px;
    font-weight: bold;
    text-align: left;
    margin-top: 16px;
`;

export const InfoValue = styled.div`
    top: 10px;
    width: 100% - 30px;
    background-color:green;
    font-size: 12px ;
    text-align: left;
    padding-left: 30px;
    margin-top: 12px;
`;

export const ButtonArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    button {
        display: block;
        width: 280px;
        height: 32px;
        border-radius: 10px;
        border: 0px;
        background-color: #018C0D;
        color: white;

        margin-bottom: 10px;
    }
`;

// 방문 인증 영역
export const AuthArea = styled.div`
    font-size: 12px;
`;

