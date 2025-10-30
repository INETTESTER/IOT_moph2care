import http from 'k6/http';
import { token } from './env.js';

export function count_emergency() {

    const url = 'https://moph2care.inet.co.th/api/v1/dashboard/count-emergency-case?startDate=2025-10-01&zoneId=&endDate=2025-10-28';

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
