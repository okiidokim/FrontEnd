import { styled } from 'styled-components';
import { AiFillStar } from 'react-icons/ai';

export const Wrapper = styled.div`
  width: auto;
  height: auto;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ActiveStar = styled(AiFillStar)`
  width: 40px;
  height: 40px;
  fill: yellow;
`;

export const InActiveStar = styled(AiFillStar)`
  width: 40px;
  height: 40px;
  fill: #bbbbbb;
`;