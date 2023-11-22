import React from 'react';
import styled from 'styled-components';

let rvimg =
  'https://storage.googleapis.com/elegant-bucket/KakaoTalk_20231109_140116686.jpg';

const Userinfo = styled.div`
  display: flex;
  position: relative;
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
  position: relative;
  margin-top: 12px;
  gap: 12px;
  width: 100%;
`;
const Rvcontent = styled.div`
  width: max-content;
`;

const Star = styled.div`
  display: flex;
  position: relative;
  height: auto;
  margin-top: 10px;
`;
const Event = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  gap: 12px;
  top: 10px;
  align-items: center;
`;
const Eventimg = styled.img`
  width: 32px;
  height: 0px;
  border-radius: 4px;
`;
const Eventtitle = styled.div`
  width: max-content;
  font-weight: bold;
`;

const Wrapper = styled.div`
  position: relative;
  display: block;
  width:300px;
  height: 140px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 4px;
`;

export default function ReviewCard() {
  return (
    <Wrapper>
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
    </Wrapper>
  );
}
