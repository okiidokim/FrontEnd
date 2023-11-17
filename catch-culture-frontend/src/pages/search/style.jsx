import { styled } from 'styled-components';

// 메인
export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 27px;
`;

// 헤더 - 검색창
export const HeaderSearchWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  position: relative;
  flex-direction: row;
`;

export const HeaderSearch = styled.input`
  width: 280px;
  height: 30px;
  border: none;
  border-bottom: 1px solid #71be77;
  outline: none;
  padding-left: 10px;
  padding-right: 30px;

  color: rgba(1, 140, 13, 0.56);
  font-family: NotoSansKR_Regular;
  font-size: 13px;
  font-weight: 400;
  line-height: normal;

  &::placeholder {
    color: rgba(1, 140, 13, 0.56);
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
