import React, { useState } from 'react';
import * as S from './style';

import axios from '../../api/axios'

function MapOverlay(params) {

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
            <S.ImageArea>
                <S.Image src="https://storage.googleapis.com/elegant-bucket/jinwoo.png" alt="행사 이미지"/>
            </S.ImageArea>
            <S.TextArea>
                <S.RemainDayTag color={getTagColor(params.remainDay)}>
                  D-{params.remainDay === 0 ? 'Day' : params.remainDay}
                </S.RemainDayTag>
                <S.TitleArea>
                    title
                </S.TitleArea>
                <S.PlaceArea>
                    place
                </S.PlaceArea>
                <S.DateArea>
                    <div>
                        start date
                    </div>
                    <div>
                        end date
                    </div>
                </S.DateArea>
                <S.CountArea>
                    <div>조회수</div>
                    <div>좋아요수</div>
                </S.CountArea>
                
            </S.TextArea>
        </S.Map>
    );
}

export default MapOverlay;
