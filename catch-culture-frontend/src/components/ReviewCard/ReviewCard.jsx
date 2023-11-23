import React, { useEffect, useState } from 'react';

import * as S from './style';

let rvImg =
  'https://storage.googleapis.com/elegant-bucket/KakaoTalk_20231109_140116686.jpg';

export default function ReviewCard(data) {
  console.log(data.data);

  // if(data) {
  //   return '';
  // }

  const printStar = (rating) => {
    switch (rating) {
      case 0:
        return (
          <div>
            <S.InActiveStar />
            <S.InActiveStar />
            <S.InActiveStar />
            <S.InActiveStar />
            <S.InActiveStar />
          </div>
        );
      case 1:
        return (
          <div>
            <S.ActiveStar />
            <S.InActiveStar />
            <S.InActiveStar />
            <S.InActiveStar />
            <S.InActiveStar />
          </div>
        );
      case 2:
        return (
          <div>
            <S.ActiveStar />
            <S.ActiveStar />
            <S.InActiveStar />
            <S.InActiveStar />
            <S.InActiveStar />
          </div>
        );
      case 3:
        return (
          <div>
            <S.ActiveStar />
            <S.ActiveStar />
            <S.ActiveStar />
            <S.InActiveStar />
            <S.InActiveStar />
          </div>
        );
      case 4:
        return (
          <div>
            <S.ActiveStar />
            <S.ActiveStar />
            <S.ActiveStar />
            <S.ActiveStar />
            <S.InActiveStar />
          </div>
        );
      case 5:
        return (
          <div>
            <S.ActiveStar />
            <S.ActiveStar />
            <S.ActiveStar />
            <S.ActiveStar />
            <S.ActiveStar />
          </div>
        );
    }
  };

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
      <S.Star>{printStar(data.rating)}</S.Star>
      <S.Event
        display={
          data.eventImgUrl == null || data.eventTitle == null ? 'none' : 'flex'
        }
      >
        <S.EventImg src={data.eventImgUrl} />
        <S.EventTitle>{data.eventTitle}</S.EventTitle>
      </S.Event>
    </S.ReveiwCard>
  );
}
