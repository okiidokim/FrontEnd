import React, { useState, useEffect } from 'react';
import {
  TbHeart,
  TbStar,
  TbMapPin,
  TbMessage,
  TbCoin,
  TbFileImport,
} from 'react-icons/tb';

import { NavLink } from 'react-router-dom';
import './Mypage.css';
import Level0 from '../../assets/pointimg/level0.png';
import Backitem from '../../components/Backitem';
import Admin from '../admin/Admin';
import axios from '../../api/axios';

function Mypage() {
  const [nick, setNick] = useState('');
  const [img, setImg] = useState('');
  const isadmin = false;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/user`);
        setNick(response.data.nickname);
        setImg(response.data.storedFileUrl);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  console.log(nick);
  console.log(img);

  return (
    <div className="mypageall">
      <Backitem />
      {isadmin === true ? (
        <>
          <div className="mypage-body">
            <div className="infomypage">
              <img className="profileimage" src={img}></img>
              {nick}
              <div className="twobutton">
                <NavLink to="/profile-edit">
                  <button className="putprofile">개인정보 수정</button>
                </NavLink>
                <NavLink to="/">
                  <button className="logout">로그아웃</button>
                </NavLink>
              </div>
            </div>
            <Admin />
          </div>
        </>
      ) : (
        <div className="mypage-body">
          <div className="infomypage">
            <img className="profileimage" src={img}></img>
            {nick}
            <div className="twobutton">
              <NavLink to="/profile-edit">
                <button className="putprofile">개인정보 수정</button>
              </NavLink>
              <NavLink to="/">
                <button className="logout">로그아웃</button>
              </NavLink>
            </div>
          </div>
          <div className="buttonl">
            <div className="row1">
              <NavLink to="/report/list">
                <button className="notify">
                  <TbFileImport size="40" />
                  제보
                </button>
              </NavLink>
              <NavLink to="/point-history">
                <button className="pointhis">
                  <TbCoin size="40" />
                  <p>포인트 내역</p>
                </button>
              </NavLink>
              <NavLink to="/review/list">
                <button className="myreviews">
                  <TbMessage size="40" />
                  <p>리뷰 내역</p>
                </button>
              </NavLink>
            </div>
            <div className="row2">
              <NavLink to="/like/list">
                <button className="mylikes">
                  <TbHeart size="40" />
                  <p>좋아요</p>
                </button>
              </NavLink>
              <NavLink to="/bookmark/list">
                <button className="mybookmarks">
                  <TbStar size="40" />
                  <p>즐겨찾기</p>
                </button>
              </NavLink>
              <NavLink to="/visited/list">
                <button className="visited">
                  <TbMapPin size="40" />
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
      )}
    </div>
  );
}

export default Mypage;
