import React, { useEffect, useState } from 'react';
import { HiOutlineTrash } from "react-icons/hi";
import { FaRegPenToSquare } from "react-icons/fa6";

import * as S from './style';
import DeleteModal from './deleteModal/DeleteModal';
import { Navigate, useNavigate } from 'react-router-dom';


let rvImg =
  'https://storage.googleapis.com/elegant-bucket/KakaoTalk_20231109_140116686.jpg';

export default function ReviewCard(data) {
  
  const navigate = useNavigate();
  const [isModal, setIsModal] = useState(false)

  const onClickDeleteBtn = () => {
    setIsModal(true);
  };

  const onClickModifyBtn = () => {
    navigate(`/event/${data.data.id}/review`)
  }

  const changeModal = () => {
    setIsModal(false);
  };

  const printStar = (rating) => {
    switch (rating) {
      case 0:
        return (
          <div>
            <S.InActiveStar />
            <S.InActiveStar />
            <S.InActiveStar />
            <S.InActiveStar />
            <S.InActiveStar />
          </div>
        );
      case 1:
        return (
          <div>
            <S.ActiveStar />
            <S.InActiveStar />
            <S.InActiveStar />
            <S.InActiveStar />
            <S.InActiveStar />
          </div>
        );
      case 2:
        return (
          <div>
            <S.ActiveStar />
            <S.ActiveStar />
            <S.InActiveStar />
            <S.InActiveStar />
            <S.InActiveStar />
          </div>
        );
      case 3:
        return (
          <div>
            <S.ActiveStar />
            <S.ActiveStar />
            <S.ActiveStar />
            <S.InActiveStar />
            <S.InActiveStar />
          </div>
        );
      case 4:
        return (
          <div>
            <S.ActiveStar />
            <S.ActiveStar />
            <S.ActiveStar />
            <S.ActiveStar />
            <S.InActiveStar />
          </div>
        );
      case 5:
        return (
          <div>
            <S.ActiveStar />
            <S.ActiveStar />
            <S.ActiveStar />
            <S.ActiveStar />
            <S.ActiveStar />
          </div>
        );
    }
  };

  return (
    <S.ReviewCard>
      <S.UserInfo>
        <S.UserName>{data.data.nickname}</S.UserName>
        <S.Date>{data.data.createdAt}</S.Date>
        {data.data.isMyReview ?
          <S.MyReview>
            <FaRegPenToSquare onClick={onClickModifyBtn}/>
            <HiOutlineTrash onClick={onClickDeleteBtn}/>
          </S.MyReview>
          :
          null
        }
      </S.UserInfo>
      <S.ReviewRow>
        <S.RvImg src={data.data.storedFileUrl} />
        <S.RvComment>{data.data.description}</S.RvComment>
      </S.ReviewRow>
      <S.Star>{printStar(data.data.rating)}</S.Star>
      <S.Event style={{display : data.data.eventImgUrl == null || data.data.eventTitle == null ? 'none' : 'flex'}} >
        <S.EventImg src={data.data.eventImgUrl} />
        <S.EventTitle>{data.data.eventTitle}</S.EventTitle>
      </S.Event>
      
      <div style={{display : isModal ? "block" : "none"}}>
        <DeleteModal eventId={data.data.id} setModal={changeModal}/>
      </div>
    </S.ReviewCard>
  );
}
