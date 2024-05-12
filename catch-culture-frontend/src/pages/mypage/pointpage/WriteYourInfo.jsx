import React, { useEffect, useState } from 'react';
import Backitem from '../../../components/Backitem';
import './WriteYourInfo.css';
import { useNavigate } from 'react-router-dom';
export default function WriteYourInfo() {
  const [phoneNum, setPhoneNum] = useState('');
  const handleChange = (e) => {
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(e.target.value)) {
      setPhoneNum(e.target.value);
    }
  };
  useEffect(() => {
    if (phoneNum.length === 10) {
      setPhoneNum(phoneNum.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
    }
    if (phoneNum.length === 13) {
      setPhoneNum(
        phoneNum.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
      );
    }
  }, [phoneNum]);
  const navi = useNavigate();
  return (
    <div className="phonewrap">
      <Backitem />
      <div className="phoneinput">
        <div className="explanation">
          구매하시려는 상품의 쿠폰을 받을 연락처를 입력하세요.
        </div>
        <input type="text" onChange={handleChange} value={phoneNum} />
        <div className="giveinfo">*해당 상품은 3일 내로 지급 예정입니다.</div>
      </div>
      <div
        className="storebut"
        onClick={navi('/pointusage')}
        onKeyDown={navi('/pointusage')}
      >
        저장
      </div>
    </div>
  );
}
