import { styled } from 'styled-components';
import { AiFillHeart, AiFillEye } from 'react-icons/ai';
import { RxCross2 } from "react-icons/rx";

export const Map = styled.div`
    position: absolute;
    left: 0;
    bottom: 40px;
    width: 220px;
    height: 106px;
    border-radius: 20px;
    padding: 5px;
    margin-left: 20px;
    overflow: hidden;
    text-align: left;
    font-size: 12px;
    line-height: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: white;
    z-index: 2;
    box-shadow: 2px 2px 2px 2px grey;
`;

export const Close = styled(RxCross2)`
    position: absolute;
    top: 10px;
    right: 10px;
    color: #888;
    width: 20px;
    height: 20px;

    svg path{
        width: 100%;
        height: 100%;
    }
`;

export const ImageArea = styled.div`
`;

export const Image = styled.img`
    width: 68px;
    height: 68px;
    border-radius: 10px;
`;

export const TextArea = styled.div`
    width: 136px;
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


// 문화 행사 카드 - 내용
export const OverlayCardContentWrapper = styled.div`
  margin-top: 5px;
  color: #acacac;
`;

// 문화 행사 카드 - 내용 - 타이틀
export const OverlayCardTitle = styled.div`
  color: #000;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
`;

// 문화 행사 카드 - 내용 - 위치
export const OverlayCardLocation = styled.div`
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 5px;
`;

// 문화 행사 카드 - 내용 - 기간
export const OverlayCardDate = styled.div`
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
`;

// 문화 행사 카드 - 내용 - 조회수 + 좋아요수
export const OverlayCardInfo = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 12px;
  font-weight: 500;
`;
export const OverlayCardInfoViewWrapper = styled.div`
  display: flex;
  margin-right: 8px;
`;
export const OverlayCardInfoViewIcon = styled(AiFillEye)`
  margin-right: 2px;
`;
export const OverlayCardInfoViewCnt = styled.div``;
export const OverlayCardInfoHeartWrapper = styled.div`
  display: flex;
`;
export const OverlayCardInfoHeartIcon = styled(AiFillHeart)`
  margin-right: 2px;
`;
export const OverlayCardInfoHeartCnt = styled.div``;
