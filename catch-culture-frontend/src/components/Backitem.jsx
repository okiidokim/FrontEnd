import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowDropleft } from 'react-icons/io';

const BackNavi = styled.div`
  display: flex;
  position: absolute;
  top: 2%;
  margin: 0 0 0 -176px;
  cursor: pointer;
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
