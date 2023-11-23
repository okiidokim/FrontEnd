import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Backitem from '../../components/Backitem';
import CategorySelector from '../../components/categorySelector/CategorySelector';
import EventCard from '../../components/eventCard/EventCard';
import NoLikes from '../../components/search/noResult/NoLikes';
import axios from '../../api/axios';
import './BookmarkList.css';

function Likes() {
  const { state } = useLocation();
  const cnt = 0;
  const offsetnum = 0;
  const category = state && state.category;

  // state 값 유무에 따른 초기값 설정
  const initialCategories = category ? category : [];

  // 카테고리 상태
  const [selectedCategories, setSelectedCategories] =
    useState(initialCategories);

  // data
  const [data, setData] = useState([]);

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
    <div className="listall">
      <Backitem />
      <div className="wrap">
        <div className="cateSel">
          <CategorySelector
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />
        </div>
        <div className="textrow">
          <div className="liketext">좋아요 목록</div>
          <div className="bookmarkCnt">총 {cnt}개</div>
        </div>
        <div className="eventlist">
          {/* 문화 행사 출력 */}
          {cnt === 0 ? (
            <div className="nors">
              <NoLikes />
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

export default Likes;
