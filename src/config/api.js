// const admin_dev = '/apa/'
let admin_dev = ''

const admin_test ='http://10.33.119.107:80/'

const admin_uat = 'http://10.18.4.139:8083/'

const admin_pro = 'http://10.18.4.139:8083/'

let local = 'test'

switch (location.hostname) {
    case 'localhost':
        local = 'dev';
        admin_dev =  '/apa/'
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

// console.log('admin_dev',admin_dev)
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
// console.log(api[local],"api[local]");
export default api[local];