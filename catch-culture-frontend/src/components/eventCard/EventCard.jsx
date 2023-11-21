import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

function EventCard({ data }) {
  console.log(data);

  if (!data) {
    return null;
  }

  const getTagColor = remainDay => {
    if (remainDay === 0) {
      return '#E00000';
    } else if (remainDay >= 1 && remainDay <= 3) {
      return '#EB6565';
    } else if (remainDay >= 4 && remainDay <= 9) {
      return '#E3C00C';
    } else {
      return '#018C0D';
    }
  };

  return (
    <>
      {/* 문화 행사 목록 */}
      <S.EventList>
        {data.map((event, index) => (
          <Link to={`/event/${event.culturalEventId}`} key={index}>
            {/* 문화 행사 카드 */}
            <S.EventCard key={index}>
              {/* 문화 행사 카드 - 이미지 */}
              <S.EventCardImgWrapper>
                <S.EventCardImgTag color={getTagColor(event.remainDay)}>
                  D-{event.remainDay === 0 ? 'Day' : event.remainDay}
                </S.EventCardImgTag>
                <S.EventCardImg src={event.storedFileUrl} alt="카드 이미지" />
              </S.EventCardImgWrapper>

              {/* 문화 행사 카드 - 내용 */}
              <S.EventCardContentWrapper>
                <S.EventCardTitle>
                  {String(event.title) < 10
                    ? event.title
                    : `${String(event.title).slice(0, 9)}...`}
                </S.EventCardTitle>
                <S.EventCardLocation>
                  {String(event.place) < 16
                    ? event.place
                    : `${String(event.place).slice(0, 15)}...`}
                </S.EventCardLocation>
                <S.EventCardDate>
                  {event.startDate} ~ {event.endDate}
                </S.EventCardDate>

                <S.EventCardInfo>
                  {/* 문화 행사 카드 - 내용 - 조회수 */}
                  <S.EventCardInfoViewWrapper>
                    <S.EventCardInfoViewIcon />
                    <S.EventCardInfoViewCnt>
                      {event.viewCount}
                    </S.EventCardInfoViewCnt>
                  </S.EventCardInfoViewWrapper>

                  {/* 문화 행사 카드 - 내용 - 좋아요수 */}
                  <S.EventCardInfoHeartWrapper>
                    <S.EventCardInfoHeartIcon />
                    <S.EventCardInfoHeartCnt>
                      {event.likeCount}
                    </S.EventCardInfoHeartCnt>
                  </S.EventCardInfoHeartWrapper>
                </S.EventCardInfo>
              </S.EventCardContentWrapper>
            </S.EventCard>
          </Link>
        ))}
      </S.EventList>
    </>
  );
}

export default EventCard;
