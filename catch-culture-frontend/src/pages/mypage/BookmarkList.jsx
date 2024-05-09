import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Backitem from '../../components/Backitem';
import './BookmarkList.css';
import CategorySelector from '../../components/categorySelector/CategorySelector';
import EventCard from '../../components/eventCard/EventCard';
import NoBookmarks from '../../components/search/noResult/NoBookmarks';
import axios from '../../api/axios';

function Bookmarks() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const category = state?.category;
  const initialCategories = category || [];
  const [selectedCategories, setSelectedCategories] =
    useState(initialCategories);

  const [data, setData] = useState([]);
  const [cnt, setCnt] = useState(0);
  const offsetnum = 0;

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
        `/user/cultural-event?${categoryUrl}&offset=${offsetnum}&classification=STAR`
      );

      setData(response.data.content);
      setCnt(response.data.numberOfElements);
    } catch (e) {
      console.log(e);
      if (e.response.data.code === 'LOGIN_FAIL') {
        alert('로그인 만료! 다시 로그인 해주세요.');
        navigate(`/`);
      }
    }
  };

  return (
    <div className="listall">
      <Backitem />
      <div className="wrap">
        <div className="textrow">
          <div className="liketext"> 북마크 목록 </div>
          <div className="bookmarkCnt"> 총 {cnt}개 </div>
        </div>
        <div className="cateSel">
          <CategorySelector
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />
        </div>
        <div className="eventlist">
          {cnt === 0 ? (
            <div className="nors">
              <NoBookmarks />
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
