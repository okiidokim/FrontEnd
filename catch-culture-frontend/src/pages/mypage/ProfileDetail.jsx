import React, { useState, useEffect } from 'react';
import './ProfileDetail.css';
import Backitem from '../../components/Backitem';
import axios from '../../api/axios';
import { NavLink, useNavigate } from 'react-router-dom';

function NickUpdate(props) {
  const navigate = useNavigate();
  const [nick, setNick] = useState('');

  const nickPut = async (nickname) => {
    try {
      await axios.patch(`user/profile/nickname?nickName=${nick}`, {
        nickName: nickname,
      });

      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`user`);
        setNick(response.data.nickname);
      } catch (e) {
        console.log(response);
        if(e.response.data.code === "LOGIN_FAIL") {
          alert('로그인 만료! 다시 로그인 해주세요.');
          navigate(`/`);
      }
      }
    };
    fetchData();
  }, []);

  return (
    <div className="nickchangebox">
      <form
        onSubmit={(e) => {
          nickPut(nick);
          e.preventDefault();
        }}
      >
        <div className="nicktextrow">
          <p>닉네임</p>
          <p>
            <input
              type="submit"
              className="nickchangebutton"
              value="저장"
            ></input>
          </p>
        </div>
        <p>
          <input
            type="text"
            placeholder="닉네임을 설정하세요."
            value={nick}
            onChange={(e) => {
              setNick(e.target.value);
            }}
            className="nicktextbox"
          ></input>
        </p>
      </form>
    </div>
  );
}

function ProfileEdit() {
  const [nick, setNick] = useState('');
  const [img, setImg] = useState('');
  const [socialType, setSocialType] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`user`);
        setNick(response.data.nickname);
        setImg(response.data.storedFileUrl);
        setSocialType(response.data.socialType);
      } catch (e) {
        console.log(response);
        if(e.response.data.code === "LOGIN_FAIL") {
          alert('로그인 만료! 다시 로그인 해주세요.');
          navigate(`/`);
      }
      }
    };
    fetchData();
  }, []);

  return (
    <div className="allcontents">
      <Backitem />
      <div className="editwrap">
        <div className="sctype">
          {socialType} 로그인
          <hr />
        </div>
        <div className="imgchange">
          <img className="profimg" src={img} />
          <p>{nick}</p>
          <button className="imgchbutton">프로필 이미지 변경</button>
        </div>
        <hr />
        <NickUpdate
          nick={nick}
        />
        <hr />
        <div className="withdraw">
          <NavLink to="/">
            <button className="wdbutton">탈퇴</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ProfileEdit;
