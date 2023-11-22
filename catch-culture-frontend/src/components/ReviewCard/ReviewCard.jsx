import React, {useEffect, useState} from 'react';

import {  AiOutlineStar, AiFillStar } from 'react-icons/ai';
import * as S from './style'

let rvImg = 'https://storage.googleapis.com/elegant-bucket/KakaoTalk_20231109_140116686.jpg';

export default function ReviewCard(data) {
  console.log(data);

  // if(data) {
  //   return '';
  // }

  return (
    <S.ReveiwCard>
      <S.UserInfo>
        <S.UserName>{data.nickname}</S.UserName>
        <S.Date>{data.createdAt}</S.Date>
      </S.UserInfo>
      <S.ReviewRow>
        <S.RvImg src={data.storedFileUrl} />
        <S.RvComment>{data.description}</S.RvComment>
      </S.ReviewRow>
      <S.Star>
        <AiFillStar />
        <AiFillStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
      </S.Star>
      <S.Event>
        <S.EventImg src={data.eventImgUrl} />
        <S.EventTitle>{data.eventTitle}</S.EventTitle>
      </S.Event>
    </S.ReveiwCard>
  );
}
