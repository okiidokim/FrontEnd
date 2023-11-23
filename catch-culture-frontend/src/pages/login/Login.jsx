import React from 'react';
import './Login.css';
import 'swiper/css';
import LogoImg from '../../assets/images/logo.png';
import KakaoImg from '../../assets/img/kakao.png';
import GoogleImg from '../../assets/img/google.png';
import NaverImg from '../../assets/img/naver.png';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const Logindone = () => navigate('/');

  return (
    <div class="loginwrap">
      <img class="header" src={LogoImg} alt="로고이미지" />
      <div class="buttonlist">
        <button class="kakao" onClick={Logindone}>
          <img class="kl" src={KakaoImg} />
          Kakao로 시작하기
        </button>
        <button class="google" onClick={Logindone}>
          <img class="gl" src={GoogleImg} />
          Google로 시작하기
        </button>
        <button class="naver" onClick={Logindone}>
          <img class="nl" src={NaverImg} />
          Naver로 시작하기
        </button>
      </div>
    </div>
  );
}
export default Login;
