import http from 'k6/http';


export function notification() {
  
    const url = 'https://moph2care.inet.co.th/api/v1/notification/7ac9f2ce-c204-4d38-927b-a664e4f36450';

    const params = {
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'a61ca37a-58bc-4e21-b6d9-1e421e4d4cc2',
    
        },
    };

    const res = http.get(url, params);
    // console.log('Status:', res.status);
    // console.log('Response:', res.body);

    return res;
}
