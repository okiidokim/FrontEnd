import React, { useState } from 'react';
import * as S from './style';
import LogoImg from '../../assets/images/logo.png';
import SearchImg from '../../assets/images/search/searchIcon.png';
import BannerImg1 from '../../assets/images/main/banner1.png';
import BannerImg2 from '../../assets/images/main/banner2.png';
import BannerImg3 from '../../assets/images/main/banner3.png';

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
      </S.MainWrapper>
    </>
  );
}

export default Main;
