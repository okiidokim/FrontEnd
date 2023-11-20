import React from 'react';
import Backitem from '../../components/Backitem';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import './Reviews.css';

function Reviews() {
  const cnt = 5;
  return (
    <div>
      <Backitem />
      <div className="reviewrow">
        <div className="reviewtext">리뷰 목록</div>
        <div className="reviewCnt">총 {cnt} 개</div>
      </div>
      <div className="reviewcard">
        <ReviewCard />
      </div>
    </div>
  );
}

export default Reviews;
