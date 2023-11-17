import { styled } from 'styled-components';

export const SortSelectorWrapper = styled.div``;

export const SortSelectorSelectedItem = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #71be77;
  font-size: 10px;
  font-weight: 700;

  width: 70px;
  height: 25px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

export const SortSelectorItem = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #71be77;
  font-size: 10px;
  font-weight: 700;

  height: 21px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  text-align: end;
`;

export const ToggleIcon = styled.img`
  position: absolute;
  right: 1px;
  width: 9px;
  height: 5px;
  margin-right: 4px;
  transform: rotate(${props => props.rotate});
`;

export const SortSelectorSelectedItemTitle = styled.div``;
