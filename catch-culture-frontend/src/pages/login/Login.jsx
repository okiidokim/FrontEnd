import React from 'react';
import './Login.css';
import 'swiper/css';
import LogoImg from '../../assets/images/logo.png';
import KakaoImg from '../../assets/img/kakao.png';
import GoogleImg from '../../assets/img/google.png';
import NaverImg from '../../assets/img/naver.png';
import titleImg from '../../assets/images/login/title.png'
import LoginImg from '../../assets/images/login/login_img.png'

import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const StyledImg = styled.img`
`

function Login() {
  return (
    <div className="loginwrap">
      <img className="header" src={titleImg} alt="타이틀이미지" />

      <img className="bannerImg" src={LoginImg} alt="배너이미지" />

      <div className="buttonlist">
        <Link to={'https://catch-culture.com/oauth2/authorization/kakao'}>
          <button className="kakao">
            <StyledImg className="kl" src={KakaoImg} />
            Kakao로 시작하기
          </button>
        </Link>
        <Link to={'https://catch-culture.com/oauth2/authorization/google'}>
          <button className="google">
            <StyledImg className="gl" src={GoogleImg} />
            Google로 시작하기
          </button>
        </Link>
      </div>
    </div>
  );
}
export default Login;
