import http from 'k6/http';
import { token } from './env.js';

export function webhook_alarm() {

    const url = 'https://moph2care.inet.co.th/api/v1/webhook';

    const payload = JSON.stringify({
        event: 'alarm',
        timestamp: 1761711498704,
        data: {
          alarm_state: 'fall_down',
          radio_type: 'lte',
          latitude: 13.745623,
          longitude: 100.565348,
          batt_level: 89,
          num_sat: 0,
          working_mode: 21,
          mcc: null,
          mnc: null,
          lac: null,
          cid: null,
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
