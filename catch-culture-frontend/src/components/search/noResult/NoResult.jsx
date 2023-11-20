import React, { useState } from 'react';
import * as S from './style';

// 아이콘
import WarningIcon from '../../../assets/images/search/warning.png';

function NoResult() {
  return (
    <>
      <S.NoResultWrapper>
        <S.NoResultIcon src={WarningIcon} alt="경고 이미지" />
        <S.NoResultTitle>검색 결과가 없어요</S.NoResultTitle>
        <S.NoResultContent>다른 키워드로 검색해보세요</S.NoResultContent>
      </S.NoResultWrapper>
    </>
  );
}

export default NoResult;
