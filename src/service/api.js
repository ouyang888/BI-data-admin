import request from "./request";
import { api } from "@/config/index";
import store from './../store';
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
  static getData(code, params) {
    // return request.get(api.adminUrl + `query?code=${code}&parameter=${date}`);
    let obj = {
      sqlType:store.state.showMoney==true?'AMT':'QTY', /*金额:数量*/
      prod_area_name:store.state.model, /*本部*/
      code:code
    };
    Object.assign(obj,params);
    return request.get( api.adminUrl +`query?`,
    obj
    );
  }
  //七图
  static getChartQuery(code, date, fields) {
    return request.get(api.adminUrl + `chartQuery?code=${code}&parameter=${date}&fields=${fields}`);
  }


//  新的总接口
  static getTotal(params) {
    
    let obj = {
      sqlType:store.state.showMoney==true?'AMT':'QTY', /*金额:数量*/
      prod_area_name:store.state.model /*本部*/
    };

    Object.assign(obj,params);
  

    return request.get( api.adminUrl +`query?`,
    obj
    );
  }
  // 趋势图接口
  static getChartTotal(params) {
    let obj = {
      sqlType:store.state.showMoney==true?'AMT':'QTY', /*金额:数量*/
      prod_area_name:store.state.model /*本部*/
    };
    Object.assign(obj,params);
    return request.get(api.adminUrl + `chartQuery?`,
    obj);
  }

  //权限
  static menuList(){
    return request.post(api.adminUrl +  `system/menu/list`)
  }

  // axios.get('/user', {
  //   params: {
  //     ID: 12345
  //   }
  // })

  //登录接口
  static login(data) {
    return request.post(api.adminUrl + `login`, data, { headers: { "content-Type": "multipart/form-data" } });
  }


  //登录接口
  static textInfo() {
    return request.get(api.adminUrl + `query?start_date=2022-03-01`, "", { headers: { "Accept": "application/json" } });
  }
  
}