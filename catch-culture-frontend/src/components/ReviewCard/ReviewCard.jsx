import React, { useState, useEffect } from 'react';
import { HiOutlineTrash } from "react-icons/hi";
import { FaRegPenToSquare } from "react-icons/fa6";

import * as S from './style';
import DeleteModal from './deleteModal/DeleteModal';

import axios from '../../api/axios'

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
  const [isModal, setIsModal] = useState(false);
  const [isModify, setIsModify] = useState(false);
  const [modifyText, setModifyText] = useState(data.data.description);
  const [description, setDescription] = useState(data.data.description);

  const onClickDeleteBtn = () => {
    setIsModal(true);
  };

  const onClickModifyBtn = () => {
    setModifyText(description)
    setIsModify(true);
  }

  const changeModal = () => {
    setIsModal(false);
  };

  const handleModifyText = ({ target: {value}}) => {
    setModifyText(value);
  }

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

  const handleModify = async() => {
    if(modifyText.length >= 30) {
      try {
        const requestBody = {
          "reviewId": data.data.reviewId,
          "description": modifyText
        }

        const response = await axios({
          method: "PUT",
          url: `review/${data.data.id}/my-review`,
          mode: "cors",
          data: requestBody,
        });

        if(response.status === 200) {
          setDescription(modifyText)
          setIsModify(false)
        }
        
      } catch (e) {
        console.log(e);
        if(e.data.code === "LOGIN_FAIL") {
            alert('로그인 만료! 다시 로그인 해주세요.');
            navigate(`/`);
        }
        if(e.data.code === "INVALID_EVENT_ID") {
            alert("존재하지 않는 문화 행사 ID 입니다.");
            navigate(`/main`);
        }
      }
    }
  }

  return (
    <S.ReviewCard>
      <S.UserInfo>
        <S.UserName>{data.data.nickname}</S.UserName>
        <S.DateArea>{data.data.createdAt}</S.DateArea>
        {data.data.isMyReview ?
          <S.MyReview>
            {!isModify && (
              <>
              <FaRegPenToSquare onClick={onClickModifyBtn}/>
              <HiOutlineTrash onClick={onClickDeleteBtn}/>
              </>
            )}
          </S.MyReview>
          :
          null
        }
      </S.UserInfo>
      <S.ReviewRow>
        {/* src는 이미지 파일에서 양쪽 ''가 있으면 경로 오류 때문에 substr로 ''를 제거하고 지정 
            다시 원래대로 실행돼서 복구
          .substr(0,data.data.storedFileUrl.length-2)
        */}
        <S.RvImg src={data.data.storedFileUrl[0] == null ? null : data.data.storedFileUrl} style={{display : data.data.storedFileUrl[0] == null ? 'none': "flex"}}/>
        {
          isModify ? 
          <S.ModifyForm>
            <S.ModifyTextArea
              minLength={30}
              value={modifyText}
              onChange={handleModifyText}
              required
            >
              {modifyText}
            </S.ModifyTextArea>
            <S.ModifyButtonArea>
              <S.ModifyButton onClick={(e) => {setIsModify(false)}}>
                취소
              </S.ModifyButton>
              <S.ModifyButton onClick={handleModify}>
                변경
              </S.ModifyButton>
            </S.ModifyButtonArea>
          </S.ModifyForm>
          :
          <S.RvComment>{description}</S.RvComment>
        }
      </S.ReviewRow>
      {!isModify &&(
      <>
        <S.Star>{printStar(data.data.rating)}</S.Star>
        <S.Event style={{display : data.data.eventImgUrl == null || data.data.eventTitle == null ? 'none' : 'flex'}} >
          <S.EventImg src={data.data.eventImgUrl} />
          <S.EventTitle>{data.data.eventTitle}</S.EventTitle>
        </S.Event>
      </>
      )}
      {isModal && (
        <DeleteModal reviewId={data.data.reviewId} EventId={data.data.id} setModal={changeModal} fetchMyReview={data.fetchMyReview}/>
      )}
    </S.ReviewCard>
  );
}
