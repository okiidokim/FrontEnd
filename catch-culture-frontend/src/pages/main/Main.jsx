import React, { useState } from 'react';
import * as S from './style';
import LogoImg from '../../assets/images/logo.png';
import SearchImg from '../../assets/images/search/searchIcon.png';
import BannerImg1 from '../../assets/images/main/banner1.png';
import BannerImg2 from '../../assets/images/main/banner2.png';
import BannerImg3 from '../../assets/images/main/banner3.png';
import CardImg from '../../assets/images/main/card.png';

// 슬라이더
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function Main() {
  const [search, setSearch] = useState('');

  const onChange = e => {
    setSearch(e.target.value);
  };

  return (
    <>
      <S.MainWrapper>
        <S.Header>
          <S.HeaderLogo src={LogoImg} alt="로고 이미지" />
          <S.HeaderSearchWrapper>
            <S.HeaderSearch
              type="text"
              value={search}
              onChange={onChange}
              placeholder="다양한 행사를 검색해보세요"
            />
            <S.HeaderSearchImg src={SearchImg} alt="검색 이미지" />
          </S.HeaderSearchWrapper>
        </S.Header>

        <S.Banner>
          <S.MySwiper pagination={true} modules={[Pagination]}>
            <SwiperSlide>
              <S.SwiperSlideImg src={BannerImg1} alt="배너 이미지" />
            </SwiperSlide>
            <SwiperSlide>
              <S.SwiperSlideImg src={BannerImg2} alt="배너 이미지" />
            </SwiperSlide>
            <SwiperSlide>
              <S.SwiperSlideImg src={BannerImg3} alt="배너 이미지" />
            </SwiperSlide>
          </S.MySwiper>
        </S.Banner>

        <S.EventWrapper>
          <S.EventHeader>
            <S.EventHeaderTitle>이런 행사는 어떠세요?</S.EventHeaderTitle>
            <S.EventHeaderMore>더보기</S.EventHeaderMore>
          </S.EventHeader>

          <S.EventList>
            <S.EventCard>
              <S.EventCardImgWrapper>
                <S.EventCardImgTag>D-7</S.EventCardImgTag>
                <S.EventCardImg src={CardImg} alt="카드 이미지" />
              </S.EventCardImgWrapper>

              <S.EventCardContentWrapper>
                <S.EventCardTitle>응봉산 개나리 축제</S.EventCardTitle>
                <S.EventCardLocation>성동구 응봉산</S.EventCardLocation>
                <S.EventCardDate>2023.09.24 ~ 2023.10.24</S.EventCardDate>
                <S.EventCardInfo>
                  <S.EventCardInfoViewWrapper>
                    <S.EventCardInfoViewIcon />
                    <S.EventCardInfoViewCnt>257만</S.EventCardInfoViewCnt>
                  </S.EventCardInfoViewWrapper>
                  <S.EventCardInfoHeartWrapper>
                    <S.EventCardInfoHeartIcon />
                    <S.EventCardInfoHeartCnt>246만</S.EventCardInfoHeartCnt>
                  </S.EventCardInfoHeartWrapper>
                </S.EventCardInfo>
              </S.EventCardContentWrapper>
            </S.EventCard>
          </S.EventList>
        </S.EventWrapper>
      </S.MainWrapper>
    </>
  );
}

export default Main;
