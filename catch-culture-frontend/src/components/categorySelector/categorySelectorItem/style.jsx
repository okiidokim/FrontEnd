import { styled } from 'styled-components';

export const CategorySelectorItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: auto;
  background: ${props => props.bgcolor};
  border: 1px solid #018c0d;
  border-radius: 10px;
  color: ${props => props.color};
  text-align: center;
  font-size: 10px;
  font-weight: 700;
  white-space: nowrap;
  padding: 5px 20px;
  box-shadow: ${props => props.shadow};
  cursor: pointer;
`;
