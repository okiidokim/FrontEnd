import React, { useState, useEffect } from 'react';
import Backitem from '../../components/Backitem';
import './PointHistory.css';
import NoPointHistory from '../../components/search/noResult/NoPointHistory';
import axios from '../../api/axios';
import { NavLink } from 'react-router-dom';
import { TbShoppingCart, TbCoins, TbAlertCircleFilled } from 'react-icons/tb';
import * as dayjs from 'dayjs';

function Pointeach([data]) {
  return (
    <>
      {data &&
        data.map((e) => (
          <div className="pointinfo" key={e.id}>
            <hr />
            <div className="pointrow1">
              <div className="phdate">
                {dayjs(`${e.createdAt}`).format('YY.MM.DD')}
              </div>
              {e.pointChange === -3000 || e.pointChange === -5000 ? (
                <div className="pointminus">포인트 차감</div>
              ) : (
                <div className="pointplus">포인트 지급</div>
              )}
            </div>
            <div className="pointcontent">{e.description}</div>
            <div className="pointnum">{e.pointChange}p</div>
          </div>
        ))}
    </>
  );
}

function PointHistory() {
  const [data, setData] = useState([]);
  const [cnt, setCnt] = useState(0);
  const [currpoint, setCurrpoint] = useState(0);
  const [pagenum, setPageNum] = useState(0);
  const [dataList, setDataList] = useState([]);
  const [islast, setLast] = useState(false);

  const onScroll = () => {
    if (
      window.scrollY + window.innerHeight >
      document.documentElement.scrollHeight - 40
    )
      if (islast === false) {
        setPageNum(pagenum + 1);
      }
  };

  const fetchData = async () => {
    try {
      const res = await axios.get(`/user/point-history?page=${pagenum}&size=9`);
      const respoint = await axios.get(`/user/point`);
      setCnt(res.data.totalElements);
      setData(res.data.content);
      setDataList(dataList.concat(res.data.content));
      setCurrpoint(respoint.data);
      setLast(res.data.last);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    window.addEventListener('touchmove', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('touchmove', onScroll);
    };
  }, [data]);

  useEffect(() => {
    fetchData();
  }, [pagenum]);

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
              <Pointeach data={dataList} />
              <div className="nomore">
                <hr />
                <div className="nomorewicon">
                  <TbAlertCircleFilled />
                  결과 없음
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default PointHistory;
