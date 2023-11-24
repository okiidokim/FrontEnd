import * as S from './style.jsx';
import { useEffect, useState } from 'react';

import ReviewCard from '../../../components/ReviewCard/ReviewCard';


function EventReview ( params ) {
    console.log(params);

    const [title, setTitle] = useState('더 크림 갤러리'); // String: 제목
    const [category, setCategory] = useState('팝업스토어'); // Category(): 카테고리 Enumerated(EnumType.STRING)
    const [isAuthenticated, setIsAuthenticated] = useState(true) // Boolean: 인증 여부

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

            
            <ReviewCard data={{
                "id": 0,
                "nickname": "string",
                "description": "string",
                "storedFileUrl": [
                  "https://storage.googleapis.com/elegant-bucket/KakaoTalk_20231109_140116686_01.jpg",
                ],
                "rating": 3,
                "createdAt": "2023-11-22",
                "eventImgUrl" : null,
                "eventTitle": null,
            }}/>
        </S.EventInfo>
    );
}

export default EventReview;