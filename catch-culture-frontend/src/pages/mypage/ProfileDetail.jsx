import React, { useState, useEffect } from 'react';
import './ProfileDetail.css';
import Backitem from '../../components/Backitem';
import axios from '../../api/axios';
import { Link } from 'react-router-dom';

function ProfileEdit() {
  const [nick, setNick] = useState('');
  const img = 'd';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.patch(`user/profile/nickname`, {
          nick: '김도현',
        });
        setNick(response.nickname);
        console.log(response);
      } catch (e) {
        console.log(response);
      }
    };
    fetchData();
  }, []);

  const onChange = (e) => {
    setNick(e.target.value);
  };

  return (
    <div className="allcontents">
      <Backitem />
      <div className="editwrap">
        <div className="imgchange">
          <img className="profimg" src={img} />
          <p>{nick}닉네임</p>
        </div>
        <hr />
        <div className="nickch">
          <div className="nicktextrow">
            <p className="nickbold">닉네임</p>
            <div className="nickstore">
              <button className="nickbutton">저장</button>
            </div>
          </div>
          <div
            className="nickpatchbox"
            type="text"
            value={nick}
            onChange={onChange}
            placeholder={nick}
          >
            dkdk{nick}
          </div>
        </div>
        <hr />
        <div className="withdraw">
          <button className="wdbutton">탈퇴</button>
        </div>
      </div>
    </div>
  );
}

export default ProfileEdit;
