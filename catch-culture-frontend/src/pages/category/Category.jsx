import React, { useState } from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';
import CategoryItem from '../../components/category/CategoryItem';

function Category() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handlerClickCategory = selectedCategory => {
    const isCategorySelected = selectedCategories.includes(selectedCategory);

    isCategorySelected
      ? setSelectedCategories(
          selectedCategories.filter(category => category !== selectedCategory)
        )
      : setSelectedCategories([...selectedCategories, selectedCategory]);
  };

  return (
    <>
      <S.CategoryWrapper>
        <S.CategoryHeader>카테고리</S.CategoryHeader>

        <S.CategoryContentWrapper>
          <CategoryItem
            name="팝업 스토어"
            category="POPUP_STORE"
            handlerClickCategory={handlerClickCategory}
            selectedCategories={selectedCategories}
          />

          <CategoryItem
            name="축제"
            category="FESTIVAL"
            handlerClickCategory={handlerClickCategory}
            selectedCategories={selectedCategories}
          />

          <CategoryItem
            name="국악"
            category="TRADITIONAL_MUSIC"
            handlerClickCategory={handlerClickCategory}
            selectedCategories={selectedCategories}
          />

          <CategoryItem
            name="오케스트라 / 클래식"
            category="ORCHESTRA_CLASSIC"
            handlerClickCategory={handlerClickCategory}
            selectedCategories={selectedCategories}
          />

          <CategoryItem
            name="독주 / 독창회"
            category="RECITAL"
            handlerClickCategory={handlerClickCategory}
            selectedCategories={selectedCategories}
          />

          <CategoryItem
            name="무용"
            category="DANCE"
            handlerClickCategory={handlerClickCategory}
            selectedCategories={selectedCategories}
          />

          <CategoryItem
            name="콘서트"
            category="CONCERT"
            handlerClickCategory={handlerClickCategory}
            selectedCategories={selectedCategories}
          />

          <CategoryItem
            name="영화"
            category="MOVIE"
            handlerClickCategory={handlerClickCategory}
            selectedCategories={selectedCategories}
          />

          <CategoryItem
            name="연극"
            category="THEATER"
            handlerClickCategory={handlerClickCategory}
            selectedCategories={selectedCategories}
          />

          <CategoryItem
            name="오페라 / 뮤지컬"
            category="MUSICAL_OPERA"
            handlerClickCategory={handlerClickCategory}
            selectedCategories={selectedCategories}
          />

          <CategoryItem
            name="교육 / 체험"
            category="EDUCATION_EXPERIENCE"
            handlerClickCategory={handlerClickCategory}
            selectedCategories={selectedCategories}
          />

          <CategoryItem
            name="전시 / 미술"
            category="EXHIBITION_ART"
            handlerClickCategory={handlerClickCategory}
            selectedCategories={selectedCategories}
          />
        </S.CategoryContentWrapper>

        <S.CategorySubmitButtonWrapper>
          <Link to={'/search'} state={{ category: selectedCategories }}>
            <S.CategorySubmitButton
              color={selectedCategories.length === 0 ? '#a7a7a7' : '#018C0D'}
              disabled={selectedCategories.length === 0}
              cursor={selectedCategories.length === 0 ? '' : 'pointer'}
            >
              결과 확인
            </S.CategorySubmitButton>
          </Link>
        </S.CategorySubmitButtonWrapper>
      </S.CategoryWrapper>
    </>
  );
}

export default Category;
