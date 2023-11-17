import { styled } from 'styled-components';
import { Swiper } from 'swiper/react';

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
