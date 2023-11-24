import React, { useState, useEffect } from 'react';
import './ProfileDetail.css';
import Backitem from '../../components/Backitem';
import axios from '../../api/axios';
import { NavLink } from 'react-router-dom';

function ProfileEdit() {
  const [nick, setNick] = useState('');
  const [img, setImg] = useState('');
  const [socialT, setSctype] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`user`);
        setNick(response.data.nickname);
        setImg(response.data.storedFileUrl);
        setSctype(response.data.socialType);
        console.log(response);
      } catch (e) {
        console.log(response);
      }
    };
    fetchData();
  }, []);

  // const [nickput, setNickput] = useState('');
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = axios.patch(`user/profile/nickname`);
  //       setNickput(res.data);
  //       console.log(res);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="allcontents">
      <Backitem />
      <div className="editwrap">
        <div className="sctype">
          {socialT} 로그인
          <hr />
        </div>
        <div className="imgchange">
          <img className="profimg" src={img} />
          <p>{nick}</p>
          <button className="imgchbutton">프로필 이미지 변경</button>
        </div>
        <hr />
        <div className="nickch">
          <div className="nicktextrow">
            <p className="nickbold">닉네임</p>
            <div className="nickstore">
              <button
                className="nickbutton"
                type="submit"
                onChange={(e) => {
                  setNick(e.target.value);
                }}
              >
                저장
              </button>
            </div>
          </div>
          <div>
            <input
              className="nickpatchbox"
              type="text"
              value={nick}
              onChange={(e) => {
                setNick(e.target.nick.value);
              }}
              placeholder="닉네임을 재설정하세요."
            />
          </div>
        </div>
        <hr />
        <div className="withdraw">
          <NavLink to="/login">
            <button className="wdbutton">탈퇴</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ProfileEdit;
