import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://elegant.kro.kr/',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

axios.defaults.withCredentials = true;
export default instance;
