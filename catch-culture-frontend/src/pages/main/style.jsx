import { styled } from 'styled-components';
import { Swiper } from 'swiper/react';
// 아이콘
import { AiFillHeart, AiFillEye } from 'react-icons/ai';

// 메인
export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 27px;
  font-family: Noto Sans KR;
`;

// 헤더
export const Header = styled.div`
  display: flex;
  width: 100%;
`;

// 헤더 - 로고
export const HeaderLogo = styled.img`
  height: 40px;
  margin-right: 15px;
`;

// 헤더 - 검색창
export const HeaderSearchWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  position: relative;
  flex-direction: row;
`;

export const HeaderSearch = styled.input`
  width: 180px;
  height: 30px;
  border: none;
  border-bottom: 1px solid #71be77;
  outline: none;
  padding-left: 10px;
  padding-right: 30px;
  font-size: 12px;

  &::placeholder {
    color: #71be77;
  }

  &:focus {
    border: none;
    outline: 2px solid #71be77;
    border-radius: 3px;
  }
`;

export const HeaderSearchImg = styled.img`
  position: absolute;
  right: 10px;
  height: 16px;
`;

// 배너 - 슬라이더
export const Banner = styled.div`
  display: flex;
  width: 100%;
  margin-top: 35px;
`;

export const MySwiper = styled(Swiper)`
  width: 336px;
  height: auto;
  padding-bottom: 30px;

  // Pagination 버튼의 비활성 상태 스타일
  .swiper-pagination-bullet {
    width: 8x;
    height: 8px;
  }

  // Pagination 버튼의 활성 상태 스타일
  .swiper-pagination-bullet-active {
    background-color: #018c0d;
    width: 8x;
    height: 8px;
  }
`;
export const SwiperSlideImg = styled.img`
  width: 100%;
  height: 188px;
  border-radius: 5px;
`;

// 추천 이벤트
export const EventWrapper = styled.div`
  margin-top: 20px;
`;
export const EventHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
export const EventHeaderTitle = styled.div`
  display: flex;
  color: #000;
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
`;
export const EventHeaderMore = styled.div`
  display: flex;
  color: #acacac;
  font-size: 10px;
  font-weight: 700;
  line-height: normal;
`;

// 추천 행사 목록
export const EventList = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-rows: 2fr;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  flex-wrap: wrap;
  gap: 22px;
`;

// 문화 행사 카드
export const EventCard = styled.div``;

export const EventCardImgWrapper = styled.div`
  position: relative;
`;

export const EventCardImgTag = styled.div`
  display: flex;
  position: absolute;
  top: 10px;
  left: 10px;
  justify-content: center;
  align-items: center;
  width: 33px;
  height: 14px;
  background-color: #018c0d;
  border-radius: 10px;
  color: #fff;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
`;

export const EventCardImg = styled.img`
  width: 155px;
  height: 155px;
  border-radius: 10px;
`;

// 문화 행사 카드 - 내용
export const EventCardContentWrapper = styled.div`
  margin-top: 5px;
  color: #acacac;
`;

// 문화 행사 카드 - 내용 - 타이틀
export const EventCardTitle = styled.div`
  color: #000;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
`;

// 문화 행사 카드 - 내용 - 위치
export const EventCardLocation = styled.div`
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 5px;
`;

// 문화 행사 카드 - 내용 - 기간
export const EventCardDate = styled.div`
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 6px;
`;

// 문화 행사 카드 - 내용 - 조회수 + 좋아요수
export const EventCardInfo = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 12px;
  font-weight: 500;
`;
export const EventCardInfoViewWrapper = styled.div`
  display: flex;
  margin-right: 8px;
`;
export const EventCardInfoViewIcon = styled(AiFillEye)`
  margin-right: 2px;
`;
export const EventCardInfoViewCnt = styled.div``;
export const EventCardInfoHeartWrapper = styled.div`
  display: flex;
`;
export const EventCardInfoHeartIcon = styled(AiFillHeart)`
  margin-right: 2px;
`;
export const EventCardInfoHeartCnt = styled.div``;
