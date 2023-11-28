import React, { useState } from 'react';
import { HiOutlineTrash } from "react-icons/hi";
import { FaRegPenToSquare } from "react-icons/fa6";

import * as S from './style';
import DeleteModal from './deleteModal/DeleteModal';
import { useNavigate } from 'react-router-dom';

/******************************************************
 * @param data = {                                    *
 *   "id": int,                                       *
 *   "nickname": string"("username"),                 *
 *   "description": string("de"scription"),           *
 *   "storedFileUrl": string([url, url2]),            *
 *   "rating": int(rating),                           *
 *   "createdAt": string("yyyy-mm-dd"),               *
 *   "eventImgUrl" : string([url1]),                  *
 *   "eventTitle": string(event description),         *
 *   "isMyReview": true,                              *
 *   "reviewId": int(reviewId(기본 키)                 *
 * }                                                  *
 ******************************************************/ 

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
        {/* src는 이미지 파일에서 양쪽 ''가 있으면 경로 오류 때문에 substr로 ''를 제거하고 지정 */}
        {console.log(data.data.storedFileUrl)}
        <S.RvImg src={data.data.storedFileUrl[0] == null ? null : data.data.storedFileUrl.substr(1,data.data.storedFileUrl.length-2)} style={{display : data.data.storedFileUrl == null ? 'none': "flex"}}/>
        <S.RvComment>{data.data.description}</S.RvComment>
      </S.ReviewRow>
      <S.Star>{printStar(data.data.rating)}</S.Star>
      <S.Event style={{display : data.data.eventImgUrl == null || data.data.eventTitle == null ? 'none' : 'flex'}} >
        <S.EventImg src={data.data.eventImgUrl} />
        <S.EventTitle>{data.data.eventTitle}</S.EventTitle>
      </S.Event>
      
      {isModal && (
        <DeleteModal reviewId={data.data.reviewId} EventId={data.data.id} setModal={changeModal} fetchMyReview={data.fetchMyReview}/>
      )}
    </S.ReviewCard>
  );
}
