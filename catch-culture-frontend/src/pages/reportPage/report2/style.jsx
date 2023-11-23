import { styled } from 'styled-components';
import { Swiper } from 'swiper/react';

export const ReportWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReportHeader = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const ReportHeaderTitle = styled.div`
  display: flex;
  margin-left: 10px;

  color: #000;
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
`;

export const ReportHeaderSlide = styled.div`
  display: flex;
`;

export const ReportContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ReportLogo = styled.img`
  display: flex;
  width: 300px;
  margin-top: 50px;
`;

export const ReportWelcome = styled.div`
  margin-top: 30px;
  display: flex;
  color: #018c0d;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
`;

export const ReportNotice = styled.div`
  margin-top: 5px;
  display: flex;
  color: #000;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
`;

export const ReportRedNotice = styled.div`
  margin-top: 30px;
  width: 296px;
  color: #f00;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
`;

// 제보 공지 타이틀
export const ReportTitle = styled.div`
  margin-top: 30px;
  width: 298px;
  color: #018c0d;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
`;

// 제보 공지 넘버링 내용
export const ReportNumber = styled.div`
  margin-top: 5px;
  width: 298px;
  color: #000;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
`;

// 제보 버튼
export const ReportButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 38px;
  border-radius: 8px;
  border: 1px solid #018c0d;
  background: #018c0d;

  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  margin-top: 70px;
  cursor: pointer;
`;

export const MySwiper = styled(Swiper)`
  width: 336px;
  height: auto;
  padding-bottom: 30px;

  // Pagination 버튼의 비활성 상태 스타일
  .swiper-pagination-bullet {
    width: 8x;
    height: 8px;
  }

  // Pagination 버튼의 활성 상태 스타일
  .swiper-pagination-bullet-active {
    background-color: #018c0d;
    width: 8x;
    height: 8px;
  }
`;
