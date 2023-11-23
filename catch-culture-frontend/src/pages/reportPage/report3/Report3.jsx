import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
import Backitem from '../../../components/Backitem';

// 아이콘
import ReportPaginationIcon from '../../../assets/images/reportPage/report3.png';
import ReportSuccessIcon from '../../../assets/images/reportPage/reportSuccess.png';

// 컴포넌트
import ReportHeader from '../../../components/reportPage/reportHeader/ReportHeader';

function Report3() {
  return (
    <>
      <S.ReportWrapper>
        {/* 헤더 */}
        <ReportHeader ReportPaginationIcon={ReportPaginationIcon} />

        {/* 내용 */}
        <S.ReportContent>
          <S.ReportSuccessIcon src={ReportSuccessIcon} alt="제보 완료 이미지" />
          <S.ReportSuccessTitle>제보 완료</S.ReportSuccessTitle>
          <S.ReportSuccessContent>
            제보하신 행사의 등록 여부는 3~7일 안에 <br />
            마이페이지에서 확인 가능합니다 :)
          </S.ReportSuccessContent>
          <Link to="/">
            <S.ReportButton>완료</S.ReportButton>
          </Link>
        </S.ReportContent>
      </S.ReportWrapper>
    </>
  );
}

export default Report3;
