import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Backitem from '../../components/Backitem';
import './BookmarkList.css';
import CategorySelector from '../../components/categorySelector/CategorySelector';
import EventCard from '../../components/eventCard/EventCard';
import NoBookmarks from '../../components/search/noResult/NoBookmarks';
import axios from '../../api/axios';

function Bookmarks() {
  const { state } = useLocation();
  const category = state && state.category;
  const initialCategories = category ? category : [];
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
          <div className="liketext"> 북마크 목록 </div>
          <div className="bookmarkCnt"> 총 {cnt}개 </div>
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
