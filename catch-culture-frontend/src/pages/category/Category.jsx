import React, { useState } from 'react';
import * as S from './style';

function Category() {
  return (
    <>
      <S.CategoryWrapper>
        <S.CategoryHeader>카테고리</S.CategoryHeader>

        <S.CategoryContentWrapper>
          <S.CategoryItem>팝업 스토어</S.CategoryItem>
          <S.CategoryItem>축제</S.CategoryItem>
          <S.CategoryItem>국악</S.CategoryItem>
          <S.CategoryItem>오케스트라 / 클래식</S.CategoryItem>
          <S.CategoryItem>독주 / 독창회</S.CategoryItem>
          <S.CategoryItem>무용</S.CategoryItem>
          <S.CategoryItem>콘서트</S.CategoryItem>
          <S.CategoryItem>영화</S.CategoryItem>
          <S.CategoryItem>오페라 / 뮤지컬</S.CategoryItem>
          <S.CategoryItem>교육 / 체험</S.CategoryItem>
          <S.CategoryItem>전시 / 미술</S.CategoryItem>
        </S.CategoryContentWrapper>

        <S.CategorySubmitButtonWrapper>
          <S.CategorySubmitButton>결과 확인</S.CategorySubmitButton>
        </S.CategorySubmitButtonWrapper>
      </S.CategoryWrapper>
    </>
  );
}

export default Category;
