import React, { useState, useEffect } from 'react';
import Backitem from '../../../components/Backitem';
import { TbCoins } from 'react-icons/tb';
import './PointUsage.css';
import { useNavigate } from 'react-router-dom';
import axios from '../../../api/axios';

function SellItem({ data }) {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [buyResponse, setBuyResponse] = useState('');
  const [resModal, setResModal] = useState(false);
  const [buyType, setBuyType] = useState('');

  const itemBuy = async (e) => {
    try {
      const res = await axios.post(
        `/user/purchase-reward?pointChange=${buyType}`
      );
      setBuyResponse(res.data);
    } catch (e) {
      console.log(e);
      if (e.response.data.code === 'LOGIN_FAIL') {
        alert('로그인 만료! 다시 로그인 해주세요.');
        navigate(`/`);
      }
    }
  };

  const navi = useNavigate();
  return (
    <>
      {data.map((e) => (
        <div className="emogee" key={e.id}>
          <img className="emogeeimg" src={e.photoUrl}></img>
          <p className="emogeetext">
            {e.description.slice(0, -2)} <br />
            {e.price.slice(1)}p
          </p>
          <div
            className="buybutton"
            onClick={() => {
              setModal(true);
              setName(e.description);
              setBuyType(e.name);
              setPrice(e.price);
            }}
            onKeyDown={() => {
              setModal(true);
              setName(e.description);
              setBuyType(e.name);
              setPrice(e.price);
            }}
          >
            구매하기
          </div>
          {modal === true ? (
            <div className="modalbody">
              <div className="questtext">
                {price.slice(1)}p를 사용하여 {name.slice(0, -2)}을(를)
                구매하시겠습니까?
              </div>
              <div className="yesorno">
                <div
                  className="yesbutton"
                  onClick={() => {
                    itemBuy(e.name);
                    setModal(false);
                    setResModal(true);
                  }}
                  onKeyDown={() => {
                    itemBuy(e.name);
                    setModal(false);
                    setResModal(true);
                  }}
                >
                  예
                </div>
                <div
                  className="nobutton"
                  onClick={() => {
                    setModal(false);
                  }}
                  onKeyDown={() => {
                    setModal(false);
                  }}
                >
                  아니오
                </div>
              </div>
            </div>
          ) : null}
          {resModal === true ? (
            <div className="modalbody">
              <div className="resmodaltext">{buyResponse}</div>
              <div
                className="checkbutton"
                onClick={() => setResModal(false)}
                onKeyDown={() => setResModal(false)}
              >
                확인
              </div>
            </div>
          ) : null}
        </div>
      ))}
    </>
  );
}

export default function PointUsage() {
  const navigate = useNavigate();
  const [currpoint, setCurrpoint] = useState(0);

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/user/point-usage`);
        const resCurrpoint = await axios.get(`/user/point`);
        setCurrpoint(resCurrpoint.data);
        setData(res.data);
      } catch (e) {
        console.log(e);
        if (e.response.data.code === 'LOGIN_FAIL') {
          alert('로그인 만료! 다시 로그인 해주세요.');
          navigate(`/`);
        }
      }
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
