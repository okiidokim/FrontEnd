import React, { useState } from 'react';
import * as S from './style';
import LogoImg from '../../assets/images/logo.png';
import SearchImg from '../../assets/images/search/searchIcon.png';

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
      </S.MainWrapper>
    </>
  );
}

export default Main;
