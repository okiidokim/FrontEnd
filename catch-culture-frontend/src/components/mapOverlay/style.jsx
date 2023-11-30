import { styled } from 'styled-components';

export const Map = styled.div`
    position: absolute;
    left: 0;
    bottom: 40px;
    width: 200px;
    height: 106px;
    border-radius: 20px;
    border: 1px solid black;
    padding: 10px;
    margin-left: 20px;
    overflow: hidden;
    text-align: left;
    font-size: 12px;
    line-height: 1.5;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: yellow;
    z-index: 2;
`;

export const ImageArea = styled.div`
    background-color: red;
`;

export const Image = styled.img`
    width: 68px;
    height: 68px;
`;

export const TextArea = styled.div`
    width: 124px;
    height: 100px;
    background-color: blue;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const RemainDayTag = styled.div`
  display: flex;
  position: relative;
  top: 0px;
  left: 0px;
  justify-content: center;
  min-width: 28px;
  max-width: 36px;
  padding: 0px 2px;
  height: 12px;
  background-color: ${(props) => props.color};
  border-radius: 10px;
  color: #fff;
  font-size: 8px;
  font-weight: 500;
  line-height: normal;
`;

export const TitleArea = styled.div`
    position: relative;
    font-size: 20px;
    width: 100%;
`;

export const PlaceArea = styled.div`
    position: relative;s
`;

export const DateArea = styled.div`
    display: flex;
    flex-direction: row;
`

export const CountArea = styled.div`
    display: flex;
    flex-direction: row;
`;