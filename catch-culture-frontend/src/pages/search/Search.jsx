import React, { useState } from 'react';
import * as S from './style';
import { useLocation } from 'react-router-dom';

// 컴포넌트
import SearchBox from '../../components/search/SearchBox';

function Search() {
  const { state } = useLocation();
  const category = state && state.category;

  return (
    <>
      <S.SearchWrapper>
        <SearchBox width="280px" />
      </S.SearchWrapper>
    </>
  );
}

export default Search;
