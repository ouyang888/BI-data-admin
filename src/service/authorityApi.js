import request from "./request";
import { api } from "@/config/index";
export default class AuthApiService {
    //   获取劫色权限
    static roleSysPermission(roleId) {
        return request.get(api.adminUrl + `admin/v1/sysPermission/role/query?roleId=${roleId}`);
    }

    static updateRoleSysPermission(data) {
        return request.post(api.adminUrl + `/admin/v1/sysPermission/role/update`, data);
    }

    static deletePermission(id) {
        return request.post(api.adminUrl + "/admin/v1/sysPermission/delete?permissionId="+id);
    }


    static savePermission(params) {
        return request.post(api.adminUrl + "/admin/v1/sysPermission/save", params);
    }

    static getPermissions(params) {
        return request.get(api.adminUrl + "admin/v1/sysPermission/list?", params);
    }

    static saleRole(params) {
        return request.post(api.adminUrl + "admin/v1/sysRole/save", params);
    }
    static getRoles(params) {
        return request.get(api.adminUrl + "admin/v1/sysRole/list", params);
    }
    static deleteRole(params) {
        return request.post(api.adminUrl + "/admin/v1/sysPermission/delete", params);
    }
    static getSysUserInfo() {
        return request.get(api.adminUrl + `admin/v1/sysPermission/user/query`);
    }
}