import React, { useState } from 'react';
import * as S from './style';
import CategorySelectorItem from './categorySelectorItem/CategorySelectorItem';

function CategorySelector(props) {
  console.log(props.selectedCategories);
  const handlerClickCategory = selectedCategory => {
    const IsSelected = props.selectedCategories.includes(selectedCategory);

    IsSelected
      ? props.setSelectedCategories(
          props.selectedCategories.filter(
            category => category !== selectedCategory
          )
        )
      : props.setSelectedCategories([
          ...props.selectedCategories,
          selectedCategory,
        ]);
  };

  return (
    <>
      <S.CategorySelector>
        <CategorySelectorItem
          name="전체"
          category="ALL"
          handlerClickCategory={handlerClickCategory}
          selectedCategories={props.selectedCategories}
        />

        <CategorySelectorItem
          name="팝업 스토어"
          category="POPUP_STORE"
          handlerClickCategory={handlerClickCategory}
          selectedCategories={props.selectedCategories}
        />

        <CategorySelectorItem
          name="축제"
          category="FESTIVAL"
          handlerClickCategory={handlerClickCategory}
          selectedCategories={props.selectedCategories}
        />

        <CategorySelectorItem
          name="국악"
          category="TRADITIONAL_MUSIC"
          handlerClickCategory={handlerClickCategory}
          selectedCategories={props.selectedCategories}
        />

        <CategorySelectorItem
          name="오케스트라 / 클래식"
          category="ORCHESTRA_CLASSIC"
          handlerClickCategory={handlerClickCategory}
          selectedCategories={props.selectedCategories}
        />

        <CategorySelectorItem
          name="독주 / 독창회"
          category="RECITAL"
          handlerClickCategory={handlerClickCategory}
          selectedCategories={props.selectedCategories}
        />

        <CategorySelectorItem
          name="무용"
          category="DANCE"
          handlerClickCategory={handlerClickCategory}
          selectedCategories={props.selectedCategories}
        />

        <CategorySelectorItem
          name="콘서트"
          category="CONCERT"
          handlerClickCategory={handlerClickCategory}
          selectedCategories={props.selectedCategories}
        />

        <CategorySelectorItem
          name="영화"
          category="MOVIE"
          handlerClickCategory={handlerClickCategory}
          selectedCategories={props.selectedCategories}
        />

        <CategorySelectorItem
          name="연극"
          category="THEATER"
          handlerClickCategory={handlerClickCategory}
          selectedCategories={props.selectedCategories}
        />

        <CategorySelectorItem
          name="오페라 / 뮤지컬"
          category="MUSICAL_OPERA"
          handlerClickCategory={handlerClickCategory}
          selectedCategories={props.selectedCategories}
        />

        <CategorySelectorItem
          name="교육 / 체험"
          category="EDUCATION_EXPERIENCE"
          handlerClickCategory={handlerClickCategory}
          selectedCategories={props.selectedCategories}
        />

        <CategorySelectorItem
          name="전시 / 미술"
          category="EXHIBITION_ART"
          handlerClickCategory={handlerClickCategory}
          selectedCategories={props.selectedCategories}
        />
      </S.CategorySelector>
    </>
  );
}

export default CategorySelector;
