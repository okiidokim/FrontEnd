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
  width: 300px;
`;

export const UserName = styled.div`
  font-weight: bold;
`;

export const DateArea = styled.div`
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
  width: 56px;
  height: 56px;
`;

export const ReviewRow = styled.div`
  display: flex;
  position: relative;
  margin-top: 12px;
  gap: 10px;
  width: 100%;
`;

export const ModifyForm = styled.div`
  min-height: 56px;
  display: flex;
  flex-direction: column;
`;

export const ModifyTextArea = styled.textarea`
  width: 230px;
  height: 50px;
  resize: none;
`;

export const ModifyButtonArea = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;
`;

export const ModifyButton = styled.button`
  width: 60px;
  height: 20px;
  border-radius: 10px;
  border: 0px;
  background-color: #018c0d;
  color: white;
`;

export const RvComment = styled.div`
  width: 230px;
  min-height: 56px;
  overflow: scroll;
  word-break: break-all;
  text-align: left;

  &::-webkit-scrollbar {
    display: none;
}
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