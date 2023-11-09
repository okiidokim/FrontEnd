import React, { useMemo, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { RiFileList2Line } from 'react-icons/ri';
import { LiaCommentsSolid } from 'react-icons/lia';
import { AiOutlineHeart, AiFillHeart, AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import './culturalEventDetail.css'
import * as S from './culturalEventDetailStyle';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

let imgUrl1 = 'https://storage.googleapis.com/elegant-bucket/jinwoo.png';
let imgUrl2 = 'https://storage.googleapis.com/elegant-bucket/KakaoTalk_20231109_140116686_01.jpg';
let imgUrl3 = 'https://storage.googleapis.com/elegant-bucket/KakaoTalk_20231109_140116686.jpg';

const state = {
    title: '더 크림 갤러리',     //제목
    category: '팝업스토어',      //카테고리
    isAuthenticated: true,      //방문인증 여부
    likeCount: 123,             //좋아요 수
    bookmarkCount: 321,         //즐겨찾기 수
    description: '프리미엄 티 브랜드 알디프가 론칭한 세컨드 브랜드 크림차. 크림차는 작년 성수에서 연 ‘드림 팝업’의 호응에 힘입어 올해 두 번째 팝업스토어를 공개했다... 더보기더더더더더더더더더더더더더더보기',          //행사 소개
    place: null,                //행사 위치
    wayToCome: null,            //오는 길
    startDate: null,            //시작일
    endDate: null,              //종료일
    isFree: null,               //요금 정보
    storedFileURL: null,        //행사 사진? 모르게씀 DB에있어서
    telephone: '010-1234-3213',            //전화번호
    sns: null,                  //sns 주소
    reservationLink: 'https://github.com/ElegantChildren/FrontEnd',      //예약 링크
}

function culturalEventDetail() {
    // 행사 설명 더보기 스위치
    const [isShowMore, setIsShowMore] = useState(false);
    // 글자 수 제한
    const textLimit = 85;

    // 글자 자르기
    const commenter = useMemo(() => {
        const shortView = state.description.slice(0, textLimit);
        if (state.description.length > textLimit) {
            if (isShowMore)
                return state.description;
            else
                return shortView;
        }
        return state.description;
    }, [isShowMore]);

    return (
        <S.Wrapper>
            <S.Header>
                <S.BackButton>
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
            
            <S.InfoArea>
                <S.TitleArea>
                    {state.title}
                </S.TitleArea>
                <S.CategoryArea>
                    {state.category}
                </S.CategoryArea>
                <S.AuthArea style={ state.isAuthenticated ? {color: '#018C0D'} : {color: 'red'}}>
                    {state.isAuthenticated ? '방문 인증 완료' : '방문 인증 미완료'}
                </S.AuthArea>
                
                <S.PictureArea>
                    <S.MySwiper pagination={true} modules={[Pagination, Autoplay]} slidesPerView={1} autoplay={{delay: 1000, disableOnInteraction: false}} loop={true}>
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

                <S.PersonalButtonArea>
                    <button id= 'likeButton'>
                        <AiOutlineHeart />
                        <b> {state.likeCount} </b>
                    </button>

                    <button id= 'bookmarkButton'>
                        <AiOutlineStar />
                        <b> {state.bookmarkCount} </b>
                    </button>
                </S.PersonalButtonArea>

                <div id='descriptionArea' style={ state.description == null ? {display:'none'} : {display:'block'}}>
                    <S.SubTitle>
                        행사 소개
                    </S.SubTitle>
                    <S.InfoValue>
                        <div id="descriptionInfo" onClick={() => setIsShowMore(!isShowMore)}>
                            { commenter }
                            <span style={{color:'grey'}}>
                                {state.description.length > textLimit ? (isShowMore ? ' 닫기' : ' ...더보기') : null}
                            </span>
                        </div>
                    </S.InfoValue>
                </div>

                <div id='placeArea'>
                    <S.SubTitle>
                        행사 위치
                    </S.SubTitle>
                    <S.InfoValue>
                        { state.place }
                    </S.InfoValue>
                </div>

                <div id='dateArea'>
                    <S.SubTitle>
                        운영 기간
                    </S.SubTitle>
                    <S.InfoValue>
                        시작일 : { state.startDate }
                        <br/>
                        종료일 : { state.endDate }
                    </S.InfoValue>
                </div>

                <div id='costArea'>
                    <S.SubTitle>
                        요금 정보
                    </S.SubTitle>
                    <S.InfoValue>
                        { state.isFree ? "무료" : "유료"}
                    </S.InfoValue>
                </div>

                <div id='contactArea'>
                    <S.SubTitle>   
                        연락처
                    </S.SubTitle>
                    <S.InfoValue>
                        { state.telephone != null ? "전화번호 : " + state.telephone : null }
                        { state.sns != null ? "SNS : " + state.sns : null }
                    </S.InfoValue>
                </div>

                <div id='reservationArea'>
                    <S.SubTitle>
                        예약 정보
                    </S.SubTitle>
                    <S.InfoValue>
                        { state.reservationLink != null ? "예약링크" + state.reservationLink : null }
                    </S.InfoValue>
                    <S.ButtonSection style={ state.reservationLink != null ? null : {display:'none'}}>
                        <button onClick={() => {window.open(state.reservationLink,'_blank')}}>
                            이동하기
                        </button>
                    </S.ButtonSection>
                </div>

            </S.InfoArea>

            <S.ButtonSection>           
                <button>
                    방문 인증
                </button>
            </S.ButtonSection>
        </S.Wrapper> 
    );
};

export default culturalEventDetail;