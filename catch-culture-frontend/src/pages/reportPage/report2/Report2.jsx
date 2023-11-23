import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
import Backitem from '../../../components/Backitem';

// 아이콘
import ReportPaginationIcon from '../../../assets/images/reportPage/report2.png';

// 컴포넌트
import ReportHeader from '../../../components/reportPage/reportHeader/ReportHeader';

function Report2() {
  return (
    <>
      <S.ReportWrapper>
        {/* 헤더 */}
        <ReportHeader ReportPaginationIcon={ReportPaginationIcon} />

        <S.ReportContent>
          <S.ReportRequired>* 는 필수 입력 사항입니다</S.ReportRequired>
          <S.ReportForm>
            {/* 행사명 */}
            <S.ReportEvent>
              <S.ReportEventTitle>행사명 *</S.ReportEventTitle>
              <S.ReportEventInput
                type="text"
                placeholder="행사명을 입력해주세요."
              />
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
              <S.ReportEventTitle>SNS 주소</S.ReportEventTitle>
              <S.ReportEventInput
                type="text"
                placeholder="행사 담당 전화번호를 입력해주세요."
              />
            </S.ReportEvent>

            {/* 오시는 길 */}
            <S.ReportEvent>
              <S.ReportEventTitle>오시는 길</S.ReportEventTitle>
              <S.ReportEventInput
                type="text"
                placeholder="행사에 쉽게 올 수 있는 방법을 설명해주세요."
              />
            </S.ReportEvent>
          </S.ReportForm>
          {/* 제보하기 버튼 */}
          <Link to="/report3">
            <S.ReportButton>제보하기</S.ReportButton>
          </Link>
        </S.ReportContent>
      </S.ReportWrapper>
    </>
  );
}

export default Report2;
