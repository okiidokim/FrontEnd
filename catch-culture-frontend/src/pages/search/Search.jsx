import React, { useState } from 'react';
import * as S from './style';
import { useLocation } from 'react-router-dom';
// 아이콘
import SearchImg from '../../assets/images/search/searchIcon.png';

function Search() {
  const { state } = useLocation();
  const category = state && state.category;

  const [search, setSearch] = useState('');

  const onChange = e => {
    setSearch(e.target.value);
  };

  return (
    <>
      <S.SearchWrapper>
        <S.HeaderSearchWrapper>
          <S.HeaderSearch
            type="text"
            value={search}
            onChange={onChange}
            placeholder="다양한 행사를 검색해보세요"
          />
          <S.HeaderSearchImg src={SearchImg} alt="검색 이미지" />
        </S.HeaderSearchWrapper>
      </S.SearchWrapper>
    </>
  );
}

export default Search;
