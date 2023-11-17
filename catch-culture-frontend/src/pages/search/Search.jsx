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
        {/* 검색창 */}
        <SearchBox width="280px" />

        {/* 헤더 */}
        <S.SearchHeader>
          <S.SearchHeaderTitle>검색 결과</S.SearchHeaderTitle>
          <S.SearchHeaderResultCnt>총 123개</S.SearchHeaderResultCnt>
        </S.SearchHeader>
      </S.SearchWrapper>
    </>
  );
}

export default Search;
