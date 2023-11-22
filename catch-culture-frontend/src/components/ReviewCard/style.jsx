import styled from 'styled-components';

export const ReveiwCard = styled.div`
  position: relative;
  display: block;
  width:300px;
  height: 150px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 8px;
`;

export const UserInfo = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  gap: 12px;
  align-items: baseline;
  width: max-content;
`;

export const UserName = styled.div`
  font-weight: bold;
`;

export const Date = styled.div`
  font-size: 12px;
`;

export const RvImg = styled.img`
  width: 56px;
  height: 56px;
`;

export const ReviewRow = styled.div`
  display: flex;
  position: relative;
  margin-top: 12px;
  gap: 12px;
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
    fill: black;
    box-sizing: border-box;
    border: 1px solid black;
  }

  svg > svg {
    fill: yellow;
  }
`;

export const Event = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  gap: 12px;
  top: 10px;
  align-items: center;
`;

export const EventImg = styled.img`
  width: 32px;
  height:32px;
  border-radius: 4px;
`;

export const EventTitle = styled.div`
  width: max-content;
  font-weight: bold;
`;

