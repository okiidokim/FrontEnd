import React from 'react';
import * as S from './style';
import CheckIcon from '../../assets/images/category/check.png';

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
        <S.CheckIcon
          src={CheckIcon}
          alt="체크 이미지"
          visibility={
            props.selectedCategories.includes(props.category)
              ? 'visible'
              : 'hidden'
          }
        />
      </S.CategoryItem>
    </>
  );
}

export default CategoryItem;
