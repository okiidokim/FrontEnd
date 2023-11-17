import React, { useState } from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';

function Category() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handlerClickCategory = selectedCategory => {
    const isCategorySelected = selectedCategories.includes(selectedCategory);

    isCategorySelected
      ? setSelectedCategories(
          selectedCategories.filter(category => category !== selectedCategory)
        )
      : setSelectedCategories([...selectedCategories, selectedCategory]);

    console.log(selectedCategories);
  };

  return (
    <>
      <S.CategoryWrapper>
        <S.CategoryHeader>카테고리</S.CategoryHeader>

        <S.CategoryContentWrapper>
          <S.CategoryItem
            onClick={() => handlerClickCategory('POPUP_STORE')}
            color={
              selectedCategories.includes('POPUP_STORE') ? '#018C0D' : '#777'
            }
          >
            팝업 스토어
          </S.CategoryItem>
          <S.CategoryItem onClick={() => handlerClickCategory('FESTIVAL')}>
            축제
          </S.CategoryItem>
          <S.CategoryItem
            onClick={() => handlerClickCategory('TRADITIONAL_MUSIC')}
          >
            국악
          </S.CategoryItem>
          <S.CategoryItem
            onClick={() => handlerClickCategory('ORCHESTRA_CLASSIC')}
          >
            오케스트라 / 클래식
          </S.CategoryItem>
          <S.CategoryItem onClick={() => handlerClickCategory('RECITAL')}>
            독주 / 독창회
          </S.CategoryItem>
          <S.CategoryItem onClick={() => handlerClickCategory('DANCE')}>
            무용
          </S.CategoryItem>
          <S.CategoryItem onClick={() => handlerClickCategory('CONCERT')}>
            콘서트
          </S.CategoryItem>
          <S.CategoryItem onClick={() => handlerClickCategory('MOVIE')}>
            영화
          </S.CategoryItem>
          <S.CategoryItem onClick={() => handlerClickCategory('THEATER')}>
            연극
          </S.CategoryItem>
          <S.CategoryItem onClick={() => handlerClickCategory('MUSICAL_OPERA')}>
            오페라 / 뮤지컬
          </S.CategoryItem>
          <S.CategoryItem
            onClick={() => handlerClickCategory('EDUCATION_EXPERIENCE')}
          >
            교육 / 체험
          </S.CategoryItem>
          <S.CategoryItem
            onClick={() => handlerClickCategory('EXHIBITION_ART')}
          >
            전시 / 미술
          </S.CategoryItem>
        </S.CategoryContentWrapper>

        <S.CategorySubmitButtonWrapper>
          <Link to={'/'}>
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
