import React, { useEffect, useState } from 'react';
import Backitem from '../../components/Backitem';
import NoReviews from '../../components/search/noResult/NoReviews';
import './Reviews.css';
import axios from '../../api/axios';
import { TbStar, TbStarFilled } from 'react-icons/tb';

function MyReviewCard({ data }) {
  const setRatingStar = (rating) => {
    if (rating === 1) {
      return (
        <>
          <TbStarFilled />
          <TbStar />
          <TbStar />
          <TbStar />
          <TbStar />
        </>
      );
    } else if (rating === 2) {
      return (
        <>
          <TbStarFilled />
          <TbStarFilled />

          <TbStar />
          <TbStar />
          <TbStar />
        </>
      );
    } else if (rating === 3) {
      <>
        <TbStarFilled />
        <TbStarFilled />
        <TbStarFilled />
        <TbStar />
        <TbStar />
      </>;
    } else if (rating === 4) {
      <>
        <TbStarFilled />
        <TbStarFilled />
        <TbStarFilled />
        <TbStarFilled />
        <TbStar />
      </>;
    } else {
      <>
        <TbStarFilled />
        <TbStarFilled />
        <TbStarFilled />
        <TbStarFilled />
        <TbStarFilled />
      </>;
    }
  };

  return (
    <>
      {data.map((e) => (
        <div className="reviewcardwrap" key={e.id}>
          <div className="createdAtfirstrow">{e.createdAt}</div>
          <div className="reviewcontentrow">
            <img className="reviewimg" src={e.reviewStoredFileUrl} />
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
  const [cnt, setCnt] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/user/my-reviews?page=0&size=5`);
      setCnt(res.data.totalElements);
      setData(res.data.content);
    };
    fetchData();
  }, []);

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
              <MyReviewCard data={data} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Reviews;
