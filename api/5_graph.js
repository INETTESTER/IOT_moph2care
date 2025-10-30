import http from 'k6/http';
import { token } from './env.js';

export function graph() {
  
    const url = 'https://moph2care.inet.co.th/api/v1/graph?mode=day&type=heart_rate&start_date=2025-08-26&user_id=c1366e53-8911-4833-9226-2e5f93de6b35';

    const params = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
    };

    const res = http.get(url, params);
    // console.log('Status:', res.status);
    // console.log('Response:', res.body);

    return res;
}
