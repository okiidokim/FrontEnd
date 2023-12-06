import React, { useState, useEffect } from 'react';
import Backitem from '../../components/Backitem';
import { NavLink, useNavigate } from 'react-router-dom';
import './ReportList.css';
import NoReport from '../../components/search/noResult/NoReport';
import axios from '../../api/axios';
import { TbAlertCircleFilled } from 'react-icons/tb';
import PropTypes from 'prop-types';

function Reporteach({ data }) {
  Reporteach.propTypes = {
    data: PropTypes.any,
  };
  return (
    <>
      {data.map((e) => (
        <div className="reportwrap" key={e.reportId}>
          <hr />
          <div className="reportedtitlerow">
            <div className="reptitle">{e.eventName}</div>
            {e.isReported === true ? (
              <div className="isreportedtrue">등록</div>
            ) : (
              <div className="isreportedfalse">미등록</div>
            )}
          </div>
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
  const navigate = useNavigate();
  const [cnt, setCnt] = useState(0);
  const [data, setData] = useState([]);
  const [pageNum, setPageNum] = useState(0);
  const [dataList, setDataList] = useState([]);
  const [isLast, setIsLast] = useState(true);

  const fetchData = async () => {
    try {
      const res = await axios.get(`/user/my-reports?page=${pageNum}&size=8`);
      setCnt(res.data.totalElements);
      setData(res.data.content);
      setDataList(dataList.concat(res.data.content));
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
    fetchData();
  }, [pageNum]);

  const onScroll = () => {
    if (
      window.scrollY + window.innerHeight >
      document.documentElement.scrollHeight - 40
    )
      if (isLast === false) {
        setPageNum(pageNum + 1);
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
          <NoReport />
        ) : (
          <div className="replist">
            <div className="repb">
              <NavLink to="/report1">
                <div className="reportbutton">제보하기</div>
              </NavLink>
            </div>
            <Reporteach data={dataList} />
            <div className="nomore">
              <hr />
              <div className="nomorewicon">
                <TbAlertCircleFilled />
                결과 없음
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ReportList;
