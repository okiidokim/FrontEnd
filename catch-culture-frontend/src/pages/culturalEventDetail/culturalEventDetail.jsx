import React, { useEffect, useMemo, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { RiFileList2Line } from 'react-icons/ri';
import { LiaCommentsSolid } from 'react-icons/lia';
import { AiOutlineHeart, AiFillHeart, AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

import * as S from './culturalEventDetailStyle';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import axios from 'axios';

let imgUrl1 = 'https://storage.googleapis.com/elegant-bucket/jinwoo.png';
let imgUrl2 = 'https://storage.googleapis.com/elegant-bucket/KakaoTalk_20231109_140116686_01.jpg';
let imgUrl3 = 'https://storage.googleapis.com/elegant-bucket/KakaoTalk_20231109_140116686.jpg';


function culturalEventDetail() {

    // TODO : useState 선언 최초 로딩 쪽으로 옮기기, 초기값 세팅
    // 문화 행사 id 어떻게 가져올지
    const [culturalEventId, setCulturalEventId] = useState(1);
    // /**
    //  * 변경됨
    //  */
    const [storedFileURL, setStoredFileURL] = useState(''); // string: 이미지 URL 
    const [startDate, setStartDate] = useState(''); // LocalDateTime: 시작일
    const [endDate, setEndDate] = useState(''); // LocalDateTime: 종료일
    const [title, setTitle] = useState('더 크림 갤러리'); // String: 제목
    const [place, setPlace] = useState(''); // String: 행사 위치
    const [category, setCategory] = useState('팝업스토어'); // Category(): 카테고리 Enumerated(EnumType.STRING)
    const [description, setDescription] = useState('프리미엄 티 브랜드 알디프가 론칭한 세컨드 브랜드 크림차. 크림차는 작년 성수에서 연 ‘드림 팝업’의 호응에 힘입어 올해 두 번째 팝업스토어를 공개했다. 프리미엄 티 브랜드 알디프가 론칭한 세컨드 브랜드 크림차. 크림차는 작년 성수에서 연 ‘드림 팝업’의 호응에 힘입어 올해 두 번째 팝업스토어를 공개했다.'); // String: 행사 설명
    const [wayToCome, setWayToCome] = useState(''); // String: 오시는길
    const [sns, setSns] = useState(''); // String: sns 주소
    const [telephone, setTelephone] = useState('010-1234-3213') // String: 전화번호
    const [isFree, setIsFree] = useState(false) // Boolean: 요금
    const [reservationLink, setReservationLink] = useState('https://github.com/ElegantChildren/FrontEnd') // String: 예약 링크
    // /**
    //  * 여기부턴 git에 없는거
    //  */
    const [isAuthenticated, setIsAuthenticated] = useState(true) // Boolean: 인증 여부
    const [likeCount, setLikeCount] = useState(123) // int: 좋아요 수
    const [bookmarkCount, setBookmarkCount] = useState(321) // int: 즐겨찾기 수
    const [isLike, setIsLike] = useState(true) // Boolean: 좋아요 여부
    const [isBookmark, setIsBookmark] = useState(false) // Boolean: 즐겨찾기 여부

    // // 최초 로딩시 값 불러오기
    // useEffect(() => {
    //     axios.get('http://elegant.kro.kr/cultural-event/' + culturalEventId)
    //         .then(response => {
    //             console.log(response.data);
    //             setIsAuthenticated(response.data.authenticated);
    //         })
    // }, []);


    // 페이지 이동을 위한 변수
    const navigate = useNavigate();

    // 페이지 뒤로가기
    const onClickBackButton = () => {
        navigate(-1);
    }

    // 좋아요 버튼 클릭
    const onClickLikeButton = async (e) => {
        console.log(isLike);
        if(isLike) {
            setLikeCount(likeCount-1);
            /***********************
             * TODO 좋아요 빼기 api *
             ***********************/
            // await axios.delete('http://elegant.kro.kr/cultural-event/'+{culturalEventId}+'/like')
            //     .then(() => this.setLikeCount(likeCount-1));
        } else {
            setLikeCount(likeCount+1);
            /***********************
             * TODO 좋아요 추가 api *
             ***********************/
            // await axios.post('http://elegant.kro.kr/cultural-event/'+{culturalEventId}+'/like')
            //     .then(() => this.setLikeCount(likeCount+1));
        }
        setIsLike(!isLike);
    }

    // 즐겨찾기 버튼 클릭
    const onClickBookmarkButton = async (e) => {
        console.log(isBookmark);
        if(isBookmark) {
            setBookmarkCount(bookmarkCount-1);
            /***********************
             * TODO 즐겨찾기 빼기 api *
             ***********************/
            // await axios.delete('http://elegant.kro.kr/cultural-event/'+{culturalEventId}+'/star')
            //     .then(() => this.setBookmarkCount(bookmarkCount-1));
        } else {
            setBookmarkCount(bookmarkCount+1);
            /***********************
             * TODO 즐겨찾기 추가 api *
             ***********************/
            // await axios.post('http://elegant.kro.kr/cultural-event/'+{culturalEventId}+'/star')
            //     .then(() => this.setBookmarkCount(bookmarkCount+1));
        }
        setIsBookmark(!isBookmark);
    }

    // 방문인증 버튼 클릭
    const onClickAuthButton = () => {
        if(!isAuthenticated)
            navigate('/');
    }

    // 행사 설명 더보기 스위치
    const [isShowMore, setIsShowMore] = useState(false);
    // 글자 수 제한
    const textLimit = 85;

    // 글자 자르기
    const commenter = useMemo(() => {
        const shortView = description.slice(0, textLimit);
        if (description.length > textLimit) {
            if (isShowMore)
                return description;
            else
                return shortView;
        }
        return description;
    }, [isShowMore]);

    

    return (
        <S.Wrapper>
            {/* 헤더 영역 (상단 고정) */}
            <S.Header>
                <S.BackButton onClick={onClickBackButton}> 
                    <IoIosArrowBack />
                </S.BackButton>
                <S.PageChangeArea>
                    <S.DetailInfoButton>
                        <RiFileList2Line /> 
                        <b>상세정보</b>
                    </S.DetailInfoButton>
                    <S.EventReviewButton>
                        <LiaCommentsSolid /> 
                        <b>리뷰</b>
                    </S.EventReviewButton>
                </S.PageChangeArea>
            </S.Header>
            
            {/* 문화 행사 정보 영역 */}
            <S.InfoArea>
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
                
                {/* 사진 영역 */}
                <S.PictureArea>
                    <S.MySwiper pagination={true} modules={[Pagination, Autoplay]} slidesPerView={1} autoplay={{delay: 2000, disableOnInteraction: false}} loop={true}>
                        <SwiperSlide>
                            <S.SwiperSlideImg src={imgUrl2} alt="배너 이미지" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <S.SwiperSlideImg src={imgUrl1} alt="배너 이미지" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <S.SwiperSlideImg src={imgUrl3} alt="배너 이미지" />
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

                <div id='descriptionArea' style={ description == null ? {display:'none'} : {display:'block'}}>
                    <S.SubTitle>
                        행사 소개
                    </S.SubTitle>
                    <S.InfoValue>
                        <div id="descriptionInfo" onClick={() => setIsShowMore(!isShowMore)}>
                            { commenter }
                            {/* 더보기 버튼 */}
                            <span style={{color:'grey'}}>
                                {description.length > textLimit ? (isShowMore ? ' 닫기' : ' ...더보기') : null}
                            </span>
                        </div>
                    </S.InfoValue>
                </div>

                <div id='placeArea'>
                    <S.SubTitle>
                        행사 위치
                    </S.SubTitle>
                    <S.InfoValue>
                        { place }
                    </S.InfoValue>
                </div>

                <div id='dateArea'>
                    <S.SubTitle>
                        운영 기간
                    </S.SubTitle>
                    <S.InfoValue>
                        <t>시작일 : { startDate }</t>
                        <t>종료일 : { endDate }</t>
                    </S.InfoValue>
                </div>

                <div id='costArea'>
                    <S.SubTitle>
                        요금 정보
                    </S.SubTitle>
                    <S.InfoValue>
                        { isFree ? "무료" : "유료"}
                    </S.InfoValue>
                </div>

                <div id='contactArea'>
                    <S.SubTitle>   
                        연락처
                    </S.SubTitle>
                    <S.InfoValue>
                        <t>{ telephone != null ? "전화번호 : " + telephone : null }</t>
                        <t>{ sns != null ? "SNS : " + sns : null }</t>
                    </S.InfoValue>
                </div>

                <div id='reservationArea'>
                    <S.SubTitle>
                        예약 정보
                    </S.SubTitle>
                    {/* 예약 링크 설명 */}
                    <S.InfoValue>
                        { reservationLink != null ? "예약링크 : " + reservationLink : null }
                    </S.InfoValue>
                    {/* 예약 버튼 */}
                    <S.ButtonSection style={ reservationLink != null ? null : {display:'none'}}>
                        <button onClick={() => {window.open(reservationLink,'_blank')}}>
                            이동하기
                        </button>
                    </S.ButtonSection>
                </div>

            </S.InfoArea>

            <S.ButtonSection>           
                <button onClick={onClickAuthButton} disabled={isAuthenticated} style={ isAuthenticated ? {backgroundColor: '#A7A7A7'} : {backgroundColor: '#018C0D'}}>
                    방문 인증
                </button>
            </S.ButtonSection>
        </S.Wrapper> 
    );
};

export default culturalEventDetail;