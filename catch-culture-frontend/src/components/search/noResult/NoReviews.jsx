import React from 'react';
import { styled } from 'styled-components';
import { TbMessageOff } from 'react-icons/tb';

const NoResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const NoResultIcon = styled.img`
  width: 96px;
  height: 96px;
`;

const NoResultTitle = styled.div`
  display: flex;
  color: #000;
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  margin-top: 24px;
`;

function NoReviews() {
  return (
    <>
      <NoResultWrapper>
        <TbMessageOff size="140" color="018c0d" />
        <NoResultTitle>리뷰 작성 내역이 없습니다.</NoResultTitle>
      </NoResultWrapper>
    </>
  );
}

export default NoReviews;
