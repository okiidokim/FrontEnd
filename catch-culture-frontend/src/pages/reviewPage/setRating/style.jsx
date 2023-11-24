import { styled } from 'styled-components';


export const Stars = styled.div`
  width: auto;
  height: auto;
  margin-top: 20px;
  margin-bottom: 20px;

  * {
    width: 40px;
    height: 40px;
    fill: #bbbbbb;
  }

  .activeStar > path {
    fill: yellow;
  }
`;
