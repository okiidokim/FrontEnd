import React, { useState, useEffect } from 'react';
import Backitem from '../../components/Backitem';
import axios from '../../api/axios';
import { useParams } from 'react-router-dom';
import './AdminReport.css';
import { NavLink } from 'react-router-dom';
import {
  TbBalloon,
  TbLocation,
  TbNotes,
  TbCash,
  TbCalendarEvent,
} from 'react-icons/tb';

function ReportInfo(params) {
  const d = params.data;

  return (
    <div className="reportinfowrap">
      <hr />
      <div>
        <img className="reportimg" src={d.storedFileUrl}></img>
      </div>
      <hr />
      <div className="reportcontent">
        <div className="reportname">
          <p className="textname">
            <TbBalloon />
            행사명
          </p>
          <p className="textcontent">{d.title} </p>
        </div>
        <div className="reportplace">
          <p className="textname">
            <TbLocation />
            행사 위치
          </p>
          <p className="textcontent">{d.place}</p>
        </div>
        <div className="reportduration">
          <p className="textname">
            <TbCalendarEvent />
            행사 기간
          </p>
          <p className="textcontent">
            {d.startDate} - {d.endDate}
          </p>
        </div>
        <div className="reportdes">
          <p className="textname">
            <TbNotes />
            행사 상세 내용
          </p>
          <p className="textcontent">{d.description}</p>
        </div>
        <div className="reportisfree">
          <p className="textname">
            <TbCash />
            가격 정보
          </p>
          <p className="textcontent">
            {d.isFree === true ? <>무료</> : <>유료</>}
          </p>
        </div>
        <div className="otherinfos"></div>
      </div>
      <div className="regisbuttonrow">
        <NavLink to="/reportauth/list">
          <div className="regis">등록</div>
        </NavLink>
        <NavLink to="/reportauth/list">
          <div className="noregis">미등록</div>
        </NavLink>
      </div>
    </div>
  );
}

let data = 'sample';
export default function AdminReport() {
  const params = useParams();
  const reportId = params.id;
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `/admin/event-report/${parseInt(reportId)}`
        );
        data = {
          reportId: reportId,
          storedFileUrl: res.data.culturalEventDetail.storedFileUrl,
          startDate: res.data.culturalEventDetail.startDate,
          endDate: res.data.culturalEventDetail.endDate,
          title: res.data.culturalEventDetail.title,
          place: res.data.culturalEventDetail.place,
          cate: res.data.culturalEventDetail.category,
          description: res.data.culturalEventDetail.description
            ? res.data.culturalEventDetail.description
            : 'null',
          eventLink: res.data.culturalEventDetail.reservationLink,
          wayto: res.data.culturalEventDetail.wayToCome,
          sns: res.data.culturalEventDetail.sns,
          telephone: res.data.culturalEventDetail.telephone,
          isFree: res.data.culturalEventDetail.isFree,
          latitude: res.data.culturalEventDetail.latitude,
          longitude: res.data.culturalEventDetail.longitude,
        };
        setNickname(res.data.nickname);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="adminvisitwrap">
      <Backitem />
      <div className="adminvisitcontent">
        <div className="reporterbox">
          <p>제보자 : </p> <p className="reporter">{nickname}</p>
        </div>
        <ReportInfo data={data} />
      </div>
    </div>
  );
}
