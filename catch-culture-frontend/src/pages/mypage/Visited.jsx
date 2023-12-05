import React, { useState, useEffect } from 'react';
import Backitem from '../../components/Backitem';
import { useLocation } from 'react-router-dom';
import './BookmarkList.css';
import CategorySelector from '../../components/categorySelector/CategorySelector';
import EventCard from '../../components/eventCard/EventCard';
import NoVisits from '../../components/search/noResult/NoVisits';
import axios from '../../api/axios';

function Visited() {
  const { state } = useLocation();
  const category = state && state.category;
  const [trueData, setTrueData] = useState([]);
  const [falseData, setFalseData] = useState([]);
  const [cnt, setCnt] = useState(0);
  const initialCategories = category ? category : [];
  const [selectedCategories, setSelectedCategories] =
    useState(initialCategories);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    fetchData();
  }, [selectedCategories]);

  const fetchData = async () => {
    try {
      const categoryUrl = selectedCategories
        .map(item => 'category=' + item)
        .join('&');

      const response = await axios.get(
        `user/cultural-event?${categoryUrl}&offset=0&classification=VISIT_AUTH`
      );

      if (isLoaded) {
        response.data.content.forEach(event => {
          if (event.authenticated === false) {
            falseData.push(event);
          } else {
            trueData.push(event);
          }
        });
        setIsLoaded(false);
      }

      setCnt(response.data.totalElements);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="listall">
      <Backitem />
      <div className="wrap">
        <div className="textrow">
          <div className="liketext">방문 내역</div>
          <div className="bookmarkCnt">총 {cnt}개</div>
        </div>
        <div className="cateSel">
          <CategorySelector
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />
        </div>
        <div className="eventlist">
          {/* 승인 문화 행사 출력 */}
          <div className="authenticated-true">승인</div>
          {cnt === 0 ? (
            <div className="nors">
              <NoVisits />
            </div>
          ) : (
            <>
              <EventCard data={trueData} />
            </>
          )}

          <hr />

          {/* 미승인 문화 행사 출력 */}
          <div className="authenticated-false">미승인</div>
          {cnt === 0 ? (
            <div className="nors">
              <NoVisits />
            </div>
          ) : (
            <>
              <EventCard data={falseData} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Visited;
