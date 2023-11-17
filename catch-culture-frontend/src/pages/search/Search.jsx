import React, { useState, useEffect } from 'react';
import * as S from './style';
import { useLocation } from 'react-router-dom';

// 컴포넌트
import SearchBox from '../../components/search/SearchBox';
import CategorySelector from '../../components/categorySelector/CategorySelector';

function Search() {
  const { state } = useLocation();
  const category = state && state.category;

  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    console.log(selectedCategories);
  }, [selectedCategories]);

  return (
    <>
      <S.SearchWrapper>
        {/* 검색창 */}
        <SearchBox width="300px" />

        {/* 헤더 */}
        <S.SearchHeader>
          <S.SearchHeaderTitle>검색 결과</S.SearchHeaderTitle>
          <S.SearchHeaderResultCnt>총 123개</S.SearchHeaderResultCnt>
        </S.SearchHeader>

        {/* 카테고리 선택창 */}
        <CategorySelector
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
      </S.SearchWrapper>
    </>
  );
}

export default Search;
