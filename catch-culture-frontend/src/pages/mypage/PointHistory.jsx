import React from 'react';
import Backitem from '../../components/Backitem';
import './PointHistory.css';
import NoPointHistory from '../../components/search/noResult/NoPointHistory';
import axios from '../../api/axios';
import { NavLink } from 'react-router-dom';
import { TbShoppingCart, TbCoins } from 'react-icons/tb';

function Pointeach() {
  const ppm = '+'; //api

  return (
    <div className="pointinfo">
      <hr />
      <div className="pointrow1">
        <div className="phdate">2023.10.17</div>
        {ppm === '+' ? (
          <div className="pointplus">포인트 지급</div>
        ) : (
          <div className="pointminus">포인트 차감</div>
        )}
      </div>
      <div className="pointcontent">커피쿠폰구매</div>
      <div className="pointnum">{ppm}5000p</div>
    </div>
  );
}

function PointHistory() {
  const cnt = 7;
  const currpoint = 150;
  return (
    <div class="phisall">
      <Backitem />
      <div className="pointbox">
        <div className="currentpoint">
          <div className="textcp">현재 포인트</div>
          <div className="curricon">
            <TbCoins />
            {currpoint}
          </div>
        </div>
      </div>
      {cnt === 0 ? (
        <>
          <NoPointHistory />
        </>
      ) : (
        <div className="pointhislist">{Array(cnt).fill(<Pointeach />)}</div>
      )}
      <NavLink to="/pointusage">
        <div className="gopointusage">
          <TbShoppingCart size="44" />
          <p>포인트 사용처</p>
        </div>
      </NavLink>
    </div>
  );
}

export default PointHistory;
