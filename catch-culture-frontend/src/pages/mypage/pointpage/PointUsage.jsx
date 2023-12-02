import React, { useState, useEffect } from 'react';
import Backitem from '../../../components/Backitem';
import Coffeepng from '../../../assets/images/coffee.png';
import Level0 from '../../../assets/pointimg/level0.png';
import { TbCoins } from 'react-icons/tb';
import './PointUsage.css';
import { NavLink } from 'react-router-dom';
import axios from '../../../api/axios';

function SellItem({ data }) {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState(data.desc);
  const [price, setPrice] = useState(data.price);

  return (
    <>
      {data.map((e) => (
        <div className="emogee" key={e.id}>
          {e.id === 1 ? (
            <NavLink to="emogee">
              <p className="emogeedetailbutton">캐치티콘 상세보기</p>
            </NavLink>
          ) : (
            <></>
          )}
          <img className="emogeeimg" src={e.photoUrl}></img>
          <p className="emogeetext">
            {e.description} <br /> {e.price}p
          </p>
          <div
            className="buybutton"
            onClick={() => {
              setModal(true);
              setName(e.description);
              setPrice(e.price);
            }}
          >
            구매하기
          </div>
          {}
          {modal === true ? (
            <div className="modalbody">
              <div className="questtext">
                {price}p를 사용하여 {name}을(를) 구매하시겠습니까?
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
      ))}
    </>
  );
}

export default function PointUsage() {
  const [currpoint, setCurrpoint] = useState(0);

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/user/point-usage`);
      const resCurrpoint = await axios.get(`/user/point`);
      setCurrpoint(resCurrpoint.data);
      setData(res.data);
      console.log(res.data);
    };
    fetchData();
  }, []);

  return (
    <div className="usagewrap">
      <Backitem />
      <div className="usagebody">
        <div className="usagecurrentpoint">
          <div className="textcp">현재 포인트</div>
          <div className="curricon">
            <TbCoins />
            {currpoint}
          </div>
        </div>
        <div className="sellitems">
          <SellItem data={data} />
        </div>
      </div>
    </div>
  );
}
