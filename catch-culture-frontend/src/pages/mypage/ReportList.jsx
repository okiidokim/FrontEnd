import React, { useState, useEffect } from 'react';
import Backitem from '../../components/Backitem';
import { NavLink } from 'react-router-dom/dist';
import './ReportList.css';
import NoReport from '../../components/search/noResult/NoReport';
import axios from '../../api/axios';

function Reporteach({ data }) {
  return (
    <>
      {data.map((e) => (
        <div className="reportwrap" key={e.startDate}>
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

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/user/my-reports?page=0&size=7`);
      setCnt(res.data.numberOfElements);
      setData(res.data.content);
      console.log(res.data.content);
    };
    fetchData();
  }, []);

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
            <Reporteach data={data} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ReportList;
