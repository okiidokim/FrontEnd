import React, { useState, useEffect } from 'react';
import Backitem from '../../components/Backitem';
import dayjs from 'dayjs'; //api 반환 받았을 때 사용 예정
import { TbReportOff, TbAlertCircleFilled } from 'react-icons/tb';
import './VisitAuthList.css';
import axios from '../../api/axios';
import { NavLink } from 'react-router-dom';

function ReportItem({ data }) {
  dayjs.locale('ko');

  if (!data) {
    return;
  }

  return (
    <>
      {data.map((e) => (
        <NavLink to={`/reportauth/${e.id}`} key={e.index}>
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
            <p className="visitadmintitle">{e.title}</p>
          </div>
        </NavLink>
      ))}
    </>
  );
}
export default function ReportAuthList() {
  const [data, setData] = useState([]);
  const [lastid, setLastid] = useState(0);
  const [last, setLast] = useState(false);
  const [first, setFirst] = useState(true);
  const [empty, setEmpty] = useState(false);
  const [numElem, setNum] = useState(0);
  const [size, setSize] = useState(0);

  const fetchData = async () => {
    try {
      const res = await axios.get(`admin/event-report/list?lastId=${lastid}`);
      setData(res.data.content);
      setLast(res.data.last);
      setFirst(res.data.first);
      setEmpty(res.data.empty);
      setNum(res.data.numberOfElements);
      setSize(res.data.size);
      setLastid(res.data.content[12].id);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onScroll = async () => {
    if (
      window.scrollY + window.innerHeight >
      document.documentElement.scrollHeight - 40
    ) {
      if (last === false && numElem === size) {
        try {
          const res = await axios.get(
            `admin/event-report/list?lastId=${lastid}`
          );
          setLast(res.data.last);
          setFirst(res.data.first);
          setEmpty(res.data.empty);
          setNum(res.data.numberOfElements);
          setSize(res.data.size);
          setData(data.concat(res.data.content));
          setLastid(res.data.content[12].id);
        } catch (e) {
          console.log(e);
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll());
    window.addEventListener('touchmove', onScroll());
    return () => {
      window.removeEventListener('scroll', onScroll());
      window.removeEventListener('touchmove', onScroll());
    };
  }, [lastid, numElem]);

  return (
    <div className="authlistwrap">
      <Backitem />
      <div className="authlistcontent">
        <div className="visitauthtextrow">
          <p>문화행사 제보</p>
        </div>
        <div className="visitauthlist">
          {first === true && empty === true ? (
            <div className="novisiticon">
              <TbReportOff size="140" color="#018c0d" />
              <p className="novisitauthtext">제보 받은 문화 행사 없음</p>
            </div>
          ) : (
            <>
              <ReportItem data={[data]} />
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
