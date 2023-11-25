import { styled } from 'styled-components';

// 아이콘
import { AiFillHeart, AiFillEye } from 'react-icons/ai';

// 추천 행사 목록
export const EventList = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-rows: 2fr;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  flex-wrap: wrap;
  gap: 22px;
`;

// 문화 행사 카드
export const EventCard = styled.div``;

export const EventCardImgWrapper = styled.div`
  position: relative;
`;

export const EventCardImgTag = styled.div`
  display: flex;
  position: absolute;
  top: 10px;
  left: 10px;
  justify-content: center;
  min-width: 33px;
  padding: 0px 2px;
  height: 16px;
  background-color: ${(props) => props.color};
  border-radius: 10px;
  color: #fff;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
`;

export const EventCardImg = styled.img`
  width: 155px;
  height: 155px;
  border-radius: 10px;
`;

// 문화 행사 카드 - 내용
export const EventCardContentWrapper = styled.div`
  margin-top: 5px;
  color: #acacac;
`;

// 문화 행사 카드 - 내용 - 타이틀
export const EventCardTitle = styled.div`
  color: #000;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
`;

// 문화 행사 카드 - 내용 - 위치
export const EventCardLocation = styled.div`
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 5px;
`;

// 문화 행사 카드 - 내용 - 기간
export const EventCardDate = styled.div`
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 6px;
`;

// 문화 행사 카드 - 내용 - 조회수 + 좋아요수
export const EventCardInfo = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 12px;
  font-weight: 500;
`;
export const EventCardInfoViewWrapper = styled.div`
  display: flex;
  margin-right: 8px;
`;
export const EventCardInfoViewIcon = styled(AiFillEye)`
  margin-right: 2px;
`;
export const EventCardInfoViewCnt = styled.div``;
export const EventCardInfoHeartWrapper = styled.div`
  display: flex;
`;
export const EventCardInfoHeartIcon = styled(AiFillHeart)`
  margin-right: 2px;
`;
export const EventCardInfoHeartCnt = styled.div``;
