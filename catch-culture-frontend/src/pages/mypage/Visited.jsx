import React, { useState, useEffect } from 'react';
import Backitem from '../../components/Backitem';
import { useLocation, useNavigate } from 'react-router-dom';
import './BookmarkList.css';
import CategorySelector from '../../components/categorySelector/CategorySelector';
import EventCard from '../../components/eventCard/EventCard';
import NoVisits from '../../components/search/noResult/NoVisits';
import axios from '../../api/axios';

function Visited() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const category = state?.category;
  const [trueData, setTrueData] = useState([]);
  const [falseData, setFalseData] = useState([]);
  const [cnt, setCnt] = useState(0);
  const initialCategories = category || [];
  const [selectedCategories, setSelectedCategories] =
    useState(initialCategories);

  useEffect(() => {
    fetchData();
  }, [selectedCategories]);

  const fetchData = async () => {
    try {
      const categoryUrl = selectedCategories
        .map((item) => 'category=' + item)
        .join('&');

      const response = await axios.get(
        `user/cultural-event?${categoryUrl}&offset=0&classification=VISIT_AUTH`
      );
      setCnt(response.data.totalElements);

      resetData();
      console.log(response.data.content)
      response.data.content.forEach((e) => {
        if (e.authenticated === false) {
          console.log(e);
          falseData.push(e);
        } else {
          trueData.push(e);
        }
      });
    } catch (e) {
      if (e.response.data.code === 'LOGIN_FAIL') {
        alert('로그인 만료! 다시 로그인 해주세요.');
        navigate(`/`);
      }
    }
  };

  const resetData = () => {
    trueData.splice(0);
    falseData.splice(0);
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
            <div className="norsvisited">
              <NoVisits />
            </div>
          ) : (
            <div>
              <EventCard data={trueData} />
            </div>
          )}

          <hr />

          {/* 미승인 문화 행사 출력 */}
          <div className="authenticated-false">미승인</div>
          {cnt === 0 ? (
            <div className="norsvisited">
              <NoVisits />
            </div>
          ) : (
            <div>
              <EventCard data={falseData} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Visited;
