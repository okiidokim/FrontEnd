import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Search() {
  const { state } = useLocation();
  const category = state && state.category;

  console.log(category);

  return <>Search 페이지</>;
}

export default Search;
