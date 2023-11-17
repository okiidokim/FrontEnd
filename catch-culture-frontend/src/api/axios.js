import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://elegant.kro.kr/',
  headers: {
    'Content-Type': 'application/json',
  },
});
export default instance;
