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
    return '08' + Math.floor(10000 + Math.random() * 99999).toString();
  }
  
  function randomIdCard() {
    // สุ่มเลขบัตรประชาชนไทย 13 หลัก
    return Math.floor(1000000000 + Math.random() * 9999999999).toString();
  }
  
  // ฟังก์ชันหลักของ K6
  export function register(cid) {
    const url = 'https://moph2care.inet.co.th/api/v1/auth/register';
    const mobile_ = randomPhone()+cid;
    //  console.log(mobile_);
     const username_ = randomString()+cid;
    //  console.log(username_);
     const email_ = cid+randomEmail();
    //  console.log(email_);
     const idcard_ = randomIdCard()+cid;
    //  console.log(idcard_);
    const payload = JSON.stringify({
      username: mobile_,
      email: email_,
      password: 'Test@1234',
      confirm_password: 'Test@1234',
      account_title_th: 'นาย',
      first_name_th: 'สมชาย',
      last_name_th: 'ทดลอง',
      birth_date: '2000-10-09',
      gender_th: 'ชาย',
      mobile_number: mobile_,
      id_card_num: idcard_,
    });
  
    const headers = {
      'Content-Type': 'application/json',
    };
  
    const res = http.post(url, payload, { headers });
    //console.log(payload.username)
    //console.log(res.body); // แสดง path ที่ดึงออกมา
    return res
  }

   

