import React from 'react';
import * as S from './style';
import Backitem from '../../Backitem';
import PropTypes from 'prop-types';

function ReportHeader(props) {
  ReportHeader.propTypes = {
    ReportPaginationIcon: PropTypes.any,
  };
  return (
    <>
      <Backitem />
      <S.ReportHeader>
        <S.ReportHeaderTitle>제보하기</S.ReportHeaderTitle>

        <S.ReportHeaderPagination src={props.ReportPaginationIcon} />
      </S.ReportHeader>
    </>
  );
}

export default ReportHeader;
