import React from 'react';
import './Login.css';
import 'swiper/css';
import LogoImg from '../../assets/images/logo.png';
import KakaoImg from '../../assets/img/kakao.png';
import GoogleImg from '../../assets/img/google.png';
import NaverImg from '../../assets/img/naver.png';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div class="loginwrap">
      <img class="header" src={LogoImg} alt="로고이미지" />
      <div class="buttonlist">
        <Link to={'https://elegant.kro.kr/oauth2/authorization/kakao'}>
          <button class="kakao">
            <img class="kl" src={KakaoImg} />
            Kakao로 시작하기
          </button>
        </Link>
        <Link to={'https://elegant.kro.kr/oauth2/authorization/google'}>
          <button class="google">
            <img class="gl" src={GoogleImg} />
            Google로 시작하기
          </button>
        </Link>
        <Link to={'https://elegant.kro.kr/oauth2/authorization/naver'}>
          <button class="naver">
            <img class="nl" src={NaverImg} />
            Naver로 시작하기
          </button>
        </Link>
      </div>
    </div>
  );
}
export default Login;
