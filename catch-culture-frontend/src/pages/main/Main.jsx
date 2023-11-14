import React, { useState } from 'react';
import * as S from './style';
import LogoImg from '../../assets/images/logo.png';
import SearchImg from '../../assets/images/search/searchIcon.png';
import BannerImg1 from '../../assets/images/main/banner1.png';
import BannerImg2 from '../../assets/images/main/banner2.png';
import BannerImg3 from '../../assets/images/main/banner3.png';
import EventCard from '../../components/eventCard/EventCard';

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
        {/* 헤더 */}
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

        {/* 배너 */}
        <S.Banner>
          <S.MySwiper pagination={true} modules={[Pagination]}>
            <SwiperSlide>
              {/* <S.SwiperSlideImg src={BannerImg1} alt="배너 이미지" /> */}
              <S.SwiperSlideImg
                src="https://storage.googleapis.com/elegant-bucket/jinwoo.png"
                alt="배너 이미지"
              />
            </SwiperSlide>
            <SwiperSlide>
              <S.SwiperSlideImg src={BannerImg2} alt="배너 이미지" />
            </SwiperSlide>
            <SwiperSlide>
              <S.SwiperSlideImg src={BannerImg3} alt="배너 이미지" />
            </SwiperSlide>
          </S.MySwiper>
        </S.Banner>

        {/*문화 행사 목록*/}
        <S.EventWrapper>
          <S.EventHeader>
            <S.EventHeaderTitle>이런 행사는 어떠세요?</S.EventHeaderTitle>
            <S.EventHeaderMore>더보기</S.EventHeaderMore>
          </S.EventHeader>
          <EventCard />
        </S.EventWrapper>
      </S.MainWrapper>
    </>
  );
}

export default Main;
