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
  margin-bottom: 70px;
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

export const ReportEventTitle2 = styled.div`
  display: flex;
  color: #000;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;
  margin-bottom: 16px;
  margin-top: 24px;
`;

export const ReportEventInput = styled.input`
  display: flex;
  width: 300px;
  text-decoration: none;
  border: none;
  border-bottom: 1px solid #777;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.3px;
  padding: 10px 8px;
  font-family: NotoSansKR_Regular;

  /* &::placeholder {
    color: rgba(1, 140, 13, 0.56);
  } */

  &:focus {
    border: none;
    outline: 2px solid #71be77;
    border-radius: 3px;
    color: #018c0d;
  }
`;

export const ReportEventInputRadioWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const ReportEventInputRadio = styled.input`
  accent-color: #018c0d;
  cursor: pointer;
  margin-left: 8px;

  &[type='radio'] {
    border: max(2px, 0.1em) solid gray;
    border-radius: 50%;
    width: 17px;
    height: 17px;
  }
`;
export const ReportEventCost = styled.div`
  display: flex;
  margin-left: 12px;
  gap: 40px;
`;

export const ReportEventUploadBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const ReportEventLabel = styled.label`
  color: #000;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;
`;

// 제보 버튼
export const ReportButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 317px;
  height: 38px;
  border-radius: 8px;
  border: 1px solid #018c0d;
  background: #018c0d;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;

// TextArea
export const ReportEventTextArea = styled.textarea`
  display: flex;
  width: 268px;
  height: 168px;
  padding: 16px;
  border: 1px solid black;
  border-radius: 5px;
  align-items: center;
  resize: none;
  font-family: NotoSansKR_Regular;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.3px;

  &:focus {
    border: none;
    outline: 2px solid #71be77;
    border-radius: 3px;
    color: #018c0d;
  }
`;

export const ReportEventTextAreaWrap = styled.div`
  display: flex;
  justify-content: center;
`;

// 행사 주소 입력
export const ReportEventAddressTop = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 20px;
`;

export const ReportEventAddressZipCode = styled.input`
  display: flex;
  width: 130px;
  text-decoration: none;
  border: none;
  border-bottom: 1px solid #777;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.3px;
  padding: 10px 8px;
  font-family: NotoSansKR_Regular;

  /* &::placeholder {
    color: rgba(1, 140, 13, 0.56);
  } */

  &:focus {
    border: none;
    outline: 2px solid #71be77;
    border-radius: 3px;
    color: #018c0d;
  }
`;

export const ReportEventAddressZipCodeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 98px;
  height: 29px;
  background-color: #fff;
  border: 1px solid black;
  border-radius: 5px;
  color: #000;
  font-family: NotoSansKR_Regular;
  font-size: 12px;
  font-weight: 400;
  padding-bottom: 3px;
  letter-spacing: -0.3px;
  cursor: pointer;
`;

export const ReportEventAddressMore = styled.input`
  display: flex;
  width: 300px;
  text-decoration: none;
  border: none;
  border-bottom: 1px solid #777;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.3px;
  padding: 10px 8px;
  font-family: NotoSansKR_Regular;

  &:focus {
    border: none;
    outline: 2px solid #71be77;
    border-radius: 3px;
    color: #018c0d;
  }

  margin-top: 20px;
`;

// 행사 기간
export const ReportEventDate = styled.div`
  display: flex;
  gap: 15px;
`;

export const ReportEventDateItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ReportEventInputDate = styled.input`
  display: flex;
  width: 135px;
  text-decoration: none;
  border: none;
  border: 1px solid #000;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.3px;
  padding: 10px 8px;
  font-family: NotoSansKR_Regular;
  cursor: pointer;
  &:focus {
    border: none;
    outline: 2px solid #71be77;
    border-radius: 3px;
    color: #018c0d;
  }
`;
