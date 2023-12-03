import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import Backitem from '../../components/Backitem';
import './AdminReport.css';
import * as dayjs from 'dayjs';
import axios from '../../api/axios';
import { NavLink } from 'react-router-dom';
import { TbBalloon, TbNotes } from 'react-icons/tb';

export default function AdminVisit() {
  const visitAuthId = useParams().id;
  const [nickname, setNickname] = useState('');
  const [title, setTitle] = useState('');
  const [authimg, setAuthimg] = useState([]);
  const [userId, setUserid] = useState(0);
  const [eventId, setEventid] = useState(0);
  const [description, setdes] = useState('');

  const fetchData = async () => {
    const res = await axios.get(`/admin/visit-auth/${parseInt(visitAuthId)}`);
    setNickname(res.data.nickname);
    setTitle(res.data.title);
    setAuthimg(res.data.storedFileUrl);
    setUserid(res.data.userId);
    setEventid(res.data.culturalEventId);
    setdes(res.data.description);
    console.log(res.data.storedFileUrl);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const visitAuthSubmit = async (e) => {
    try {
      axios.put(
        `/admin/visit-auth/${parseInt(
          visitAuthId
        )}?userId=${userId}&culturalEventId=${eventId}`
      );
    } catch (e) {
      console.log(e);
    }
  };

  const [isShowMore, setIsShowMore] = useState(false);
  const textLimit = 78;

  const descriptionCut = useMemo(() => {
    const shortView = `${description}`.slice(0, textLimit);
    if (`${description}`.length > textLimit) {
      if (isShowMore) return description;
      else return shortView;
    }
    return description;
  }, [isShowMore]);

  return (
    <div className="adminvisitwrap">
      <Backitem />
      <div className="adminvisitcontent">
        <div className="reporterbox">
          <p>제보자 : </p> <p className="reporter">{nickname}</p>
        </div>
        <div className="reportinfowrap">
          <hr />
          <div className="reportimglist">
            {authimg.map((e, index) => (
              <span key={index}>
                <img className="reportimg" src={e} />
              </span>
            ))}
          </div>
          <hr />
          <div className="reportcontent">
            <div className="reportname">
              <p className="textname">
                <TbBalloon />
                행사명
              </p>
              <p className="textcontent">{title} </p>
            </div>
            {description === null ? (
              <></>
            ) : (
              <div className="reportdes">
                <p className="textname">
                  <TbNotes />
                  행사 상세 내용
                </p>
                <div
                  className="textcontent"
                  onClick={() => setIsShowMore(!isShowMore)}
                >
                  {descriptionCut}
                  <span
                    style={{
                      color: 'grey',
                      fontWeight: '100',
                      cursor: 'pointer',
                    }}
                  >
                    {`${description}`.length > textLimit
                      ? isShowMore
                        ? '닫기'
                        : '...더보기'
                      : null}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="regisbuttonrow">
          <NavLink to="/visitauth/list">
            <div className="regis" type="submit" onClick={visitAuthSubmit}>
              수락
            </div>
          </NavLink>
          <NavLink to="/visitauth/list">
            <div className="noregis">거절</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
