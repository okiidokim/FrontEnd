import * as S from './style.jsx';
import { useState, useMemo } from 'react';
import { AiOutlineHeart, AiFillHeart, AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination } from 'swiper/modules';

// api
import axios from '../../../api/axios';
import defaultImg from "../../../assets/pointimg/level0.png";


function EventInfo (params) {
    const navigate = useNavigate();

    const [likeCount, setLikeCount] = useState(params.data.likeCount) // int: 좋아요 수
    const [bookmarkCount, setBookmarkCount] = useState(params.data.bookmarkCount) // int: 즐겨찾기 수
    const [isLike, setIsLike] = useState(params.data.liked) // Boolean: 좋아요 여부
    const [isBookmark, setIsBookmark] = useState(params.data.bookmarked) // Boolean: 즐겨찾기 여부        

    const [isShowMoreTitle, setIsShowMoreTitle] = useState(false); // 행사 제목 더보기 스위치  
    const [isShowMoreDes, setIsShowMoreDes] = useState(false); // 행사 설명 더보기 스위치
    
    const titleLimit = 14; // 제목 글자 수 제한
    const textLimit = 85; // 설명 글자 수 제한

    // 카테고리 한글로 변환
    const printCategory = (category) => {
        switch(category) {
            case "POPUP_STORE" : return "팝업 스토어";
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

    // 제목 글자 자르기
    const getTitle = useMemo(() => {
        if (params.data.title.length > titleLimit) {
            if (isShowMoreTitle)
                return params.data.title;
            else
                return params.data.title.slice(0, titleLimit);
        }
        return params.data.title;
    }, [isShowMoreTitle]);

    // 설명 글자 자르기
    const commenter = useMemo(() => {
        const shortView = params.data.description.slice(0, textLimit);
        if (params.data.description.length > textLimit) {
            if (isShowMoreDes)
                return params.data.description;
            else
                return shortView;
        }
        return params.data.description;
    }, [isShowMoreDes]);

    // 좋아요 api 호출
    const fetchLike = () => {
        try {
            if(!isLike) {
                axios.post(
                    `cultural-event/${parseInt(params.data.EventId)}/like`,
                );
                setLikeCount(likeCount+1);
            } else {
                axios.delete(
                    `cultural-event/${parseInt(params.data.EventId)}/like`
                );
                setLikeCount(likeCount-1);
            }
        } catch (e) {
            if(e.response.data.code === "LOGIN_FAIL") {
                alert('로그인 만료! 다시 로그인 해주세요.');
                navigate(`/`);
            }
            else if(e.response.data.code === "ALREADY_LIKE" || e.response.data.code === "NOT_LIKE") {
                alert('좋아요 오류 발생! 페이지를 다시 로딩합니다.');
                navigate(0);
            }
        }
    }

    // 즐겨찾기 api 호출
    const fetchBookMark = () => {
        try {
            if(!isBookmark) {
                axios.post(
                    `cultural-event/${parseInt(params.data.EventId)}/star`
                );
                setBookmarkCount(bookmarkCount+1);
            } else {
                axios.delete(
                    `cultural-event/${parseInt(params.data.EventId)}/star`
                );
                setBookmarkCount(bookmarkCount-1);
            }
        } catch (e) {
            if(e.response.data.code === "LOGIN_FAIL") {
                alert('로그인 만료! 다시 로그인 해주세요.');
                navigate(`/`);
            }
            if(e.response.data.code === "ALREADY_STAR" || e.response.data.code === "NOT_STAR") {
                alert('즐겨찾기 오류 발생! 페이지를 다시 로딩합니다.');
                navigate(0);
            }
        }
    }

    // 좋아요 버튼 클릭
    const onClickLikeButton = () => {
        setIsLike(!isLike);
        fetchLike();
    }

    // 즐겨찾기 버튼 클릭
    const onClickBookmarkButton = () => {
        setIsBookmark(!isBookmark);
        fetchBookMark();
    }

    // 링크 복사 클릭
    const handleCopyClipBoard = (text) => {
        try {
          navigator.clipboard.writeText(text);
          
          toast.success("복사 성공!", {
            autoClose: 1000,
            position: toast.POSITION.TOP_CENTER,
            hideProgressBar: true
          });
        } catch (error) {
          toast.error("복사 실패!", {
            autoClose: 1000,
            position: toast.POSITION.TOP_CENTER,
            hideProgressBar: true
          });
        }
      };

    // 방문인증 버튼 클릭
    const onClickAuthButton = () => {
        navigate(`/event/${parseInt(params.data.EventId)}/visit`);
    }

    const addDefaultImg = (e) => {
        e.target.src = defaultImg;
    }

    return (
        <S.EventInfo>
            {/* 행사 제목 */}
            <S.TitleArea onClick={(e) => setIsShowMoreTitle(!isShowMoreTitle)}>
                { getTitle }
                {/* 더보기 버튼 */}
                <span style={{color:'grey'}}>
                    {params.data.title.length > titleLimit ? !isShowMoreTitle && ' ...' : null}
                </span>
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
                    {params.data.storedFileUrl.map((Url) => (
                        <SwiperSlide key={Url.index}>
                            <S.SwiperSlideImg src={Url} onError={addDefaultImg} />
                        </SwiperSlide>
                    ))}
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
                    <div 
                        id="descriptionInfo" 
                        onClick={() => setIsShowMoreDes(!isShowMoreDes)}
                        onKeyDown={() => setIsShowMoreDes(!isShowMoreDes)}
                    >
                        { commenter }

                        {/* 더보기 버튼 */}
                        <span style={{color:'grey'}}>

                            {params.data.description.length > textLimit ? !isShowMoreDes &&' ...더보기' : null}
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
                    
                    { params.data.reservationLink != null ? 
                        (
                            <>
                            예약링크 <br/> 
                            <div 
                                onClick={() => handleCopyClipBoard(params.data.reservationLink)} 
                                onKeyDown={() => handleCopyClipBoard(params.data.reservationLink)}
                            >   
                                {params.data.reservationLink}
                            </div>
                            <ToastContainer />
                            </>
                        )
                        : 
                        "없음" 
                    }
                </S.InfoValue>

                {/* 예약 버튼 */}
                <S.ButtonSection style={params.data. reservationLink != null ? null : {display:'none'}}>
                    <button onClick={(e) => {window.open(params.data.reservationLink,'_blank')}}>
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