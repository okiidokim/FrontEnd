import React, { useState, useEffect } from 'react';
import * as S from './style';
import Backitem from '../../../components/Backitem';

// 아이콘
import LogoIcon from '../../../assets/images/logo.png';

function Report2() {
  return (
    <>
      <S.ReportWrapper>
        <S.ReportHeader>
          <Backitem />
          <S.ReportHeaderTitle>제보하기</S.ReportHeaderTitle>
          <S.ReportHeaderSlide></S.ReportHeaderSlide>
        </S.ReportHeader>

        <S.ReportContent>
          gd
          <S.ReportButton>다음</S.ReportButton>
        </S.ReportContent>
      </S.ReportWrapper>
    </>
  );
}

export default Report2;
