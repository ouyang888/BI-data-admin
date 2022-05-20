<template>
  <div style="background: #02004d">
    <!-- 头部仪表盘和卡片 -->
    <div class="top-flex">
      <!-- 仪表盘 -->
      <div class="dashboard-box">
        <div class="panelList">
          <ProgressPanel :data="progressData" />
          <SpeedPanel :data="speedData" />
          <SadPanel :data="sabData" />
        </div>
      </div>
      <!-- 右侧卡片 -->

          <cardPro  :list="cardData" :cardObj="cardObj" :cardSab="cardSab" :title1="cardSabTitle1" :title2="cardSabTitle2" @gotoCatSeries="gotoCatSeries"/>
    </div>
    <!-- 中间echart -->
       <div class="middle-box">
      
      <div class="flex-fang">
        <div class="fang-color"></div>
        <div class="fang-color"></div>
      </div>

      <div class="flex-char">      
        <div>
          <div class="middle-font left-file">事业部日达成趋势图</div>
            <a-spin class="flex-loading" size="large"  v-if="showLoading2" />
          <div id="main" class="echartsBox" ></div>
        </div>

        <div>
          <div class="middle-font">产司日达成趋势图</div>
          <div class="right-box-qushi"   >
            <a-spin class="flex-loading" size="large"  v-if="showLoading3"/>
            <div class="flex-right-bottom" v-for="(item, i) in dhcarr" :key= "i" >
              <div>
                <div class="border-top-line"></div>
                <div class="border-left-line"></div>
                <div class="flex-echrats-right">
            
                  <div class="right-font-title"  v-if="item!=='isNull'"  >{{ item }}</div>
                  <div :id="i" class="echartsBox-min" ></div>
                </div>
                <div class="border-top-line"></div>
                <div class="border-left-line1"></div>
                <div class="border-left-line2"></div>
                <div class="border-left-line3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-fang">
        <div class="fang-color"></div>
        <div class="fang-color"></div>
      </div>
    </div>
         <innerTableInfo :leftData="tableInner" :rightData="tableOutter" :leftObj="leftObj" :rightObj="rightObj"
      title1="内销" title2="外销" />

      
  </div>
</template>
<script>
import innerTableInfo from "@/views/center/components/table/innerTableInfo.vue";
//  import innerTableCardBox from "@/views/center/components/table/innerTableCardBox.vue";
import cardPro from "./component/cardPro.vue";

import API from "../../../service/api";
import ProgressPanel from "@/views/center/panel/ProgressPanel.vue";
import SpeedPanel from "@/views/center/panel/SpeedPanel.vue";
import SadPanel from "@/views/center/panel/SadPanel.vue";
//  import TableCardBox from "@/views/center/components/table/TableCardBox.vue";
export default {
  components: {
    //  innerTableCardBox,
    //TableCardBox,
    innerTableInfo,
    cardPro,
    ProgressPanel,
    SpeedPanel,
    SadPanel,

  },
  data() {
    return {
       cardData:[],
      cardSab:[],
      cardSabTitle1:"内销",
      cardSabTitle2:"外销",
      //dhcarr:[],
      dhcarr: ['暂无数据', '暂无数据', '暂无数据', '暂无数据', '暂无数据', '暂无数据'],
      AmericaDate: [],
      AmericaList: [],
     cardObj: {
        'title':'businessEntityName', /*标题*/
        'cnyAmt':'businessEntityAmt',/*金额*/
       'saleTaskAmt': 'businessEntityTaskAmt', /*责任制金额*/
       'saleAmtRadio':'businessEntityAmtRadio',  /*金额完成率*/
       'cooprLevel1':'directName'  /*线上/线下 金额完成率*/
      },
      
      AvgTaskAmtDate: [],
      AvgTaskAmtList: [],
      AvgTaskAmtLine: [],
      AmericaLine: [],
      Arrnum: [],
      dateTime: "2022-03",
      showLoading: false,
      showLoading1: false,
      showLoading2: true,
      showLoading3: true,
      progressData: {
        bar1: 0,
        bar2: 0,
        ballTitle: "事业部",
        bigBallTitle: "毛事业部利率",
        textLeft: "内销",
        textRight: "外销",
        titleTop: "外销",
        titleBottom: "内销",
        topGPM: 0,
        bottomGPM: 0,
        ballNum: 0,
      },
      speedData: {
        bar: 0,
        speedBar: 0,
        ballTitle: "事业部达成",
        ballNum: 0,
        ballLeftTitle: "内销",
        ballRightTitle: "外销",
        ballLeftNum: 0,
        ballRightNum: 0,
        bottomNum: 0,
        bottomTitle1: "外销",
        bottomClose: 0,
        bottomTime: 0,
        bottomTitle2: "内销",
        bottomClose1: 0,
        bottomTime1: 0,
      },
      sabData: {
        bar1: 70,
        bar2: 50,
        ballTitle: "线上",
        top: "内销",
        bottom: "外销",
         sabArr: { S: 0, A: 0, B: 0 },
        topArr: { S: 0, A: 0, B: 0  },
        bottomArr: { S: 0, A: 0, B: 0  },
        // sabArr: [{'高端机':32},{'明星机':18},{'入口机':21},{'常规机':9},{'结构及':5}],
        // topArr: [{'高端机':32},{'明星机':18},{'入口机':21},{'常规机':9},{'结构及':5}],
        // bottomArr: [{'高端机':32},{'明星机':18},{'入口机':21},{'常规机':9},{'结构及':5}]
      },
        // 右边卡片
      innerLeft: [],
      innerLeftInfo: {},
      innerRight: [],
      innerRightInfo: {},
      innerSabLeft: [],
      innerSabRight: [],
      outterLeft: [],
      outterLeftInfo: {},
      outterRight: [],
      outterRightInfo: {},
      outterSabLeft: [],
      outterSabRight: [],
      // 底部表格
        innerTableList:[
          {
            directName: "内销",
            marketChannel: "线上",
            marketCenter: null,
            manager: "张茉欧",
            cooprMode: "京东",
            businessEntityName1: 23,
            businessEntityName2: 23,
            businessEntityName3: 23,
            businessEntityName4: 23,
            businessEntityName5: 23,
            businessEntityName6: 23,
            saleVolume1: 34,
            saleVolume2: 34,
            saleVolume3: 34,
            saleVolume4: 34,
            saleVolume5: 34,
            saleVolume6: 34,
            completeRadioAll: null,
            cnyAmt: 22,
            saleTaskAmt: 60,
            saleVolumeAll: 50,
            dateRadio: 1,
          }
        ],
      outerTableList: [
          {
            directName: "外销",
            marketChannel: "大区",
            marketCenter: null,
            manager: null,
            cooprMode: "北美",
            businessEntityName1: 23,
            businessEntityName2: 23,
            businessEntityName3: 23,
            businessEntityName4: 23,
            businessEntityName5: 23,
            businessEntityName6: 23,
            saleVolume1: 34,
            saleVolume2: 34,
            saleVolume3: 34,
            saleVolume4: 34,
            saleVolume5: 34,
            saleVolume6: 34,
            completeRadioAll: null,
            cnyAmt: 24,
            saleTaskAmt: 60,
            saleVolumeAll: 50,
            dateRadio: 1,
          },

        ],
      rowSpanNumber1: [0,0],
      rowSpanNumber2: [6],
      titleHead: {
        environment: "环境",
        electromagnetism: "电磁",
        drink: "饮品",
        electric: "电动",
        kitchen: "奇厨",
        drink: "烹饪",
        kitchen: "调理",
        // businessEntityName8: "其他",
      },
      // leftObj:{
      //   title:'cooprLevel1',
      //   channel:'cooprLevel2'
      // },

          leftObj:{   
      name:'environment',  /*标题*/
      level:'cooprLevel2Manager',/*责任人*/
      tAvgAmt:'cooprLevel2Manager',/*责任制*/
      },
        rightObj:{
      name:'environment',
      level:'cooprLevel2Manager',
      tAvgAmt:'cooprLevel2Manager'
      },
      // rightObj:{
      //   title:'cooprLevel1',
      //   channel:'cooprLevel2'
      // },
      showLoadingLeft:true,
      showLoadingRight:true,
      titleName:this.$route.query.key || '环境'
    };
  },
  computed:{
    ontime(){
      return this.$store.state.year +'-'+ this.$store.state.month;
    },
    showMoney(){
      return this.$store.state.showMoney;
    },
    modelLabel(){
      return this.$store.state.showMoney==true?'亿':'万'
    },
    model(){ /* 获取本部，OEM */
      return this.$store.state.model
    }
    
  },
  watch:{
    ontime:{ /*监听数据更改 调用接口 */
     handler: function (newValue, oldValue) {
        this.init(this.model);
      }
    },
    model:{ /*监听数据更改 调用接口 */
      handler: function(newValue,oldValue){
        this.init(newValue);
      }

    },
    showMoney:{
      handler:(newValue,oldValue)=>{
 
      }
    }

  },
  methods: {
    init(model){ /*初始化数据方法 model产地字段*/   
   let params = {  /*年月*/
      month_date:this.ontime
    };
    let listParams = { /*年月日*/
      start_date:`${this.ontime}-01`,
      end_date:`${this.ontime}-31`
    }
    this.getdashboard(params);
    this.queryCardSAB(params);
    this.getTable(params);
    this.getCard(params);
    this.getListLeft(listParams);
    this.getList1(listParams);
    },
     // 底部table/
    async getTable(time) {
       let online = {
        code: 'directLevelInnerBottom'
      };
      let onlineStore = {
        code: 'directLeveOutterBottom'
      };
      let tableInner = await API.getTotal(Object.assign(online,time ));
       let tableOutter = await API.getTotal(
        Object.assign(onlineStore,time)
      );
     console.log("tableInner2",tableInner);
      console.log("tableInner3",tableOutter);
      this.tableInner = tableInner.rows;
      this.tableOutter = tableOutter.rows;
      this.rowSpanNumber2 = [this.tableOutter.length - 1];
    },

     // 右边卡片/
    async getCard(params) {
      let obj = {
        code: 'directLevelTop'
      }
      Object.assign(obj, params);
      const res = await API.getTotal(obj);
    
      if(res.code !=200) return;
   
      this.cardData = res.rows.filter(v=>{
        return v.position.length<2
      })
      this.cardSab = res.rows.filter(v=>{
        v.positionRatio = v.sabAmtRadio;  /*右边sab*/
        return v.position.length<2
      })
    },

    gotoDomestic() {
      this.$router.push("/center/index");
    },
    // 品类汇总
    gotoCatSeries(val) {
      this.$router.push({
          name: "productCo",
        query: { key: val},
      });
    },

    toModuleResponsible() {
      this.$router.push({ name: "moduleResponsible" });
    },
    //* monthDate 月份

// 

    //仪表盘(左中)
    async getdashboard(getdashboard) {
      
      try {
        const res = await API.getData("directLevelTopDashBoard",getdashboard);
        let panelDataList = res.rows;
        this.progressData.ballNum = (
          panelDataList[0].grossProfitRadio * 100
        ).toFixed(1);
        this.speedData.speedBar = (
          panelDataList[0].businessModelCompleteRadio * 100
        ).toFixed(1);
        this.speedData.bar = (panelDataList[0].dateRadio * 100).toFixed(1);
        this.speedData.ballNum = panelDataList[0].sumCnyAmt.toFixed(1);
        this.speedData.bottomNum = panelDataList[0].saleTaskAmt.toFixed(1)
        for (var i = 0; i < panelDataList.length; i++) {
          if (panelDataList[i].directName == "内销") {
            this.progressData.bar2 = (
              panelDataList[i].directNameGrossProfitRadio * 100
            ).toFixed(1);
            this.progressData.topGPM = (
              panelDataList[i].grossProfitRadio * 100
            ).toFixed(1);
            this.speedData.ballLeftNum =  panelDataList[i].sumCnyAmt.toFixed(1)
             this.speedData.bottomClose = ( panelDataList[i].grossProfitRadio* 100).toFixed(1)
             this.speedData.bottomTime =  panelDataList[i].dateRadio.toFixed(1)
          } else if (panelDataList[i].directName == "外销") {
            this.progressData.bar1 = (
              panelDataList[i].directNameGrossProfitRadio * 100
            ).toFixed(1);
            this.progressData.bottomGPM = (
              panelDataList[i].grossProfitRadio * 100
            ).toFixed(1);
            this.speedData.ballRightNum =  panelDataList[i].sumCnyAmt.toFixed(1)
            this.speedData.bottomClose1 =  ( panelDataList[i].grossProfitRadio*100).toFixed(1)
            this.speedData.bottomTime1 =  panelDataList[i].dateRadio.toFixed(1)
          }
        }
      } catch (error) {
        console.log(error);
      }
    },

    //仪表盘(右)
    async queryCardSAB(params) {
      try {
        const res = await API.getData("directLevelTopDashBoardSAB",params);
        let RightSAB = res.rows;
        for (var i = 0; i < RightSAB.length; i++) {
          if (RightSAB[3].directName == "内销") {
            // this.sabData.bar1 = (RightSAB[i].positionRatio*100).toFixed(1)
            if (RightSAB[i].position == "S") {
              this.sabData.sabArr.S = (RightSAB[i].totalAmtSabRadio * 100).toFixed(
                1
              );
            } else if (RightSAB[i].position == "A") {
              this.sabData.sabArr.A = (RightSAB[i].totalAmtSabRadio * 100).toFixed(
                1
              );
            } else if (RightSAB[i].position == "B") {
              this.sabData.sabArr.B = (RightSAB[i].totalAmtSabRadio * 100).toFixed(
                1
              );
            }
          } 
           if (RightSAB[i].directName == "内销") {
            this.sabData.bar1 = (RightSAB[i].totalAmtSabRadio * 100).toFixed(1);
            if (RightSAB[i].position == "S") {
              this.sabData.topArr.S = (RightSAB[i].totalAmtSabRadio * 100).toFixed(
                1
              );
            } else if (RightSAB[i].position == "A") {
              this.sabData.topArr.A = (RightSAB[i].totalAmtSabRadio * 100).toFixed(
                1
              );
            } else if (RightSAB[i].position == "B") {
              this.sabData.topArr.B = (RightSAB[i].totalAmtSabRadio * 100).toFixed(
                1
              );
            }
          } 
          if (RightSAB[i].directName == "外销") {
            this.sabData.bar2 = (RightSAB[i].totalAmtSabRadio * 100).toFixed(1);
            if (RightSAB[i].position == "S") {
              this.sabData.bottomArr.S = (
                RightSAB[i].totalAmtSabRadio * 100
              ).toFixed(1);
            } else if (RightSAB[i].position == "A") {
              this.sabData.bottomArr.A = (
                RightSAB[i].totalAmtSabRadio * 100
              ).toFixed(1);
            } else if (RightSAB[i].position == "B") {
              this.sabData.bottomArr.B = (
                RightSAB[i].totalAmtSabRadio * 100
              ).toFixed(1);
            }
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
      //中间折线图
    async getListLeft(listParams) {
      this.showLoading = true;
      try {
     
         let chart = {
          code: 'directLevelChart',
           fields:'cooprLevel1'
        };
        Object.assign(chart, listParams)
        const res = await API.getTotal(chart);
        let sellOutDataList = res.rows;
        let newArr = sellOutDataList.filter((item) => {
          var timeArr = item.orderDate
            .replace(" ", ":")
            .replace(/\:/g, "-")
            .split("-");
          var yue = timeArr[1];
          var ri = timeArr[2];



          // 外销日内
          if (item.totalAvgTaskAmt !== null && item.totalAmt !== null) {
            this.AvgTaskAmtDate.push(yue + "-" + ri);
            this.AvgTaskAmtList.push(item.cnyAmt);
            this.AvgTaskAmtLine = item.tAvgAmt;
            this.myEcharts();
          }
          // this.showLoading = false;
        });
      } catch (error) {
        console.log(error);
      }
    },
        // 右边接口
    async getList1(line) {
     

     
      let chart = {
        code: 'directLevelChart',
        fields: "cooprLevel2"
      };
      Object.assign(chart, line)
      try {
        const res = await API.getChartTotal(chart);
        let sellOutDataList = res.rows;
       
        let obj = res.rows[0]
        var k = 0;
        var arr = [];
        for (var i in obj) {
          if (k < 6) {
            arr.push(obj[i]);
          }
          k++;
        }
        this.dhcarr = [];
        let arrs = JSON.parse(JSON.stringify(arr));
        arrs.forEach((v) => {
          this.dhcarr.push(v[0].cooprLevel2);
        });
        //this.dhcarr = [0,1,2,3,4,5];
        for (let j = 0; j < arr.length; j++) {
          var datanum = arr[j];
          let AmericaDate = [];
          let AmericaList = [];
          let AmericaLine = 1;
          let Arrnum = datanum.filter((item) => {
            var timeArr = item.orderDate
              .replace(" ", ":")
              .replace(/\:/g, "-")
              .split("-");
            var yue = timeArr[1];
            var ri = timeArr[2];
            AmericaDate.push(yue + "-" + ri);
            AmericaList.push(item.orgQty);
            AmericaLine = item.tAvgQty;
            
          });
          this.myEcharts2(AmericaList, AmericaDate, AmericaLine, j);
        }
      } catch (error) {
        console.log(error);
      }
    },
   
    //中间折线图
    async getListCharts(line) {

      let chart = {
        code: 'onlineMiddleChart',
        fields: "cooprLevel2"
      };
      Object.assign(chart, line)
      try {
        const res = await API.getChartTotal(chart);
        let sellOutDataList = res.rows;
        let obj = res.rows[0]
        var k = 0;
        var arr = [];
        for (var i in obj) {
          if (k < 6) {
            arr.push(obj[i]);
          }
          k++;
        }
        this.dhcarr = [];
        let arrs = JSON.parse(JSON.stringify(arr));
        arrs.forEach((v) => {
          this.dhcarr.push(v[0].cooprLevel2);
        });
        for (let j = 0; j < arr.length; j++) {
          var datanum = arr[j];
          let AmericaDate = [];
          let AmericaList = [];
          let AmericaLine = 1;
          let Arrnum = datanum.filter((item) => {
            var timeArr = item.orderDate
              .replace(" ", ":")
              .replace(/\:/g, "-")
              .split("-");
            var yue = timeArr[1];
            var ri = timeArr[2];
            AmericaDate.push(yue + "-" + ri);
            AmericaList.push(item.totalCnyAmt);
            AmericaLine = item.saleAvgAmt;
          });
          this.myEcharts2(AmericaList, AmericaDate, AmericaLine, j);
          
        }
      } catch (error) {
        console.log(error);
      }
    },

    myEcharts() {
      var myChart = this.$echarts.init(document.getElementById("main"));
      var option = {
        xAxis: {
          axisLabel: {
            formatter: function (val) {
              return "";
            },
          },
        },
        labelData: [
          { class: "plan", text: "实际达成" },
          { class: "average", text: "日均线" },
        ],
        // echartsData: {
        textStyle: {
          color: "#3FB0FF",
        },
        color: ["#66FFFF", "#6C02CF", "#FF8B2F"],
        title: {
          text: "",
        },
        tooltip: {
          trigger: "axis",
        },
        grid: {
          top: "5%",
          left: "2%",
          right: "5%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: this.AvgTaskAmtDate,
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
        },
        yAxis: {
          name: "单位：万",
          type: "value",
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "rgba(45,153,255,.3)",
            },
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
        },
        series: [
          {
            name: "实际达成",
            type: "line",
            stack: "Total",
            // smooth: true,
            lineStyle: {
              width: 1,
            },
            showSymbol: false,
            areaStyle: {
              normal: {
                color: {
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "hsla(197, 100%, 50%, .3)", // 0% 处的颜色
                    },
                    {
                      offset: 0.7,
                      color: "hsla(215, 95%, 39%, .3)", // 100% 处的颜色
                    },
                  ],
                  globalCoord: false, // 缺省为 false
                },
              },
            },
            data: this.AvgTaskAmtList,
            markLine: {
              data: [
                {
                  yAxis: this.AvgTaskAmtLine,
                  silent: false, //鼠标悬停事件 true没有，false有
                  lineStyle: {
                    //警戒线的样式 ，虚实 颜色
                    type: "dashed", //样式  ‘solid’和'dotted'
                    color: "#FF8B2F",
                    width: 2, //宽度
                  },
                  label: {
                    formatter: "",
                    color: "#FF8B2F",
                    position: "start", //将警示值放在哪个位置，三个值“start”,"middle","end" 开始 中点 结束
                  },
                },
              ],
              symbol: ["none", "none"],
            },
          },
        ],
      };
      myChart.setOption(option);
      this.showLoading3=false;
    },

   
    myEcharts2(data, time, lines, id) {
      var myChart2 = this.$echarts.init(document.getElementById(id));
      var option = {
        xAxis: {
          axisLabel: {
            formatter: function (val) {
              return "";
            },
          },
        },
        textStyle: {
          color: "#3FB0FF",
        },
        color: ["#66FFFF", "#6C02CF", "#FF8B2F"],
        title: {
          text: "",
        },
        tooltip: {
          trigger: "axis",
        },
        grid: {
          top: "5%",
          left: "2%",
          right: "5%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          // data: this.AmericaDate,
          // data: ['01-02','03-03','04-04','01-04'],

          data: time,
          axisTick: {
            show: false, //刻度线
          },
          axisLine: {
            show: false, //隐藏y轴
          },
          axisLabel: {
            show: false, //隐藏刻度值
          },
        },
        yAxis: {
          name: "单位：万",
          type: "value",
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "rgba(45,153,255,.3)",
            },
          },
          axisTick: {
            show: false, //刻度线
          },
          axisLine: {
            show: false, //隐藏y轴
          },
          axisLabel: {
            show: false, //隐藏刻度值
          },
        },
        series: [
          {
            name: "实际达成",
            type: "line",
            stack: "Total",
            // smooth: true,
            lineStyle: {
              width: 1,
            },
            showSymbol: false,
            areaStyle: {
              normal: {
                color: {
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "hsla(197, 100%, 50%, .3)", // 0% 处的颜色
                    },
                    {
                      offset: 0.7,
                      color: "hsla(215, 95%, 39%, .3)", // 100% 处的颜色
                    },
                  ],
                  globalCoord: false, // 缺省为 false
                },
              },
            },
            // data: this.AmericaList,
            // data:[10,20,100,250],
            data: data,
            // data:data,
            markLine: {
              // data:this.AmericaLine,
              data: [
                {
                  // yAxis: this.AmericaLine,
                  // yAxis:400,
                  yAxis: lines,
                  silent: false, //鼠标悬停事件 true没有，false有
                  lineStyle: {
                    //警戒线的样式 ，虚实 颜色
                    type: "dashed", //样式  ‘solid’和'dotted'
                    color: "#FF8B2F",
                    width: 2, //宽度
                  },
                  label: {
                    formatter: "",
                    color: "#FF8B2F",
                    position: "start", //将警示值放在哪个位置，三个值“start”,"middle","end" 开始 中点 结束
                  },
                },
              ],

              symbol: ["none", "none"],
            },
          },
        ],
      };
      myChart2.setOption(option);
      this.showLoading2=false;
    },

  },
  mounted() {
    this.init(this.model);
  },
};
</script>
<style scoped>
.flex-char {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 98%;
  margin: 10px auto;
  margin-bottom: 10px;
}
.echartsBox {
  width: 607px;
  height: 240px;
}
.flex-fang {
  display: flex;
  justify-content: space-between;
}
.fang-color {
  width: 10px;
  height: 10px;
  background-color: hsla(188, 100%, 50%, 1);
}
.middle-box {
  width: 98%;
  /* margin: 10px 20px 10px 10px; */
  border: 1px solid hsla(210, 86%, 39%, 0.66);
  margin: 20px auto;
  margin-bottom: 10px;
}
.flex-font-middle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  color: #fff;
}
.middle-font {
  font-size: 18px;
  color: #fff;
  font-weight: 600;
  text-align: center;
  margin-bottom: 6px;
}
.flex-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 98%;
  margin: 0 auto;
  padding-bottom: 20px;
}
.execl {
  background: url("../../../assets/img/tableVBackround.svg");
  width: 905px;
  height: 324px;
  background-color: rgba(2, 0, 77, 0.4);
  box-shadow: inset 0px 0px 34px 0px rgba(17, 40, 255, 0.66);
  border: 2px solid #0d53b7;
  border-radius: 0 0 10px 10px;
}
::v-deep .ant-table-thead > tr > th {
  background: rgb(4, 19, 112);
  border-bottom: 1px solid rgb(55, 56, 112);
  border-right: 1px solid rgb(55, 56, 112);
}
::v-deep .ant-table-thead > tr > th .ant-table-header-column {
  color: #fff;
  font-size: 14px;
}
::v-deep .ant-table-bordered .ant-table-tbody > tr > td {
  border: 1px solid rgb(55, 56, 112);
  color: #fff;
}
::v-deep
  .ant-table-tbody
  > tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected)
  > td {
  background: transparent;
}

::v-deep .ant-spin-nested-loading {
  margin: 14px;
}
::v-deep .ant-table-thead > tr:first-child > th:first-child {
  background: linear-gradient(
    to right,
    rgb(80, 192, 255),
    rgb(90, 255, 163),
    rgb(102, 255, 255)
  );
}
.top-flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 98%;
  margin: 0 auto;
}
.dashboard-box {
  width: 50%;
  position: relative;
}

.card-box {
  background-image: url("../../../assets/img/smallCardBackground.svg");
  background-repeat: no-repeat;
  /* margin-right: 20px; */
  background-size: 100%;
}
.card-font {
  font-size: 16px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  cursor: pointer;
  color: #19ecff;
  padding-top: 3px;
}
.flex-card {
  display: flex;
  margin-top: 10px;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.flex-top-card {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.top-left-font {
  font-size: 14px;
  color: #fff;
  margin-right: 20px;
}
.card-border-box {
  margin: 10px 10px 30px 10px;
  position: relative;
  /* border: 1px solid red; */
  /* border: 1px solid hsla(210, 86%, 39%, 0.66); */
  min-width: 89%;
  /* height: 70%;
}
.line {
  height: 10px;
  /* border-left: 2px solid rgb(102, 255, 255);
  border-right: 2px solid rgb(102, 255, 255); */
}
.line1 {
  /* border-top: 2px solid rgb(102, 255, 255); */
  width: 10px;
  position: absolute;
  top: 0;
  left: 0;
}
.line2 {
  /* border-top: 2px solid rgb(102, 255, 255); */
  width: 10px;
  position: absolute;
  top: 0;
  right: 0;
}
.line3 {
  /* border-top: 2px solid rgb(102, 255, 255); */
  width: 10px;
  position: absolute;
  bottom: 0;
  left: 0;
}
.line4 {
  /* border-top: 2px solid rgb(102, 255, 255); */
  width: 10px;
  position: absolute;
  bottom: 0;
  right: 0;
}
.left-right-box {
  display: flex;
  justify-content: space-between;
}

.finish-font {
  color: #fff;
  opacity: 0.6;
  font-size: 12px;
  margin-right: 4px;
}
.finish-font span {
  color: #66ffff;
  margin-left: 2px;
}
.mt-border {
  border: 1px solid rgba(255, 255, 255, 0.24);
  width: 1px;
}
.card-big-num {
  color: #66ffff;
  font-size: 18px;
}
.progress {
  width: 60px;
  height: 10px;
}
.progress:last-child {
  margin-bottom: 12px;
}
.progress-middle {
  width: 34px;
  height: 10px;
}
.progress-middle:last-child {
  margin-bottom: 12px;
}
::v-deep .ant-progress-bg {
  height: 4px !important;
  border-radius: 200px !important;
}
.card-middle-progress {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.flex-bottoms {
  display: flex;
  align-items: center;
  color: #a0a3c0;
  font-size: 12px;
}
.light-blue {
  color: #66ffff;
  opacity: 1;
}
::v-deep .ant-table-bordered .ant-table-body > table {
  border: none;
}
.flex-echrats-right {
  display: flex;
  align-items: center;
  padding: 4px 8px 4px 8px;
}
.echartsBox-min {
  width: 300px;
  height: 100px;
}
.right-font-title {
  font-size: 15px;
  color: #fff;
  margin-right: 40px;
  width: 30px;
  white-space: nowrap;
}
.flex-right-bottom {
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  flex-wrap: wrap;
  border: 1px solid hsla(210, 86%, 39%, 0.66);
  position: relative;
  margin-left: 10px;
  margin-top: 10px;
}
.border-left-line {
  border-top: 1px solid rgb(102, 255, 255);
  border-bottom: 1px solid rgb(102, 255, 255);
  width: 10px;
  position: absolute;
  top: 0;
  left: 0;
}
.border-left-line1 {
  border-top: 1px solid rgb(102, 255, 255);
  border-bottom: 1px solid rgb(102, 255, 255);
  width: 10px;
  position: absolute;
  top: 0;
  right: 0;
}
.border-left-line2 {
  border-top: 1px solid rgb(102, 255, 255);
  border-bottom: 1px solid rgb(102, 255, 255);
  width: 10px;
  position: absolute;
  bottom: 0;
  right: 0;
}
.border-left-line3 {
  border-top: 1px solid rgb(102, 255, 255);
  border-bottom: 1px solid rgb(102, 255, 255);
  width: 10px;
  position: absolute;
  bottom: 0;
  left: 0;
}
.border-top-line {
  border-left: 1px solid rgb(102, 255, 255);
  border-right: 1px solid rgb(102, 255, 255);
  height: 10px;
}
.right-box-qushi {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
}
.panelList {
  height: 258px;
  width: 760px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.left-file {
  position: relative;
  bottom: 20px;
}
</style> 
