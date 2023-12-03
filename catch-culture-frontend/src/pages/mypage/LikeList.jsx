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
  const [cnt, setCnt] = useState(0);
  const category = state && state.category;

  // state 값 유무에 따른 초기값 설정
  const initialCategories = category ? category : [];

  // 카테고리 상태
  const [selectedCategories, setSelectedCategories] =
    useState(initialCategories);

  // data
  const [data, setData] = useState([]);
  const [pagenum, setPageNum] = useState(0);
  const [dataList, setDataList] = useState([]);
  const [pagecnt, setPagecnt] = useState(0);
  const onScroll = () => {
    if (pagecnt === 8) {
      setPageNum(pagenum + 1);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    window.addEventListener('touchmove', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('touchmove', onScroll);
    };
  }, []);

  // 카테고리 바뀔 때 마다 리렌더링
  useEffect(() => {
    fetchData();
  }, [selectedCategories, pagenum]);

  // 초기
  useEffect(() => {
    fetchData();
  }, [pagenum]);

  const fetchData = async () => {
    try {
      // URL 만들기 - 카테고리 선택
      const categoryUrl = selectedCategories
        .map((item) => 'category=' + item)
        .join('&');

      const response = await axios.get(
        `/user/cultural-event?${categoryUrl}&offset=${pagenum}&classification=LIKE`
      );

      // 데이터 저장
      setData(response.data.content);
      setCnt(response.data.totalElements);
      setDataList(dataList.concat(res.data.content));
      setPagecnt(response.data.numberOfElements);
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
