import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import DaumPostcode from 'react-daum-postcode';

// 아이콘
import ReportPaginationIcon from '../../../assets/images/reportPage/report2.png';

// 컴포넌트
import ReportHeader from '../../../components/reportPage/reportHeader/ReportHeader';
import UploadBox from '../../../components/uploadImg/UploadBox';
import axios from '../../../api/axios';

function Report2() {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState(''); // 카테고리
  const [postalCode, setPostalCode] = useState(''); // 우편번호
  const [address, setAddress] = useState(''); // 도로명 주소
  const [eventSNS, setEventSNS] = useState(null);
  const [eventPhoneNumber, setEventPhoneNumber] = useState(null);
  const [eventWayToCome, setEventWayToCome] = useState(null);
  const [imgData, setImgData] = useState();

  // 드롭다운 선택 시 카테고리 변경
  const handleCategoryChange = event => {
    console.log(event.target.value);
    setSelectedCategory(event.target.value);
  };

  // 우편번호 찾기 모달창
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleComplete = data => {
    setPostalCode(data.zonecode);
    setAddress(data.address);
    handleModalClose();
  };

  function setValue(value, setValue) {
    if (value) {
      setValue(value);
    } else {
      setValue(null);
    }
  }

  const handleImgFile = file => {
    setImgData(file);
  };

  // 제출 버튼
  const handleSubmit = async event => {
    event.preventDefault();

    // 값 추출
    const category = document.querySelector('#category').value;
    const eventName = document.querySelector('#eventName').value; // 행사명

    // 상세주소
    const eventLocation = `${address} ${
      document.querySelector('#eventAddressDetail').value
    }`;

    const eventStartDate = document.querySelector('#eventStartDate').value; // 시작일
    const eventEndDate = document.querySelector('#eventEndDate').value; // 종료일
    const eventDescription = document.querySelector('#eventDescription').value; // 행사 설명
    const eventFee = document.querySelector('#eventFee').value; // 요금 정보
    const free = eventFee === '무료' ? true : false; // 요금 정보 bool로 전환

    // 선택적인 필드 값 확인 후 값 부여
    setValue(document.querySelector('#eventSNS').value, setEventSNS);
    setValue(
      document.querySelector('#eventPhoneNumber').value,
      setEventPhoneNumber
    );
    setValue(
      document.querySelector('#eventWayToCome').value,
      setEventWayToCome
    );

    let data = {
      category: category,
      eventName: eventName,
      eventLocation: eventLocation,
      startDate: eventStartDate,
      endDate: eventEndDate,
      description: eventDescription,
      isFree: free,
      snsAddress: eventSNS,
      phoneNumber: eventPhoneNumber,
      wayToCome: eventWayToCome,
    };

    console.log('무료인가 유료인가:', free);

    // Form 데이터 생성
    const requestBody = new FormData();

    requestBody.append('fileList', imgData);
    requestBody.append(
      'culturalEventReportDTO',
      new Blob([JSON.stringify(data)], {
        type: 'application/json',
      })
    );

    console.log('이걸 전달', data);

    try {
      const response = await axios({
        method: 'POST',
        url: `user/report`,
        mode: 'cors',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        data: requestBody,
      });

      if (response.status === 200) {
        navigate('/report3');
      }
    } catch (error) {
      alert('제보 실패 :(');
    }
  };

  return (
    <>
      {/* 헤더 */}
      <ReportHeader ReportPaginationIcon={ReportPaginationIcon} />
      <S.ReportWrapper>
        <S.ReportContent>
          <S.ReportRequired>* 는 필수 입력 사항입니다</S.ReportRequired>

          {/* 행사 폼 */}
          <S.ReportForm onSubmit={handleSubmit}>
            {/* 행사 카테고리 */}
            <S.ReportEvent>
              <S.ReportEventTitle>행사 카테고리 *</S.ReportEventTitle>
              <S.ReportCategoryDropBox
                id="category"
                value={selectedCategory}
                onChange={handleCategoryChange}
                required
              >
                <S.ReportCategoryDropBoxOption value="">
                  카테고리를 선택하세요
                </S.ReportCategoryDropBoxOption>
                <S.ReportCategoryDropBoxOption value="POPUP_STORE">
                  팝업스토어
                </S.ReportCategoryDropBoxOption>
                <S.ReportCategoryDropBoxOption value="FESTIVAL">
                  축제
                </S.ReportCategoryDropBoxOption>
                <S.ReportCategoryDropBoxOption value="TRADITIONAL_MUSIC">
                  국악
                </S.ReportCategoryDropBoxOption>
                <S.ReportCategoryDropBoxOption value="ORCHESTRA_CLASSIC">
                  오케스트라/클래식
                </S.ReportCategoryDropBoxOption>
                <S.ReportCategoryDropBoxOption value="RECITAL">
                  독주/독창회
                </S.ReportCategoryDropBoxOption>
                <S.ReportCategoryDropBoxOption value="DANCE">
                  무용
                </S.ReportCategoryDropBoxOption>
                <S.ReportCategoryDropBoxOption value="CONCERT">
                  콘서트
                </S.ReportCategoryDropBoxOption>
                <S.ReportCategoryDropBoxOption value="MOVIE">
                  영화
                </S.ReportCategoryDropBoxOption>
                <S.ReportCategoryDropBoxOption value="THEATER">
                  연극
                </S.ReportCategoryDropBoxOption>
                <S.ReportCategoryDropBoxOption value="MUSICAL_OPERA">
                  뮤지컬/오페라
                </S.ReportCategoryDropBoxOption>
                <S.ReportCategoryDropBoxOption value="EDUCATION_EXPERIENCE">
                  교육/체험
                </S.ReportCategoryDropBoxOption>
                <S.ReportCategoryDropBoxOption value="EXHIBITION_ART">
                  전시/미술
                </S.ReportCategoryDropBoxOption>
                <S.ReportCategoryDropBoxOption value="ETC">
                  기타
                </S.ReportCategoryDropBoxOption>
              </S.ReportCategoryDropBox>
            </S.ReportEvent>

            {/* 행사명 */}
            <S.ReportEvent>
              <S.ReportEventTitle>행사명 *</S.ReportEventTitle>
              <S.ReportEventInput
                type="text"
                id="eventName"
                placeholder="행사명을 입력해주세요."
                required
              />
            </S.ReportEvent>

            {/* 행사 위치 */}
            <S.ReportEvent>
              <S.ReportEventTitle>행사 위치 *</S.ReportEventTitle>
              <S.ReportEventAddressTop>
                <S.ReportEventAddressZipCode
                  type="text"
                  value={postalCode}
                  placeholder="우편번호를 입력하세요."
                  required
                />
                <S.ReportEventAddressZipCodeButton onClick={handleModalOpen}>
                  우편번호 찾기
                </S.ReportEventAddressZipCodeButton>

                {isModalOpen && (
                  <>
                    <S.ReportEvnetAddressModalBackground
                      onClick={handleModalClose}
                    />

                    <S.ReportEvnetAddressModal>
                      <DaumPostcode
                        onComplete={handleComplete}
                        autoClose
                        animation
                      />
                    </S.ReportEvnetAddressModal>
                  </>
                )}
              </S.ReportEventAddressTop>
              <S.ReportEventAddressMore
                type="text"
                value={address}
                placeholder="도로명 주소를 입력하세요."
                required
              />
              <S.ReportEventAddressMore
                type="text"
                id="eventAddressDetail"
                placeholder="상세 주소를 입력하세요."
                required
              />
            </S.ReportEvent>

            {/* 행사 기간 */}
            <S.ReportEvent>
              <S.ReportEventTitle>행사 기간 *</S.ReportEventTitle>
              <S.ReportEventDate>
                <S.ReportEventDateItem>
                  시작일
                  <S.ReportEventInputDate
                    type="date"
                    id="eventStartDate"
                    required
                  />
                </S.ReportEventDateItem>
                <S.ReportEventDateItem>
                  종료일
                  <S.ReportEventInputDate
                    type="date"
                    id="eventEndDate"
                    required
                  />
                </S.ReportEventDateItem>
              </S.ReportEventDate>
            </S.ReportEvent>

            {/* 행사 설명 */}
            <S.ReportEventTitle2>행사 설명 *</S.ReportEventTitle2>
            <S.ReportEventTextAreaWrap>
              <S.ReportEventTextArea
                id="eventDescription"
                placeholder="행사에 대해서 설명해주세요. (최소 30자 이상)"
                minLength={30}
                required
              />
            </S.ReportEventTextAreaWrap>

            {/* 요금 정보 */}
            <S.ReportEvent>
              <S.ReportEventTitle>요금 정보 *</S.ReportEventTitle>
              <S.ReportEventCost>
                <S.ReportEventInputRadioWrapper>
                  <S.ReportEventLabel>무료</S.ReportEventLabel>
                  <S.ReportEventInputRadio
                    type="radio"
                    id="eventFee"
                    name="options"
                    value="무료"
                    required
                  />
                </S.ReportEventInputRadioWrapper>

                <S.ReportEventInputRadioWrapper>
                  <S.ReportEventLabel>유료</S.ReportEventLabel>
                  <S.ReportEventInputRadio
                    type="radio"
                    id="eventFee"
                    name="options"
                    value="유료"
                  />
                </S.ReportEventInputRadioWrapper>
              </S.ReportEventCost>
            </S.ReportEvent>

            {/* SNS 주소 */}
            <S.ReportEvent>
              <S.ReportEventTitle>SNS 주소</S.ReportEventTitle>
              <S.ReportEventInput
                type="text"
                id="eventSNS"
                placeholder="행사 관련 SNS 주소를 입력해주세요."
              />
            </S.ReportEvent>

            {/* 전화번호 */}
            <S.ReportEvent>
              <S.ReportEventTitle>전화번호</S.ReportEventTitle>
              <S.ReportEventInput
                type="text"
                id="eventPhoneNumber"
                placeholder="행사 담당 전화번호를 입력해주세요."
              />
            </S.ReportEvent>

            {/* 행사 사진 */}
            <S.ReportEventTitle2>행사 사진</S.ReportEventTitle2>
            <S.ReportEventUploadBox>
              <UploadBox setFile={handleImgFile} />
            </S.ReportEventUploadBox>

            {/* 오시는 길 */}
            <S.ReportEvent>
              <S.ReportEventTitle>오시는 길</S.ReportEventTitle>
              <S.ReportEventInput
                type="text"
                id="eventWayToCome"
                placeholder="행사에 쉽게 올 수 있는 방법을 설명해주세요."
              />
            </S.ReportEvent>

            {/* 제보하기 버튼 */}
            <S.ReportButton type="submit">제보하기</S.ReportButton>
          </S.ReportForm>
        </S.ReportContent>
      </S.ReportWrapper>
    </>
  );
}

export default Report2;
