import React, { useState, useEffect, useCallback } from 'react';
import Backitem from '../../components/Backitem';
import { NavLink } from 'react-router-dom/dist';
import './ReportList.css';
import NoReport from '../../components/search/noResult/NoReport';
import axios from '../../api/axios';

function Reporteach({ data }) {
  return (
    <>
      {data.map((e) => (
        <div className="reportwrap" key={e.reportId}>
          <hr />
          <div className="reptitle">{e.eventName}</div>
          <div className="reploc">{e.eventLocation}</div>
          <div className="repduration">
            {e.startDate} ~ {e.endDate}
          </div>
        </div>
      ))}
    </>
  );
}

function ReportList() {
  const [cnt, setCnt] = useState(0);
  const [data, setData] = useState([]);
  const [pagenum, setPageNum] = useState(0);
  const [dataList, setDataList] = useState([]);
  const [islast, setLast] = useState(false);

  const onScroll = () => {
    if (
      window.scrollY + window.innerHeight >
      document.documentElement.scrollHeight - 10
    )
      if (islast === false) {
        setPageNum(pagenum + 1);
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

  const fetchData = async () => {
    try {
      const res = await axios.get(`/user/my-reports?page=${pagenum}&size=8`);
      setCnt(res.data.totalElements);
      setData(res.data.content);
      setDataList(dataList.concat(res.data.content));
      setLast(res.data.last);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, [pagenum]);

  return (
    <div className="reportall">
      <Backitem />
      <div className="reporttext">
        내가 제보한 목록
        <div className="reportcnt">총 {cnt}개 </div>
      </div>
      <div className="repinfo">
        내가 제보한 목록을 확인할 수 있는 페이지입니다. <br />
        제보하기 버튼을 누르면 새 문화행사를 제보할 수 있습니다. <br />
        미등록된 제보 내역만 표시됩니다.
      </div>
      <div className="reportcntcheck">
        {cnt === 0 ? (
          <>
            <NoReport />
          </>
        ) : (
          <div className="replist">
            <div className="repb">
              <NavLink to="/report1">
                <div className="reportbutton">제보하기</div>
              </NavLink>
            </div>
            <Reporteach data={dataList} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ReportList;
