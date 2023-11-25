import React from 'react';
import Backitem from '../../components/Backitem';
import { NavLink } from 'react-router-dom/dist';
import './ReportList.css';
import NoReport from '../../components/search/noResult/NoReport';

function Reporteach() {
  const start = '2023-12-12';
  const end = '2023-12-13';
  return (
    <div className="reportcontent">
      <hr />
      <div className="reptitle">행사명</div>
      <div className="reploc">행사 위치</div>
      <div className="repduration">
        {start} ~ {end}
      </div>
    </div>
  );
}

function ReportList() {
  const cnt = 0;
  return (
    <div className="reportall">
      <Backitem />
      <div className="reporttext">내가 제보한 목록</div>
      <div className="repinfo">
        내가 제보한 목록을 확인할 수 있는 페이지입니다. <br />
        제보하기 버튼을 누르면 새 문화행사를 제보할 수 있습니다.
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
            {Array(cnt).fill(<Reporteach />)}
          </div>
        )}
      </div>
    </div>
  );
}

export default ReportList;
