import React from 'react';
import Backitem from '../../components/Backitem';
import './PointHistory.css';
import { BiSolidCoinStack } from 'react-icons/bi';
import NoPointHistory from '../../components/search/noResult/NoPointHistory';

function PointHistory() {
  const currpoint = 150;
  const ppm = '-';
  return (
    <div class="phisall">
      <Backitem />
      <div className="pointbox">
        <div className="currentpoint">
          <div className="textcp">현재포인트</div>
          <div className="curricon">
            <BiSolidCoinStack />
            {currpoint}
          </div>
        </div>
      </div>
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
        <hr />
      </div>
    </div>
  );
}

export default PointHistory;
