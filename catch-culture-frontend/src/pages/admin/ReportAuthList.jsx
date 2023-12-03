import React, { useState, useEffect } from 'react';
import Backitem from '../../components/Backitem';
import * as dayjs from 'dayjs'; //api 반환 받았을 때 사용 예정
import { TbReportOff } from 'react-icons/tb';
import './VisitAuthList.css';
import axios from '../../api/axios';
import { NavLink } from 'react-router-dom';
import 'dayjs/locale/ko';

function ReportItem({ data }) {
  dayjs.locale('ko');

  return (
    <>
      {data.map((e, index) => (
        <NavLink to={`/reportauth/${e.id}`} key={index}>
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
  const [cnt, setCnt] = useState(100);
  const [pagenum, setPagenum] = useState(0);
  const [last, setLast] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`admin/event-report/list?lastId=${cnt}`);
      setData(res.data.content);
      setPagenum(res.data.pageable.pageNumber);
      setLast(res.data.last);
    };
    fetchData();
  }, [pagenum, last]);

  const onScroll = () => {
    if (last === false) {
      {
        setPagenum(pagenum + 1);
      }
    }
  };

  useEffect(() => {
    onScroll();
  }, [data]);

  return (
    <div className="authlistwrap">
      <Backitem />
      <div className="authlistcontent">
        <div className="visitauthtextrow">
          <p>문화행사 제보</p>
        </div>
        <div className="visitauthlist">
          {cnt === 0 ? (
            <div className="novisiticon">
              <TbReportOff size="140" color="#018c0d" />
              <p div className="novisitauthtext">
                제보 받은 문화 행사 없음
              </p>
            </div>
          ) : (
            <>
              <ReportItem data={data} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
