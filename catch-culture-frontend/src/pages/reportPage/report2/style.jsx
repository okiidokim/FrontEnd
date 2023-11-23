import { styled } from 'styled-components';

export const ReportWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReportContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;
`;

// 필수 사항 공지
export const ReportRequired = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  color: #f00;
  text-align: center;
  font-size: 10px;
  font-weight: 300;
  line-height: normal;
`;

// 폼 데이터
export const ReportForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

// 입력 항목
export const ReportEvent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

export const ReportEventTitle = styled.div`
  display: flex;
  color: #000;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;
  margin-bottom: 16px;
`;

export const ReportEventInput = styled.input`
  display: flex;
  width: 284px;
  text-decoration: none;
  border: none;
  border-bottom: 1px solid #777;
  color: #018c0d;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.3px;
  padding: 8px;

  /* &::placeholder {
    color: rgba(1, 140, 13, 0.56);
  } */

  &:focus {
    border: none;
    outline: 2px solid #71be77;
    border-radius: 3px;
  }
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
