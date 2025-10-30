import http from 'k6/http';
import { token } from './env.js';

export function monitor_list() {

    const url = 'https://moph2care.inet.co.th/api/v1/monitor/list?caseStatus=&page=1&pageSize=4&startDate=2025-10-01&endDate=2025-10-28&alarmTypes=&abnormalType=&org_id=852a2890-0a77-4f17-9a91-92b1308a6702';

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
