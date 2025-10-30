import http from 'k6/http';
import { token } from './env.js';

export function average() {

    const url = 'https://moph2care.inet.co.th/api/v1/dashboard/average-working?page=1&size=3&startDate=2025-10-01&endDate=2025-10-28&zoneId=';

  const params = {
    headers: {
      'Authorization': 'Bearer ' + token
    },
  };
    
    const res = http.get(url, params);
    // console.log('Status:', res.status);
    // console.log('Response:', res.body);

    return res;
}
