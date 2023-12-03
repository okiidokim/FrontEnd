import React, { useState, useEffect } from 'react';
import Backitem from '../../components/Backitem';
import * as dayjs from 'dayjs'; //api 반환 받았을 때 사용 예정
import { TbMapPinOff } from 'react-icons/tb';
import './VisitAuthList.css';
import axios from '../../api/axios';
import { NavLink } from 'react-router-dom';

function VisitAuthItem({ data }) {
  dayjs.locale('ko');

  return (
    <>
      {data.map((e, index) => (
        <NavLink to={`/visitauth/${e.id}`} key={index}>
          <div className="visitautheach" key={e.id}>
            <hr />
            <div className="nickdayrow">
              <p>{e.nickname}</p>
              <p className="visitauthday">
                {e.createdAt === null ? (
                  <></>
                ) : (
                  <>
                    {dayjs(`${e.createdAt}`).format('YY/MM/DD - dddd - HH:mm')}
                  </>
                )}
              </p>
            </div>
            <div className="visitadmintitle">{e.title}</div>
          </div>
        </NavLink>
      ))}
    </>
  );
}

export default function VistiAuthList() {
  const [data, setData] = useState([]);
  const [cnt, setCnt] = useState(100);
  const [last, setLast] = useState(false);
  const [pagenum, setPagenum] = useState(0);
  const [dataList, setDatalist] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`admin/visit-auth/list?lastId=${cnt}`);
      setData(res.data.content);
      setLast(res.data.last);
      setPagenum(res.data.pageable.pageNumber);
      console.log(pagenum);
    };
    fetchData();
  }, [last]);

  const onScroll = () => {
    if (last === false) {
      {
        setPagenum(pagenum + 1);
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

  return (
    <div className="authlistwrap">
      <Backitem />
      <div className="authlistcontent">
        <div className="visitauthtextrow">
          <p>방문 인증 요청</p>
        </div>
        <div className="visitauthlist">
          {cnt === 0 ? (
            <div className="novisiticon">
              <TbMapPinOff size="140" color="#018c0d" />
              <p div className="novisitauthtext">
                방문 인증 요청 없음
              </p>
            </div>
          ) : (
            <>
              <VisitAuthItem data={data} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
