import { styled } from 'styled-components';

export const NoResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

export const NoResultIcon = styled.img`
  width: 96px;
  height: 96px;
`;

export const NoResultTitle = styled.div`
  display: flex;
  color: #000;
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  margin-top: 24px;
`;

export const NoResultContent = styled.div`
  display: flex;
  color: #777;
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  margin-top: 4px;
`;
