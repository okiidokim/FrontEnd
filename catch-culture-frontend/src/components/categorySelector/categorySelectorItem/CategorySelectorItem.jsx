import React from 'react';
import * as S from './style';

function CategorySelectorItem(props) {
  return (
    <>
      <S.CategorySelectorItem
        onClick={() => props.handlerClickCategory(props.category)}
        color={
          props.selectedCategories.includes(props.category) ? '#fff' : '#018C0D'
        }
        bgcolor={
          props.selectedCategories.includes(props.category) ? '#018C0D' : '#fff'
        }
        shadow={
          props.selectedCategories.includes(props.category)
            ? '0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset'
            : 'none'
        }
      >
        {props.name}
      </S.CategorySelectorItem>
    </>
  );
}

export default CategorySelectorItem;
