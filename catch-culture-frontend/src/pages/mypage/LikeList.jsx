import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Backitem from '../../components/Backitem';
import CategorySelector from '../../components/categorySelector/CategorySelector';
import EventCard from '../../components/eventCard/EventCard';
import NoLikes from '../../components/search/noResult/NoLikes';
import axios from '../../api/axios';
import './BookmarkList.css';
import { TbAlertCircleFilled } from 'react-icons/tb';

function Likes() {
  const { state } = useLocation();
  const [cnt, setCnt] = useState(0);
  const category = state && state.category;
  const initialCategories = category ? category : [];
  const [selectedCategories, setSelectedCategories] =
    useState(initialCategories);

  const [data, setData] = useState([]);
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    fetchData();
  }, [selectedCategories]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const categoryUrl = selectedCategories
        .map((item) => 'category=' + item)
        .join('&');

      const response = await axios.get(
        `/user/cultural-event?${categoryUrl}&offset=0&classification=LIKE`
      );

      setData(response.data.content);
      setCnt(response.data.totalElements);
      setDataList(dataList.concat(res.data.content));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="listall">
      <Backitem />
      <div className="wrap">
        <div className="textrow">
          <div className="liketext">좋아요 목록</div>
          <div className="bookmarkCnt">총 {cnt}개</div>
        </div>
        <div className="cateSel">
          <CategorySelector
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />
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
              <div className="nomore">
                <hr />
                <div className="nomorewicon">
                  <TbAlertCircleFilled />
                  결과 없음
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Likes;
