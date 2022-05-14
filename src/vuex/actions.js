import axios from '@/utils/axios'
import { resolve } from '@sentry/utils';
import { createInnerDirect, createOuterDirect, createInnerSab, createOutSab, createRow } from '@/assets/utils/common.js'
export const action = {
  getPageData({ state, dispatch, commit }, params) {
    // if( params.path === 's'){

    // } else if(params.path==='domesticProductCo') {
    //   console.log('domesticProductCodomesticProductCo');
    //   dispatch('getInnerPanel')
    // }
    switch (params.path) {
      case 's':
        dispatch('getFristPanel')
        dispatch('getCardData')
        dispatch('getChartData')
        // dispatch('getSalesSummaryTable')
        dispatch('queryData',{code:'directITotalInnerTotal'})
        dispatch('getInnerDirectChart', { code: "directTotalInnerChart", date: "2022-02,2022-02" })
        break;
      case 'productCoAll':
        dispatch('getProductCoTable',{inner:{code:'directLevelInnerBottom',date:'2022-02'},outer:{code:'directLeveOutterBottom',date:'2022-02'}})
        dispatch("getCard", { code: 'cooperModel4CategoryTopTotal', date: '2022-02' })
        break;
      case 'saleDir':

        break;
      case 'productCo':
        break;
      case 'domestic':
        dispatch('getPanel', { code: 'innerDirectTopTotal' })
        dispatch('getPanelSab', { code: 'innerDirectTopSAB' })
        dispatch('queryData', { code: 'directITotalInnerTotal', date: '2022-3' })
        dispatch('queryCardData', { code: 'innerDirectInOutKard', date: '2022-02' })
        dispatch('queryCardSAB', { code: 'innerDirectRightSAB', date: '2022-03' })
        dispatch('getInnerDirectChart', { code: "innerDirectChart", date: "2022-02,2022-02" })
        commit("setTableOneHeading", "线上");
        commit("setTableTwoHeading", "线下");
        // commit("setTableList", ...state.demosticDirectOnOnline);
        break;
      case 'exprot':
        dispatch('queryData', { code: 'directITotalInnerTotal' })
        dispatch('getPanel', { code: 'sellOutTopDashBoard' })
        dispatch('getPanelSab', { code: 'sellOutTopDashBoardSAB' })
        dispatch('getInnerDirectChart', { code: "sellOuttotalchart", date: "2022-02" })
        commit("setTableOneHeading", "区域");
        commit("setTableTwoHeading", "大区");
        // commit("setTableList", ...state.placeArea);
        break;
      case 'domesticOnLine':
        dispatch('getPanel', { code: 'innerDirectTopTotal' })
        dispatch('getPanelSab', { code: 'innerDirectTopSAB' })
        commit("setTableOneHeading", "通路-自营");
        commit("setTableTwoHeading", "通路-代运营");
        // commit("setTableList", ...state.demosticDirectOnOnline);
        dispatch("getCard", { code: 'onlineTopCooprLevel2', date: '2022-02' })
        break;
      case 'domesticOffLine':
        dispatch('getPanel', { code: 'innerDirectTopTotal' })
        dispatch('getPanelSab', { code: 'innerDirectTopSAB' })

        commit("setTableOneHeading", "通路");
        commit("setTableTwoHeading", "重点客户");
        dispatch("getCard", { code: 'offLineRightCooper2', date: '2022-02' })
        break;
      case 'domesticProductCoOnline':
        break;
      case 'domesticProductCoOffline':
        break;
      case 'exprotAreaAll':
        // commit("setTableList", ...state.southAmerciaData);
        break;
      case 'exprotProductCo':
        // commit("setTableList", ...state.outlineComp);
        break;
      case 'domesticOnLinePlatform':
        // dispatch("getCard",{code:'offlinePlatformLe3',date:'2022-02'})
        // commit("setTableList", ...state.demosticDirectOnOnlineShop);
        break;
      case 'domesticOffLinePlace':
        break;
      case 'domesticOnLinePlatformCo':
        // dispatch("queryrightShopData",{code:'platformStoreTopTotal',date:'2022-02'})
        break;
      case 'domesticOffLinePlaceCo':
        // commit("setTableList", ...state.demosticDirectOnOnline);
        break;
      case 'exprotArea':
        // commit("setTableList", ...state.demosticDirectOnOnline);
        break;
      case 'exprotAreaProductCo':
        dispatch('getTableList',{
          inner:{code:'sellOutRegionManagerDirectBottomSales',date:'2022-02%2C2022-02%2C2022-02%2C2022-02'},
          outer:{code:'sellOutRegionManagerDirectBottomKA',date:'2022-02%2C2022-02%2C2022-02%2C2022-02'}
        })
        break;
      case 'domesticOnLineShop':
        dispatch('queryData', { code: 'level3OnlineTopTotal' })
        dispatch('queryData', { code: 'level3OnlineTotalSAB' })
        dispatch('demosticOnlineShopTable')
        break;
      case 'domesticOffLineChannel':
        dispatch('demosticOfflineTable')
        // commit("setTableList", ...state.demosticDirectOnOnlineShop);
        break;
      case 'domesticOnLineSales':
        // commit("setTableList", ...state.demosticDirectOnOnlineShop);
        break;
      case 'domesticOffLineSales':
        dispatch('getTableList',{
          inner:{code:'',date:''},
          outer:{code:'',date:''},
        })
        // commit("setTableList", ...state.demosticDirectOnOnlineShop);
        break;
      case 'exprotSales':
        // commit("setTableList", ...state.demosticDirectOnOnlineShop);
        break;
      case 'domesticOnLineShopCo':
        dispatch('demosticOnlineWorkModeTable');
        break;
      case 'exprotSalesProductCo':
        dispatch('getTableList',{
          inner:{code:'sellOutRegionManagerDirectBottomSales',date:'2022-02%2C2022-02%2C2022-02'},
          outer:{code:'sellOutRegionManagerDirectBottomKA',date:'2022-02%2C2022-02%2C2022-02'}
        })
        break
      default:
        // console.log('sssssssssssssss');
    }

  },

  //七图
  forExport({ state, commit }, params) {
    axios.get(`/api/query?code=${params.code}&parameter=${params.date}`).then(res => {
      let list = { title: [], dataList: [], date: [] }
      res.rows.filter((item) => {
        var timeArr = item.orderDate.replace(" ", ":").replace(/\:/g, "-").split("-");
        var yue = timeArr[1];
        var ri = timeArr[2];
        list.date.push(yue + '-' + ri);
        list.title.push(item.cooprLevel1)
        list.dataList.push(item.totalAmt)
        commit('getForExport', list);
        // console.log("000888111dddd", list)
      })
    })
  },




  //三图
  getInnerDirectChart({ state, commit }, params) {
    axios.get(`/api/query?code=${params.code}&parameter=${params.date}`)
      .then(res => {
        let obj = res.rows && res.rows[0];
        let onLine = { onLineDate: [], lineTotalCnyAmt: [] }
        let lineDown = { lineDownDate: [], lineDownTotalCnyAmt: [] }
        let general = { generalDate: [], general: [] }

        let division = { divisionDate: [], divisionCnyAmt: [] }
        let innerDirect = { innerDirectDate: [], innerDirectCnyAmt: [] }
        let outerDirect = { outerDirectDate: [], outerDirectCnyAmt: [] }

        res.rows.filter((item) => {
          var timeArr = item.orderDate.replace(" ", ":").replace(/\:/g, "-").split("-");
          var yue = timeArr[1];
          var ri = timeArr[2];
          // console.log("11122kkkk",) 
          if (item.cooprLevel1 == '线上') {
            onLine.onLineDate.push(yue + '-' + ri)
            onLine.lineTotalCnyAmt.push(item.totalCnyAmt)
          } else if (item.cooprLevel1 == '线下') {
            lineDown.lineDownDate.push(yue + '-' + ri)
            lineDown.lineDownTotalCnyAmt.push(item.totalCnyAmt)
          }
          // if (item.directName != undefined) {
          if (item.directName == '事业部') {
            division.divisionDate.push(yue + '-' + ri)
            division.divisionCnyAmt.push(item.totalCnyAmt)

          } 
          // else if (item.directName == '内销') {
          //   innerDirect.innerDirectDate.push(yue + '-' + ri)
          //   innerDirect.innerDirectCnyAmt.push(item.totalCnyAmt)
          // } 
          else if (item.directName == '外销') {
            outerDirect.outerDirectDate.push(yue + '-' + ri)
            outerDirect.outerDirectCnyAmt.push(item.totalCnyAmt)
          }
          // }

          general.general.push(item.totalCnyAmt + item.totalCnyAmt)
        })
        commit("getDirectTotalInnerChart", division)
        commit('getInnerDirectOnline', onLine);
        commit('getInnerDirectLineDown', lineDown);
        commit('getGeneral', general);
      }).catch(err => {
        console.log(err, 'err')
      })
  },

  getCardData({ state, commit }) {
    axios.get('/api/psi/directTotal/groupMonthDirectName', {}).then(res => {
      let obj = res.rows && res.rows[0];


      let innerSabUp = createInnerSab(obj.innerSab, '线上');
      let innerSabDown = createInnerSab(obj.innerSab, '线下');

      let outerSabUp = createOutSab(obj.outSab, 'OBM');
      let outerSabDown = createOutSab(obj.outSab, 'OEM');

      innerSabUp.forEach(v => {
        v.positionRatio = Number(v.positionRatio.toFixed(2))
      })
      innerSabDown.forEach(v => {
        v.positionRatio = Number(v.positionRatio.toFixed(0))
      })

      outerSabUp.forEach(v => {
        v.positionRatio = Number(v.positionRatio.toFixed(2));

      })
      outerSabDown.forEach(v => {
        v.positionRatio = Number(v.positionRatio.toFixed(0))
      })

      let innerDirect = createInnerDirect(obj.innerDirect, '内销', innerSabUp, innerSabDown);
      let outerDirect = createOuterDirect(obj.outerDirect, '外销', outerSabUp, outerSabDown);


      commit('setInnerDirect', innerDirect)
      commit('setOuterDirect', outerDirect)

      // debugger

    }).catch(err => {
      console.log(err);
    })
  },
  getChartData({ state, commit }, params) {
    axios.get('/api/psi/directTotal/groupTendencyChart', { params: params }).then(res => {
      // console.log('ressss', res.rows[0]);
      let obj = res.rows[0];

      let nameObj = {
        direct: '事业部',
        innerDirect: '内销',
        outerDirect: '外销',
      }
      var chartData = [];
      for (var i in obj) {
        var chartObj = { title: nameObj[i], orderDate: [], totalCnyAmt: [{ name: '实际达成', data: [] }], inOnLineRatio: '' }
        chartObj.inOnLineRatio = obj[i].saleAvgAmt || 0
        obj[i].forEach(v => {
          chartObj.orderDate.push(v.orderDate.substr(5))
          chartObj.totalCnyAmt[0].data.push((v.totalCnyAmt) / 10000)
        });
        chartData.unshift(chartObj)

      }
      commit('setChartData', chartData);
      // commit('setSalePageData',chartData);
    }).catch(err => {
      console.log('err', err)
    })
  },
  async getSalesSummaryTable({ state, commit }) {
    axios.get('/api/psi/directTotal/groupByDirectName', {
    }).then(res => {
      commit('setTableList', ...res.rows);
    }).catch(err => {
      console.log(err, 'getSalesSummaryTable')
    })
  },
  getFristPanel({ state, commit }) {
    axios.get('/api/psi/directTotal/groupByHeadTotal', {})
      .then(res => {
        let d = new Date()
        d = String(d.getFullYear()) + '-' + String(d.getMonth())
        commit('setPanel', res.rows);
      }).catch(err => {
        console.log(err, 'errerrerrerr')
      })
  },
  // queryData({ state, commit }, param) {
  //   let d = new Date()
  //   d = String(d.getFullYear()) + '-' + String(d.getMonth()).toString().padStart(2, "0")
  //   axios.get(`/api/query?code=${param.code}&parameter=${param.date ? param.date : d}`, {})
  //     .then(res => {
  //       commit('setPanel', res.rows);
  //   }).catch(err => {
  //       console.log(err,'errerrerrerr')
  //   })
  // },
  getPanel({ state, commit }, param) {
    let d = new Date()
    d = String(d.getFullYear()) + '-' + (new Date().getMonth()).toString().padStart(2, "0")
    axios.get(`/api/query?code=${param.code}&parameter=${param.date ? param.date : d}`, {})
      .then(res => {
        if (res.code === 0) {
          commit('setPanel', res.rows);
        } else {

        }
      }).catch(err => {
        console.log(err, 'errerrerrerr')
      })
  },
  getPanelSab({ state, commit }, param) {
    let d = new Date()
    d = String(d.getFullYear()) + '-' + (new Date().getMonth()).toString().padStart(2, "0")
    axios.get(`/api/query?code=${param.code}&parameter=${param.date ? param.date : d}`, {})
      .then(res => {
        if (res.code === 0) {
          commit('setPanelSab', res.rows);
        } else {

        }
      }).catch(err => {
        console.log(err, 'errerrerrerr')
      })
  },
  queryData({ state, commit }, param) {
    let d = new Date()
    d = String(d.getFullYear()) + '-' + String((new Date().getMonth()).toString().padStart(2, "0"))
    axios.get(`/api/query?code=${param.code}&parameter=${param.date ? param.date : d}`, {})
      .then(res => {
      }).catch(err => {
        console.log(err, 'errerrerrerr')
      })
  },
  queryCardData({ state, commit }, param) {

    axios.get(`/api/query?code=${param.code}&parameter=${param.date ? param.date : d}`, {})
      .then(res => {
        // let innerSabUp = createInnerSab(obj.innerSab, '线上');
        // let innerSabDown = createInnerSab(obj.innerSab, '线下');

        // let outerSabUp = createOutSab(obj.outSab, 'OBM');
        // let outerSabDown = createOutSab(obj.outSab, 'OEM');

        // innerSabUp.forEach(v => {
        //   v.positionRatio = Number(v.positionRatio.toFixed(2))
        // })
        // innerSabDown.forEach(v => {
        //   v.positionRatio = Number(v.positionRatio.toFixed(0))
        // })

        // outerSabUp.forEach(v => {
        //   v.positionRatio = Number(v.positionRatio.toFixed(2));

        // })
        // outerSabDown.forEach(v => {
        //   v.positionRatio = Number(v.positionRatio.toFixed(0))
        // })

        let innerDirect = createRow(res.rows, 'cooprLevel1', '线上');
        let outerDirect = createRow(res.rows, 'cooprLevel1', '线下');
        if (innerDirect.length < 2) {

          innerDirect.push({ info: {}, list: [] })
        }
        if (outerDirect.length < 2) {
          outerDirect.push({ info: {}, list: [] })
        }

        // console.log('innerDirectinnerDirect', innerDirect, outerDirect)
        commit('setInnerDirect', innerDirect)
        commit('setOuterDirect', outerDirect)


      })

  },
  queryCardSAB({ state, commit }, param) {

    axios.get(`/api/query?code=${param.code}&parameter=${param.date ? param.date : d}`, {})
      .then(res => {

        // console.log(res)
        let innerSabUp = createInnerSab(res.rows, '线上');
        let outerSabUp = createInnerSab(res.rows, '线下');
        commit('SetSAB', { innerSabUp: innerSabUp, outerSabUp: outerSabUp })
      })


  },
  getCard({ state, commit }, param) {
    let pathObj = {
      domesticOnLine: 'domesticOnLinePlatform', /*线上 二级*/
      domesticOnLinePlatform: 'domesticOnLineShop',
      domesticOnLineShop: 'domesticOnLineShopCo',
      domesticOffLine: 'domesticOffLineChannel',/*线下*/
      domesticOffLineChannel: 'domesticOffLinePlaceCo',
    }
    let d = new Date()
    String(d.getFullYear()) + '-' + (new Date().getMonth()).toString().padStart(2, "0")
    axios.get(`/api/query?code=${param.code}&parameter=${param.date ? param.date : d}`, {})
      .then(res => {
        res.rows.forEach(v => {


          if (!!v.cnyAmt) {
            v.cnyAmt = (v.cnyAmt / 100000000).toFixed(0)
          }
          if (!!v.saleTaskAmt) {
            v.saleTaskAmt = (v.saleTaskAmt / 100000000).toFixed(0)
          }



          if (!!v.saleAmtRadio) {
            v.saleAmtRadio = (v.saleAmtRadio * 100).toFixed(0)
          }
          if (!!v.saleQtyRadio) {
            v.saleQtyRadio = (v.saleQtyRadio * 100).toFixed(0)
          }
          if (!!v.completeRadio) {
            v.completeRadio = (v.completeRadio * 100).toFixed(0)
          }
        });

        if (!!pathObj[state.currentPath]) {
          res.rows.forEach(v => {
            v.path = pathObj[state.currentPath]
          });
        }
        res.rows.splice(6)
        // console.log('getCard', res)
        commit('setCardList', res.rows)
      })


  },



  // 内销汇总table页面
  // getDomesticTable({state,commit}){
  //   axios.get(`api/query?code=innerDirectOnOutline`,{}).
  //   then(res=>{
  //     console.log('innerDirectOnOutline',res)
  //     // commit(state.tableList,res.rows);
  getInnerPanel({ state, commit }) {
    axios.get(`/api/query?code=innerDirectTopTotal`, {
    })
      .then(res => {
        commit('setPanel', res.rows);
      }).catch(err => {
        console.log(err, 'errerrerrerr')
      })
  },
  // 内销汇总table页面线上、线下
  getDomesticTable({ state, commit }) {
    axios.get(`api/query?code=innerDirectOnOutline&parameter=2022-03`, {}).
      then(res => {
        res.rows.filter((item, index) => {
          if (item.ProfitRadio) {
            item.ProfitRadio = item.ProfitRadio * 100
            // item.ProfitRadio = item.ProfitRadio.toFixed(2);
          }
        })
        let obj = { innerDirect: [], outerDirect: [] };
        res.rows.filter((item) => {
          if (item.cooprLevel1 == '线上') {
            obj.innerDirect.push(item)
          } else if (item.cooprLevel1 == '线下') {
            obj.outerDirect.push(item);
          }
        })
        // console.log(obj,'objobjobjobj');
        commit('setTableList', obj);
        console.log('innerDirectOnOutline', res.rows, obj)
      }).
      then(err => {
        // console.log(err, 'innerDirectOnOutline')
      })
  },
  // 内销线上汇总表格
  async getDomesticOnlineTable({ state, commit }) {
    let obj = { innerDirect: [], outerDirect: [] }
    axios.get('api/query?code=onlineBottomLevel3&parameter=2022-03%2C2022-03', {}).
      then(res => {
        obj.innerDirect.push(...res.rows);
        // console.log(res.rows, obj, state.tableList, 'getDomesticOnlineTableLeft')
      }).
      catch(err => {
        console.log(err);
      })
    axios.get('api/query?code=onlineBottomStore', {}).
      then(res => {
        obj.outerDirect.push(...res.rows);
        // console.log(res.rows, obj, state.tableList, 'getDomesticOnlineTableRight');
      }).
      catch(err => {
        console.log(err);
      })
    commit('setTableList', obj);
    // console.log(obj, state.tableList, 'getDomesticOnlineTablegetDomesticOnlineTable')
  },
  // 外销汇总表格
  async getOutineSummaryTable({ state, commit }) {
    let obj = { innerDirect: [], outerDirect: [] }
    axios.get('api/query?code=sellOutTotalOnlineBottom&parameter=2022-03', {}).
      then(res => {
        obj.innerDirect.push(...res.rows)
      }).
      catch(err => {
      })
    axios.get('api/query?code=sellOutTotalOfflineBottom&parameter=2022-03', {}).
      then(res => {
        obj.outerDirect.push(...res.rows)
      }).
      catch(err => {
      })
    commit('setTableList', obj)
    // console.log(obj, state.tableList, 'tableList');
  },
  // 内销-线上-合作模式三汇总页（按平台类型）
  demosticOnlineShopTable({ state, commit }) {
    let obj = { innerDirect: [], outerDirect: [] } //domesticOnLineShop
    axios.get('api/query?code=cooperModel3BottomCategory&parameter=2022-03%2C2022-03', {}).
      then(res => {
        obj.innerDirect.push(...res.rows)
      }).
      catch(err => {
      })
    axios.get('api/query?code=cooperModel3FucosModel&parameter=2022-03%2C2022-03', {}).
      then(res => {
        obj.outerDirect.push(...res.rows)
      }).
      catch(err => {
        // console.log(err, 'neixiaoneixiao')
      })
    commit('setTableList', obj)
    // console.log(obj, 'objobjobjobj', state.tableList);
  },
  // 内销-线下-合作模式三汇总页（按渠道类型）
  demosticOfflineTable({ state, commit }) {
    let obj = { innerDirect: [], outerDirect: [] }
    axios.get('api/query?code=level3OfflineCategory&parameter=2022-03', {}).
      then(res => {
        obj.innerDirect.push(...res.rows)
        // console.log(res.rows, 'level3OfflineCategorylevel3OfflineCategorylevel3OfflineCategory')
      }).
      catch(err => {
      })
    axios.get('api/query?code=level3OfflineFucosModel&parameter=2022-03', {}).
      then(res => {
        obj.outerDirect.push(...res.rows)
      }).
      catch(err => {
        // console.log(err, 'demosticOfflineTable')
      })
    commit('setTableList', obj)
    // console.log(obj, 'demosticOfflineTable', state.tableList);
  },
  // domesticProductCoOnline 线上总产司页
  // domesticProductCoOnlineTable({state,commit}){
  //   let obj = {innerDirect:[],outerDirect:[]}
  //   axios.get('api/',{}).
  //   then(res => {
  //     // obj.innerDirect.push(res.rows)
  //   }).
  //   catch(err => {
  //     console.log(err);
  //   })
  //   axios.get('api/' , {}).
  //   then(res => {
  //     obj.outerDirect.push(res.rows);
  //   }).catch(err => {
  //     console.log(err)
  //   })
  //   commit('setTableList',obj);
  //   console.log(obj,state.tableList,'domesticProductCoOnlineTable')
  // }
  // 线下汇总页table
  offlineSummaryTable({ state, commit }) {
    let obj = { innerDirect: [], outerDirect: [] }
    axios.get('api/query?code=offLineBotton3Table&parameter=2022-03', {}).
      then(res => {
        obj.innerDirect.push(res.rows);
      }).
      catch(err => {
        console.log(err);
      })
    // KA
    axios.get('api/query?code=offLineBottomAk&parameter=2022-03', {}).
      then(res => {
        obj.outerDirect.push(res.rows);
      }).
      catch(err => { })
    commit('setTableList', obj);
    // console.log(obj, state.tableList, 'offlineSummaryTable');
  },
  // 外销-区域汇总页table
  outlineAreaSummaryTable({ state, commit }) {

  },
  // 内销-线上-合作模式四（店铺负责人）table
  demosticOnlineWorkModeTable({ state, commit }) {

  },
  // 内销-线下-合作模式四产司页（如KA下产司）（新增）table
  demosticOfflineWorkModeTable({state,commit}){
    let obj = {innerDirect:[],outerDirect:[]}
    axios.get('api/cooperModel3SellTotal&parameter=2022-02%2C2022-02',{}).
    then(res => {
      obj.innerDirect.push(...res.rows)
    })
    axios.get('api/cooperModel3SellTotal&parameter=2022-02%2C2022-02',{}).
    then(res => {
      obj.innerDirect.push(...res.rows)
    })
    commit('setTableList',obj)
    // console.log(obj,state.tableList,'demosticOfflineWorkModeTable')
  },
  // 产司汇总
  getTableList({state,commit},params){
    let obj = {innerDirect:[],outerDirect:[],title:{}};
    let title = {
      businessEntityName1: "环境",
      businessEntityName2: "烹饪",
      businessEntityName3: "电磁",
      businessEntityName4: "调理",
      businessEntityName5: "电动",
      businessEntityName6: "饮品",
    };
    obj.title=title;
    // directLevelInnerBottom
    axios.get(`api/query?code=${params.inner.code}&parameter=${params.inner.date}`,{}).
    then(res => {
      obj.innerDirect.push(...res.rows);
    }) //directLeveOutterBottom
    axios.get(`api/query?code=${params.outer.code}&parameter=${params.outer.date}`,{}).
    then(res => {
      obj.outerDirect.push(...res.rows);
    })
    commit('setTableList',obj)
    // console.log(obj,state.tableList,'getTableList!!!!');
  },
  queryrightShopData({ state, commit }, param) {

    let pathObj = {
      domesticOnLine: 'domesticOnLinePlatform', /*线上*/
      domesticOnLinePlatform: 'domesticOnLineShop',
      domesticOnLineShop: 'domesticOnLineShop',
      domesticOffLine: 'domesticOffLineChannel',/*线下*/
      domesticOffLineChannel: 'domesticOffLineSales',
      domesticOffLineSales: 'domesticOnLineSales'
    }

    axios.get(`/api/query?code=${param.code}&parameter=${param.date ? param.date : d}`, {}).
      then(res => {

        res.rows.forEach(v => {

          // 金额类
          if (!!v.cnyAmt) {
            v.cnyAmt = (v.cnyAmt / 100000000).toFixed(0)
          }
          if (!!v.saleTaskAmt) {
            v.saleTaskAmt = (v.saleTaskAmt / 100000000).toFixed(0)
          }
          // 完成率类
          if (!!v.grossProfitRadio) {
            v.grossProfitRadio = (v.grossProfitRadio * 100).toFixed(0)
          }
          if (!!v.cnyAmtRadio) {
            v.cnyAmtRadio = (v.cnyAmtRadio * 100).toFixed(0)
          }
          if (!!v.businessModelCompleteRadio) {
            v.businessModelCompleteRadio = (v.businessModelCompleteRadio * 100).toFixed(0)
          }
        });

        if (!!pathObj[state.currentPath]) {
          res.rows.forEach(v => {
            v.path = pathObj[state.currentPath]
          });
        }

        res.rows.splice(6) // 截取6条数据



        // console.log('getCard', res)
        commit('setCardList', res.rows)

      })

    axios.get(`/api/query?code=${param.code2}&parameter=${param.date ? param.date : d}`, {}).
      then(res => {

        let arr = [{
          businessEntityName: '电磁',
          businessModel: '自营',
          position: '高端机',
          positionRatio: 0.23,
        }, {
          businessEntityName: '电磁',
          businessModel: '自营',
          position: '入口机',
          positionRatio: 0.23,
        }];



        // if (res.rows.length < 1) {
        res.rows = res.rows.concat(arr)
        // }

        // console.log('json', JSON.stringify(res.rows))


        let obj = {};

        let a = [{ "monthDate": "2022-02", "businessModel": null, "position": null, "businessEntityName": "环境", "positionRatio": 1 }, { "monthDate": "2022-02", "businessModel": null, "position": null, "businessEntityName": "饮品", "positionRatio": 1 }, { "monthDate": "2022-02", "businessModel": null, "position": null, "businessEntityName": "奇厨", "positionRatio": 1 }, { "monthDate": "2022-02", "businessModel": null, "position": null, "businessEntityName": "烹饪", "positionRatio": 1 }, { "monthDate": "2022-02", "businessModel": null, "position": null, "businessEntityName": "电动", "positionRatio": 1 }, { "monthDate": "2022-02", "businessModel": null, "position": null, "businessEntityName": "电磁", "positionRatio": 1 }, { "businessEntityName": "电磁", "businessModel": "自营", "position": "高端机", "positionRatio": 0.23 }, { "businessEntityName": "电磁", "businessModel": "自营", "position": "入口机", "positionRatio": 0.23 }]

        a.filter(v => {
          if (!obj[v.businessEntityName + v.businessModel]) {
              obj[v.businessEntityName + v.businessModel] = { name: v.businessModel, data: [] }
              obj[v.businessEntityName + v.businessModel].data.push(v);
              // console.log(v.businessEntityName);
          } else {
              obj[v.businessEntityName + v.businessModel].data.push(v);

          }
      })
      

        commit('setProSAB', res.rows)



      });




  }

}
