import React from 'react';
import * as S from './style';

function CategorySelector() {
  return (
    <>
      <S.CategorySelector>
        <S.CategorySelectorItem>전체</S.CategorySelectorItem>
        <S.CategorySelectorItem>축제</S.CategorySelectorItem>
        <S.CategorySelectorItem>국악</S.CategorySelectorItem>
        <S.CategorySelectorItem>오케스트라 / 클래식</S.CategorySelectorItem>
        <S.CategorySelectorItem>독주 / 독창회</S.CategorySelectorItem>
        <S.CategorySelectorItem>무용</S.CategorySelectorItem>
        <S.CategorySelectorItem>콘서트</S.CategorySelectorItem>
        <S.CategorySelectorItem>영화</S.CategorySelectorItem>
        <S.CategorySelectorItem>연극</S.CategorySelectorItem>
        <S.CategorySelectorItem>오페라 / 뮤지컬</S.CategorySelectorItem>
        <S.CategorySelectorItem>교육 / 체험</S.CategorySelectorItem>
        <S.CategorySelectorItem>전시 / 미술</S.CategorySelectorItem>
      </S.CategorySelector>
    </>
  );
}

export default CategorySelector;
