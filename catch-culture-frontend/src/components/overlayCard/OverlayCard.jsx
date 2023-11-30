import React from 'react';
import * as S from './style';

let data = {
  remainDay: 3,
  title: "string 행사 제목",
  place: "string 행사 장소",  
  startDate: "2023-12-13",
  endDate: "2023-12-16",
  viewCount: 4,
  likeCount: 5,
}

function OverlayCard(params) {

    const getTagColor = remainDay => {
      if (remainDay === 0) {
        return '#E00000';
      } else if (remainDay >= 1 && remainDay <= 3) {
        return '#EB6565';
      } else if (remainDay >= 4 && remainDay <= 9) {
        return '#E3C00C';
      } else {
        return '#018C0D';
      }
    };

    return(
        <S.Map>
            <S.Close onclick="closeOverlay()" title="닫기"/>
            <S.ImageArea>
                <S.Image src="https://storage.googleapis.com/elegant-bucket/jinwoo.png" alt="행사 이미지"/>
            </S.ImageArea>
            <S.TextArea>
                <S.RemainDayTag color={getTagColor(data.remainDay)}>
                  D-{data.remainDay === 0 ? 'Day' : data.remainDay}
                </S.RemainDayTag>

                 {/* 문화 행사 카드 - 내용 */}
                <S.OverlayCardContentWrapper>
                    <S.OverlayCardTitle>
                        {String(data.title) < 10
                        ? data.title
                        : `${String(data.title).slice(0, 9)}...`}
                    </S.OverlayCardTitle>
                    <S.OverlayCardLocation>
                        {String(data.place) < 20
                        ? data.place
                        : `${String(data.place).slice(0, 19)}...`}
                    </S.OverlayCardLocation>
                    <S.OverlayCardDate>
                        {data.startDate} ~ {data.endDate}
                    </S.OverlayCardDate>

                    <S.OverlayCardInfo>
                        {/* 문화 행사 카드 - 내용 - 조회수 */}
                        <S.OverlayCardInfoViewWrapper>
                          <S.OverlayCardInfoViewIcon />
                          <S.OverlayCardInfoViewCnt>
                              {data.viewCount}
                          </S.OverlayCardInfoViewCnt>
                        </S.OverlayCardInfoViewWrapper>

                        {/* 문화 행사 카드 - 내용 - 좋아요수 */}
                        <S.OverlayCardInfoHeartWrapper>
                          <S.OverlayCardInfoHeartIcon />
                          <S.OverlayCardInfoHeartCnt>
                              {data.likeCount}
                          </S.OverlayCardInfoHeartCnt>
                        </S.OverlayCardInfoHeartWrapper>
                    </S.OverlayCardInfo>
                </S.OverlayCardContentWrapper>
            </S.TextArea>
        </S.Map>
    );
}

export default OverlayCard;
