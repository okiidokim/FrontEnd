import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
import Backitem from '../../../components/Backitem';

// 아이콘
import ReportPaginationIcon from '../../../assets/images/reportPage/report3.png';

// 컴포넌트
import ReportHeader from '../../../components/reportPage/reportHeader/ReportHeader';

function Report3() {
  return (
    <>
      <S.ReportWrapper>
        {/* 헤더 */}
        <ReportHeader ReportPaginationIcon={ReportPaginationIcon} />

        <S.ReportContent>
          <Link to="/">
            <S.ReportButton>다음</S.ReportButton>
          </Link>
        </S.ReportContent>
      </S.ReportWrapper>
    </>
  );
}

export default Report3;
