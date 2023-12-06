import React, { useEffect, useState } from 'react';
import Backitem from '../../components/Backitem';
import NoReviews from '../../components/search/noResult/NoReviews';
import './Reviews.css';
import axios from '../../api/axios';
import { TbStarFilled, TbAlertCircleFilled } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

function MyReviewCard({ data }) {
  const setRatingStar = (rating) => {
    if (rating === 1) {
      return (
        <>
          <TbStarFilled color="#fff000" />
          <TbStarFilled color="#d9d9d9" />
          <TbStarFilled color="#d9d9d9" />
          <TbStarFilled color="#d9d9d9" />
          <TbStarFilled color="#d9d9d9" />
        </>
      );
    } else if (rating === 2) {
      return (
        <>
          <TbStarFilled color="#fff000" />
          <TbStarFilled color="#fff000" />
          <TbStarFilled color="#d9d9d9" />
          <TbStarFilled color="#d9d9d9" />
          <TbStarFilled color="#d9d9d9" />
        </>
      );
    } else if (rating === 3) {
      return (
        <>
          <TbStarFilled color="#fff000" />
          <TbStarFilled color="#fff000" />
          <TbStarFilled color="#fff000" />
          <TbStarFilled color="#d9d9d9" />
          <TbStarFilled color="#d9d9d9" />
        </>
      );
    } else if (rating === 4) {
      return (
        <>
          <TbStarFilled color="#fff000" />
          <TbStarFilled color="#fff000" />
          <TbStarFilled color="#fff000" />
          <TbStarFilled color="#fff000" />
          <TbStarFilled color="#d9d9d9" />
        </>
      );
    } else if (rating === 5) {
      return (
        <>
          <TbStarFilled color="#fff000" />
          <TbStarFilled color="#fff000" />
          <TbStarFilled color="#fff000" />
          <TbStarFilled color="#fff000" />
          <TbStarFilled color="#fff000" />
        </>
      );
    }
  };

  return (
    <>
      {data.map((e) => (
        <div className="reviewcardwrap" key={e.id}>
          <div className="createdAtfirstrow">{e.createdAt}</div>
          <div className="reviewcontentrow">
            {e.eventStoredFileUrl === null ? (
              <></>
            ) : (
              <img className="reviewimg" src={e.reviewStoredFileUrl} />
            )}
            <div className="reviewdescrip">{e.description}</div>
          </div>
          <div className="myratingstar">{setRatingStar(e.rating)}</div>
          <div className="eventinfoinR">
            <img className="eventimginR" src={e.eventStoredFileUrl} />
            <div className="eventnameinR">
              <p className="nametext">행사명</p>
              {e.culturalEventTitle}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

function Reviews() {
  const navigate = useNavigate();
  const [cnt, setCnt] = useState(0);
  const [data, setData] = useState([]);
  const [pageNum, setPageNum] = useState(0);
  const [dataList, setDataList] = useState([]);

  const onScroll = () => {
    if (
      window.scrollY + window.innerHeight >
      document.documentElement.scrollHeight - 40
    ) {
      setPageNum(pageNum + 1);
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/user/my-reviews?page=${pageNum}&size=5`);
        setCnt(res.data.totalElements);
        setData(res.data.content);
        setDataList(dataList.concat(res.data.content));
      } catch (e) {
        console.log(e);
        if(e.response.data.code === "LOGIN_FAIL") {
          alert('로그인 만료! 다시 로그인 해주세요.');
          navigate(`/`);
      }
      }
    };
    fetchData();
  }, [pageNum]);

  return (
    <div className="reviewall">
      <Backitem />
      <div className="reviewwrap">
        <div className="reviewrow">
          <div className="reviewtext">리뷰 목록</div>
          <div className="reviewCnt">총 {cnt} 개</div>
        </div>
        <div className="reviewcard">
          {cnt === 0 ? (
            <div className="nors">
              <NoReviews />
            </div>
          ) : (
            <div>
              <MyReviewCard data={dataList} />
              <div className="nomore">
                <hr />
                <div className="nomorewicon">
                  <TbAlertCircleFilled />
                  결과 없음
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Reviews;
