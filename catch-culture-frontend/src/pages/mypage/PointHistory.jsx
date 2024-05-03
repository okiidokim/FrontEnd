import React, { useState, useEffect } from 'react';
import Backitem from '../../components/Backitem';
import './PointHistory.css';
import NoPointHistory from '../../components/search/noResult/NoPointHistory';
import axios from '../../api/axios';
import { NavLink, useNavigate } from 'react-router-dom';
import { TbShoppingCart, TbCoins, TbAlertCircleFilled } from 'react-icons/tb';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';

function Pointeach({ data }) {
  Pointeach.propTypes = {
    data: PropTypes.any,
  };

  if (!data) {
    return;
  }

  return (
    <>
      {data.map(e => (
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
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [cnt, setCnt] = useState(0);
  const [currpoint, setCurrpoint] = useState(0);
  const [pageNum, setPageNum] = useState(0);
  const [dataList, setDataList] = useState([]);
  const [isLast, setIsLast] = useState(false);

  const onScroll = () => {
    if (
      window.scrollY + window.innerHeight >
      document.documentElement.scrollHeight - 40
    )
      if (isLast === false) {
        setPageNum(pageNum + 1);
      }
  };

  const fetchData = async () => {
    try {
      const res = await axios.get(`/user/point-history?page=${pageNum}&size=9`);
      const respoint = await axios.get(`/user/point`);
      setCnt(res.data.totalElements);
      setData(res.data.content);
      setDataList(dataList.concat(res.data.content));
      setCurrpoint(respoint.data);
      setIsLast(res.data.last);
    } catch (e) {
      console.log(e);
      if (e.response.data.code === 'LOGIN_FAIL') {
        alert('로그인 만료! 다시 로그인 해주세요.');
        navigate(`/`);
      }
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
  }, [pageNum]);

  return (
    <div className="phisall">
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
            <div>
              <NoPointHistory />
            </div>
          ) : (
            <>
              <Pointeach data={dataList} />
              <hr />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default PointHistory;
