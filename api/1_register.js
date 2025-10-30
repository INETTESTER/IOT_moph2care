import http from 'k6/http';

    // ฟังก์ชันสุ่มข้อมูล
function randomString(length = 6) {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  }
  
  function randomEmail() {
    return `user_${randomString(8)}@example.com`;
  }
  
  function randomPhone() {
    return '08' + Math.floor(10000000 + Math.random() * 89999999).toString();
  }
  
  function randomIdCard() {
    // สุ่มเลขบัตรประชาชนไทย 13 หลัก
    return Math.floor(1000000000000 + Math.random() * 8999999999999).toString();
  }
  
  // ฟังก์ชันหลักของ K6
  export function register() {
    const url = 'https://moph2care.inet.co.th/api/v1/auth/register';
  
    const payload = JSON.stringify({
      username: `user_${randomString(5)}`,
      email: randomEmail(),
      password: 'Test@1234',
      confirm_password: 'Test@1234',
      account_title_th: 'นาย',
      first_name_th: 'สมชาย',
      last_name_th: 'ทดลอง',
      birth_date: '2000-10-09',
      gender_th: 'ชาย',
      mobile_number: randomPhone(),
      id_card_num: randomIdCard(),
    });
  
    const headers = {
      'Content-Type': 'application/json',
    };
  
    const res = http.post(url, payload, { headers });
  
    //console.log(res.body); // แสดง path ที่ดึงออกมา
    return res
  }

   

