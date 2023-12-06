import React, { useState, useEffect } from 'react';
import {
  TbHeart,
  TbStar,
  TbMapPin,
  TbMessage,
  TbCoin,
  TbFileImport,
} from 'react-icons/tb';
import { NavLink, useNavigate } from 'react-router-dom';
import './Mypage.css';
import Level0 from '../../assets/pointimg/level0.png';
import Backitem from '../../components/Backitem';
import Admin from '../admin/Admin';
import axios from '../../api/axios';

function Mypage() {
  const navigate = useNavigate();
  const [nick, setNick] = useState('');
  const [img, setImg] = useState('');
  const [isadmin, setAdmin] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/user`);
        setNick(response.data.nickname);
        setImg(response.data.storedFileUrl);
        setAdmin(response.data.role);
      } catch (e) {
        console.log(e);
        if(e.response.data.code === "LOGIN_FAIL") {
          alert('로그인 만료! 다시 로그인 해주세요.');
          navigate(`/`);
      }
      }
    };
    fetchData();
  }, []);

  const fetchLogout = async () => {
    try {
      await axios.get(`/user/logout`);
    } catch (e) {
      console.log(e);
      if(e.response.data.code === "LOGIN_FAIL") {
        alert('로그인 만료! 다시 로그인 해주세요.');
        navigate(`/`);
    }
    }
  };

  return (
    <div className="mypageall">
      <Backitem />
      {isadmin === 'ADMIN' ? (
        <>
          <div className="mypage-body">
            <div className="infomypage">
              <img className="profileimage" src={img}></img>
              {nick}
              <div className="twobutton">
                <NavLink to="/profile-edit">
                  <button className="putprofile">개인정보 수정</button>
                </NavLink>
                <NavLink to="/" onClick={fetchLogout}>
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
              <NavLink to="/" onClick={fetchLogout}>
                <button className="logout">로그아웃</button>
              </NavLink>
            </div>
          </div>
          <div className="buttonl">
            <div className="row1">
              <NavLink to="/report/list">
                <button className="notify">
                  <TbFileImport size="44" />
                  제보
                </button>
              </NavLink>
              <NavLink to="/point-history">
                <button className="pointhis">
                  <TbCoin size="44" />
                  <p>포인트 내역</p>
                </button>
              </NavLink>
              <NavLink to="/review/list">
                <button className="myreviews">
                  <TbMessage size="44" />
                  <p>리뷰 내역</p>
                </button>
              </NavLink>
            </div>
            <div className="row2">
              <NavLink to="/like/list">
                <button className="mylikes">
                  <TbHeart size="44" />
                  <p>좋아요</p>
                </button>
              </NavLink>
              <NavLink to="/bookmark/list">
                <button className="mybookmarks">
                  <TbStar size="44" />
                  <p>즐겨찾기</p>
                </button>
              </NavLink>
              <NavLink to="/visited/list">
                <button className="visited">
                  <TbMapPin size="44" />
                  <p>방문 내역</p>
                </button>
              </NavLink>
            </div>
          </div>
          <div className="pointlevel">
            <div className="pointlevelwrap">
              <img className="level0img" src={Level0} />
              <NavLink to="/level">
                <button className="level">포인트 레벨 안내</button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Mypage;
