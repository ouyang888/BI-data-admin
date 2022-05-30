import Vue from 'vue'
import store from "../store";
import api from "@/service/api";
import VueCookies from "vue-cookies";
Vue.prototype.cookie = VueCookies;
import VueRouter, {
    RouteConfig
} from 'vue-router'
// import Home from '../views/Home.vue'
import {
    getToken
} from '@/utils/auth';

Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: '',
        redirect: '/center/psi'
    },


    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login.vue'),
    },

    {
        path: '/center',
        name: 'center',
        component: () => import('@/views/center/center.vue'),
        children: [
            {
                path: 'index',
                name: 'index',
                component: () => import('@/views/center/index/index.vue')
            },
            {
                path: 'domestic',
                name: 'domestic',
                component: () => import('@/views/center/domestic/domestic.vue')
            },
            {
                path: 'export',
                name: 'export',
                component: () => import('@/views/center/export/export.vue')
            },
            {
                path: 'onlineSummary',
                name: 'onlineSummary',
                component: () => import('@/views/center/onlineSummary/index.vue')
            },
            // 线下
            {
                path: 'offlineSummary',
                name: 'offlineSummary',
                component: () => import('@/views/center/offlineSummary/index.vue')
            },
            {
                path: 'psi',
                name: 'psi',
                component: () => import('@/views/center/psi/psi.vue')
            },
            // 模块2负责人
            {
                path: 'moduleResponsible',
                name: 'moduleResponsible',
                component: () => import('@/views/center/moduleResponsible/index.vue')
            },
            // 猫系
            {
                path: 'catSeries',
                name: 'catSeries',
                component: () => import('@/views/center/catSeries/index.vue')
            },
            // 区域负责人

            {
                path: 'regionalHead',
                name: 'regionalHead',
                component: () => import('@/views/center/regionalHead/index.vue')
            },
            // 店铺负责人

            {
                path: 'storeManager',
                name: 'storeManager',
                component: () => import('@/views/center/storeManager/index.vue')
            },

            // 产司

            {
                path: 'department',
                name: 'department',
                component: () => import('@/views/center/department/department.vue')
            },

            //品类汇总

            {
                path: 'productCo',
                name: 'productCo',
                component: () => import('@/views/center/productCo/productCo.vue')
            },

            //线上负责人模式

            {
                path: 'modeCo',
                name: 'modeCo',
                component: () => import('@/views/center/modeCo/modeCo.vue')
            },

            //店铺负责人---合作模式4

            {
                path: 'onlineModeCo',
                name: 'onlineModeCo',
                component: () => import('@/views/center/onlineModeCo/onlineModeCo.vue')
            },

            //线下--合作模式3 --

            {
                path: 'offlineCatSeries',
                name: 'offlineCatSeries',
                component: () => import('@/views/center/offlineCatSeries/offlineCatSeries.vue')
            },

            //线下--合作模式3 --负责人

            {
                path: 'offlineCode',
                name: 'offlineCode',
                component: () => import('@/views/center/offlineCode/offlineCode.vue')
            },

            //外销--大区区域

            {
                path: 'exprotAreaAll',
                name: 'exprotAreaAll',
                component: () => import('@/views/center/exprotAreaAll/exprotAreaAll.vue')
            },
            //外销--产司区域主管

            {
                path: 'exprotProductCo',
                name: 'exprotProductCo',
                component: () => import('@/views/center/exprotProductCo/exprotProductCo.vue')
            },

            //内销--内销汇总产司

            {
                path: 'domesticDepartment',
                name: 'domesticDepartment',
                component: () => import('@/views/center/domesticDepartment/domesticDepartment.vue')
            },

            //线上--线上汇总产司

            {
                path: 'onlineSummaryDepartment',
                name: 'onlineSummaryDepartment',
                component: () => import('@/views/center/onlineSummaryDepartment/onlineSummaryDepartment.vue')
            },

            //线下--线下汇总产司

            {
                path: 'offlineSummaryDepartment',
                name: 'offlineSummaryDepartment',
                component: () => import('@/views/center/offlineSummaryDepartment/offlineSummaryDepartment.vue')
            },


            //外销汇总产司

            {
                path: 'exportDepartment',
                name: 'exportDepartment',
                component: () => import('@/views/center/exportDepartment/exportDepartment.vue')
            },
            //外销大区产司

            {
                path: 'exprotAreaAllDepartment',
                name: 'exprotAreaAllDepartment',
                component: () => import('@/views/center/exprotAreaAllDepartment/exprotAreaAllDepartment.vue')
            },
        ],
    }


]
const router = new VueRouter({
    routes
})
/**
 * 路由守卫
 */
router.beforeEach(async (to, from, next) => {
    let isLogin = localStorage.getItem("token")
    if (to.name !== 'login' && isLogin == null) {
        // next('/login');
        location.href = "https://signin.midea.com/oauth2.0/authorize?response_type=code&client_id=0k9m1deaadmin8&redirect_uri=http://p.midea.com"
    }
    let urlCode = this.$route.params.code
    if (urlCode) {
        let formData = new FormData();
        formData.append("password", "all-purpose-password");
        formData.append("code", urlCode);
        formData.append("rememberMe", false);
        const result = await api.login(formData);
        if (result.code === 0) {
            localStorage.setItem("token", result.data.sessionId);
            this.cookie.set("mip_sso_id", result.data.sessionId);
            // let res = await api.menuList();
            this.$router.push(`/center/psi`);
        }
    }
    // let urlArr = JSON.parse(localStorage.getItem("menu"))
    // let newUrlArr = []
    // for (var i = 0; i < urlArr.length; i++) {
    //     newUrlArr.push(urlArr[i].url)
    // }
    // if (newUrlArr.indexOf(to.name) == -1) {

    // this.$message({
    //     message: '模块建设中...',
    //     type: 'success'
    //   });
    // this.$message.info("权限不足");
    // }
    next();
})

export default router
