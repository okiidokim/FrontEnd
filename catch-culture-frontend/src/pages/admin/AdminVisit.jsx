import React, { useState, useEffect } from 'react';
import Backitem from '../../components/Backitem';
import './AdminReport.css';
import * as dayjs from 'dayjs';

export default function AdminVisit() {
  return (
    <div className="adminvisitwrap">
      <Backitem />
      <div className="adminvisitcontent">방문 인증 요청 상세 페이지</div>
    </div>
  );
}
