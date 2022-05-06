import Vue from 'vue'
import store from "../store";
import VueRouter, {
    RouteConfig
} from 'vue-router'
// import Home from '../views/Home.vue'
import {
    getToken
} from '@/utils/auth';
import {
    api
} from '@/config/index'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: '',
        redirect: '/center/index'
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
        ],
    }


]
const router = new VueRouter({
    routes
})
/**
 * 路由守卫
 */
// router.beforeEach(async (to, from, next) => {
    // if (to.name !== 'login') {
    //     const authoritys = await store.dispatch('setUserAuthoritys')
    //     if (to.fullPath==="/center"&&from.fullPath!=="/center") {
    //         if (authoritys.includes('admin:quality')) {
    //             next('/center/qualityList');
    //             return
    //         }
    //     }
    // if (to.meta.permission) {
    //     let sign = false
    //     if (to.meta.permission instanceof Array) {
    //         to.meta.permission.forEach(item => {
    //             if (authoritys.indexOf(item) >= 0) {
    //                 sign = true
    //             }
    //         })
    //     } else if (authoritys.indexOf(to.meta.permission) > -1) sign = true

    //     if (!sign) {
    //         // if (to.name == 'login') {
    //         //     console.log("进入coupon权限不足");
    //         //     // next('/login');
    //         // } else {
    //         console.log('权限不足')
    //         // }
    //         return;
    //     }
    // }
    // }
    // next();
// })

export default router
