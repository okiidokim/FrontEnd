import React, { useState, useEffect } from 'react';
import axios from '../../../api/axios';
import Backitem from '../../../components/Backitem';

export default function WriteYourInfo() {
  return (
    <div className="pagewrap">
      <Backitem />
      <div>구매 상품을 받을 연락처를 입력하세요.</div>
    </div>
  );
}
