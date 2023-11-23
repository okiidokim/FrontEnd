import { styled } from 'styled-components';

export const ReportWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReportContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 188px;
`;

export const ReportSuccessIcon = styled.img`
  display: flex;
  width: 96px;
`;

// 제보 완료 타이틀
export const ReportSuccessTitle = styled.div`
  display: flex;
  color: #000;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  line-height: normal;
  margin-top: 10px;
`;

// 제보 완료 내용
export const ReportSuccessContent = styled.div`
  color: #000;
  text-align: center;
  font-size: 12px;
  font-weight: 300;
  line-height: normal;
  margin-top: 6px;
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
  margin-top: 255px;
  bottom: 10px;
  cursor: pointer;
`;
