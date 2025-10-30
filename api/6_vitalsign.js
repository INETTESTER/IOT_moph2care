import http from 'k6/http';
import { token } from './env.js';

export function vitalsign() {
  
    const url = 'https://moph2care.inet.co.th/api/v1/user/vital-signs/73ec27ba-de30-4660-a301-7524e4c88ef4?type=heart_rate';

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
