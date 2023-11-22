import React, {useEffect, useState} from 'react';

import {  AiOutlineStar, AiFillStar } from 'react-icons/ai';
import * as S from './style'

let rvImg = 'https://storage.googleapis.com/elegant-bucket/KakaoTalk_20231109_140116686.jpg';

export default function ReviewCard(data) {
  console.log(data);

  // if(data) {
  //   return '';
  // }

  const [userName, setUserName] = useState();
  const [date, setDate] = useState();
  const [rvImgUrl, setRvImgUrl] = useState();
  const [rvComment, setRvComment] = useState();
  const [rvStarCount, setRvStar] = useState();
  const [eventImgUrl, setEventImgUrl] = useState();
  const [eventTitle, setEventTitle] = useState();
  
  useEffect(() => {
    setUserName('나');
    setDate('2023-10-14');
    setRvImgUrl('https://storage.googleapis.com/elegant-bucket/KakaoTalk_20231109_140116686.jpg');
    setRvComment('ㄹㄴㅁㅇㄻㅈㄷ');
    setRvStar(3);
    setEventImgUrl('https://storage.googleapis.com/elegant-bucket/KakaoTalk_20231109_140116686.jpg');
    setEventTitle('응 개 축');
  }, []);

  return (
    <S.ReveiwCard>
      <S.UserInfo>
        <S.UserName>{userName}</S.UserName>
        <S.Date>{date}</S.Date>
      </S.UserInfo>
      <S.ReviewRow>
        <S.RvImg src={rvImgUrl} />
        <S.RvComment>{rvComment}</S.RvComment>
      </S.ReviewRow>
      <S.Star>
        <AiFillStar />
        <AiFillStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
      </S.Star>
      <S.Event>
        <S.EventImg src={eventImgUrl} />
        <S.EventTitle>{eventTitle}</S.EventTitle>
      </S.Event>
    </S.ReveiwCard>
  );
}
