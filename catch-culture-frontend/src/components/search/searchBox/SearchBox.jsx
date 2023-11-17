import React, { useState } from 'react';
import * as S from './style';

// 아이콘
import SearchImg from '../../../assets/images/search/searchIcon.png';

function SearchBox(props) {
  const [search, setSearch] = useState('');

  const onChange = e => {
    setSearch(e.target.value);
  };

  return (
    <>
      <S.HeaderSearchWrapper>
        <S.HeaderSearch
          type="text"
          value={search}
          onChange={onChange}
          placeholder="다양한 행사를 검색해보세요"
          width={props.width}
        />
        <S.HeaderSearchImg src={SearchImg} alt="검색 이미지" />
      </S.HeaderSearchWrapper>
    </>
  );
}

export default SearchBox;
