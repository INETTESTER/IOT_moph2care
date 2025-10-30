import http from 'k6/http';
  
  // ฟังก์ชันหลักของ K6
  export function login() {
    const url = 'https://moph2care.inet.co.th/api/v1/auth/login';
  
    const payload = JSON.stringify({
      identifier: 'nurainee.to',
      password: 'zazaoz007',
    });
  
    const headers = {
      'Content-Type': 'application/json',
    };
  
    const res = http.post(url, payload, { headers });
  
    //console.log(res.body); // แสดง path ที่ดึงออกมา
    return res
  }

   

