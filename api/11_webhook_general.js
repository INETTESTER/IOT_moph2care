import http from 'k6/http';
import { token } from './env.js';

export function webhook_general() {

    const url = 'https://moph2care.inet.co.th/api/v1/webhook';

  const payload = JSON.stringify({
    event: 'general_info',
    timestamp: 1761711498704,
    data: {
      gsm_signal: 20,
      num_sat: 19,
      batt_level: 100,
      working_mode: 1,
      counting_step: 1923,
    },
    source: {
      type_source: 'T5S',
      thing_id: 'ea9b36af-c7a4-4331-b0d0-79d476d98826',
      imei: '9999999999',
    },
  });

  const params = {
    headers: {
      'x-api-key': '30855307-e732-4d9c-ba9a-fffcb5fcbaf3',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    },
  };
    
    const res = http.post(url,payload, params);
    // console.log('Status:', res.status);
    // console.log('Response:', res.body);

    return res;
}
