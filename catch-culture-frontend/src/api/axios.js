import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://elegant.kro.kr/',
  headers: {
    'Content-Type': 'application/json',
    'Cross-Domain': true,
    'xhr-Fields': {
      withCrdentials: true,
    },
    'Access-Control-Allow-Origin': 'http://elegant.kro.kr',
  },
  withCredentials: true,
});

axios.defaults.withCredentials = true;
export default instance;
