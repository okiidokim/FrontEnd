import React, { useState } from 'react';
import * as S from './style';

function CategorySelector() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handlerClickCategory = selectedCategory => {
    const IsSelected = selectedCategories.includes(selectedCategory);

    IsSelected
      ? setSelectedCategories(
          selectedCategories.filter(category => category !== selectedCategory)
        )
      : setSelectedCategories([...selectedCategories, selectedCategory]);
  };

  return (
    <>
      <S.CategorySelector>
        <S.CategorySelectorItem
          onClick={() => handlerClickCategory('전체')}
          color={selectedCategories.includes('전체') ? '#fff' : '#018C0D'}
          bgcolor={selectedCategories.includes('전체') ? '#018C0D' : '#fff'}
          shadow={
            selectedCategories.includes('전체')
              ? '0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset'
              : 'none'
          }
        >
          전체
        </S.CategorySelectorItem>
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
