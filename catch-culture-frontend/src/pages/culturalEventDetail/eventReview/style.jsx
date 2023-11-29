import { styled } from 'styled-components';
import { AiFillStar } from 'react-icons/ai';


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
    max-width: 300px;
    min-height: 38px;
    text-align: center;
    font: 16px bold;
    font-weight: bold;
    font-family: NotoSansKR_Bold;
    margin-top: 20px;
    margin-bottom: 10px;
    border-bottom: 2px solid black;
    padding-bottom: 10px;
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
    margin-bottom: 30px;
    margin-top: 10px;
`;

export const subTitle = styled.div`
    width: 300px;
    text-align: left;
    margin-top: 20px;
    margin-bottom: 10px;
    font-family: NotoSansKR_Bold; 
`; 


export const NoResultTitle = styled.div`
    display: flex;
    color: #000;
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    margin-top: 16px;
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

export const authNotification = styled.div`
    margin-top: 20px;
    color: red;
    font-size: 15px;
`;

export const AvgStarArea = styled.div`
    width: 330px;
    height: 30px;
    display: flex;
`;

export const StarCountArea = styled.div`
    width: 30px;
    height: 30px;
    overfolow: hidden;

    * {
        position: absolute;
    }
`;

export const printRating = styled.div`
    height: 100%;
    margin-left: 30px;
    font-size: 16px;
    display: flex;
    align-items: center;
`;

export const MiddleContent = styled.div`
    width: 320px;
    height: auto;
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding: 15px 0px 30px 0px;
    justify-content: space-between;
`;

export const StarArea = styled.div`
   display: flex;
   flex-direction: column;
   gap: 4px;
`;

export const RateArea = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

export const PictureArea = styled.div`
    width: 160px;
    display: flex;
    flex-direction: row;
    border-left: 1px solid black;
    border-right: 1px solid black;
    border-radius: 8px;
    align-items: center;
    overflow: scroll;
    gap: 10px;
    padding: 10px;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const AvgStar = styled(AiFillStar)`
    width: 30px;
    height: 30px;
    clip: rect(0px, ${props => props.rating * 30}px, 30px, 0px);
    fill : yellow;
`;

export const ActiveStar = styled(AiFillStar)`
    fill: yellow;
`;

export const InActiveStar = styled(AiFillStar)`
    fill: #bbbbbb;
`;

export const RvImg = styled.img`
    width: 56px;
    height: 56px;
    aspect-ratio : 1;
`;

export const SelectorWrapper = styled.div`
    display: flex;
    width: 300px;
    height: 28px;
    flex-direction: row-reverse;
`;