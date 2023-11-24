import { styled } from 'styled-components';
import { AiFillStar } from 'react-icons/ai';


export const ReviewCard = styled.div`
  position: relative;
  display: block;
  width:300px;
  height: auto;
  padding: 10px;
  border-top: 2px solid black;
  margin-top: 12px;
`;

export const UserInfo = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  gap: 12px;
  align-items: flex-start;
  width: max-content;
  width: 300px;
`;

export const UserName = styled.div`
  font-weight: bold;
`;

export const Date = styled.div`
  font-size: 12px;
`;

export const MyReview = styled.div`
  width: 40px;
  margin-left:auto;
  display:flex;
  justify-content: space-between;

  svg > path {
    width: 16px;
    height: 16px;
  }
`;

export const MyButton = styled.button`
  display: none;
`;

export const RvImg = styled.img`
  width: 80px;
  height: 56px;
`;

export const ReviewRow = styled.div`
  display: flex;
  position: relative;
  margin-top: 12px;
  gap: 10px;
  width: 100%;
`;

export const RvComment = styled.div`
  width: max-content;
`;

export const Star = styled.div`
  display: flex;
  position: relative;
  height: auto;
  margin-top: 10px;
  svg {
    box-sizing: border-box;
  }
`;

export const Event = styled.div`
  display: ${props => props.display};
  position: relative;
  flex-direction: row;
  gap: 12px;
  top: 10px;
  align-items: center;
`;

export const EventImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 4px;
`;

export const EventTitle = styled.div`
  width: max-content;
  font-weight: bold;
`;

export const ActiveStar = styled(AiFillStar)`
  fill: yellow;
`;

export const InActiveStar = styled(AiFillStar)`
  fill: #bbbbbb;
`;