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
      sql_type:store.state.showMoney==true?'AMT':'QTY', /*金额:数量*/
      prod_area_name:store.state.model, /*本部*/
      code:code
    };
    Object.assign(obj,params);
    return request.get( api.adminUrl +`query?`,
    params
    );
  }
  //七图
  static getChartQuery(code, date, fields) {
    return request.get(api.adminUrl + `chartQuery?code=${code}&parameter=${date}&fields=${fields}`);
  }


//  新的总接口
  static getTotal(params) {
    let obj = {
      sql_type:store.state.showMoney==true?'AMT':'QTY', /*金额:数量*/
      prod_area_name:store.state.model /*本部*/
    };
    console.log('params', JSON.stringify(params));
    Object.assign(params,obj);

    return request.get( api.adminUrl +`query?`,
    params
    );
  }
  // 趋势图接口
  static getChartTotal(params) {
    let obj = {
      sql_type:store.state.showMoney==true?'AMT':'QTY', /*金额:数量*/
      prod_area_name:store.state.model /*本部*/
    };
    console.log('params', JSON.stringify(params));
    Object.assign(obj,params);
    console.log('getChartTotal',params)
    return request.get(api.adminUrl + `chartQuery?`,
    obj);
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
}