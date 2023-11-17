import { styled } from 'styled-components';

// 카테고리 전체
export const CategoryWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

// 카테고리 헤더
export const CategoryHeader = styled.div`
  display: flex;
  color: #000;
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  margin-top: 28px;
  margin-left: 28px;
`;

// 카테고리 아이템
export const CategoryContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 28px;
`;

export const CategoryItem = styled.div`
  display: flex;
  padding-left: 28px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e2e2e2;
  margin-bottom: 20px;
  color: #777;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;

  &:hover {
    color: #018c0d;
  }
`;

export const CategorySubmitButton = styled.div`
  display: flex;
  width: 300px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #a7a7a7;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  justify-content: center;
  align-items: center;
`;

export const CategorySubmitButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 28px;
  margin-bottom: 28px;
  cursor: pointer;
`;
