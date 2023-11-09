import React from 'react';
import styled from "styled-components";
import { IoIosArrowBack } from 'react-icons/io';
import { RiFileList2Line } from 'react-icons/ri';
import { LiaCommentsSolid } from 'react-icons/lia';
import { AiOutlineHeart, AiFillHeart, AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
//import './culturalEventDetail.css'
import * as style from './CulturalEventDetailStyle.jsx';
import { SwiperSlide } from 'swiper/react';
//import 'swiper/css';
//import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


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

function CulturalEventDetail() {
    return (
        <div>
            <style.Header>
                <style.BackButton>
                    <IoIosArrowBack />
                </style.BackButton>
                <style.PageChangeArea>
                    <style.DetailInfoButton>
                        <RiFileList2Line /> 상세정보
                    </style.DetailInfoButton>
                    <style.EventReviewButton>
                        <LiaCommentsSolid /> 리뷰
                    </style.EventReviewButton>
                </style.PageChangeArea>
            </style.Header>
            
            <style.InfoArea>
                <style.TitleArea>
                    {state.title}
                </style.TitleArea>
                <style.CategoryArea>
                    {state.category}
                </style.CategoryArea>
                <style.AuthArea style={ state.isAuthenticated ? {color: '#018C0D'} : {color: 'red'}}>
                    {state.isAuthenticated ? '방문 인증 완료' : '방문 인증 미완료'}
                </style.AuthArea>
                
                <style.PictureArea>
                    <style.MySwiper pagination={true} modules={[Pagination]}>
                        <SwiperSlide>
                        <style.SwiperSlideImg src='https://storage.googleapis.com/elegant-bucket/jinwoo.png' alt="배너 이미지" />
                        </SwiperSlide>
                        <SwiperSlide>
                        <style.SwiperSlideImg src='https://storage.googleapis.com/elegant-bucket/jinwoo.png' alt="배너 이미지" />
                        </SwiperSlide>
                        <SwiperSlide>
                        <style.SwiperSlideImg src='https://storage.googleapis.com/elegant-bucket/jinwoo.png' alt="배너 이미지" />
                        </SwiperSlide>
                    </style.MySwiper>
                </style.PictureArea>
                <style.PersonalButtonArea>
                    <button id= 'likeButton'>
                        <AiOutlineHeart />
                        <text> {state.likeCount} </text>
                    </button>

                    <button id= 'bookmarkButton'>
                        <AiOutlineStar />
                        <text> {state.bookmarkCount} </text>
                    </button>
                </style.PersonalButtonArea>
                <div id='descriptionArea' style={ state.description == null ? {display:'none'} : {}}>
                    <style.SubTitle>
                        행사 소개
                    </style.SubTitle>
                    <style.InfoValue>
                        프리미엄 어쩌구
                    </style.InfoValue>
                </div>
                <div id='placeArea'>
                    <styled.SubTitle>
                        행사 위치
                    </styled.SubTitle>
                    <style.InfoValue>
                        집
                    </style.InfoValue>
                </div>
                <div id='dateArea'>
                    <styled.SubTitle>
                        운영 기간
                    </styled.SubTitle>
                    <style.InfoValue>
                        시작일 : 
                        <br/>
                        종료일 : 
                    </style.InfoValue>
                </div>
                <div id='costArea'>
                    <styled.SubTitle>
                        요금 정보
                    </styled.SubTitle>
                    <style.InfoValue>
                    </style.InfoValue>
                </div>
                <div id='contactArea'>
                    <styled.SubTitle>   
                        연락처
                    </styled.SubTitle>
                    <style.InfoValue>
                    </style.InfoValue>
                </div>
                <div id='reservationArea'>
                    <styled.SubTitle>
                        예약 정보
                    </styled.SubTitle>
                    <style.InfoValue>
                    </style.InfoValue>
                </div>
            </style.InfoArea>
            <style.ButtonArea>
                <button>
                    이동하기
                </button>
                <button>
                    방문 인증
                </button>
            </style.ButtonArea>
        </div> 
    );
};

export default CulturalEventDetail;