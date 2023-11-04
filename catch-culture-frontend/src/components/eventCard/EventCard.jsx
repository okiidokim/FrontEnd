import React from 'react';
import * as S from './style';
import CardImg from '../../assets/images/main/card.png';

function EventCard() {
  return (
    <>
      {/* 문화 행사 목록 */}
      <S.EventList>
        {/* 문화 행사 카드 */}
        <S.EventCard>
          {/* 문화 행사 카드 - 이미지 */}
          <S.EventCardImgWrapper>
            <S.EventCardImgTag>D-7</S.EventCardImgTag>
            <S.EventCardImg src={CardImg} alt="카드 이미지" />
          </S.EventCardImgWrapper>

          {/* 문화 행사 카드 - 내용 */}
          <S.EventCardContentWrapper>
            <S.EventCardTitle>응봉산 개나리 축제</S.EventCardTitle>
            <S.EventCardLocation>성동구 응봉산</S.EventCardLocation>
            <S.EventCardDate>2023.09.24 ~ 2023.10.24</S.EventCardDate>
            <S.EventCardInfo>
              {/* 문화 행사 카드 - 내용 - 조회수 */}
              <S.EventCardInfoViewWrapper>
                <S.EventCardInfoViewIcon />
                <S.EventCardInfoViewCnt>257만</S.EventCardInfoViewCnt>
              </S.EventCardInfoViewWrapper>
              {/* 문화 행사 카드 - 내용 - 좋아요수 */}
              <S.EventCardInfoHeartWrapper>
                <S.EventCardInfoHeartIcon />
                <S.EventCardInfoHeartCnt>246만</S.EventCardInfoHeartCnt>
              </S.EventCardInfoHeartWrapper>
            </S.EventCardInfo>
          </S.EventCardContentWrapper>
        </S.EventCard>
      </S.EventList>
    </>
  );
}

export default EventCard;
