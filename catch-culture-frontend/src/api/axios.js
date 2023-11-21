import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://elegant.kro.kr/',
  headers: {
    'Content-Type': 'application/json',
    'Cross-Domain': true,
    'xhr-Fields': {
      withCrdentials: true,
    },
    'Access-Control-Allow-Origin': 'http://elegant.kro.kr',
  },
});
export default instance;
