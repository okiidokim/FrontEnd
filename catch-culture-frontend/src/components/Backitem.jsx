import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowDropleft } from 'react-icons/io';

const BackNavi = styled.div`
  display: flex;
  position: sticky;
  top: 24px;
  cursor: pointer;
  z-index: 1;
`;

export default function Backitem() {
  const navigate = useNavigate();

  const onClickBackButton = () => {
    navigate(-1);
  };

  return (
    <BackNavi>
      <IoIosArrowDropleft size="24" onClick={onClickBackButton} />
    </BackNavi>
  );
}
