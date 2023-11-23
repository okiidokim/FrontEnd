import React from 'react';
import * as S from './style';

import Backitem from '../../Backitem';

function ReportHeader(props) {
  return (
    <>
      <S.ReportHeader>
        <S.ReportHeaderLeft>
          <Backitem />
          <S.ReportHeaderTitle>제보하기</S.ReportHeaderTitle>
        </S.ReportHeaderLeft>
        <S.ReportHeaderPagination src={props.ReportPaginationIcon} />
      </S.ReportHeader>
    </>
  );
}

export default ReportHeader;
