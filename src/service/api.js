import request from "./request";
import { api } from "@/config/index";
export default class ApiService {
  static getApiPre(type) {
    switch (type) {
      case "admin":
        return api.adminUrl;
      default:
        return api.adminUrl;
    }
  }
 

  //总的接口
  static getData(code,date) {
    return request.get(api.adminUrl + `query?code=${code}&parameter=${date}`);
  }
}