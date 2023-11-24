import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Backitem from '../../components/Backitem';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import NoReviews from '../../components/search/noResult/NoReviews';
import './Reviews.css';

function Reviews() {
  const cnt = 9;
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
            <div>
              {Array(cnt).fill(
                <ReviewCard
                  data={{
                    id: 1,
                    nickname: 'string',
                    description: 'string',
                    storedFileUrl: [
                      'https://storage.googleapis.com/elegant-bucket/KakaoTalk_20231109_140116686_01.jpg',
                    ],
                    rating: 3,
                    createdAt: '2023-11-22',
                    eventImgUrl: null,
                    eventTitle: null,
                    isMyReview: false,
                  }}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Reviews;
