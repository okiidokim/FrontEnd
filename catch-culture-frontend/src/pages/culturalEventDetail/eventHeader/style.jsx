import { styled } from 'styled-components';

export const Header = styled.div`
    width: 100%;
    height: 75px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    position: sticky;
    top: 0px;
    background-color: white;
    z-index: 1;
`;

export const BackButton = styled.button`
    display: flex;
    margin-right: auto;
    border-radius: 30px;
    align-items: center;
    aspect-ratio: 1;
    background-color: white;
    width: 24px;
    height: 24px;

    * {
        width: 16px;
        height: 16px;
    }
`;

export const PageChangeArea = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    right: 40px;
    top: 24px;

    * {
        font-size: 8px;
        width: 60px;
        background-color: white;
        text-align: center;
        height: 100%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
    
    & .active {
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
        background-color: #247e2c;
        * {
            color: white;
        }
    }

    * > svg,
    * > svg > * {
        width: 20px;
        height: 20px;
        background-color:rgba(0,0,0,0);
    }

    b {
        background-color:rgba(0,0,0,0);
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