import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://elegant.kro.kr',
  headers: {
    'Content-Type': 'application/json',
    'Cross-Domain': true,
    'xhr-Fields': {
      withCredentials: true,
    },
    'Access-Control-Allow-Origin': 'https://elegant.kro.kr',
  },
});
export default instance;
