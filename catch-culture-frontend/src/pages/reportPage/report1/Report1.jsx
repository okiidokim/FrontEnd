import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

// 아이콘
import LogoIcon from '../../../assets/images/logo.png';
import ReportPaginationIcon from '../../../assets/images/reportPage/report1.png';

// 컴포넌트
import ReportHeader from '../../../components/reportPage/reportHeader/ReportHeader';

function Report1() {
  return (
    <>
      <S.ReportWrapper>
        <ReportHeader ReportPaginationIcon={ReportPaginationIcon} />
        <S.ReportContent>
          <S.ReportLogo src={LogoIcon} alt="로고 이미지" />

          <S.ReportWelcome>고객님의 소중한 제보를 환영합니다!</S.ReportWelcome>
          <S.ReportNotice>
            제보하기 전, 아래의 이용규칙을 확인해주세요.
          </S.ReportNotice>
          <S.ReportRedNotice>
            * 허위 제보, 욕설, 비방 등 부적절한 제보는 등록이 거절되며 불이익이
            있을 수 있습니다.
          </S.ReportRedNotice>

          <S.ReportTitle>등록 거절 사유</S.ReportTitle>
          <S.ReportNumber>
            1. 이미 등록된 행사인 경우 <br />
            2. 이미 종료된 행사인 경우 <br />
            3. 허위 제보인 경우 <br />
            4. 제보 내용 중, 욕설이 포함된 경우 <br />
          </S.ReportNumber>

          <S.ReportTitle>제보 승낙 시, 혜택</S.ReportTitle>
          <S.ReportNumber>
            1. 100 포인트 지급 <br />
            2. 제보한 행사가 서비스에 등록 <br />
          </S.ReportNumber>

          <Link to="/report2">
            <S.ReportButton>다음</S.ReportButton>
          </Link>
        </S.ReportContent>
      </S.ReportWrapper>
    </>
  );
}

export default Report1;
