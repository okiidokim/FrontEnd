import React, { useEffect } from 'react';
import Backitem from '../../../components/Backitem';
import './WriteYourInfo.css';

export default function WriteYourInfo() {
  const handleChange = (e) => {
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(e.target.value)) {
      setInputValue(e.target.value);
    }
  };
  useEffect(() => {
    if (inputValue.length === 10) {
      setInputValue(inputValue.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
    }
    if (inputValue.length === 13) {
      setInputValue(
        inputValue
          .replace(/-/g, '')
          .replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
      );
    }
  }, [inputValue]);
  return (
    <div className="phonewrap">
      <Backitem />
      <div>구매하시려는 상품의 쿠폰을 받을 연락처를 입력하세요.</div>
      <input type="text" onChange={handleChange} value={inputValue} />
    </div>
  );
}
