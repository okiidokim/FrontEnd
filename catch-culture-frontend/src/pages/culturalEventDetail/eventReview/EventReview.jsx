import * as S from './style.jsx';
import { useEffect, useState } from 'react';

import ReviewCard from '../../../components/ReviewCard/ReviewCard';

import axios from '../../../api/axios'

function EventReview ( params ) {

    const [myData, setMyData] = useState();
    let starCount = [0, 0, 0, 0, 0];


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `review/${parseInt(params.data.EventId)}/my-review`
            )
            setMyData({
                "id": params.data.eventId,
                "nickname": response.data.nickname,
                "description": response.data.description,
                "storedFileUrl": response.data.storedFileUrl,
                "rating": response.data.rating,
                "createdAt": response.data.createdAt,
                "eventImgUrl" : null,
                "eventTitle": null,
                "isMyReview": true,
            });
        } catch (e) {
            console.log(e);
        }
    }

    const getStar = async () => {
        try {
            const response = await axios.get(
                `cultural-event/${parseInt(params.data.eventId)}/rating`
            );
            

        } catch (e) {
            console.log(e);
        }
    }

    // 카테고리 한글로 변환
    const printCategory = (category) => {
        switch(category) {
            case "POPUP-STORE" : return "팝업 스토어";
            case "FESTIVAL" : return "축제";
            case "TRADITIONAL_MUSIC" : return "국악";
            case "ORCHESTRA_CLASSIC" : return "오케스트라 / 클래식";
            case "RECITAL" : return "독주 / 독창회";
            case "DANCE" : return "무용";
            case "CONCERT" : return "콘서트";
            case "MOVIE" : return "영화";
            case "THEATER" : return "연극";
            case "MUSICAL_OPERA" : return "오페라 / 뮤지컬";
            case "EDUCATION_EXPERIENCE" : return "교육 / 체험";
            case "EXHIBITION_ART" : return "전시 / 미술";
            default : return "기타";
        }
    }

    return (
        <S.EventInfo>
            {/* 행사 제목 */}
            <S.TitleArea>
                {params.data.title}
            </S.TitleArea>

            {/* 카테고리 영역 */}
            <S.CategoryArea>
                {printCategory(params.data.category)}
            </S.CategoryArea>

            {/* 방문인증 여부 */}
            <S.AuthArea style={ params.data.isAuthenticated ? {color: '#018C0D'} : {color: 'red'}}>
                {params.data.isAuthenticated ? '방문 인증 완료' : '방문 인증 미완료'}
            </S.AuthArea>

            <S.MyArea>
                {/* {myData == null ? "내 리뷰가 없습니다." : <ReviewCard data = {myData} />} */}

                <S.ReviewButton >
                    리뷰 작성
                </S.ReviewButton>
            </S.MyArea>

            <S.StarArea>

            </S.StarArea>

            <ReviewCard data={{
                "id": params.data.EventId,
                "nickname": "string",
                "description": "string",
                "storedFileUrl": [
                  "https://storage.googleapis.com/elegant-bucket/KakaoTalk_20231109_140116686_01.jpg",
                ],
                "rating": 3,
                "createdAt": "2023-11-22",
                "eventImgUrl" : null,
                "eventTitle": null,
                "isMyReview": false,
            }}/>
        </S.EventInfo>
    );
}

export default EventReview;