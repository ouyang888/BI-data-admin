import { createStore } from 'vuex'
import { action } from './actions'
import { mutation } from './mutations'
import { cardData,chartData,cardList } from '@/assets/js/static.js'
export const store = createStore({
  state() {
    return {
      getInnerDirectOnline:'',
      getInnerDirectLineDown:"",
      getGeneral:"",
      getForExport:"",
      getDirectTotalInnerChart:"",
      SAB:[],
      cardSab:[
        {position:'s',positionRatio:'100',businessModel:'自营',businessEntityName:'电磁'},
        {position:'s',positionRatio:'100',businessModel:'自营',businessEntityName:'电磁'},
        {position:'s',positionRatio:'100',businessModel:'自营',businessEntityName:'电磁'},
        {position:'s',positionRatio:'100',businessModel:'自营',businessEntityName:'电磁'},
        {position:'s',positionRatio:'100',businessModel:'自营',businessEntityName:'电磁'},
        {position:'s',positionRatio:'100',businessModel:'自营',businessEntityName:'电磁'}
      ],
      currentTitle:'', /* 当前模块标题 如 线上点击京东 当前值为京东 */
      // currentParams:{date:'2022-03',title:''}, /* 当前时间 */
      currentModel:'money',  /* 当前模式 金额-数量 */
      proSAB:[{
        businessEntityName:'电磁',
        businessModel:'自营', 
        position:'高端机', 
        positionRatio:0.23,
      }],
      menuName: '',
      salePageData: {},
      itemName: '',
      currentPath: '',
      userLevel: 2,
      innerDirect:cardData.innerDirect,
      outerDirect:cardData.outerDirect ,
      cardList:cardList,
      chart: chartData,
      tableOneHeading:'内销',//第一个table表格的标题
      tableTwoHeading:'外销', //
      // tableList:{},
      cooprMode:"渠道",
      panelSab: null,
      panel: null,
      tableList:{},
    }
  },
  actions: action,
  mutations: mutation,
  getters: {
    getLayout: (state) => (id) => {
      return state.layout
    },
    getList:(state) => (id) => {
      return state.domesticList
    },
    getSAB:(state) => (id) => {
      return state.SAB
    },
  }
})