import React from 'react';
import * as S from './style';
import Backitem from '../../Backitem';

function ReportHeader({ReportPaginationIcon}) {

  console.log(ReportPaginationIcon);
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

ReportHeader.propTypes = {
  ReportPaginationIcon: PropTypes.string.isRequired 
};

export default ReportHeader;
