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
        <S.SortSelectorSelectedItem onClick={handleClickToggle}>
          <S.ToggleIcon
            src={ToggleIcon}
            alt="토글 아이콘"
            rotate={isShow ? '180deg' : '0deg'}
          />
          <S.SortSelectorSelectedItemTitle>
            {props.options[props.selectedSort].label}
          </S.SortSelectorSelectedItemTitle>
        </S.SortSelectorSelectedItem>

        {isShow && (
          <>
            {props.options.map((option, index) => {
              if (index !== props.selectedSort) {
                return (
                  <S.SortSelectorSelectedItem
                    key={option.value}
                    onClick={() => handleSortSelected(index)}
                  >
                    <S.SortSelectorSelectedItemTitle>
                      {option.label}
                    </S.SortSelectorSelectedItemTitle>
                  </S.SortSelectorSelectedItem>
                );
              }
              return null; // 선택된 항목은 드롭다운 목록에 표시하지 않음
            })}
          </>
        )}
      </S.SortSelectorWrapper>
    </>
  );
}

export default SortSelector;
