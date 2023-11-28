import React, { useState } from 'react';
import * as S from './style';

// 아이콘
import SearchImg from '../../../assets/images/search/searchIcon.png';
import { Link } from 'react-router-dom';

function SearchBox(props) {
  const initialKeyword = props.keyword ? props.keyword : '';
  const [search, setSearch] = useState(initialKeyword);

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

        <S.StyledLink to="/search" state={{ keyword: search }}>
          <S.HeaderSearchImg src={SearchImg} alt="검색 이미지" />
        </S.StyledLink>
      </S.HeaderSearchWrapper>
    </>
  );
}

export default SearchBox;
