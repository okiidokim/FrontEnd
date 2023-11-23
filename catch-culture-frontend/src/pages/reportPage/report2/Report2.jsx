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
