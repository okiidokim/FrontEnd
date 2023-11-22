import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://elegant.kro.kr/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});
export default instance;
