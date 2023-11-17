import React, { useState } from 'react';
import * as S from './style';

// 아이콘
import ToggleIcon from '../../assets/images/sort/toggle.png';

function SortSelector(props) {
  const options = [
    { value: 1, label: '최신순' },
    { value: 2, label: '조회순' },
    { value: 3, label: '좋아요순' },
  ];
  const [isShow, setIsShow] = useState(false);
  const [selectedSort, setSelectedSort] = useState(0);
  const handleClickToggle = () => {
    setIsShow(!isShow);
  };

  const handleSortSelected = index => {
    setSelectedSort(index);
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
            {options[selectedSort].label}
          </S.SortSelectorSelectedItemTitle>
        </S.SortSelectorSelectedItem>

        {isShow && (
          <>
            {options.map((option, index) => {
              if (index !== selectedSort) {
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
