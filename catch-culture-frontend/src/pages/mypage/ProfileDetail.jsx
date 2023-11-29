import React, { useState, useEffect } from 'react';
import './ProfileDetail.css';
import Backitem from '../../components/Backitem';
import axios from '../../api/axios';
import { NavLink } from 'react-router-dom';

function NickUpdate(props) {
  const [nick, setNick] = useState('');

  const nickPut = async () => {
    try {
      await axios.patch(`user/profile/nickname?nickName=${nick}`, {
        nickName: props.nick,
      });
      console.log();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`user`);
        setNick(response.data.nickname);
        console.log(response);
      } catch (e) {
        console.log(response);
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
              onClick={nickPut}
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
              console.log(e.target.value);
              setNick(e.target.value);
            }}
            className="nicktextbox"
          ></input>
        </p>
        <NavLink
          to="/profile-edit"
          onClick="location.reload();"
          className="pagereload"
        >
          닉네임 저장 후 페이지 새로고침
        </NavLink>
      </form>
    </div>
  );
}

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

  // const nickPut = async () => {
  //   try {
  //     await axios.patch(`user/profile/nickname`, { nickname: { nick } });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

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
        <NickUpdate
          nick={nick}
          // onUpdate={(nick) => {
          //   const updatedNick = { nick: nick };
          //   nickPut(updatedNick);
          // }}
        ></NickUpdate>
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
