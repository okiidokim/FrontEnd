import React from 'react';
import * as S from './style';
import PropTypes from 'prop-types';

function CategorySelectorItem(props) {
  CategorySelectorItem.propTypes = {
    category: PropTypes.array,
    name: PropTypes.string,
    handlerClickCategory: PropTypes.func,
    selectedCategories: PropTypes.func,
  };

  return (
    <div>
      <S.CategorySelectorItem
        onClick={() => props.handlerClickCategory(props.category)}
        color={
          props.selectedCategories.includes(props.category) ||
          (props.category === 'ALL' && props.selectedCategories.length === 13)
            ? '#fff'
            : '#018C0D'
        }
        bgcolor={
          props.selectedCategories.includes(props.category) ||
          (props.category === 'ALL' && props.selectedCategories.length === 13)
            ? '#018C0D'
            : '#fff'
        }
        shadow={
          props.selectedCategories.includes(props.category) ||
          (props.category === 'ALL' && props.selectedCategories.length === 13)
            ? '0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset'
            : 'none'
        }
      >
        {props.name}
      </S.CategorySelectorItem>
    </div>
  );
}

export default CategorySelectorItem;
