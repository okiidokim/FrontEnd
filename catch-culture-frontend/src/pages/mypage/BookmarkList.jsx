import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Backitem from '../../components/Backitem';
import './BookmarkList.css';
import CategorySelector from '../../components/categorySelector/CategorySelector';
import EventCard from '../../components/eventCard/EventCard';
import NoResult from '../../components/search/noResult/NoResult';
import axios from '../../api/axios';

function Bookmarks() {
  const { state } = useLocation();
  const category = state && state.category;

  // state 값 유무에 따른 초기값 설정
  const initialCategories = category ? category : [];

  // 카테고리 상태
  const [selectedCategories, setSelectedCategories] =
    useState(initialCategories);

  // data
  const [data, setData] = useState([]);

  // 임시 cnt
  const cnt = 5;
  const offsetnum = 0;

  // 카테고리 바뀔 때 마다 리렌더링
  useEffect(() => {
    fetchData();
  }, [selectedCategories]);

  // 초기
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // URL 만들기 - 카테고리 선택
      const categoryUrl = selectedCategories
        .map((item) => 'category=' + item)
        .join('&');

      const response = await axios.get(
        `cultural-event?${categoryUrl}&offset=${offsetnum}}`
      );

      // 데이터 저장
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="tota">
      <Backitem />
      <div className="wrap">
        <div className="cateSel">
          <CategorySelector
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />
        </div>
        <div className="textrow">
          <div className="liketext"> 북마크 목록 </div>
          <div className="bookmarkCnt"> 총 {cnt}개 </div>
        </div>
        <div className="eventlist">
          {cnt === 0 ? (
            <div className="nors">
              <NoResult />
            </div>
          ) : (
            <>
              <EventCard data={data} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Bookmarks;
