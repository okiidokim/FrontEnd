import React from 'react';
import styled from "styled-components";
import { IoIosArrowBack } from 'react-icons/io';
import { RiFileList2Line } from 'react-icons/ri';
import { LiaCommentsSolid } from 'react-icons/lia';
import { AiFillHeart, AiFillStar } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import './culturalEventDetail.css'

const state = {
    title: null,            //제목
    category: null,         //카테고리
    isAuthenticated: false, //방문인증 여부
    likeCount: null,        //좋아요 수
    description: null,      //행사 소개
    place: null,            //행사 위치
    wayToCome: null,        //오는 길
    startDate: null,        //시작일
    endDate: null,          //종료일
    isFree: null,           //요금 정보
    storedFileURL: null,    //행사 사진? 모르게씀 DB에있어서
    telephont: null,        //전화번호
    sns: null,              //sns 주소
    reservationLink: null,  //예약 링크
}

function culturalEventDetail() {
    return (
        <div class="content">
            <Header>
                <button class='backButton'>
                    <IoIosArrowBack />
                </button>
                <div class='pageChange'>
                    <button id='detailInfo'>
                        <RiFileList2Line /> 상세정보
                    </button>
                    <button id='eventReview'>
                        <LiaCommentsSolid /> 리뷰
                    </button>
                </div>
            </Header>
            <div id="info">
                <div id='titleArea'>
                    
                </div>
                <div id='categoryArea'>

                </div>
                <div id='authArea'>

                </div>
                <div id='pictureArea'>

                </div>
                <div id='personalButtonArea'>

                </div>
                <div id='descriptionArea'>

                </div>
                <div id='placeArea'>

                </div>
                <div id='dateArea'>
                    
                </div>
                <div id='costArea'>

                </div>
                <div id='reservationArea'>

                </div>
            </div>
            <div id="visitAuthSection">
                <button>
                    
                </button>
            </div>
        </div> 
    );
};

export default culturalEventDetail;