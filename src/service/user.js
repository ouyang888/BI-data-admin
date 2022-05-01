import request from "./request";
import { api } from "@/config/index";
export default class AuthApiService {
    //账户列表
    static getSysUserList(data) {
        return request.post(api.adminUrl + `/admin/v1/sysUser/list`, data);
    }
    //  更新姓名
    static sysUserUpdateUser(data) {
        return request.post(api.adminUrl + `/admin/v1/sysUser/updateUser`, data);
    }
    //  用户授权
    static sysUserImpower(id, type) {
        return request.get(api.adminUrl + `/admin/v1/sysUser/impower?userId=${id}&type=${type}`);
    }




    //  复制权限用户列表
    static copyListRoleSysUser(userId) {
        return request.post(api.adminUrl + `/admin/v1/sysUser/role/copyList?userId=${userId}`);
    }
    //  复制权限用户
    static copyRoleSysUser(data) {
        return request.post(api.adminUrl + `/admin/v1/sysUser/role/copy`, data);
    }

    //   修改用户状态
    static sysUserSwitch(data) {
        return request.get(api.adminUrl + `/admin/v1/sysUser/switch?id=${data.id}&status=${data.status}`);
    }

    //  修改用户授权
    static updateSysUserImpower(data) {
        return request.post(api.adminUrl + `/admin/v1/sysUser/impower/update`, data);
    }


    //  添加用户
    static sysUserAdd(data) {
        return request.post(api.adminUrl + `/admin/v1/sysUser/add`, data);
    }

    //  角色列表
    static sysRoleList(data) {
        return request.post(api.adminUrl + `/admin/v1/sysRole/list`, data);
    }

    // 删除角色
    static deleteSysRole(roleId) {
        return request.post(api.adminUrl + `admin/v1/sysRole/delete?roleId=${roleId}`);
    }

    // 新增角色
    static saveSysRole(data) {
        return request.post(api.adminUrl + `/admin/v1/sysRole/save?name=${data.name}&roleId=${data.roleId}&permissionIds=${data.permissionIds}`);
    }


    //新增角色
    static addSysRole(data) {
        return request.post(api.adminUrl + "/admin/v1/sysRole/save", data);
    }

    //修改角色状态
    static sysRoleSwitch(data) {
        return request.get(api.adminUrl + `/admin/v1/sysRole/switch?id=${data.id}&status=${data.status}`);
    }

    //获取劫色权限
    static roleSysPermission(roleId) {
        return request.get(api.adminUrl + `admin/v1/sysPermission/role/query?roleId=${roleId}`);
    }

    //获取劫色权限
    static updateRoleSysPermission(data) {
        return request.post(api.adminUrl + `admin/v1/sysPermission/role/update`, data);
    }

    //获取劫色权限
    static soleSysPermission(data) {
        return request.post(api.adminUrl + `admin/v1/sysUser/impower`, data);
    }

}