//=============================== import API =================================
import { sleep } from 'k6';
import { error_check } from '../check/check.js';
import { scenario } from 'k6/execution';


import { register } from '../api/1_register.js';
import { login } from '../api/2_login.js';
import { userprofile } from '../api/3_userprofile.js';
import { graph } from '../api/5_graph.js';
import { vitalsign } from '../api/6_vitalsign.js';
import { notification } from '../api/9_notification.js';
import { count_notification } from '../api/10_count_notification.js';
import { webhook_alarm } from '../api/11_webhook_alarm .js';
import { webhook_general } from '../api/11_webhook_general.js';
import { monitor_list } from '../api/12_monitor_list.js';
import { count_monitor } from '../api/13_count_monitor_list.js';
import { summary } from '../api/14_summary.js';
import { trend } from '../api/15_trend.js';
import { falldown } from '../api/16_falldown_period .js';
import { average } from '../api/17_average.js';
import { compare } from '../api/18_compare.js';
import { abnormal } from '../api/19_abnormal_alert.js';
import { location } from '../api/19_location_alert.js';
import { operation } from '../api/20_operation.js';
import { emergency } from '../api/21_emergency_list.js';
import { count_emergency } from '../api/22_count_emergency.js';




//============================================================================

export default function () {    //เรียกใช้ API ใน export default function
 
  // response = register(cid)
  //response = login()
  //response = userprofile()
  //response = graph()
  //response = vitalsign()
  //response = notification()
  response = count_notification()
  // response = webhook_alarm()
  // response = webhook_general()
  // response = monitor_list()
  //response = count_monitor()
  //response = summary()
  //response = trend()
  //response = falldown()
  //response = average()
  // response = compare()
  // response = abnormal()
  //  response = location()
  //response = operation()
  // response = emergency()
  // response = count_emergency()




  error_check(response);
  sleep(1)
}











































































const cid = __ENV.cid || "1";
const id = __ENV.id || "1";
const projectname = __ENV.projectname || "1";
const user = __ENV.user || "1";
const durationx = __ENV.durationx || "1";
let response;
const scenariox = __ENV.scenariox || "1";
let options;
const vusx = Math.ceil(user / durationx);
if (scenariox == 1) {
  options = {
    http: {
      timeout: '300s'
    },
    insecureSkipTLSVerify: true,
    discardResponseBodies: true,
    scenarios: {
      contacts: {
        executor: 'per-vu-iterations',
        vus: vusx,
        iterations: durationx,
        maxDuration: '10m',
        gracefulStop: '120s',
      },
    },
  };
}
else if (scenariox == 2) {
  options = {
    http: {
      timeout: '300s'
    },
    insecureSkipTLSVerify: true,
    vus: user,
    duration: durationx + 's',
    gracefulStop: '120s',
  };
}
else if (scenariox == 3) {
  options = {
    http: {
      timeout: '300s'
    },
    insecureSkipTLSVerify: true,
    scenarios: {
      example_scenario: {
        executor: 'constant-arrival-rate',
        // rate: user,
        // timeUnit: durationx+'s',
        rate: vusx,
        timeUnit: '1s',
        preAllocatedVUs: user,
        duration: durationx + 's', // ระบุระยะเวลาที่ต้องการให้ทดสอบ
        gracefulStop: '120s',
      },
    },
  };
}
else {
  options = {
    insecureSkipTLSVerify: true,
    discardResponseBodies: true,
    scenarios: {
      contacts: {
        executor: 'per-vu-iterations',
        vus: vusx,
        iterations: durationx,
        maxDuration: '10m',
      },
    },
  };
}
export { options };