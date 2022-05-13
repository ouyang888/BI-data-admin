<template>
  <div style="background: #02004d">
    <!-- 头部仪表盘和卡片 -->
    <div class="top-flex"  >
      <!-- 仪表盘 -->
       <div class="dashboard-box">
        <div class="panelList">
          <ProgressPanel :data="progressData" />
          <SpeedPanel :data="speedData" />
          <SadPanel :data="sabData" />
        </div>
      </div>
      <!-- 右侧卡片 -->
      <Card :list="cardData" @gotoCatSeries="gotoCatSeries" :cardObj="cardObj"/>
      
    </div>
    <!-- 中间echart -->
    <div class="middle-box">
      <div class="flex-fang">
        
        <div class="fang-color"></div>
        <div class="fang-color"></div>
      </div>
      <div class="flex-char">
        <div>
          <a-spin class="flex-loading" size="large" v-if="showLoading" />
          <div class="middle-font left-file">外销中东非日达成趋势图</div>
          <div id="main" class="echartsBox"></div>
        </div>
        <div>
          <div class="middle-font">各区域日达成趋势图</div>
          <div class="right-box-qushi">
            <div class="flex-right-bottom" v-for="(item, i) in dhcarr" :key="i">
              <div>
                <div class="border-top-line"></div>
                <div class="border-left-line"></div>
                <div class="flex-echrats-right">
                  <div class="right-font-title">{{ item }}</div>
                  <div :id="i" class="echartsBox-min"></div>
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

    <!-- 底部表格 -->
    <div class="flex-bottom">
      <div class="execl">
        <a-table
          :bordered="true"
          :columns="columns"
          :data-source="data"
          :pagination="false"
        >   
          <a slot="name" slot-scope="text">{{ text }}</a>
          <template slot="name" slot-scope="name">
            <a @click="gotoDomestic"> {{ name }}</a>
             </template>
        </a-table>
      </div>
      <div class="execl">
        <a-table
          :bordered="true"
          :columns="columns"
          :data-source="data"
          :pagination="false"
        >
          <a slot="name" slot-scope="text">{{ text }}</a>
          <template slot="name" slot-scope="name">
            <a @click="gotoDomestic"> {{ name }}</a>
            </template>
        </a-table>
      </div>
    </div>
  </div>
</template>
<script>
import API from "../../../service/api";
import ProgressPanel from "@/views/center/panel/ProgressPanel.vue";
import SpeedPanel from "@/views/center/panel/SpeedPanel.vue";
import SadPanel from "@/views/center/panel/SadPanel.vue";
import Card from './component/card.vue'; 
import innerTableCardBox from '@/views/center/components/table/innerTableCardBox.vue';

export default {
   components: {
    ProgressPanel,
    SpeedPanel,
    SadPanel,
    Card,
    innerTableCardBox
  },
  data() {
    return {
      dhcarr: ["越南泰国区域","澳新菲区域","新马港澳区域","新马港澳区域","越南泰国区域","澳新菲区域"],
      showLoading: false,
      Arrnum: [],
      AmericaDate: [],
      AmericaList: [],
      AvgTaskAmtDate: [],
      AvgTaskAmtList: [],
      AvgTaskAmtLine: [],
      AmericaLine: [],
      columns: [
        {
          title: "线上",
          dataIndex: "name",
          key: "name",
          align: "center",
          scopedSlots: { customRender: "name" },
        },
        {
          title: "责任人",
          dataIndex: "age",
          key: "age",
          align: "center",
        },
        {
          title: "责任制",
          dataIndex: "address",
          key: "address 1",
          align: "center",
        },
        {
          title: "累计达成",
          dataIndex: "address",
          key: "address 2",
          align: "center",
        },
        {
          title: "任务完成率",
          dataIndex: "address",
          key: "address 2",
          align: "center",
        },
        {
          title: "毛利率",
          dataIndex: "address",
          key: "address 2",
          align: "center",
        },
        {
          title: "周转天数",
          dataIndex: "address",
          key: "address 2",
          align: "center",
        },
        {
          title: "说到做到",
          dataIndex: "address",
          key: "address 2",
          align: "center",
        },
        {
          title: "排名",
          dataIndex: "address",
          key: "address 2",
          align: "center",
        },
      ],
      data: [
        {
          key: "1",
          name: "John Brown",
          age: 32,
          address: "New York No. ",
          tags: ["nice", "developer"],
        },
        {
          key: "2",
          name: "Jim Green",
          age: 42,
          address: "London No. ",
          tags: ["loser"],
        },
        {
          key: "3",
          name: "Joe Black",
          age: 32,
          address: "Sidney No. ",
          tags: ["cool", "teacher"],
        },
      ],
  progressData: {
        bar1: 1,
        bar2: 2, 
        ballTitle: "内销",
        bigBallTitle: "毛利率",
        textLeft: "线上",
        textRight: "线下",
        titleTop: "线上",
        titleBottom: "线下",
        topGPM: 3,
        bottomGPM: 4,
        ballNum: 5,
      },
      speedData: {
        bar: 3,
        speedBar: 4,
        ballTitle: "内销达成",
        ballNum: 5,
        ballLeftTitle: "线上",
        ballRightTitle: "线下",
        ballLeftNum: 6,
        ballRightNum: 7,
        bottomNum: 8,
        bottomTitle1: "线上",
        bottomClose: 9,
        bottomTime: 10,
        bottomTitle2: "线下",
        bottomClose1: 11,
        bottomTime1: 12,
      },
      sabData: {
        bar1: 70,
        bar2: 50,
        ballTitle: "内销",
        bottom: "线上",
        top: "线下",
        sabArr: { s: 31, a: 18, b: 21 },
        topArr: { s: 30, a: 18, b: 21 },
        bottomArr: { s: 338, a: 18, b: 21 },
        // sabArr: [{'高端机':32},{'明星机':18},{'入口机':21},{'常规机':9},{'结构及':5}],
        // topArr: [{'高端机':32},{'明星机':18},{'入口机':21},{'常规机':9},{'结构及':5}],
        // bottomArr: [{'高端机':32},{'明星机':18},{'入口机':21},{'常规机':9},{'结构及':5}]
      },
    };
  },
  computed:{
    ontime(){
      return this.$store.state.year +'-'+ this.$store.state.month;
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
      handler:function(newValue,oldValue){
        this.init();
      }
    }
  },

  methods: {
    init(model){ 
      // this.getList(`${model},${this.ontime}-01,${this.ontime}-31`);
      // 亚太业务区,亚太业务区,本部,OEM,待定,2022-03-01,2022-03-31"
      let params = {  /*年月*/
      month_date:this.ontime,
      coopr_level1:this.$row
    };
    let listParams = { /*年月日*/
      start_date:`${this.ontime}-01`,
      end_date:`${this.ontime}-31`
    }
    this.getdashboard(params);
    this.queryCardSAB(params);
    this.getList(listParams)
    this.getList1(listParams)
    this.getCard(params);
    this.getTable(params);




      // this.getList(`亚太业务区,亚太业务区,${model},${this.ontime}-01,${this.ontime}-31`);
      // this.getList1(`亚太业务区,亚太业务区,${model},${this.ontime}-01,${this.ontime}-31`);
      // this.getList1(`${model},${this.ontime}-01,${this.ontime}-31`);
    },
   
// 三个仪表盘
  //三个仪表盘(左中)
  async getdashboard(params) {
        let obj = {
          code: 'outSellMacroRegionDashboard'
        }
        Object.assign(obj,params)
        try {
          const res = await API.getTotal(obj);
          //内销汇总仪表盘左边&&中间
          let panelDataList = res.rows;
          console.log("res仪表",res); 
          // directProfitRadio: 0.2713  销向毛利率
          this.progressData.ballNum = (
            panelDataList[0].level1ProfitRadio * 100
          ).toFixed(1);
          //    
          // ⅵ. directCnyAmt: 5.8799  销向总销售金额
          this.speedData.ballNum = panelDataList[0].level1CnyAmt.toFixed(1)
          // 销向金额完成率
          // 销向数量完成率
          this.speedData.speedBar = (panelDataList[0].directAmtRadio * 100).toFixed(1)
          this.speedData.bar = (panelDataList[0].dateRadio* 100).toFixed(1)
          this.speedData.ballNum = (panelDataList[0].saleTaskQty / 1000000).toFixed(1)

          // 责任制
          this.speedData.bottomNum = panelDataList[0].saleTaskAmt.toFixed(1)
          for (var i = 0; i < panelDataList.length; i++) {
            if (panelDataList[i].obmOem == "OBM") {
              this.progressData.bar1 = (panelDataList[i].obmOemProfitRadio * 100).toFixed(1)
              this.progressData.topGPM = (panelDataList[i].obmOemProfitRadio * 100).toFixed(1)
              this.speedData.ballLeftNum = panelDataList[i].cnyAmt.toFixed(1)

              this.speedData.bottomClose = panelDataList[i].cnyAmtRadio.toFixed(1)
              this.speedData.bottomTime = panelDataList[i].cnyAmtRadio.toFixed(1)

            } else if (panelDataList[i].obmOem == "OEM") {
              this.progressData.bar2 = (panelDataList[i].obmOemProfitRadio * 100).toFixed(1)
              this.progressData.bottomGPM = (panelDataList[i].obmOemProfitRadio * 100).toFixed(1)
              this.speedData.ballRightNum = panelDataList[i].cnyAmt.toFixed(1)
              this.speedData.bottomClose1 = panelDataList[i].cnyQtyRadio.toFixed(1)
              this.speedData.bottomTime1 = panelDataList[i].cnyQtyRadio.toFixed(1)

            }
          }
        
      } catch (error) {
        console.log(error);
      }
    },

   //三个仪表盘(右)
   async queryCardSAB() {
      try {
        const res = await API.getTotal("outSellMacroRegionDashboardSAB", "2022-03,亚太业务区,本部,OEM,待定");
        console.log("res1", res);
        let RightSAB = res.rows;
        for (var i = 0; i < RightSAB.length; i++) {
          if (RightSAB[i].operationMode == "OBM") {
            this.sabData.bottomArr.s = (
              RightSAB[i].level2AmtPositionRatio * 100
            ).toFixed(1);
            this.sabData.bottomArr.a = (
              RightSAB[i].level2AmtPositionRatio * 100
            ).toFixed(1); 
            this.sabData.bottomArr.b = (
              RightSAB[i].level2AmtPositionRatio * 100
            ).toFixed(1);

            this.sabData.topArr.s = (
              RightSAB[i].level2AmtPositionRatio * 100
            ).toFixed(1);
            this.sabData.topArr.a = (
              RightSAB[i].level2AmtPositionRatio * 100
            ).toFixed(1);
            this.sabData.topArr.b = (
              RightSAB[i].level2AmtPositionRatio * 100
            ).toFixed(1);
          } else if (RightSAB[i].operationMode == "OEM") {
            if (RightSAB[i].operationMode == "OBM") {
            this.sabData.bottomArr.s = (
              RightSAB[i].level2AmtPositionRatio * 100
            ).toFixed(1);
            this.sabData.bottomArr.a = (
              RightSAB[i].level2AmtPositionRatio * 100
            ).toFixed(1); 
            this.sabData.bottomArr.b = (
              RightSAB[i].level2AmtPositionRatio * 100
            ).toFixed(1);
            this.sabData.topArr.s = (
              RightSAB[i].level2AmtPositionRatio * 100
            ).toFixed(1);
            this.sabData.topArr.a = (
              RightSAB[i].level2AmtPositionRatio * 100
            ).toFixed(1);
            this.sabData.topArr.b = (
              RightSAB[i].level2AmtPositionRatio * 100
            ).toFixed(1);
            }
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
    // 中部



// 折线图
 //中间折线图
 async getList(params) {
      this.showLoading = true;
      let obj = {
        code:'outSellMacroRegionDashboardChart',
        fields:'cooprLevel2'
       }
       Object.assign(obj,params)
      try {
        const res = await API.getChartTotal(obj);
        let sellOutDataList = res.rows[0];
        for (var i in sellOutDataList) {
          let newArr = sellOutDataList[i].filter((item) => {
          var timeArr = item.orderDate
            .replace(" ", ":")
            .replace(/\:/g, "-")
            .split("-");
          var yue = timeArr[1];
          var ri = timeArr[2];

          // 外销日内
          if (item.totalAvgTaskAmt !== null && item.totalAmt !== null) {
            this.AvgTaskAmtDate.push(yue + "-" + ri);
            this.AvgTaskAmtList.push(item.totalAmt);
            this.AvgTaskAmtLine = item.totalAvgTaskAmt;
            this.myEcharts();
          }
          // this.showLoading = false;
        });

          }
   
        

    //     let newArr = sellOutDataList.filter((item) => {
    //       var timeArr = item.orderDate
    //         .replace(" ", ":")
    //         .replace(/\:/g, "-")
    //         .split("-");
    //       var yue = timeArr[1];
    //       var ri = timeArr[2];

    //       // 外销日内
    //       if (item.totalAvgTaskAmt !== null && item.totalAmt !== null) {
    //         this.AvgTaskAmtDate.push(yue + "-" + ri);
    //         this.AvgTaskAmtList.push(item.totalAmt);
    //         this.AvgTaskAmtLine = item.totalAvgTaskAmt;
    //         this.myEcharts();
    //       }
    //       // this.showLoading = false;
    //     });
      } catch (error) {
        console.log(error);
      }
    },





//  async getList(params) {
//       this.showLoading = true;
//       try {
//         const res = await API.getTotal(
//           "sellOuttotalchart",
//           params
//         );
//         console.log("niu深V",res);
//         let sellOutDataList = res.rows;
//         let newArr = sellOutDataList.filter((item) => {
//           var timeArr = item.orderDate
//             .replace(" ", ":")
//             .replace(/\:/g, "-")
//             .split("-");
//           var yue = timeArr[1];
//           var ri = timeArr[2];

//           // 外销日内
//           if (item.totalAvgTaskAmt !== null && item.totalAmt !== null) {
//             this.AvgTaskAmtDate.push(yue + "-" + ri);
//             this.AvgTaskAmtList.push(item.totalAmt);
//             this.AvgTaskAmtLine = item.totalAvgTaskAmt;
//             this.myEcharts();
//           }
//           // this.showLoading = false;
//         });
//       } catch (error) {
//         console.log(error);
//       }
//     },

    // 右边接口
    async getList1(params) {
      this.showLoading = true;
      let obj = {
        code:'outSellMacroRegionDashboardChart'
      }
      Object.assign(obj,params);
      try {
        const res = await API.getChartTotal(obj);
        // "亚太业务区,亚太业务区,本部,OEM,待定,2022-03-01,2022-03-31",
        console.log("arr", res);
        // let sellOutDataList = res.rows;
        this.showLoading = false;
        let obj = res.rows[0];
        var k = 0;
        var arr = [];
        for (var i in obj) {
          if (k < 6) {
            arr.push(obj[i]);
          }
          k++;
        }

        // console.log("obj0,",arr);

        this.dhcarr = [];
        let arrs = JSON.parse(JSON.stringify(arr[0]));
        arr.forEach((v) => {
          this.dhcarr.push(v[0].cooprLevel2);
        });
       
        // this.dhcarr = [1,2,3,4,5];
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
            console.log("sdvsd", timeArr);

            AmericaDate.push(yue + "-" + ri);
            AmericaList.push(item.totalAmt);
            AmericaLine = item.totalAvgTaskAmt;
          });
        //   console.log("AmericaLine", AmericaLine);
        //   console.log("AmericaList",AmericaList);
          this.myEcharts2(AmericaList, AmericaDate, AmericaLine, j);
        }
        // let Arrnum = datanum.filter((item) => {
        //   var timeArr = item.orderDate
        //   .replace(" ", ":")
        //     .replace(/\:/g, "-")
        //     .split("-");
        //   var yue = timeArr[1];
        //   var ri = timeArr[2];
        // console.log( "sdvsd", timeArr);

        // this.AmericaDate.push(yue + "-" + ri);
        //     this.AmericaList.push(item.totalAmt);
        //     this.AmericaLine = item.totalAvgTaskAmt;
        // })
        // console.log("Arrnum",this.datanum);
        // this.myEcharts2(this.AmericaList,this.AmericaDate,this.AmericaLine);
        // let dhcarr = [1,2,3,4,5,6];
        // dhcarr.forEach(v=>{

        //   this.myEcharts2(this.AmericaList,this.AmericaDate,this.AmericaLine,v);

        // })
      } catch (error) {
        console.log(error);
      }
    },

    gotoDomestic(){
    this.$router.push("/center/index")
    },
    // 外销--产司区域主管
    gotoCatSeries(){
      this.$router.push("/center/exprotProductCo")
    },
 
    toModuleResponsible(){
      this.$router.push({name:'moduleResponsible'});
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
          // { class: 'actual', text: '规划达成' },
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
    },
   
    myEcharts3() {
      var myChart3 = this.$echarts.init(document.getElementById("main3"));
      var option = {
        xAxis: {
          axisLabel: {
            formatter: function (val) {
              return "";
            },
          },
        },
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
          data: ["2022-01", "2022-02", "2022-03", "2022-04", "2022-05"],
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
            data: [1948, 7308, 8949, 3839, 13857],
            markLine: {
              data: [
                {
                  yAxis: 8576,
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
      myChart3.setOption(option);
    },
    myEcharts4() {
      var myChart4 = this.$echarts.init(document.getElementById("main4"));
      var option = {
        xAxis: {
          axisLabel: {
            formatter: function (val) {
              return "";
            },
          },
        },
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
          data: ["2022-01", "2022-02", "2022-03", "2022-04", "2022-05"],
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
            data: [1948, 7308, 8949, 3839, 13857],
            markLine: {
              data: [
                {
                  yAxis: 8576,
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
      myChart4.setOption(option);
    },
    myEcharts5() {
      var myChart5 = this.$echarts.init(document.getElementById("main5"));
      var option = {
        xAxis: {
          axisLabel: {
            formatter: function (val) {
              return "";
            },
          },
        },
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
          data: ["2022-01", "2022-02", "2022-03", "2022-04", "2022-05"],
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
            data: [1948, 7308, 8949, 3839, 13857],
            markLine: {
              data: [
                {
                  yAxis: 8576,
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
      myChart5.setOption(option);
    },
    myEcharts6() {
      var myChart6 = this.$echarts.init(document.getElementById("main6"));
      var option = {
        xAxis: {
          axisLabel: {
            formatter: function (val) {
              return "";
            },
          },
        },
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
          data: ["2022-01", "2022-02", "2022-03", "2022-04", "2022-05"],
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
            data: [1948, 7308, 8949, 3839, 13857],
            markLine: {
              data: [
                {
                  yAxis: 8576,
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
      myChart6.setOption(option);
    },
    myEcharts7() {
      var myChart7 = this.$echarts.init(document.getElementById("main7"));
      var option = {
        xAxis: {
          axisLabel: {
            formatter: function (val) {
              return "";
            },
          },
        },
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
          data: ["2022-01", "2022-02", "2022-03", "2022-04", "2022-05"],
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
            data: [1948, 7308, 8949, 3839, 13857],
            markLine: {
              data: [
                {
                  yAxis: 8576,
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
      myChart7.setOption(option);
    },
    myEcharts8() {
      var myChart8 = this.$echarts.init(document.getElementById("main8"));
      var option = {
        xAxis: {
          axisLabel: {
            formatter: function (val) {
              return "";
            },
          },
        },
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
          data: ["2022-01", "2022-02", "2022-03", "2022-04", "2022-05"],
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
            data: [1948, 7308, 8949, 3839, 13857],
            markLine: {
              data: [
                {
                  yAxis: 8576,
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
      myChart8.setOption(option);
    },
  
  },
// 仪表盘右spa

  // 右边卡片/
  async getCard(params) {
        let obj = {
          code:'sellOutTopOnline'
        }
        Object.assign(obj,params);
        this.showLoadingCard = true;
        const res = await API.getTotal(obj);
    
        let onTitle = '';
        
        let arr = [];
       let sabArr = [];

        res.rows.forEach(v=>{
      
           if(onTitle!=v.cooprLevel1 && !!v.cooprLevel1){
             console.log('title')
             onTitle = v.cooprLevel1;
            arr.push(v);
           }
        })


        arr.splice(6);
    
        arr.length>0 && arr.forEach(v => {
            //  v.title = v.cooprLevel1; /*标题*/
            if(!!v.cooprLevel1NameAmt){
             v.cooprLevel1NameAmt = v.cooprLevel1NameAmt.toFixed(0); /*达成金额*/
            }else{
              console.log('字段无数据','cooprLevel1NameAmt')
            }
            if(!!v.cooprLevel1TaskAmt){
             v.cooprLevel1TaskAmt = v.cooprLevel1TaskAmt.toFixed(0); /*责任制金额*/
            }else{
              console.log('字段无数据','cooprLevel1TaskAmt')
            }

            if(!!v.grossProfitRadio){
             v.grossProfitRadio = (v.grossProfitRadio * 100>100?100:v.grossProfitRadio * 100).toFixed(0); /*毛利率*/
             v.grossProfitRadio = Number(v.grossProfitRadio);

            }else{
              console.log('字段无数据','cooprLevel1AmtRadio')
            }

            if(!!v.cooprLevel1AmtRadio){
             v.cooprLevel1AmtRadio = (v.cooprLevel1AmtRadio * 100>100?100:v.cooprLevel1AmtRadio * 100).toFixed(0); /*完成率*/
             v.cooprLevel1AmtRadio = Number(v.cooprLevel1AmtRadio);

            }else{
              console.log('字段无数据','cooprLevel1AmtRadio')
            }
    
        });
        this.cardData = arr;
        console.log('this.cardData',this.cardData)
    },

    // 底部table/
    async getTable(params) {
      let innerObj = {
        code:"outSellMacroRegionSalesDetail"
      }
      Object.assign(innerObj,params);

      let outterObj = {
        code:"outSellMacroRegionAKDetail"
      }
      Object.assign(outterObj,params);
      try {
        let tableInner = await API.getTotal(innerObj);
        let tableOutter = await API.getTotal(outterObj);

        this.tableInner = tableInner.rows;
        this.tableOutter = tableOutter.rows;
        this.rowSpanNumber2 = [this.tableOutter.length - 1];

        this.rowSpanNumber1 = [this.tableInner.length -1];
        // debugger;

        console.log("this.tableInner", this.rowSpanNumber1, this.tableInner);

        // console.log("this.data", this.data);
      } catch (err) {
        console.log(err);
      }
    },
   
  },

  mounted() {
    this.init();
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
  justify-content: inherit;
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
  padding: 4px 1px 4px 8px;
}
.echartsBox-min {
  width: 305px;
  height: 100px;
}
.right-font-title {
  width: 45%;
  font-size: 15px;
  color: #fff;
  text-align: center;
  /* margin-right: 40px; */
}
.flex-right-bottom {
  display: flex;
  /* align-items: center; */
  /* justify-content: space-between; */
  flex-wrap: wrap;
  width: 32%;
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
