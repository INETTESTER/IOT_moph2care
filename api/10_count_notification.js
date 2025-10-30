import http from 'k6/http';
import { token } from './env.js';

export function count_notification() {
  
    const url = 'https://moph2care.inet.co.th/api/v1/notification/count/c6d97133-4b0c-41d3-a89b-21feb59295ac';

    const params = {
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'a61ca37a-58bc-4e21-b6d9-1e421e4d4cc2',
            'Authorization': 'Bearer ' + token
    
        },
    };

    const res = http.get(url, params);
    // console.log('Status:', res.status);
    // console.log('Response:', res.body);

    return res;
}
