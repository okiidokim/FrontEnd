import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
import CardImg from '../../assets/images/main/card.png';

function EventCard({ data }) {
  if (!data) {
    return null;
  }

  return (
    <>
      {/* 문화 행사 목록 */}
      <S.EventList>
        {data.map((event, index) => (
          <Link to={`/event/${event.culturalEventId}`}>
            {/* 문화 행사 카드 */}
            <S.EventCard key={index}>
              {/* 문화 행사 카드 - 이미지 */}
              <S.EventCardImgWrapper>
                <S.EventCardImgTag>D-{event.remainDay}</S.EventCardImgTag>
                <S.EventCardImg src={event.storedFileURL} alt="카드 이미지" />
              </S.EventCardImgWrapper>

              {/* 문화 행사 카드 - 내용 */}
              <S.EventCardContentWrapper>
                <S.EventCardTitle>{event.title}</S.EventCardTitle>
                <S.EventCardLocation>{event.place}</S.EventCardLocation>
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
