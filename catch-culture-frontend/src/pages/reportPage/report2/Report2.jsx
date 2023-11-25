import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import DaumPostcode from 'react-daum-postcode';

// 아이콘
import ReportPaginationIcon from '../../../assets/images/reportPage/report2.png';

// 컴포넌트
import ReportHeader from '../../../components/reportPage/reportHeader/ReportHeader';
import UploadBox from '../../../components/uploadImg/UploadBox';

function Report2() {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postalCode, setPostalCode] = useState('');
  const [address, setAddress] = useState('');

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

  const handleSubmit = event => {
    event.preventDefault();
    navigate('/report3');
  };

  useEffect(() => {}, []);

  return (
    <>
      {/* 헤더 */}
      <ReportHeader ReportPaginationIcon={ReportPaginationIcon} />
      <S.ReportWrapper>
        <S.ReportContent>
          <S.ReportRequired>* 는 필수 입력 사항입니다</S.ReportRequired>

          {/* 행사 폼 */}
          <S.ReportForm onSubmit={handleSubmit}>
            {/* 행사명 */}
            <S.ReportEvent>
              <S.ReportEventTitle>행사명 *</S.ReportEventTitle>
              <S.ReportEventInput
                type="text"
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
                  <S.ReportEventInputDate type="date" required />
                </S.ReportEventDateItem>
                <S.ReportEventDateItem>
                  종료일
                  <S.ReportEventInputDate type="date" required />
                </S.ReportEventDateItem>
              </S.ReportEventDate>
            </S.ReportEvent>

            {/* 행사 설명 */}
            <S.ReportEventTitle2>행사 설명 *</S.ReportEventTitle2>
            <S.ReportEventTextAreaWrap>
              <S.ReportEventTextArea
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
                    id="무료"
                    name="options"
                    value="무료"
                    required
                  />
                </S.ReportEventInputRadioWrapper>

                <S.ReportEventInputRadioWrapper>
                  <S.ReportEventLabel>유료</S.ReportEventLabel>
                  <S.ReportEventInputRadio
                    type="radio"
                    id="유료"
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
                placeholder="행사 관련 SNS 주소를 입력해주세요."
              />
            </S.ReportEvent>

            {/* 전화번호 */}
            <S.ReportEvent>
              <S.ReportEventTitle>전화번호</S.ReportEventTitle>
              <S.ReportEventInput
                type="text"
                placeholder="행사 담당 전화번호를 입력해주세요."
              />
            </S.ReportEvent>

            {/* 행사 사진 */}
            <S.ReportEventTitle2>행사 사진</S.ReportEventTitle2>
            <S.ReportEventUploadBox>
              <UploadBox />
            </S.ReportEventUploadBox>

            {/* 오시는 길 */}
            <S.ReportEvent>
              <S.ReportEventTitle>오시는 길</S.ReportEventTitle>
              <S.ReportEventInput
                type="text"
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
