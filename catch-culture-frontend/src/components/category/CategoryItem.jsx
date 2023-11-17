import React from 'react';
import * as S from './style';

function CategoryItem(props) {
  return (
    <>
      <S.CategoryItem
        onClick={() => props.handlerClickCategory(props.category)}
        color={
          props.selectedCategories.includes(props.category) ? '#018C0D' : '#777'
        }
      >
        {props.name}
      </S.CategoryItem>
    </>
  );
}

export default CategoryItem;
