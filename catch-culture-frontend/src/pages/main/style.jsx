import { styled } from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  padding: 27px;
`;
export const Header = styled.div`
  display: flex;
  width: 100%;
`;
export const HeaderLogo = styled.img`
  height: 40px;
  margin-right: 15px;
`;
export const HeaderSearchWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  position: relative;
  flex-direction: row;
`;

export const HeaderSearch = styled.input`
  width: 180px;
  height: 30px;
  border: none;
  border-bottom: 1px solid #71be77;
  outline: none;
  padding-left: 10px;
  padding-right: 30px;
  font-size: 12px;

  &::placeholder {
    color: #71be77;
  }

  &:focus {
    border: none;
    outline: 2px solid #71be77;
    border-radius: 3px;
  }
`;

export const HeaderSearchImg = styled.img`
  position: absolute;
  right: 10px;
  height: 16px;
`;
