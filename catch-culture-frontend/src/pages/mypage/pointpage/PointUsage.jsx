import React, { useState, useRef } from 'react';
import Backitem from '../../../components/Backitem';
import Coffeepng from '../../../assets/images/coffee.png';
import Level0 from '../../../assets/pointimg/level0.png';
import { TbCoins } from 'react-icons/tb';
import './PointUsage.css';
import { NavLink } from 'react-router-dom';

export default function PointUsage() {
  const currpoint = 150;
  const [modal, setModal] = useState(false);
  const outside = useRef();

  //임시 데이터
  const name1 = '캐치티콘';
  const name2 = '스타벅스 아이스 아메리카노';
  const point1 = 3000;
  const point2 = 5000;
  const [name, setName] = useState({ name1 });

  return (
    <div className="usagewrap">
      <Backitem />
      <div className="usagebody">
        <div className="currentpoint">
          <div className="textcp">현재 포인트</div>
          <div className="curricon">
            <TbCoins />
            {currpoint}
          </div>
        </div>
        <div className="sellitems">
          <div className="emogee">
            <NavLink to="emogee">
              <p className="emogeedetailbutton">캐치티콘 상세보기</p>
            </NavLink>
            <img className="emogeeimg" src={Level0}></img>
            <p className="emogeetext">
              {name1} <br /> {point1}p
            </p>
            <div
              className="buybutton"
              onClick={() => {
                setName(name1);
                setModal(true);
              }}
            >
              구매하기
            </div>
          </div>
          <div className="coffee">
            <img className="coffeeimg" src={Coffeepng}></img>
            <p className="coffeetext">
              {name2} <br />
              {point2}p
            </p>
            <div
              className="buybutton"
              onClick={() => {
                setName(name2);
                setModal(true);
              }}
            >
              구매하기
            </div>
          </div>
        </div>
      </div>
      {name === name1 ? (
        modal === true ? (
          <div className="modalbody">
            <div className="questtext">
              {point1}p를 사용하여 {name1}을(를) 구매하시겠습니까?
            </div>
            <div className="yesorno">
              <div className="yesbutton">예</div>
              <div className="nobutton" onClick={() => setModal(false)}>
                아니오
              </div>
            </div>
          </div>
        ) : null
      ) : modal === true ? (
        <div className="modalbody">
          <div className="questtext">
            {point2}p를 사용하여 {name2}을(를) 구매하시겠습니까?
          </div>
          <div className="yesorno">
            <div className="yesbutton">예</div>
            <div className="nobutton" onClick={() => setModal(false)}>
              아니오
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
