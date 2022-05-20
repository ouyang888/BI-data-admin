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
      <cardPro :list="cardData" :cardObj="cardObj" :cardSab="cardSab" :title1="cardSabTitle1" :title2="cardSabTitle2"/>
    </div>
    <!-- 中间echart -->
    <div class="middle-box">
      <div class="flex-fang">
        <div class="fang-color"></div>
        <div class="fang-color"></div>
      </div>
      <div class="flex-char">
        <div>
          <div class="middle-font left-file">外销日达成趋势图</div>
          <div id="main" class="echartsBox"></div>
        </div>
        <div>
          <div class="middle-font">外销产司日达成趋势图</div>
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
      <div class="select-box">
        <selectTime @changeDate="changeDate"/>
      </div>
    </div>

    <!-- 底部表格 -->
    <TableCardBox
      :leftData="tableInner"
      :rightData="tableOutter"
      :titleHead="titleHead"
      title1="线上"
      title2="线下"
      :leftObj="leftObj"
      :rightObj="rightObj"
    />
  </div>
</template>
<script>
import API from "../../../service/api";
import ProgressPanel from "@/views/center/panel/ProgressPanel.vue";
import SpeedPanel from "@/views/center/panel/SpeedPanel.vue";
import SadPanel from "@/views/center/panel/SadPanel.vue";
import TableCardBox from "@/views/center/components/table/TableCardBox.vue";
import cardPro from "@/views/center/components/card/cardPro.vue"; 
import selectTime from '@/components/selectTime.vue';

export default {
  components: {
    ProgressPanel,
    SpeedPanel,
    SadPanel,
    TableCardBox,
    cardPro,
    selectTime
  },
  data() {
    return {
      dhcarr: [
        "暂无数据",
        "暂无数据",
        "暂无数据",
        "暂无数据",
        "暂无数据",
        "暂无数据",
      ],
      cardData: [],
      AmericaDate: [],
      AmericaList: [],
      AvgTaskAmtDate: [],
      AvgTaskAmtList: [],
      AvgTaskAmtLine: [],
      AmericaLine: [],
      Arrnum: [],
      dateTime: "2022-03",
      showLoading: false,
      progressData: {
        bar1: 0,
        bar2: 0,
        ballTitle: "内销",
        bigBallTitle: "毛利率",
        textLeft: "线上",
        textRight: "线下",
        titleTop: "线上",
        titleBottom: "线下",
        topGPM: 0,
        bottomGPM: 0,
        ballNum: 0,
      },
      speedData: {
        bar: 0,
        speedBar: 0,
        ballTitle: "内销达成",
        ballNum: 0,
        ballLeftTitle: "线上",
        ballRightTitle: "线下",
        ballLeftNum: 0,
        ballRightNum: 0,
        bottomNum: 0,
        bottomTitle1: "线上",
        bottomClose: 0,
        bottomTime: 0,
        bottomTitle2: "线下",
        bottomClose1: 0,
        bottomTime1: 0,
      },
      sabData: {
        bar1: 0,
        bar2: 0,
        ballTitle: "内销",
        top: "线上",
        bottom: "线下",
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
      tableInner: [],
      tableOutter: [],
      rowSpanNumber1: [0, 0],
      rowSpanNumber2: [6],
      titleHead: {
        businessEntityName1: "环境",
        businessEntityName2: "电磁",
        businessEntityName3: "饮品",
        businessEntityName4: "电动",
        businessEntityName5: "奇厨",
        businessEntityName6: "烹饪",
        businessEntityName7: "调理",
        businessEntityName8: "其他",
      },
      cardObj: {
        'title':'businessEntityName', /*标题*/
        'cnyAmt':'cnyAmt',/*金额*/
       'saleTaskAmt': 'saleTaskAmt', /*责任制金额*/
       'saleAmtRadio':'cnyAmtRadio',  /*金额完成率*/
       'cooprLevel1':'cooprLevel1'  /*线上/线下 金额完成率*/
      },
      cardSab:[],
      cardSabTitle1:"线上",
      cardSabTitle2:"线下",
      leftObj:{
        marketChannel:'marketChannel',
        marketCenter:'marketCenter',
        manager:'manager',
      },
      rightObj:{
        marketChannel:'marketChannel',
        marketCenter:'marketCenter',
        manager:'manager',
      },
      /*表格配置*/
      title1:'业务员',
      title2:'区域客户',
      /*表格配置 end*/
      showLoadingLeft: true,
      showLoadingRight: true,
      titleName: this.$route.query.key || "环境",
  
    };
  },
  computed: {
    ontime() {
      return this.$store.state.year + "-" + this.$store.state.month;
    },
    showMoney() {
      return this.$store.state.showMoney;
    },
    modelLabel() {
      return this.$store.state.showMoney == true ? "亿" : "台";
    },
    model() {
      /* 获取本部，OEM */
      return this.$store.state.model;
    },
  },
  watch: {
    ontime:{ /*监听月度 数据更改 调用接口 */
     handler: function (newValue, oldValue) {
        this.init(newValue);
      }
    },
    model:{ /*监听产司 数据更改 调用接口 */
      handler: function(newValue,oldValue){
        this.init(this.ontime);
      }

    },
    showMoney:{ /*监听金额:数量版 数据更改 调用接口 */
      handler:function(newValue,oldValue){
        this.init(this.ontime);
      }
    },

  },
  methods: {
    init(ontime) { /*初始化数据方法*/
      // let tableParams = `${this.ontime},${this.ontime},${model},`;
    
    let params = {  /*年月*/
      month_date:ontime
    };
    let listParams = { /*年月日*/
      start_date:`${ontime}-01`,
      end_date:`${ontime}-${this.$store.state.endDay}`
    }
      // console.log("params", params);
      this.getdashboard(params);
      this.queryCardSAB(params);
      this.getTable(params);
      this.getCard(params);
      this.getList(listParams);
      this.getList1(listParams);
      // this.myEcharts();
      // this.myEcharts2();
    },
    // 底部table/
    async getTable(params) {
      let innerObj = {
        coopr_level1:'线上'
      }
      Object.assign(innerObj,params);
      let outterObj = {
        coopr_level1:'线下'
      }
      Object.assign(outterObj,params);
      let tableInner = await API.getData("sellInnerBusinessTotalBottomDetail", innerObj);
      let tableOutter = await API.getData("sellInnerBusinessTotalBottomDetail", outterObj);
      this.tableOutter = tableOutter.rows;
      this.rowSpanNumber2 = [this.tableOutter.length - 1];
      this.rowSpanNumber1 = [this.tableInner.length - 1];

      this.tableInner = tableInner.rows;
    },
    gotoDomestic() {
      this.$router.push("/center/index");
    },
    // 品类汇总
    // gotoCatSeries() {
    //   this.$router.push("/center/productCo");
    // },

    toModuleResponsible() {
      this.$router.push({ name: "moduleResponsible" });
    },

    // 右边卡片/
    async getCard(params) {
      const res = await API.getData('sellInnerBusinessTotalKard',params);
      const res2 = await API.getData('sellInnerBusinessTotalKardSAB',params);
      if(res.code !=200) return;
      this.cardData = res.rows;

      this.cardSab = res2.rows;
      
    },

    //仪表盘(左中)
    async getdashboard(params) {
      let obj = {
        code: "sellInnerBusinessTotalDashBoard",
      };
      Object.assign(obj, params);
      try {
        const res = await API.getTotal(obj);
        //内销汇总仪表盘左边&&中间
        let panelDataList = res.rows;
        if (res.rows.length < 1) {
          this.speedData = {
            bar: 0,
            speedBar: 0,
            ballTitle: "内销达成",
            ballNum: 0,
            ballLeftTitle: "线上",
            ballRightTitle: "线下",
            ballLeftNum: 0,
            ballRightNum: 0,
            bottomNum: 0,
            bottomTitle1: "线上",
            bottomClose: 0,
            bottomTime: 0,
            bottomTitle2: "线下",
            bottomClose1: 0,
            bottomTime1: 0,
          };
          this.progressData = {
            bar1: 0,
            bar2: 0,
            ballTitle: "内销",
            bigBallTitle: "毛利率",
            textLeft: "线上",
            textRight: "线下",
            titleTop: "线上",
            titleBottom: "线下",
            topGPM: 0,
            bottomGPM: 0,
            ballNum: 0,
          };
          return;
        }
        this.progressData.ballNum = (
          panelDataList[0].grossProfitRadio * 100
        ).toFixed(1);
        this.speedData.bar = (panelDataList[0].dateRadio * 100).toFixed(1);
        this.speedData.speedBar = (panelDataList[0].cnyAmtRadio * 100).toFixed(
          1
        );
        this.speedData.ballNum = panelDataList[0].sumCnyAmt.toFixed(1);
        this.speedData.bottomNum = panelDataList[0].saleTaskAmt.toFixed(1);

        for (var i = 0; i < panelDataList.length; i++) {
          if (panelDataList[i].cooprLevel1 == "线上") {
            this.progressData.topGPM = (
              panelDataList[i].directNameGrossProfitRadio * 100
            ).toFixed(1);
            this.progressData.bar1 = (
              panelDataList[i].directNameGrossProfitRadio * 100
            ).toFixed(1);
            this.speedData.ballLeftNum = panelDataList[i].cnyAmt.toFixed(1);
            this.speedData.bottomClose =
              panelDataList[i].cnyAmtRadio.toFixed(1);
            this.speedData.bottomTime = panelDataList[i].dateRadio.toFixed(1);
          } else if (panelDataList[i].cooprLevel1 == "线下") {
            this.progressData.bottomGPM = (
              panelDataList[i].directNameGrossProfitRadio * 100
            ).toFixed(1);
            this.progressData.bar2 = (
              panelDataList[i].directNameGrossProfitRadio * 100
            ).toFixed(1);
            this.speedData.ballRightNum = panelDataList[i].cnyAmt.toFixed(1);
            this.speedData.bottomClose1 =
              panelDataList[i].cnyAmtRadio.toFixed(1);
            this.speedData.bottomTime1 = panelDataList[i].dateRadio.toFixed(1);
          }
        }
      } catch (error) {
        console.log(error);
      }
    },

    //仪表盘(右)
    async queryCardSAB(params) {
      let obj = {
        code: "sellInnerBusinessTotalDashBoardSAB",
      };
      Object.assign(obj, params);
      try {
        const res = await API.getTotal(obj);
        let RightSAB = res.rows;
        if (RightSAB.length < 1) {
          this.sabData = {
            bar1: 0,
            bar2: 0,
            ballTitle: "内销",
            bottom: "线下",
            top: "线上",
            sabArr: { s: 0, a: 0, b: 0 },
            topArr: { s: 0, a: 0, b: 0 },
            bottomArr: { s: 0, a: 0, b: 0 },
          };
          return;
        }
        for (var i = 0; i < RightSAB.length; i++) {
          if (RightSAB[i].cooprLevel1 == "线上") {
            this.sabData.bar1 = (RightSAB[i].positionRatio * 100).toFixed(1);
            if (RightSAB[i].position == "S") {
              this.sabData.topArr.S = (RightSAB[i].positionRatio * 100).toFixed(
                1
              );
            } else if (RightSAB[i].position == "A") {
              this.sabData.topArr.A = (RightSAB[i].positionRatio * 100).toFixed(
                1
              );
            } else if (RightSAB[i].position == "B") {
              this.sabData.topArr.B = (RightSAB[i].positionRatio * 100).toFixed(
                1
              );
            }
          } else if (RightSAB[i].cooprLevel1 == "线下") {
            this.sabData.bar2 = (RightSAB[i].positionRatio * 100).toFixed(1);
            if (RightSAB[i].position == "S") {
              this.sabData.bottomArr.S = (
                RightSAB[i].positionRatio * 100
              ).toFixed(1);
            } else if (RightSAB[i].position == "A") {
              this.sabData.bottomArr.A = (
                RightSAB[i].positionRatio * 100
              ).toFixed(1);
            } else if (RightSAB[i].position == "B") {
              this.sabData.bottomArr.B = (
                RightSAB[i].positionRatio * 100
              ).toFixed(1);
            }
          } else if (RightSAB[i].cooprLevel1 == "总") {
            this.sabData.bar2 = (RightSAB[i].positionRatio * 100).toFixed(1);
            if (RightSAB[i].position == "S") {
              this.sabData.sabArr.S = (RightSAB[i].positionRatio * 100).toFixed(
                1
              );
            } else if (RightSAB[i].position == "A") {
              this.sabData.sabArr.A = (RightSAB[i].positionRatio * 100).toFixed(
                1
              );
            } else if (RightSAB[i].position == "B") {
              this.sabData.sabArr.B = (RightSAB[i].positionRatio * 100).toFixed(
                1
              );
            }
          }
        }
      } catch (error) {
        console.log(error);
      }
    },

    //中间折线图
    async getList(params) {
      this.showLoading = true;
      let obj = {
        code: "sellInnerBusinessTotalChart",
      };
      Object.assign(obj, params);
      try {
        const res = await API.getTotal(
          obj
          // 'cooprLevel1'
        );

        res.rows.filter((item) => {
          if (item.businessEntityName == "总") {
            var timeArr = item.orderDate
              .replace(" ", ":")
              .replace(/\:/g, "-")
              .split("-");
            var yue = timeArr[1];
            var ri = timeArr[2];
            if (item.totalAvgTaskAmt !== null && item.totalAmt !== null) {
              this.AvgTaskAmtDate.push(yue + "-" + ri);
              this.AvgTaskAmtList.push(item.totalCnyAmt);
              this.AvgTaskAmtLine = item.saleAvgAmt;
              this.myEcharts();
            }
          }
          // this.showLoading = false;
        });
      } catch (error) {
        console.log(error);
      }
    },

    // 右边接口
    async getList1(params) {
      this.showLoading = true;
      let chartObj = {
        code: "sellInnerBusinessTotalChart",
        fields: "businessEntityName",
      };
      Object.assign(chartObj, params);
      try {
        const res = await API.getChartTotal(chartObj);
        // console.log("res12", res);
        let sellOutDataList = res.rows;
        this.showLoading = false;
        let obj = res.rows[0];
        // console.log("obj", obj);
        var k = 0;
        var arr = [];
        for (var i in obj) {
          // console.log("11111111111", obj[i],obj[i][0].businessEntityName);

          if (obj[i][0].businessEntityName != "总") {
            arr.push(obj[i]);
          }

          k++;
        }
        // console.log("obj",arr, arr.length);

        this.dhcarr = [];

        arr.forEach((v) => {
          // if (v[0].businessEntityName != "总") {
          this.dhcarr.push(v[0].businessEntityName);
          // }
        });
        this.dhcarr.splice(6);
        // console.log("arr5555", this.dhcarr);
        // this.dhcarr = [1,2,3,4,5];

        arr.forEach((v, j) => {
          let AmericaDate = [];
          let AmericaList = [];
          let AmericaLine = 1;
          v.forEach((item) => {
            // console.log("!112222",item)
            if (item.businessEntityName != "总") {
              var timeArr = item.orderDate
                .replace(" ", ":")
                .replace(/\:/g, "-")
                .split("-");
              var yue = timeArr[1];
              var ri = timeArr[2];
              // console.log("sdvsd", timeArr);

              AmericaDate.push(yue + "-" + ri);
              AmericaList.push(item.totalCnyAmt);
              AmericaLine = item.saleAvgAmt;
            }
          });

          // console.log("item.businessEntityName", JSON.stringify(AmericaList));
          // console.log("Arrnum", this.sellOutDataList);

          this.myEcharts2(AmericaList, AmericaDate, AmericaLine, j);
        });
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
            data: data,
            markLine: {
              data: [
                {
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
    changeDate(start,end) { /*echart切换时间*/
        let listParams = { /*年月日*/
       start_date:start,
      end_date:end
      }
        this.getList(listParams);
      },
  },
  created() {
    this.init(this.ontime);
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
