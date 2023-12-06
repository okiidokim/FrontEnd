import React, { useState } from 'react';
import * as S from './style';
import PropTypes from 'prop-types';

// 아이콘
import SearchImg from '../../../assets/images/search/searchIcon.png';

function SearchBox(props) {
  SearchBox.propTypes = {
    keyword: PropTypes.any,
    width: PropTypes.any,
  };
  const initialKeyword = props.keyword ? props.keyword : '';
  const [search, setSearch] = useState(initialKeyword);

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  return (
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
  );
}

export default SearchBox;
