import { styled } from 'styled-components';

export const CategoryItem = styled.div`
  display: flex;
  align-items: center;
  padding-left: 28px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e2e2e2;
  margin-bottom: 20px;
  color: ${props => props.color};
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;

  &:hover {
    color: #018c0d;
  }
`;

export const CheckIcon = styled.img`
  width: 15px;
  height: 11px;
  margin-left: 8px;
  visibility: ${props => props.visibility};
`;
