import React, { useState, useEffect } from 'react';
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
        <ReportHeader ReportPaginationIcon={ReportPaginationIcon}>
          <Backitem />
          <S.ReportHeaderTitle>제보하기</S.ReportHeaderTitle>
          <S.ReportHeaderSlide></S.ReportHeaderSlide>
        </ReportHeader>

        <S.ReportContent>
          gd
          <S.ReportButton>다음</S.ReportButton>
        </S.ReportContent>
      </S.ReportWrapper>
    </>
  );
}

export default Report2;
