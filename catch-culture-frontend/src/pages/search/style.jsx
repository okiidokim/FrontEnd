import { styled } from 'styled-components';

// 검색 페이지
export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 27px;
`;

// 헤더
export const SearchHeader = styled.div`
  display: flex;
  margin-top: 15px;
  align-items: baseline;
  margin-left: 4px;
  margin-bottom: 10px;
`;

export const SearchHeaderTitle = styled.div`
  color: #000;
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
`;

export const SearchHeaderResultCnt = styled.div`
  color: #747474;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  margin-left: 10px;
`;
