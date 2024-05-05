import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as S from './style';
import LogoImg from '../../assets/images/logo.png';
import { SyncLoader } from 'react-spinners';

import BannerImg1 from '../../assets/images/main/banner1.png';
import BannerImg2 from '../../assets/images/main/2024.png';
import EventCard from '../../components/eventCard/EventCard';
import SearchBox from '../../components/search/searchBox/SearchBox';

// 슬라이더
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

// api
import axios from '../../api/axios';

function Main() {
  const navigate = useNavigate();
  // data
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // 초기
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('cultural-event');

      //데이터 저장
      setData(response.data);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
      if (e.response.data.code === 'LOGIN_FAIL') {
        alert('로그인 만료! 다시 로그인 해주세요.');
        navigate('/');
      }
    }
  };

  return (
    <S.MainWrapper>
      {/* 헤더 */}
      <S.Header>
        <S.HeaderLogo src={LogoImg} alt="로고 이미지" />
        <SearchBox width={'180px'} />
      </S.Header>

      {/* 배너 */}
      <S.Banner>
        <S.MySwiper pagination={true} modules={[Pagination]}>
          <SwiperSlide>
            <S.SwiperSlideImg src={BannerImg1} alt="배너 이미지" />
          </SwiperSlide>
          <SwiperSlide>
            <S.SwiperSlideImg src={BannerImg2} alt="배너 이미지" />
          </SwiperSlide>
        </S.MySwiper>
      </S.Banner>

      {/*문화 행사 목록*/}
      <S.EventWrapper>
        <S.EventHeader>
          <S.EventHeaderTitle>이런 행사는 어떠세요?</S.EventHeaderTitle>
          <Link to="/search">
            <S.EventHeaderMore>더보기</S.EventHeaderMore>
          </Link>
        </S.EventHeader>

        {isLoading ? (
          <S.SyncLoaderWrapper>
            <SyncLoader color="#018C0D" />
          </S.SyncLoaderWrapper>
        ) : (
          <EventCard data={data} />
        )}
      </S.EventWrapper>
    </S.MainWrapper>
  );
}

export default Main;
