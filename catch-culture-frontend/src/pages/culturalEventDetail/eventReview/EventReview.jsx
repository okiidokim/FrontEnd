import * as S from './style.jsx';
import { useEffect, useState } from 'react';

function EventReview ( {EventId} ) {
    console.log(EventId);

    const [title, setTitle] = useState('더 크림 갤러리'); // String: 제목
    const [category, setCategory] = useState('팝업스토어'); // Category(): 카테고리 Enumerated(EnumType.STRING)
    const [isAuthenticated, setIsAuthenticated] = useState(true) // Boolean: 인증 여부

    return (
        <S.EventInfo>
            {/* 행사 제목 */}
            <S.TitleArea>
                {title}
            </S.TitleArea>

            {/* 카테고리 영역 */}
            <S.CategoryArea>
                {category}
            </S.CategoryArea>

            {/* 방문인증 여부 */}
            <S.AuthArea style={ isAuthenticated ? {color: '#018C0D'} : {color: 'red'}}>
                {isAuthenticated ? '방문 인증 완료' : '방문 인증 미완료'}
            </S.AuthArea>

        </S.EventInfo>
    );
}

export default EventReview;