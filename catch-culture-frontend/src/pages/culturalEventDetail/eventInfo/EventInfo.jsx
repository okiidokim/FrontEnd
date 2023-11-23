import * as S from './style.jsx';
import { useEffect, useState, useMemo } from 'react';
import { AiOutlineHeart, AiFillHeart, AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

// api
import axios from '../../../api/axios';


function EventInfo (params) {
    
    const navigate = useNavigate();

    let imgUrl1 = 'https://storage.googleapis.com/elegant-bucket/jinwoo.png';
    let imgUrl2 = 'https://storage.googleapis.com/elegant-bucket/KakaoTalk_20231109_140116686_01.jpg';
    let imgUrl3 = 'https://storage.googleapis.com/elegant-bucket/KakaoTalk_20231109_140116686.jpg';

    const [likeCount, setLikeCount] = useState(0) // int: 좋아요 수
    const [bookmarkCount, setBookmarkCount] = useState(0) // int: 즐겨찾기 수
    const [isLike, setIsLike] = useState(false) // Boolean: 좋아요 여부
    const [isBookmark, setIsBookmark] = useState(false) // Boolean: 즐겨찾기 여부        

    useEffect(() => {
        setLikeCount(params.data.likeCount);
        setBookmarkCount(params.data.bookmarkCount);
        setIsLike(params.data.liked);
        setIsBookmark(params.data.bookmarked);
    }, []);

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

    // 행사 설명 더보기 스위치
    const [isShowMore, setIsShowMore] = useState(false);
    // 글자 수 제한
    const textLimit = 85;

    // 글자 자르기
    const commenter = useMemo(() => {
        const shortView = params.data.description.slice(0, textLimit);
        if (params.data.description.length > textLimit) {
            if (isShowMore)
                return params.data.description;
            else
                return shortView;
        }
        return params.data.description;
    }, [isShowMore]);

    // 좋아요 버튼 클릭
    const onClickLikeButton = () => {
        setIsLike(!isLike);
        fetchLike();
    }

    const fetchLike = () => {
        try {
            if(!isLike) {
                const response = axios.post(
                    `cultural-event/${parseInt(params.data.EventId)}/like`,
                );
                setLikeCount(likeCount+1);
                console.log("post like");
            } else {
                const response = axios.delete(
                    `cultural-event/${parseInt(params.data.EventId)}/like`
                );
                setLikeCount(likeCount-1);
            }
        } catch (e) {
            console.log(e);
        }
    }

    // 좋아요 버튼 클릭
    const onClickBookmarkButton = () => {
        setIsBookmark(!isBookmark);
        fetchBookMark();
    }

    const fetchBookMark = () => {
        try {
            if(!isBookmark) {
                const response = axios.post(
                    `cultural-event/${parseInt(params.data.EventId)}/star`
                );
                setBookmarkCount(bookmarkCount+1);
            } else {
                const response = axios.delete(
                    `cultural-event/${parseInt(params.data.EventId)}/star`
                );
                setBookmarkCount(bookmarkCount-1);
            }
        } catch (e) {
            console.log(e);
        }
    }
    
    // 방문인증 버튼 클릭
    const onClickAuthButton = () => {
            navigate(`/event/${parseInt(params.data.EventId)}/visit`);
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

            {/* 사진 영역 */}
            <S.PictureArea>
                <S.MySwiper pagination={true} modules={[Pagination]} slidesPerView={1} loop={true}>
                    
                    <SwiperSlide>
                        <S.SwiperSlideImg src={imgUrl2} alt="배너 이미지" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <S.SwiperSlideImg src={imgUrl1} alt="배너 이미지" />
                    </SwiperSlide>
                </S.MySwiper>
            </S.PictureArea>

            {/* 좋아요, 즐겨찾기 버튼 */}
            <S.PersonalButtonArea>
                <button id= 'likeButton' onClick={onClickLikeButton}>
                    {isLike ? <AiFillHeart style={{color:'red'}}/> : <AiOutlineHeart />}
                    <b> {likeCount} </b> 
                </button>

                <button id= 'bookmarkButton'onClick={onClickBookmarkButton}>
                    {isBookmark ? <AiFillStar style={{color: "#FFF000"}}/> : <AiOutlineStar />}
                    <b> {bookmarkCount} </b>
                </button>
            </S.PersonalButtonArea>

            <div id='descriptionArea' style={ params.data.description == 'null' ? {display:'none'} : {display:'block'}}>
                <S.SubTitle>
                    행사 소개
                </S.SubTitle>
                <S.InfoValue>
                    <div id="descriptionInfo" onClick={() => setIsShowMore(!isShowMore)}>
                        { commenter }

                        {/* 더보기 버튼 */}
                        <span style={{color:'grey'}}>
                            {params.data.description.length > textLimit ? (isShowMore ? ' 닫기' : ' ...더보기') : null}
                        </span>
                    </div>
                </S.InfoValue>
            </div>

            <div id='placeArea' style={ params.data.place == null && params.data.wayToCome == null ? {display:'none'} : {display:'block'}}>
                <S.SubTitle>
                    행사 위치
                </S.SubTitle>
                <S.InfoValue>
                    <div>{ params.data.place }</div>
                    <div style={ params.data.wayToCome == null ? {display:'none'} : {display:'block'}}>오시는길 : {params.data.wayToCome}</div>
                </S.InfoValue>
            </div>

            <div id='dateArea' style={ params.data.startDate == null && endDate == null ? {display:'none'} : {display:'block'}}>
                <S.SubTitle>
                    운영 기간
                </S.SubTitle>
                <S.InfoValue>
                    <div>시작일 : { params.data.startDate }</div>
                    <div>종료일 : { params.data.endDate }</div>
                </S.InfoValue>
            </div>

            <div id='costArea' style={ params.data.isFree == null ? {display:'none'} : {display:'block'}}>
                <S.SubTitle>
                    요금 정보
                </S.SubTitle>
                <S.InfoValue>
                    { params.data.isFree ? "무료" : "유료"}
                </S.InfoValue>
            </div>

            <div id='contactArea'style={ params.data.telephone == null && params.data.sns == null ? {display:'none'} : {display:'block'}}>
                <S.SubTitle>   
                    연락처
                </S.SubTitle>
                <S.InfoValue>
                    <div>{ params.data.telephone != null ? "전화번호 : " + params.data.telephone : null }</div>
                    <div>{ params.data.sns != null ? "SNS : " + params.data.sns : null }</div>
                </S.InfoValue>
            </div>

            <div id='reservationArea'>
                <S.SubTitle>
                    예약 정보
                </S.SubTitle>
                <S.InfoValue>
                    { params.data.reservationLink != null ? "예약링크 : " + params.data.reservationLink : "없음" }
                </S.InfoValue>

                {/* 예약 버튼 */}
                <S.ButtonSection style={params.data. reservationLink != null ? null : {display:'none'}}>
                    <button onClick={() => {window.open(params.data.reservationLink,'_blank')}}>
                        이동하기
                    </button>
                </S.ButtonSection>
            </div>

            <S.ButtonSection>           
                <button onClick={onClickAuthButton} disabled={params.data.isAuthenticated} style={ params.data.isAuthenticated ? {backgroundColor: '#A7A7A7'} : {backgroundColor: '#018C0D'}}>
                    방문 인증
                </button>
            </S.ButtonSection>
        </S.EventInfo>
    );
}

export default EventInfo;