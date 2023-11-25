import React from 'react';
import styled from 'styled-components';
import { TbClipboardCheck } from 'react-icons/tb';
import { TbMapPinCheck } from 'react-icons/tb';

const Bodyadmin = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  width: 320px;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

const Buttonadmin = styled.div`
  gap: 12px;
  width: 100px;
  height: 100px;
  border-radius: 4px;
  background-color: #d9d9d9;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  box-shadow: inset 2px 2px 2px 0 rgba(255, 255, 255, 0.2),
    inset -2px -2px 2px 0 rgba(116, 125, 136, 0.2),
    -1px -1px 1px 0 rgba(255, 255, 255, 0.2), 1px 1px 1px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: #018c0d;
    color: white;
    font-weight: bold;
  }
`;

function Admin() {
  return (
    <Bodyadmin>
      <Buttonadmin>
        <TbMapPinCheck size="40" />
        방문 인증 수락
      </Buttonadmin>
      <Buttonadmin>
        <TbClipboardCheck size="40" />
        제보 수락
      </Buttonadmin>
    </Bodyadmin>
  );
}

export default Admin;
