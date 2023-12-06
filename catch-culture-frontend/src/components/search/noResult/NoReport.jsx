import React from 'react';
import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom/dist';

const NoResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;
const NoResultTitle = styled.div`
  display: flex;
  color: #000;
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  margin-top: 24px;
`;
const RepButton = styled.div`
  margin-top: 100px;
  width: 160px;
  height: 32px;
  border-radius: 16px;
  background-color: #d9d9d9;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  box-shadow: inset -2px -2px 2px 0 rgba(116, 125, 136, 0.2),
    -1px -1px 1px 0 rgba(255, 255, 255, 0.2), 1px 1px 1px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: #018c0d;
    color: white;
    font-weight: bold;
  }
`;
const RepbuttonText = styled.div`
  display: flex;
  position: relative;
  gap: 12px;
`;

// 아이콘
import { TbReportOff, TbArrowBigRightFilled } from 'react-icons/tb';

function NoReport() {
  return (
    <NoResultWrapper>
      <TbReportOff size="140" color="018c0d" />
      <NoResultTitle>제보한 내역이 없습니다.</NoResultTitle>
      <RepButton>
        <NavLink to="/report1">
          <RepbuttonText>
            제보하러 가기 <TbArrowBigRightFilled />
          </RepbuttonText>
        </NavLink>
      </RepButton>
    </NoResultWrapper>
  );
}

export default NoReport;
