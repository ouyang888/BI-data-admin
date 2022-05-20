import axios from "axios";
import qs from "qs";
import router from "@/router";
import { message } from "ant-design-vue";
import { contentType, requestTimeout, successCode, errorTokenCode } from '@/config';
import { objectToParamString } from '@/utils/utils';
import { getToken, removeToken } from "@/utils/auth";
import { api } from '@/config/index'

const httpConfig = {
    Headers: {
        "Content-type": "application/json"
    }
}
/**
 * @description 处理code异常,错误码还未定义，需要和后端协商
 * @param {*} code
 * @param {*} msg
 */
const handleCode = (code, msg) => {
    console.log("errorcode", code)
    // if (errorTokenCode.indexOf(code) > -1) {
    if (code == 1) {
        code && message.error(msg || "登录失效");
        // location.href = api.adminUrl + 'login';
        localStorage.removeItem("token")
        location.href = 'http://10.18.4.139:8088/#/login';

    }
};

/**
 * @description axios初始化
 */
const instance = axios.create({
    timeout: requestTimeout,
    headers: {
        "Content-Type": contentType,
    },
});
instance.defaults.withCredentials = true

/**
 * @description axios请求拦截器
 */
instance.interceptors.request.use(
    (config) => {
        try {
            if (location.hostname == 'localhost') {
                config.headers['dota-local-test'] = 'true';
                config.headers['responseType'] = 'arraybuffer';
            } else {
                config.headers['Authorization'] = 'Bearer ' + getToken();
            }
        } catch (error) {
            console.log(error)
        }
        if (

            config.data &&
            config.headers["Content-Type"] === "application/json;charset=UTF-8"

        )

            config.data = qs.stringify(config.data);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

/**
 * @description axios响应拦截器
 */
instance.interceptors.response.use(

    (response) => {
        const { data, config } = response;
        const { code, msg } = data;
        // 操作正常Code数组
        const codeVerificationArray = Array.isArray(successCode) ? [...successCode] : [...[successCode]];
        // 是否操作正常
        if (codeVerificationArray.includes(code)) {
            return data;
        } else {
            handleCode(code, msg);
            return data;
            // return Promise.reject(
            //     msg || "请求异常"
            // );
        }
    },
    (error) => {
        console.log(error)
        const { response, message } = error;
        if (error.response && error.response.data) {
            const { status, data } = response;
            handleCode(status, data.msg || message);
            return Promise.reject(data.msg || message);
        } else {
            let { message } = error;
            if (message === "Network Error") {

                message = "后端接口连接异常";
            }
            if (message.includes("timeout")) {
                message = "后端接口请求超时";
            }
            if (message.includes("Request failed with status code")) {
                const code = message.substr(message.length - 3);
                message = "后端接口" + code + "异常";
            }
            console.error(message || `后端接口未知异常`);
            return Promise.reject(message || `后端接口未知异常`);
        }
    }
);

export default {
    $axios: instance,
    get(url, data, config) {
        if (!config) {
            config = httpConfig;
        }
        if (data) {
            url = url + objectToParamString(data)
        }

        return instance.get(url, config)
    },
    post(url, data, config) {
        if (!config) {
            config = httpConfig;
        }

        return instance.post(url, data, config)
    }
};