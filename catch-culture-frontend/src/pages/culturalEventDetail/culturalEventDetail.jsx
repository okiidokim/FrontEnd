import React from 'react';
import styled from "styled-components";
import { IoIosArrowBack } from 'react-icons/io';
import { RiFileList2Line } from 'react-icons/ri';
import { LiaCommentsSolid } from 'react-icons/lia';
import { AiOutlineHeart, AiFillHeart, AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import './culturalEventDetail.css'

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

const Header = styled.div`
    width:100%;
    height:75px;
    display:flex;
    border: 1px solid black;
    justify-content: flex-start;
    align-items: center;

    .backButton {
        display: flex;
        margin-right: auto;
        margin-left: 30px;
        border-radius: 30px;
        align-items: center;
        aspect-ratio: 1;
        background-color: white;
        width: 24px;
        height: 24px;
    }

    .backButton > * {
        width:16px;
        height:16px;
    }

    .pageChange {
        margin-right: 30px;
    }

    .pageChange > * {
        font-size: 8px;
        width: 64px;
        height: 24px;
        background-color: white;
    }

    .pageChange > * .active {
        background-color: #247E2C;
        color:white;
    }

    .pageChange button:first-child {
        border-radius: 12px 0px 0px 12px;
        margin-right: -2px;
    }

    .pageChange button:last-child {
        border-radius: 0px 12px 12px 0px;
    }
`;

const AuthArea = styled.div`
    font-size: 12px;
`;

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
            
            <div id="infoArea">
                <div id='titleArea'>
                    {state.title}
                </div>
                <div id='categoryArea'>
                    {state.category}
                </div>
                <AuthArea style={ state.isAuthenticated ? {color: '#018C0D'} : {color: 'red'}}>
                    {state.isAuthenticated ? '방문 인증 완료' : '방문 인증 미완료'}
                </AuthArea>
                
                <div id='pictureArea'>
                    
                </div>
                <div id='personalButtonArea'>
                    <button id= 'likeButton'>
                        <AiOutlineHeart />
                        <text> {state.likeCount} </text>
                    </button>

                    <button id= 'bookmarkButton'>
                        <AiOutlineStar />
                        <text> {state.bookmarkCount} </text>
                    </button>
                </div>
                <div id='descriptionArea' style={ state.description == null ? {display:'none'} : {}}>
                    <div class='subTitle'>
                        행사 소개
                    </div>
                    <div class='infoValue'>
                        프리미엄 어쩌구
                    </div>
                </div>
                <div id='placeArea'>
                    <div class='subTitle'>
                        행사 위치
                    </div>
                    <div class='infoValue'>
                        집
                    </div>
                </div>
                <div id='dateArea'>
                    <div class='subTitle'>
                        운영 기간
                    </div>
                    <div class='infoValue'>
                        시작일 : 
                        <br/>
                        종료일 : 
                    </div>
                </div>
                <div id='costArea'>
                    <div class='subTitle'>
                        요금 정보
                    </div>
                    <div class='infoValue'></div>
                </div>
                <div id='contactArea'>
                    <div class='subTitle'>
                        연락처
                    </div>
                    <div class='infoValue'></div>
                </div>
                <div id='reservationArea'>
                    <div class='subTitle'>
                        예약 정보
                    </div>
                    <div class='infoValue'></div>
                </div>
            </div>
            <div id="visitAuthSection">
                <button>
                    이동하기
                </button>
                <button>
                    방문 인증
                </button>
            </div>
        </div> 
    );
};

export default culturalEventDetail;