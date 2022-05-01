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
  // //下载活动链接
  // static downloadLink(recordId) {
  //   return request.post(api.activityUrl + `admin/v2/activity/download?recordId=${recordId}`, {}, { responseType: "arraybuffer" });
  // }
  //创建活动链接
  static qualityInfo(data) {
    return request.post(api.adminUrl + `admin/v1/qualityInfo/page`, data);
  }
  //入库仓库
  static warehouseName() {
    return request.get(api.adminUrl + `admin/v1/quality/warehouse/name/query`);
  }
  //导出商品质检
  static exportQuality(data) {
    return request.post(api.adminUrl + `admin/v1/qualityInfo/export`, data ,{ responseType: "arraybuffer" });
  }
  //添加商品质检
  static addQuality(data) {
    return request.post(api.adminUrl + `admin/v1/qualityInfo/add`, data);
  }
  //添加商品质检
  // static qualityInspector(data) {
  //   return request.post(api.adminUrl + `admin/v1/qualityInspector/query`, data);
  // }
  //查找sn码
  static querySnCode(querySnCode,config) {
    return request.get(api.adminUrl + `admin/v1/commodityInfo/querySnCode?snCode=${querySnCode}`,{},config);
  }
  //查找sn通过name
  static queryCommodityByName(name,config) {
    return request.get(api.adminUrl + `admin/v1/commodityInfo/queryCommodityByName?name=${name}`,{},config);
  }
  //查找质检员通过name
  static queryQualityInspector(name) {
    return request.get(api.adminUrl + `admin/v1/qualityInspector/query?name=${name||''}`);
  }
  //添加质检信息
  static addQualityInfo(data) {
    return request.post(api.adminUrl + `admin/v1/qualityInfo/add`,data);
  }
  //获取质检详情
  static queryQualityInfo(data) {
    return request.post(api.adminUrl + `admin/v1/qualityInfo/query`,data);
  }
  //修改质检详情
  static updateQualityInfo(data) {
    return request.post(api.adminUrl + `admin/v1/qualityInfo/update`,data);
  }
  //缺陷选项列表
  static flawList(data) {
    return request.post(api.adminUrl + `frontend/v1/quality/app/flaw/list`,data);
  }
  //缺陷选项列表
  static flawResult(data,config) {
    return request.post(api.adminUrl + `frontend/v1/quality/app/flaw/result`,data,config);
  }
  //缺陷选项列表
  static login(data) {
    return request.get(api.adminUrl + `admin/v1/sysUser/login?`,data,);
  }
  //产品成色列表
  static generalList({group}) {
    return request.get(api.adminUrl + `admin/v1/general/list?group=${group}`);
  }
  //处理人列表
  static inspectorList(name) {
    return request.get(api.adminUrl + `admin/v1/inspector/list?name=${name}`);
  }
  //客户列表
  static clientList(clientName) {
    return request.get(api.adminUrl + `admin/v1/client/list?clientName=${clientName}`);
  }
  //订单列表
  static orderList(data) {
    return request.post(api.adminUrl + `admin/v1/order/list`,data);
  }
  //订单列表导出
  static exportOrderList(data) {
    return request.post(api.adminUrl + `admin/v1/order/list/export`,data,{ responseType: "arraybuffer" });
  }
  //订单详情
  static orderInfo(orderCode) {
    return request.get(api.adminUrl + `admin/v1/order/info?orderCode=${orderCode}`);
  }
  //修改订单
  static orderUpdate(data) {
    return request.post(api.adminUrl + `admin/v1/order/update`,data);
  }
  //修改订单
  static logPage(data) {
    return request.post(api.adminUrl + `admin/v1/handle/log/page`,data);
  }
  //商品列表选择
  static commodityList(data) {
    return request.post(api.adminUrl + `frontend/v1/commodity/list`,data);
  }
  /* 工程师start */
    //商品列表选择
    static qualityInspectorList(data) {
      return request.post(api.adminUrl + `admin/v1/sysData/qualityInspector/queryList`,data);
    }
    //网点list
    static networkList() {
      return request.get(api.adminUrl + `admin/v1/sysData/network/list`);
    }
    //网点list
    static addQualityInspector(data) {
      return request.post(api.adminUrl + `admin/v1/sysData/qualityInspector/add`,data);
    }
    //退出登录
    static logOut() {
      return request.get(api.adminUrl + `admin/v1/sysUser/logout`);
    }
  /* 工程师end */
  /* 质检外链start */
  //列表
  static commodityInfoChecked(data) {
    return request.post(api.adminUrl + `admin/v1/commodityInfo/checked/page`,data);
  }
  //品类列表
  static categoryList() {
    return request.post(api.adminUrl + `admin/v1/commodityInfo/category/select`);
  }
  //列表
  static chainList(data) {
    return request.post(api.adminUrl + `admin/v1/chain/list/page`,data);
  }
  //删除外链
  static chainDelete(data) {
    return request.get(api.adminUrl + `admin/v1/chain/delete?`,data);
  }
  //外链详情
  static chainInfo(data) {
    return request.get(api.adminUrl + `admin/v1/chain/info?`,data);
  }
  //外链保存
  static chainSave(data) {
    return request.post(api.adminUrl + `admin/v1/chain/save`,data);
  }
  //外链更新
  static chainUpdate(data) {
    return request.post(api.adminUrl + `admin/v1/chain/update`,data);
  }
  static downloadPage(data) {
    return request.post(
      api.adminUrl + "admin/v1/download/list/page", data
    )
  }
  //下载
  static downloadBatch(data) {
    return request.post(
      api.adminUrl + "admin/v1/chain/image/downloadBatch", data
    )
  }
  /* 质检外链end */
  /* 系统操作start */
  // 日志
  static sysLogPage(data) {
    return request.post(
      api.adminUrl + "admin/v1/sys/log/page", data
    )
  }
  /* 系统操作end */

}