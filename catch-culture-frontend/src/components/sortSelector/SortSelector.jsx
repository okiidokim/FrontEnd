import React, { useState } from 'react';
import * as S from './style';

// 아이콘
import ToggleIcon from '../../assets/images/sort/toggle.png';

function SortSelector(props) {
  const [isShow, setIsShow] = useState(false);

  const handleClickToggle = () => {
    setIsShow(!isShow);
  };

  const handleSortSelected = index => {
    props.setSelectedSort(index);
    setIsShow(false);
  };

  return (
    <>
      <S.SortSelectorWrapper>
        <S.SortSelectorItem onClick={handleClickToggle}>
          <S.ToggleIcon
            src={ToggleIcon}
            alt="토글 아이콘"
            rotate={isShow ? '180deg' : '0deg'}
          />
          <S.SortSelectorItemTitle>
            {props.options[props.selectedSort].name}
          </S.SortSelectorItemTitle>
        </S.SortSelectorItem>

        {/* 토글 클릭 시 보임 */}
        {isShow && (
          <>
            {props.options.map((option, index) => {
              if (index !== props.selectedSort) {
                return (
                  <S.SortSelectorItem
                    key={option.value}
                    onClick={() => handleSortSelected(index)}
                  >
                    <S.SortSelectorItemTitle>
                      {option.name}
                    </S.SortSelectorItemTitle>
                  </S.SortSelectorItem>
                );
              }
              return null;
            })}
          </>
        )}
      </S.SortSelectorWrapper>
    </>
  );
}

export default SortSelector;
