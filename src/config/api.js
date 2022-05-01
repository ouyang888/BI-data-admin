const admin_dev = '/apa/'

const admin_test ='https://devnewdota.smartmidea.net/quality-service/'

const admin_uat = 'https://devnewdota.smartmidea.net/uat/quality-service/'

const admin_pro = 'https://lease.msmartlife.com/quality-service/'

let local = 'test'

switch (location.hostname) {
    case 'localhost':
        local = 'dev';
        break;
    case 'devnewdota.smartmidea.net':
        local = 'test';
        if(location.href.indexOf('https://devnewdota.smartmidea.net/static/inspectionClient-uat/') > -1) {
            local = 'uat';
        }
        break;
    default: 
        local = 'prod';
}

console.log(local)
const api = {
    dev: {
        adminUrl: admin_dev,
    },
    test: {
        adminUrl: admin_test,
    },
    uat: {
        adminUrl: admin_uat,
    },
    prod: {
        adminUrl: admin_pro,
    }
}
console.log(api[local],"api[local]");
export default api[local];