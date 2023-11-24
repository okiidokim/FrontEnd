import React from 'react';
import Backitem from '../../components/Backitem';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import NoReviews from '../../components/search/noResult/NoReviews';
import './Reviews.css';

function Reviews() {
  const cnt = 0;
  return (
    <div className="reviewall">
      <Backitem />
      <div className="wrap">
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
            <>
              <ReviewCard />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Reviews;
