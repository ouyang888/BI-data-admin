import Vue from 'vue'
import Vuex from 'vuex'
import { getToken } from '@/utils/auth';
import API from '../service/authorityApi'
import router from "@/router";

Vue.use(Vuex)
const token = getToken();

export default new Vuex.Store({
    state: {
        downloadVisible: false,//下载框
        authoriths: [],//权限
        /* 图片框start */
        isMouse: false,
        preX: 0,
        preY: 0,
        mouseX: 0,
        mouseY: 0,
        modalWidth: 50,
        previewImage: "",
        previewVisible: false,
        showMoney:true,
        year:'2022',
        month:new Date().getMonth()+1>=10?new Date().getMonth()+1>=10:'0'+(new Date().getMonth()+1),
        model:'本部,OEM,待定',
        currPath:'销向汇总',
        currTitle:'',
        unit:'亿',/*页面单位*/
        endDay:'',/*最后一天*/
        /* 图片框end */
    },
    mutations: {
        setYear(state,val){
            state.year = val
        },
        setMonth(state,val){
            state.month = val
        },
        setShowMoney(state,val){
            state.showMoney = val;
            state.unit = val==true?'亿':'万';
        },
        setModel(state,val){
            // console.log('model改制',val)
            state.model = val
        },
        setCurrPath(state,val){
            state.currPath = val
        },
        setCurrTitle(state,val){ //卡片标题
            state.currTitle = val
        },
        setEndDay(state,val){
            state.endDay = val;
        }
    },
    actions: {
        // setCityName({commit,state}, name){
        //     // 跟后台打交道
        //     // 调用mutaions里面的方法
        //     commit("setCity", name);
        // }
        mouseIng({ commit, state }, envet) {
            if (!state.isMouse) return
            commit("mouseIng", envet)
        },
        mouseStart({ commit }, envet) {
            // console.log(envet, "envet");
            envet.preventDefault();
            envet.stopPropagation();
            commit("mouseStart", envet)
        },
        setUserAuthoritys: async ({ commit, state }) => {
            let userAuthoritys = state.authoriths;
            if (userAuthoritys.length===0) {
                try {
                    const { data,code } = await API.getSysUserInfo()
                // code: 1
                // data: null
                // msg: "该用户没有角色，请联系管理员"
                    if (code===100301) {
                        commit("clearAuthoriths")
                        router.replace('/login')
                    }
                    userAuthoritys = data ? data.list : []
                    commit("setAuthoriths", userAuthoritys)
                } catch (error) {
                    console.log(error);
                }
            }

            return userAuthoritys;
        }

    },
    getters: {
        getAuthoriths: state => state.authoriths,
    },
    // modules: {
    // }
})
