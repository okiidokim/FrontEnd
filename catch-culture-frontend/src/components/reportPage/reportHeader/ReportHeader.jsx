import React from 'react';
import * as S from './style';
import Backitem from '../../Backitem';
import PropTypes from 'prop-types';

function ReportHeader(ReportPaginationIcon) {
  return (
    <>
      <Backitem />
      <S.ReportHeader>
        <S.ReportHeaderTitle>제보하기</S.ReportHeaderTitle>

        <S.ReportHeaderPagination src={ReportPaginationIcon} />
      </S.ReportHeader>
    </>
  );
}

export default ReportHeader;
