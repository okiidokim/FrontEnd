import React, { useState, useEffect } from 'react';
import * as S from './style';
import { useLocation, useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { SyncLoader } from 'react-spinners';

// 컴포넌트
import SearchBox from '../../components/search/searchBox/SearchBox';
import CategorySelector from '../../components/categorySelector/CategorySelector';
import SortSelector from '../../components/sortSelector/SortSelector';
import EventCard from '../../components/eventCard/EventCard';
import NoResult from '../../components/search/noResult/NoResult';

// api
import axios from '../../api/axios';

function Search() {
  // 무한 스크롤
  const navigate = useNavigate();
  const [pageNum, setPageNum] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [ref, inView] = useInView();
  const [isLast, setIsLast] = useState(false);

  const { state } = useLocation();
  const category = state?.category;
  const keyword = state?.keyword;

  const [count, setCount] = useState(0);

  // state 값 유무에 따른 초기값 설정
  const initialCategories = category || [];

  // 카테고리 상태
  const [selectedCategories, setSelectedCategories] =
    useState(initialCategories);

  // 정렬 옵션
  const options = [
    { value: 1, label: 'RECENT', name: '최신순' },
    { value: 2, label: 'VIEW_COUNT', name: '조회순' },
    { value: 3, label: 'LIKE', name: '좋아요순' },
  ];

  // 정렬 상태
  const [selectedSort, setSelectedSort] = useState(0);

  // data
  const [data, setData] = useState([]);

  // 초기
  useEffect(() => {
    if (data.length !== 0 && inView && !isLast) {
      setTimeout(fetchScroll, 300);
    }
  }, [inView]);

  // 초기 데이터
  const fetchData = async () => {
    try {
      setIsLoading(true);

      if (selectedCategories.length !== 0 || keyword) {
        // URL 만들기 - 카테고리 선택
        const categoryUrl = selectedCategories
          .map((item) => 'category=' + item)
          .join('&');

        const response = await axios.get(
          keyword
            ? `cultural-event/search?keyword=${keyword}&${categoryUrl}&offset=0&sortType=${options[selectedSort].label}`
            : `cultural-event/list?${categoryUrl}&offset=0&sortType=${options[selectedSort].label}`
        );
        // 데이터 저장
        setCount(response.data.totalElements);
        setData((prevData) => [...prevData, ...response.data.content]);
        setIsLast(response.data.last);
        if (!response.data.last) {
          setPageNum((pageNum) => pageNum + 1);
        }
      } else {
        setCount(0);
      }
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
      if(e.response.data.code === "LOGIN_FAIL") {
        alert('로그인 만료! 다시 로그인 해주세요.');
        navigate(`/`);
    }
    }
  };

  // 무한 스크롤
  const fetchScroll = async () => {
    try {
      if (selectedCategories.length !== 0 || keyword) {
        // URL 만들기 - 카테고리 선택
        const categoryUrl = selectedCategories
          .map((item) => 'category=' + item)
          .join('&');

        const response = await axios.get(
          keyword
            ? `cultural-event/search?keyword=${keyword}&${categoryUrl}&offset=${pageNum}&sortType=${options[selectedSort].label}`
            : `cultural-event/list?${categoryUrl}&offset=${pageNum}&sortType=${options[selectedSort].label}`
        );

        // 데이터 저장
        setCount(response.data.totalElements);
        setData((prevData) => [...prevData, ...response.data.content]);
        setIsLast(response.data.last);
        if (!response.data.last) {
          setPageNum((pageNum) => pageNum + 1);
        }
      } else {
        setCount(0);
      }
    } catch (e) {
      console.log(e);
      if(e.response.data.code === "LOGIN_FAIL") {
        alert('로그인 만료! 다시 로그인 해주세요.');
        navigate(`/`);
    }
    }
  };

  // 카테고리 바뀔 때 마다 리렌더링
  useEffect(() => {
    window.scrollTo(0, 0);
    setData([]);
    setPageNum(0);
    fetchData();
  }, [selectedCategories, selectedSort, keyword]);

  return (
    <>
      <S.SearchWrapper>
        {/* 검색창 */}
        <SearchBox keyword={keyword} width="300px" />

        {/* 헤더 */}
        <S.SearchHeader>
          <S.SearchHeaderTitle>검색 결과</S.SearchHeaderTitle>
          <S.SearchHeaderResultCnt>총 {count}개</S.SearchHeaderResultCnt>
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
        {isLoading ? (
          <S.SyncLoaderWrapper>
            <SyncLoader color="#018C0D" />
          </S.SyncLoaderWrapper>
        ) : count === 0 ? (
          <div>
            <NoResult />
          </div>
        ) : (
          <div>
            <EventCard data={data} />
          </div>
        )}
      </S.SearchWrapper>
      <div ref={ref}></div>
    </>
  );
}

export default Search;
