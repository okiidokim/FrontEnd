import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowDropleft } from 'react-icons/io';

const BackWrapper = styled.div`
  position: sticky;
  width: 390px;
`;
const BackNavi = styled.div`
  position: absolute;
  top: 24px;
  left: 40px;
  cursor: pointer;
  z-index: 1;
`;

export default function Backitem() {
  const navigate = useNavigate();

  const onClickBackButton = () => {
    navigate(-1);
  };

  return (
    <BackWrapper>
      <BackNavi>
        <IoIosArrowDropleft size="24" onClick={onClickBackButton} />
      </BackNavi>
    </BackWrapper>
  );
}
