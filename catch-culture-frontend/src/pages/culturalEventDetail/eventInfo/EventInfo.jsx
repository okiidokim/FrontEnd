import * as S from './style.jsx';
import { useEffect, useState, useMemo } from 'react';
import { AiOutlineHeart, AiFillHeart, AiOutlineStar, AiFillStar } from 'react-icons/ai';

import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

// api
import axios from '../../../api/axios';

function EventInfo (params) {

    let _isInit = false;

    let imgUrl1 = 'https://storage.googleapis.com/elegant-bucket/jinwoo.png';
    let imgUrl2 = 'https://storage.googleapis.com/elegant-bucket/KakaoTalk_20231109_140116686_01.jpg';
    let imgUrl3 = 'https://storage.googleapis.com/elegant-bucket/KakaoTalk_20231109_140116686.jpg';


    const [storedFileURL, setStoredFileURL] = useState(); // string: 이미지 URL 
    const [startDate, setStartDate] = useState(); // LocalDateTime: 시작일
    const [endDate, setEndDate] = useState(); // LocalDateTime: 종료일
    const [title, setTitle] = useState(); // String: 제목
    const [place, setPlace] = useState(); // String: 행사 위치
    const [category, setCategory] = useState(); // Category(): 카테고리 Enumerated(EnumType.STRING)
    const [description, setDescription] = useState(' '); // String: 행사 설명
    const [wayToCome, setWayToCome] = useState(); // String: 오시는길
    const [sns, setSns] = useState(); // String: sns 주소
    const [telephone, setTelephone] = useState() // String: 전화번호
    const [isFree, setIsFree] = useState(false) // Boolean: 요금
    const [reservationLink, setReservationLink] = useState() // String: 예약 링크

    const [isAuthenticated, setIsAuthenticated] = useState() // Boolean: 인증 여부
    const [likeCount, setLikeCount] = useState(0) // int: 좋아요 수
    const [bookmarkCount, setBookmarkCount] = useState(0) // int: 즐겨찾기 수
    const [isLike, setIsLike] = useState() // Boolean: 좋아요 여부
    const [isBookmark, setIsBookmark] = useState() // Boolean: 즐겨찾기 여부

    const fetchData = async () => {
        console.log(params);
        try {
            const response = axios.get(
                `cultural-event/${parseInt(params.EventId)}`
            )
            
            setStoredFileURL((await response).data.culturalEventDetail.storedFileUrl);
            setStartDate((await response).data.culturalEventDetail.startDate);
            setEndDate((await response).data.culturalEventDetail.endDate);
            setTitle((await response).data.culturalEventDetail.title);
            setPlace((await response).data.culturalEventDetail.place);
            setCategory((await response).data.culturalEventDetail.category);
            if((await response).data.culturalEventDetail.description != null) {
                setDescription((await response).data.culturalEventDetail.description);
            }
            setReservationLink((await response).data.culturalEventDetail.reservationLink);
            setWayToCome((await response).data.culturalEventDetail.wayToCome);
            setSns((await response).data.culturalEventDetail.sns);
            setTelephone((await response).data.culturalEventDetail.telephone);
            setIsFree((await response).data.culturalEventDetail.isFree);
            setIsAuthenticated((await response).data.authenticated);
            setIsBookmark((await response).data.bookmarked);
            setIsLike((await response).data.liked);
            setLikeCount((await response).data.likeCount);
            setBookmarkCount((await response).data.viewCount);
            
        } catch (e) {
            console.log(e);
        }
        _isInit = true;
        console.log(_isInit);
    }

    // 최초 로딩시 값 불러오기
    useEffect(() => {
       fetchData();
       console.log(_isInit);
    }, []);
    

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

     
    

    // 좋아요 버튼 클릭
    const onClickLikeButton = () => {
        setIsLike(!isLike);
        console.log(_isInit);
    }

    useEffect(() => {
        if(!_isInit) {
            
            return;
        }
        
        fetchLike();
    }, [isLike]);

    const fetchLike = async () => {
        
        try {
            if(isLike) {
                const response = axios.delete(
                    `cultural-event/${parseInt(params.EventId)}/like`
                );
                setLikeCount(likeCount-1);
            } else {
                const response = axios.post(
                    `cultural-event/${parseInt(params.EventId)}/like`,
                );
                setLikeCount(likeCount+1);
            }
        } catch (e) {
            console.log(e);
        }
        
    }

    // 즐겨찾기 버튼 클릭
    const onClickBookmarkButton = () => {
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
                    <div>{ place }</div>
                    <div>오시는길 : {wayToCome}</div>
                </S.InfoValue>
                </div>

                <div id='dateArea'>
                <S.SubTitle>
                    운영 기간
                </S.SubTitle>
                <S.InfoValue>
                    <div>시작일 : { startDate }</div>
                    <div>종료일 : { endDate }</div>
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
                    <div>{ telephone != null ? "전화번호 : " + telephone : null }</div>
                    <div>{ sns != null ? "SNS : " + sns : null }</div>
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

            <S.ButtonSection>           
                <button onClick={onClickAuthButton} disabled={isAuthenticated} style={ isAuthenticated ? {backgroundColor: '#A7A7A7'} : {backgroundColor: '#018C0D'}}>
                    방문 인증
                </button>
            </S.ButtonSection>
        </S.EventInfo>
    );
}

export default EventInfo;