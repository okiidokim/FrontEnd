import React, { useState } from 'react';
import { IoHeartOutline, IoStarOutline } from 'react-icons/io5';
import { PiNotificationBold, PiMapPin } from 'react-icons/pi';
import { AiOutlineDollar, AiOutlineMessage } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import './Mypage.css';
import Level0 from '../../assets/pointimg/level0.png';
import Backitem from '../../components/Backitem';

function Mypage() {
  const nickname = '@teletub_kim'; //fetchData 해야 함
  const profimg =
    'https://storage.googleapis.com/elegant-bucket/KakaoTalk_20231109_140116686.jpg';

  return (
    <div className="total">
      <Backitem />
      <div className="mypage-body">
        <div className="information">
          <div className="inforow">
            <img className="profileimage" src={profimg} />
            <div class="twobutton">
              <NavLink to="/profile-edit">
                <button class="putprofile">개인정보 수정</button>
              </NavLink>
              <NavLink to="/login">
                <button class="logout">로그아웃</button>
              </NavLink>
            </div>
          </div>
          <p className="nick">{nickname}</p>
        </div>
        <div className="buttonl">
          <div className="row1">
            <NavLink to="/notify">
              <button className="notify">
                <PiNotificationBold size="40" />
                공지
              </button>
            </NavLink>
            <NavLink to="/point-history">
              <button className="pointhis">
                <AiOutlineDollar size="40" />
                <p>포인트 내역</p>
              </button>
            </NavLink>
            <NavLink to="/review-list">
              <button className="myreviews">
                <AiOutlineMessage size="40" />
                <p>리뷰 내역</p>
              </button>
            </NavLink>
          </div>
          <div className="row2">
            <NavLink to="/like-list">
              <button className="mylikes">
                <IoHeartOutline size="40" />
                <p>좋아요</p>
              </button>
            </NavLink>
            <NavLink to="/bookmark-list">
              <button className="mybookmarks">
                <IoStarOutline size="40" />
                <p>즐겨찾기</p>
              </button>
            </NavLink>
            <NavLink to="/visited-list">
              <button className="visited">
                <PiMapPin size="40" />
                <p>방문 내역</p>
              </button>
            </NavLink>
          </div>
        </div>
        <div className="pointlevel">
          <div className="pointlevelwrap">
            <img className="level0img" src={Level0} />
            <NavLink to="/level">
              <button className="level">catchy 레벨 확인</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mypage;
