import React, { useState, useEffect } from 'react';
import * as S from './style';
import { useLocation } from 'react-router-dom';

// 컴포넌트
import SearchBox from '../../components/search/SearchBox';
import CategorySelector from '../../components/categorySelector/CategorySelector';
import SortSelector from '../../components/sortSelector/SortSelector';
import EventCard from '../../components/eventCard/EventCard';

function Search() {
  const { state } = useLocation();
  const category = state && state.category;

  // 카테고리 상태
  const [selectedCategories, setSelectedCategories] = useState([]);

  // 정렬 옵션
  const options = [
    { value: 1, label: '최신순' },
    { value: 2, label: '조회순' },
    { value: 3, label: '좋아요순' },
  ];

  // 정렬 상태
  const [selectedSort, setSelectedSort] = useState(0);

  // 카테고리 바뀔 때 마다 리렌더링
  useEffect(() => {
    console.log(selectedCategories);
    console.log(options[selectedSort].label);
  }, [selectedCategories, selectedSort]);

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

        {/* 정렬 선택 */}
        <S.SortSelectorWrapper>
          <SortSelector
            options={options}
            selectedSort={selectedSort}
            setSelectedSort={setSelectedSort}
          />
        </S.SortSelectorWrapper>

        {/* 문화 행사 출력 */}
        <EventCard />
      </S.SearchWrapper>
    </>
  );
}

export default Search;
