import React from 'react';
import styled from 'styled-components';
import { TbClipboardCheck } from 'react-icons/tb';
import { TbMapPinCheck } from 'react-icons/tb';
import './Admin.css';
import { NavLink } from 'react-router-dom/dist';

const Bodyadmin = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  width: 320px;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

function Admin() {
  return (
    <Bodyadmin>
      <NavLink to="/visitauth/list" className="buttonadmin">
        <TbMapPinCheck size="44" />
        방문 인증 수락
      </NavLink>
      <NavLink to="/reportauth/list" className="buttonadmin">
        <TbClipboardCheck size="44" />
        제보 수락
      </NavLink>
    </Bodyadmin>
  );
}

export default Admin;
