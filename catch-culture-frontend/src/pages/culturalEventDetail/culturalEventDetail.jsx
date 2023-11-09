import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { RiFileList2Line } from 'react-icons/ri';
import { LiaCommentsSolid } from 'react-icons/lia';
import { AiOutlineHeart, AiFillHeart, AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import './culturalEventDetail.css'
import * as S from './culturalEventDetailStyle';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import imgUrl1 from '../../assets/img/home.png'
import imgUrl2 from '../../assets/img/map.png'
import imgUrl3 from '../../assets/img/map.png'


//let imgUrl1 = 'https://storage.googleapis.com/elegant-bucket/jinwoo.png';
//let imgUrl2 = 'https://storage.googleapis.com/elegant-bucket/KakaoTalk_20231109_140116686_01.jpg';
//let imgUrl3 = 'https://storage.googleapis.com/elegant-bucket/KakaoTalk_20231109_140116686.jpg';

const state = {
    title: '더 크림 갤러리',            //제목
    category: '팝업스토어',         //카테고리
    isAuthenticated: true,      //방문인증 여부
    likeCount: 123,             //좋아요 수
    bookmarkCount: 321,         //즐겨찾기 수
    description: null,          //행사 소개
    place: null,                //행사 위치
    wayToCome: null,            //오는 길
    startDate: null,            //시작일
    endDate: null,              //종료일
    isFree: null,               //요금 정보
    storedFileURL: null,        //행사 사진? 모르게씀 DB에있어서
    telephont: null,            //전화번호
    sns: null,                  //sns 주소
    reservationLink: null,      //예약 링크
}

function culturalEventDetail() {
    return (
        <S.Wrapper>
            <S.Header>
                <S.BackButton>
                    <IoIosArrowBack />
                </S.BackButton>
                <S.PageChangeArea>
                    <S.DetailInfoButton>
                        <RiFileList2Line /> 
                        <text>상세정보</text>
                    </S.DetailInfoButton>
                    <S.EventReviewButton>
                        <LiaCommentsSolid /> 
                        <text>리뷰</text>
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
                    <S.MySwiper pagination={true} modules={[Pagination]} slidesPerView={1}>
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
                        <text> {state.likeCount} </text>
                    </button>

                    <button id= 'bookmarkButton'>
                        <AiOutlineStar />
                        <text> {state.bookmarkCount} </text>
                    </button>
                </S.PersonalButtonArea>

                <div id='descriptionArea' style={ state.description == null ? {display:'none'} : {}}>
                    <S.SubTitle>
                        행사 소개
                    </S.SubTitle>
                    <S.InfoValue>
                        프리미엄 어쩌구
                    </S.InfoValue>
                </div>

                <div id='placeArea'>
                    <S.SubTitle>
                        행사 위치
                    </S.SubTitle>
                    <S.InfoValue>
                        집
                    </S.InfoValue>
                </div>

                <div id='dateArea'>
                    <S.SubTitle>
                        운영 기간
                    </S.SubTitle>
                    <S.InfoValue>
                        시작일 : 
                        <br/>
                        종료일 : 
                    </S.InfoValue>
                </div>

                <div id='costArea'>
                    <S.SubTitle>
                        요금 정보
                    </S.SubTitle>
                    <S.InfoValue>
                    </S.InfoValue>
                </div>

                <div id='contactArea'>
                    <S.SubTitle>   
                        연락처
                    </S.SubTitle>
                    <S.InfoValue>
                    </S.InfoValue>
                </div>

                <div id='reservationArea'>
                    <S.SubTitle>
                        예약 정보
                    </S.SubTitle>
                    <S.InfoValue>
                    </S.InfoValue>
                </div>

            </S.InfoArea>

            <S.ButtonArea>
                <button>
                    이동하기
                </button>
                <button>
                    방문 인증
                </button>
            </S.ButtonArea>
        </S.Wrapper> 
    );
};

export default culturalEventDetail;