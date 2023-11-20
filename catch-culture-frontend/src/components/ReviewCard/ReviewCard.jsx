import React from 'react';
import styled from 'styled-components';

let rvimg =
  'https://storage.googleapis.com/elegant-bucket/KakaoTalk_20231109_140116686.jpg';

const Userinfo = styled.div`
  display: flex;
  position: absolute;
  flex-direction: row;
  gap: 12px;
  align-items: baseline;
  width: max-content;
`;
const Nick = styled.div`
  font-weight: bold;
`;
const Date = styled.div`
  font-size: 12px;
`;

const Rvimg = styled.img`
  width: 56px;
  height: 56px;
`;
const Reviewrow = styled.div`
  display: flex;
  position: absolute;
  top: 28px;
  gap: 12px;
  width: 340px;
`;
const Rvcontent = styled.div`
  width: max-content;
`;

const Star = styled.div`
  display: flex;
  position: absolute;
  top: 92px;
`;
const Event = styled.div`
  display: flex;
  position: absolute;
  flex-direction: row;
  gap: 12px;
  top: 120px;
  align-items: center;
`;
const Eventimg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 4px;
`;
const Eventtitle = styled.div`
  width: max-content;
  font-weight: bold;
`;

export default function ReviewCard() {
  return (
    <div>
      <div className="wrap">
        <Userinfo>
          <Nick>진우</Nick>
          <Date>2023-10-14</Date>
        </Userinfo>
        <Reviewrow>
          <Rvimg src={rvimg} />
          <Rvcontent>daksfasdf</Rvcontent>
        </Reviewrow>
        <Star>⬛⬛⬛⬜⬜</Star>
        <Event>
          <Eventimg src={rvimg} />
          <Eventtitle>응봉산 개나리 축제</Eventtitle>
        </Event>
      </div>
    </div>
  );
}
