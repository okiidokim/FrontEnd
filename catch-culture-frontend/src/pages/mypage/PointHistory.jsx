import React, { useState, useEffect } from 'react';
import Backitem from '../../components/Backitem';
import './PointHistory.css';
import NoPointHistory from '../../components/search/noResult/NoPointHistory';
import axios from '../../api/axios';
import { NavLink } from 'react-router-dom';
import { TbShoppingCart, TbCoins } from 'react-icons/tb';
import * as dayjs from 'dayjs';

function Pointeach({ data }) {
  const [ppm, setppm] = useState('+');

  return (
    <>
      {data.map((e) => (
        <div className="pointinfo" key={e.id}>
          <hr />
          <div className="pointrow1">
            <div className="phdate">
              {dayjs(`${e.createdAt}`).format('YY.MM.DD')}
            </div>
            {e.description === '문화행사 등록' ||
            e.description === '방문 인증' ||
            e.description === '리뷰 작성'
              ? () => setppm('-')
              : () => setppm('+')}
            {ppm === '+' ? (
              <div className="pointplus">포인트 지급</div>
            ) : (
              <div className="pointminus">포인트 차감</div>
            )}
          </div>
          <div className="pointcontent">{e.description}</div>
          <div className="pointnum">
            {ppm}
            {e.pointChange}p
          </div>
        </div>
      ))}
    </>
  );
}

function PointHistory() {
  const [data, setData] = useState([]);
  const [cnt, setCnt] = useState(0);
  const [currpoint, setCurrpoint] = useState(0);
  const page = 0;
  const size = 7;

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `/user/point-history?page=${page}&size=${size}`
      );
      const respoint = await axios.get(`/user/point`);
      setCnt(res.data.totalElements);
      setData(res.data.content);
      setCurrpoint(respoint.data);
    };
    fetchData();
  }, []);
  console.log(currpoint);

  return (
    <div class="phisall">
      <Backitem />
      <div className="phisbody">
        <NavLink to="/pointusage">
          <div className="gopointusage">
            <TbShoppingCart size="28" />
            <p>포인트 사용처</p>
          </div>
        </NavLink>
        <div className="pointbox">
          <div className="currentpoint">
            <div className="textcp">현재 포인트</div>
            <div className="curricon">
              <TbCoins />
              {currpoint}
            </div>
          </div>
        </div>
        <div>
          {cnt === 0 ? (
            <>
              <NoPointHistory />
            </>
          ) : (
            <>
              <Pointeach data={data} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default PointHistory;
