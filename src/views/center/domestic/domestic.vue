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
      <div class="flex-card">
        <div class="card-box">
          <div class="card-font" @click="online()">线上</div>
          <div class="card-border-box">
            <div class="line"></div>
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
            <div class="line4"></div>
            <div class="left-right-box">
              <div style="margin-left: 14px">
                <div class="flex-top-card">
                  <div class="top-left-font">线上达成</div>
                  <div class="flex-finish">
                    <div class="finish-font">责任制 <span>{{innerLeftInfo.saleTaskAmt || 0}}亿</span></div>
                    <div class="finish-font">完成率 <span>{{innerLeftInfo.onLineRadio>100?100:innerLeftInfo.onLineRadio || 0}}%</span></div>
                  </div>
                </div>
                <div class="flex-top-card">
                  <div class="card-big-num">{{innerLeftInfo.cnyAmt}}亿</div>
                  <div style="display: flex; align-items: center">
                    <div class="finish-font">进度</div>
                    <div>
                      <div class="progress">
                        <a-progress
                          :percent="innerLeftInfo.dateRadio"
                          :show-info="false"
                          strokeColor="#FF8B2F"
                        />
                      </div>
                      <div class="progress">
                        <a-progress
                          :percent="innerLeftInfo.onLineRadio"
                          :show-info="false"
                          strokeColor="rgb(102, 255, 255)"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cardList"
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  "
                >
                  <template  v-for="(item,index) in innerLeft" >  
                  <div class="card-middle-progress" :key="index" v-if="index<3">
                    <div style="display: flex; align-items: center">
                      <div class="finish-font">{{item.businessEntityName}}</div>
                      <div>
                        <div class="progress-middle">
                          <a-progress
                            :percent="item.dateRadio"
                            :show-info="false"
                            strokeColor="#FF8B2F"
                          />
                        </div>
                        <div class="progress-middle">
                          <a-progress
                            :percent="item.cnyAmtRadio*100"
                            :show-info="false"
                            strokeColor="rgb(102, 255, 255)"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
                </div>

                <div class="cardList"
                style="
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                "
              >
            
              <template v-for="(item,index) in innerLeft">
                <div class="card-middle-progress" :key="index"  v-if="index>2">
                  <div style="display: flex; align-items: center">
                    <div class="finish-font">{{item.businessEntityName}}</div>
                    <div>
                      <div class="progress-middle">
                        <a-progress
                          :percent="item.dateRadio"
                          :show-info="false"
                          strokeColor="#FF8B2F"
                        />
                      </div>
                      <div class="progress-middle">
                        <a-progress
                          :percent="item.cnyAmtRadio*100"
                          :show-info="false"
                          strokeColor="rgb(102, 255, 255)"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </template>
      
              </div>
                
                <div class="flex-bottoms">
                  <div>线上结构   <span v-for="(item,index) in innerSabLeft" :key="index"> <span>{{item.position}}</span> - <span>{{item.positionRatio}}%;</span>  </span></div>
                </div>
                <div
                  class="flex-bottoms"
                  style="padding-bottom: 10px; padding-top: 4px"
                >
                  <div>线上毛利率 <span class="light-blue">{{innerLeftInfo.onLineProfitRadio || 0}}%</span></div>
                </div>
              </div>
              <div class="mt-border"></div>
              <div style="margin-right: 14px">
                <div class="flex-top-card">
                  <div class="top-left-font">线上库存</div>
                  <div class="flex-finish">
                    <div class="finish-font">责任制 <span>{{innerRightInfo.saleTaskAmt || 0}}亿</span></div>
                    <div class="finish-font">完成率 <span>{{innerRightInfo.onLineRadio  || 0}}%</span></div>
                  </div>
                </div>
                <div class="flex-top-card">
                  <div class="card-big-num">{{innerRightInfo.cnyAmt || 0}}亿</div>
                  <div style="display: flex; align-items: center">
                    <div class="finish-font">进度</div>
                    <div>
                      <div class="progress">
                        <a-progress
                          :percent="innerRightInfo.dateRadio || 0"
                          :show-info="false"
                          strokeColor="#FF8B2F"
                        />
                      </div>
                      <div class="progress">
                        <a-progress
                          :percent="innerRightInfo.onLineRadio || 0"
                          :show-info="false"
                          strokeColor="rgb(102, 255, 255)"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cardList"
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  "
                >
                <template v-for="(item,index) in innerRight" >
                  <div class="card-middle-progress" :key="index" v-if="index<3">
                    <div style="display: flex; align-items: center">
                      <div class="finish-font">{{item.businessEntityName}}</div>
                      <div class="light-blue">
                        15亿
                      </div>
                    </div>
                  </div>
                </template>
                </div>
                <div class="cardList"
                style="
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                "
              >
              <template  v-for="(item,index) in innerRight" > 
                  <div class="card-middle-progress":key="index" v-if="index>=3">
                    <div style="display: flex; align-items: center">
                      <div class="finish-font">{{item.businessEntityName}}</div>
                      <div class="light-blue">
                        15亿
                      </div>
                    </div>
                  </div>
                </template>
               
                </div>
                <div class="flex-bottoms">
                  <div>线上结构   <span v-for="(item,index) in innerSabRight" :key="index"> <span>{{item.position}}</span> - <span>{{item.positionRatio}}%;</span>  </span></div>
                </div>
                <div
                  class="flex-bottoms"
                  style="padding-bottom: 10px; padding-top: 4px"
                >
                  <div>线上毛利率 <span class="light-blue">{{innerRightInfo.onLineProfitRadio || 0}}%</span></div>
                </div>
              </div>
            </div>
            <div class="line"></div>
          </div>
        </div>
        <div class="card-box">
          <div class="card-font">线下</div>
          <div class="card-border-box">
            <div class="line"></div>
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
            <div class="line4"></div>
            <div class="left-right-box">
              <div style="margin-left: 14px">
                <div class="flex-top-card">
                  <div class="top-left-font">线下达成</div>
                  <div class="flex-finish">
                    <div class="finish-font">责任制 <span>{{outterLeftInfo.saleTaskAmt}}亿</span></div>
                    <div class="finish-font">完成率 <span>{{outterLeftInfo.onLineRadio>100?100:outterLeftInfo.onLineRadio}}%</span></div>
                  </div>
                </div>
                <div class="flex-top-card">
                  <div class="card-big-num">{{outterLeftInfo.cnyAmt}}亿</div>
                  <div style="display: flex; align-items: center">
                    <div class="finish-font">进度</div>
                    <div>
                      <div class="progress">
                        <a-progress
                          :percent="outterLeftInfo.dateRadio"
                          :show-info="false"
                          strokeColor="#FF8B2F"
                        />
                      </div>
                      <div class="progress">
                        <a-progress
                          :percent="outterLeftInfo.onLineRadio"
                          :show-info="false"
                          strokeColor="rgb(102, 255, 255)"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cardList"
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  "
                >
                <template  v-for="(item,index) in outterLeft" >
                  <div class="card-middle-progress":key="index" v-if="index<3">
                    <div style="display: flex; align-items: center">
                      <div class="finish-font">{{item.businessEntityName}}</div>
                      <div>
                        <div class="progress-middle">
                          <a-progress
                            :percent="item.dateRadio"
                            :show-info="false"
                            strokeColor="#FF8B2F"
                          />
                        </div>
                        <div class="progress-middle">
                          <a-progress
                            :percent="item.cnyAmtRadio*100"
                            :show-info="false"
                            strokeColor="rgb(102, 255, 255)"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
                  </div>
                  <div class="cardList"
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  "
                >
                <template v-for="(item,index) in outterLeft" >
                  <div class="card-middle-progress":key="index" v-if="index>2">
                    <div style="display: flex; align-items: center">
                      <div class="finish-font">{{item.businessEntityName}}</div>
                      <div>
                        <div class="progress-middle">
                          <a-progress
                            :percent="item.dateRadio"
                            :show-info="false"
                            strokeColor="#FF8B2F"
                          />
                        </div>
                        <div class="progress-middle">
                          <a-progress
                            :percent="item.cnyAmtRadio*100"
                            :show-info="false"
                            strokeColor="rgb(102, 255, 255)"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
               
                </div>
                <div class="flex-bottoms">
                  <div>线上结构   <span v-for="(item,index) in outterSabLeft" :key="index"> <span>{{item.position}}</span> - <span>{{item.positionRatio}}%;</span>  </span></div>
                </div>
                <div
                  class="flex-bottoms"
                  style="padding-bottom: 10px; padding-top: 4px"
                >
                  <div>线上毛利率 <span class="light-blue">{{outterLeftInfo.onLineProfitRadio}}%</span></div>
                </div>
              </div>
              <div class="mt-border"></div>
              <div style="margin-right: 14px">
                <div class="flex-top-card">
                  <div class="top-left-font">线下库存</div>
                  <div class="flex-finish">
                    <div class="finish-font">责任制 <span>{{outterRightInfo.saleTaskAmt || 0}}亿</span></div>
                    <div class="finish-font">完成率 <span>{{outterRightInfo.onLineRadio>100?100:outterRightInfo.onLineRadio || 0}}%</span></div>
                  </div>
                </div>
                <div class="flex-top-card">
                  <div class="card-big-num">{{outterRightInfo.cnyAmt || 0}}亿</div>
                  <div style="display: flex; align-items: center">
                    <div class="finish-font">进度</div>
                    <div>
                      <div class="progress">
                        <a-progress
                          :percent="outterRightInfo.dateRadio"
                          :show-info="false"
                          strokeColor="#FF8B2F"
                        />
                      </div>
                      <div class="progress">
                        <a-progress
                          :percent="outterRightInfo.onLineRadio"
                          :show-info="false"
                          strokeColor="rgb(102, 255, 255)"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cardList"
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  "
                >
                <template  v-for="(item,index) in outterRight" >
                  <div class="card-middle-progress":key="index" v-if="index<3">
                    <div style="display: flex; align-items: center">
                      <div class="finish-font">{{item.businessEntityName}}</div>
                      <div class="light-blue">
                        15亿
                      </div>
                    </div>
                  </div>
                </template>
                </div>
                <div class="cardList"
                style="
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                "
              >
              <template v-for="(item,index) in outterRight" >
                <div class="card-middle-progress":key="index"  v-if="index>=3">
                  <div style="display: flex; align-items: center">
                    <div class="finish-font">{{item.businessEntityName}}</div>
                    <div class="light-blue">
                      15亿
                    </div>
                  </div>
                </div>
              </template>
                </div>
                <div class="flex-bottoms">
                  <div>线上结构   <span v-for="(item,index) in outterSabLeft" :key="index"> <span>{{item.position}}</span> - <span>{{item.positionRatio}}%;</span>  </span></div>
                </div>
                <div
                  class="flex-bottoms"
                  style="padding-bottom: 10px; padding-top: 4px"
                >
                  <div>线上毛利率 <span class="light-blue">{{outterRightInfo.onLineProfitRadio || 0 }}%</span></div>
                </div>
              </div>
            </div>
            <div class="line"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 中间echart -->
    <div class="middle-box">
      <div class="flex-fang">
        <div class="fang-color"></div>
        <div class="fang-color"></div>
      </div>
      <div class="flex-char">
        <a-spin class="flex-loading" size="large" v-if="showLoading" />
        <div>
          <div class="middle-font">内销日达成趋势图</div>
          <div class="legend">
            <template v-if="echartsLabel">
              <div
                class="item"
                v-for="(item, index) in echartsLabel"
                :key="index"
              >
                <div class="lump" :class="item.class"></div>
                <div class="text">{{ item.text }}</div>
              </div>
            </template>
          </div>
          <div id="main" class="echartsBox"></div>
        </div>
        <div>
          <div class="middle-font">线上日达成趋势图</div>
          <div class="legend">
            <template v-if="echartsLabel">
              <div
                class="item"
                v-for="(item, index) in echartsLabel"
                :key="index"
              >
                <div class="lump" :class="item.class"></div>
                <div class="text">{{ item.text }}</div>
              </div>
            </template>
          </div>
          <div id="main2" class="echartsBox"></div>
        </div>
        <div>
          <div class="middle-font">线下日达成趋势图</div>
          <div class="legend">
            <template v-if="echartsLabel">
              <div
                class="item"
                v-for="(item, index) in echartsLabel"
                :key="index"
              >
                <div class="lump" :class="item.class"></div>
                <div class="text">{{ item.text }}</div>
              </div>
            </template>
          </div>
          <div id="main3" class="echartsBox"></div>
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
export default {
  name: "s",
  components: {
    ProgressPanel,
    SpeedPanel,
    SadPanel,
  },
  data() {
    return {
      showLoading: false,

      innerDirectList: [],
      innerDirectDate: [],
      innerDirectLine: "",

      outerDirectList: [],
      outerDirectDate: [],
      outerDirectLine: "",
      allList: [],
      allLiine: "",
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
        ballNum: 55,
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
        bar1: 70,
        bar2: 50,
        bar3: 30,
        bar4: 12,
        bar5: 7,
        ballTitle: "内销",
        bottom: "线上",
        top: "线下",
        sabArr: { s: 32, a: 18, b: 21 },
        topArr: { s: 32, a: 18, b: 21 },
        bottomArr: { s: 32, a: 18, b: 21 },
        // sabArr: [{'高端机':32},{'明星机':18},{'入口机':21},{'常规机':9},{'结构及':5}],
        // topArr: [{'高端机':32},{'明星机':18},{'入口机':21},{'常规机':9},{'结构及':5}],
        // bottomArr: [{'高端机':32},{'明星机':18},{'入口机':21},{'常规机':9},{'结构及':5}]
      },
      columns: [
        {
          title: "线上",
          dataIndex: "name",
          key: "name",
          align: "center",
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
      echartsLabel: [
        { class: "plan", text: "实际达成" },
        { class: "average", text: "日均线" },
      ],
      innerLeft:[],
       innerLeftInfo:{},
       innerRight:[{ cnyAmtRadio: 20, businessEntityName: '环境', dateRadio: 12 },
                { cnyAmtRadio: 20, businessEntityName: '烹饪', dateRadio: 12 },
                { cnyAmtRadio: 20, businessEntityName: '电磁', dateRadio: 12 },
                { cnyAmtRadio: 20, businessEntityName: '调理', dateRadio: 12 },
                { cnyAmtRadio: 20, businessEntityName: '电动', dateRadio: 12 },
                { cnyAmtRadio: 20, businessEntityName: '饮品', dateRadio: 12 }],
       innerRightInfo:{},
       innerSabLeft:[],
       innerSabRight:[],
       outterLeft:[],
       outterLeftInfo:{},
       outterRight:[{ cnyAmtRadio: 20, businessEntityName: '环境', dateRadio: 12 },
                { cnyAmtRadio: 20, businessEntityName: '烹饪', dateRadio: 12 },
                { cnyAmtRadio: 20, businessEntityName: '电磁', dateRadio: 12 },
                { cnyAmtRadio: 20, businessEntityName: '调理', dateRadio: 12 },
                { cnyAmtRadio: 20, businessEntityName: '电动', dateRadio: 12 },
                { cnyAmtRadio: 20, businessEntityName: '饮品', dateRadio: 12 },],
       outterRightInfo:{},
       outterSabLeft:[],
       outterSabRight:[],
    };
    
  },
  methods: {
    //三个仪表盘
    async getdashboard() {
      try {
        const res = await API.getData("innerDirectTopTotal", "2022-03");
        //内销汇总仪表盘左边&&中间
        let panelDataList = res.rows;
        for (var i = 0; i < panelDataList.length; i++) {
          if (panelDataList[i].cooprLevel1 == "线上") {
            this.progressData.topGPM = (
              panelDataList[i].onLineProfitRadio * 100
            ).toFixed(1);
            this.progressData.bar1 = (panelDataList[i].onLineProfitRadio * 100).toFixed(1);
          } else if (panelDataList[i].cooprLevel1 == "线下") {
            this.progressData.bar1 = 10;
            this.progressData.bottomGPM = (
              panelDataList[i].onLineProfitRadio * 100
            ).toFixed(1);
            this.progressData.bar2 = (
              panelDataList[i].onLineProfitRadio * 100
            ).toFixed(1);
          }
        }

        //外销汇总仪表盘左边&&中间
        // let smallData = JSON.parse(localStorage.getItem("setPanel"));
        // for (var i = 0; i < smallData.length; i++) {
        //   if (smallData[i].directName == "内销") {
        //     dataList.smallInnerDataObj = smallData[i];
        //   } else {
        //     dataList.smallDownDataObj = smallData[i];
        //   }
        // }
      } catch (error) {
        console.log(error);
      }
    },

    //中间折线图
    async getList() {
      this.showLoading = true;
      try {
        const res = await API.getData(
          "innerDirectChart",
          "2022-01-01,2022-10-01"
        );
        let obj = { innerDirect: "", outerDirect: "" };
        let newArr = res.rows.filter((item) => {
          var timeArr = item.orderDate
            .replace(" ", ":")
            .replace(/\:/g, "-")
            .split("-");
          var yue = timeArr[1];
          var ri = timeArr[2];
          if (item.cooprLevel1 == "线上") {
            this.innerDirectDate.push(yue + "-" + ri);
            this.innerDirectList.push(item.totalCnyAmt);
            this.innerDirectLine = item.saleAvgTaskQty;
            this.myEcharts2();
          } else if (item.cooprLevel1 == "线下") {
            this.outerDirectDate.push(yue + "-" + ri);
            this.outerDirectList.push(item.totalCnyAmt);
            this.outerDirectLine = item.saleAvgTaskQty;
            this.myEcharts3();
          }

          this.allList.push(item.saleAvgTaskQty + item.saleAvgTaskQty);
          this.allLiine = item.saleAvgTaskQty + item.saleAvgTaskQty;
          this.myEcharts();
          this.showLoading = false;
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
          data: this.innerDirectDate,
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
            data: this.allList,
            markLine: {
              data: [
                {
                  yAxis: this.allLiine,
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
    myEcharts2() {
      var myChart2 = this.$echarts.init(document.getElementById("main2"));
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
          data: this.innerDirectDate,
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
            data: this.innerDirectList,
            markLine: {
              data: [
                {
                  yAxis: 23040199,
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
          data: this.outerDirectDate,
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
            data: this.outerDirectList,
            markLine: {
              data: [
                {
                  yAxis: this.outerDirectLine,
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
    online() {
      this.$router.push("/center/onlineSummary");
    },
       // 右边卡片/
   async getCard() {
      // try {
        const inner = await API.getData("innerDirectInOutKard","2022-03");
        const innersab = await API.getData("innerDirectRightSAB","2022-03");
        console.log('inner,',inner)
        inner.rows.forEach(v=>{
          v.dateRadio = v.dateRadio*100
          v.onLineRadio = v.onLineRadio*100>100?100:v.onLineRadio*100;
        })

        this.outterLeft = inner.rows.filter(v=>{
          return v.cooprLevel1 == '线下';
        })
        this.outterLeft.splice(6);
        this.outterLeftInfo = this.outterLeft[0]
        if(this.outterLeftInfo.onLineRadio){
        this.outterLeftInfo.onLineRadio = this.outterLeftInfo.onLineRadio.toFixed(0)
        }
        if(this.outterLeftInfo.onLineProfitRadio){
        this.outterLeftInfo.onLineProfitRadio = (this.outterLeftInfo.onLineProfitRadio*100).toFixed(2)
        }
        if(this.outterLeftInfo.cnyAmt){
        this.outterLeftInfo.cnyAmt = this.outterLeftInfo.cnyAmt.toFixed(0)
        }
        if(this.outterLeftInfo.saleTaskAmt){
        this.outterLeftInfo.saleTaskAmt = this.outterLeftInfo.saleTaskAmt.toFixed(0)
        }

        // this.outterRight = outter.rows.filter(v=>{
        //   return v.obmOem == 'OEM';
        // })
        // this.outterRightInfo = this.outterRight[0]
        // if(this.outterRightInfo.onLineRadio){
        // this.outterRightInfo.onLineRadio = this.outterRightInfo.onLineRadio.toFixed(0)
        // }
        // if(this.outterRightInfo.onLineProfitRadio){
        // this.outterRightInfo.onLineProfitRadio = (this.outterRightInfo.onLineProfitRadio*100).toFixed(2)
        // }
        // if(this.outterRightInfo.cnyAmt){
        // this.outterRightInfo.cnyAmt = this.outterRightInfo.cnyAmt.toFixed(0)
        // }
        // if(this.outterRightInfo.saleTaskAmt){
        // this.outterRightInfo.saleTaskAmt = this.outterRightInfo.saleTaskAmt.toFixed(0)
        // }



        this.innerLeft = inner.rows.filter(v=>{
          return v.cooprLevel1 == '线上';
        })
        this.innerLeft.splice(6);
        this.innerLeftInfo = this.innerLeft[0]
        if(this.innerLeftInfo.onLineRadio){
        this.innerLeftInfo.onLineRadio = this.innerLeftInfo.onLineRadio.toFixed(0)
        }
        if(this.innerLeftInfo.onLineProfitRadio){
        this.innerLeftInfo.onLineProfitRadio = (this.innerLeftInfo.onLineProfitRadio*100).toFixed(2)
        }
        if(this.innerLeftInfo.cnyAmt){
        this.innerLeftInfo.cnyAmt = this.innerLeftInfo.cnyAmt.toFixed(0)
        }
        if(this.innerLeftInfo.saleTaskAmt){
        this.innerLeftInfo.saleTaskAmt = this.innerLeftInfo.saleTaskAmt.toFixed(0)
        }


      //  this.innerRight = inner.rows.filter(v=>{
      //     return v.cooprLevel1 == '线下';
      //   })
      //  this.innerRightInfo = this.innerRight[0]
      //  if(this.innerRightInfo.onLineRadio){
      //   this.innerRightInfo.onLineRadio = this.innerRightInfo.onLineRadio.toFixed(0)
      //  }
      //  if(this.innerRightInfo.onLineProfitRadio){
      //   this.innerRightInfo.onLineProfitRadio = (this.innerRightInfo.onLineProfitRadio*100).toFixed(0)
      //  }
   
      //   if(this.innerRightInfo.cnyAmt){
      //   this.innerRightInfo.cnyAmt = this.innerRightInfo.cnyAmt.toFixed(0)
      //   }
      //   if(this.innerRightInfo.saleTaskAmt){
      //   this.innerRightInfo.saleTaskAmt = this.innerRightInfo.saleTaskAmt.toFixed(0)
      // }
      // console.log('this.innerRightInfo',this.innerRightInfo,this.innerRight)

      /*参数有问题*/

      //  this.innerSabLeft = innersab.rows.filter(v=>{
      //     return v.cooprLevel1 == '线上';
      //   })
      //   this.innerSabLeft.forEach(v=>{
      //     v.positionRatio = (v.level1PositionRatio*100).toFixed(0)
      //   })
      //  console.log('this.innerSabLeft', this.innerSabLeft)
      //  this.outterSabLeft = innersab.rows.filter(v=>{
      //     return v.cooprLevel1 == '线下';
      //   })
      //   this.outterSabLeft.forEach(v=>{
      //     v.positionRatio = (v.level1PositionRatio*100).toFixed(0)
      //   })

      // }catch(err){
      //   console.log(err)
      // }

    },
  },
  created() {
    this.getList();
    this.getdashboard();
    this.getCard();
  },
  mounted() {},
};
</script>
<style scoped>
.flex-char {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 98%;
  margin: 20px auto;
  margin-bottom: 20px;
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
  margin: 30px auto;
  border: 1px solid hsla(210, 86%, 39%, 0.66);
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
  margin-bottom: 30px;
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
  height: 248px;
  width: 545px;
  background-image: url("../../../assets/img/bigCardBackground.svg");
  background-repeat: no-repeat;
  /* margin-left: 20px; */
}
.card-box:first-child {
  margin-right: 20px;
}

.card-font {
  font-size: 16px;
  color: #fff;
  text-align: center;
  font-weight: 600;
  cursor: pointer;
  color: #19ecff;
}
.flex-card {
  display: flex;
  margin-top: 20px;
}
.flex-top-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.top-left-font {
  font-size: 14px;
  color: #fff;
  margin-right: 20px;
}
.card-border-box {
  margin: 14px;
  border: 1px solid rgba(13, 83, 183, 0.7);
  position: relative;
}
.line {
  height: 10px;
  border-left: 2px solid rgb(102, 255, 255);
  border-right: 2px solid rgb(102, 255, 255);
}
.line1 {
  border-top: 2px solid rgb(102, 255, 255);
  width: 10px;
  position: absolute;
  top: 0;
  left: 0;
}
.line2 {
  border-top: 2px solid rgb(102, 255, 255);
  width: 10px;
  position: absolute;
  top: 0;
  right: 0;
}
.line3 {
  border-top: 2px solid rgb(102, 255, 255);
  width: 10px;
  position: absolute;
  bottom: 0;
  left: 0;
}
.line4 {
  border-top: 2px solid rgb(102, 255, 255);
  width: 10px;
  position: absolute;
  bottom: 0;
  right: 0;
}
.left-right-box {
  display: flex;
  justify-content: space-between;
}
.flex-finish {
  display: flex;
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
  font-size: 28px;
}
.progress {
  width: 120px;
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
  height:32px;
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
.flex-loading {
  position: relative;
  left: 50%;
  right: 50%;
}
.panelList {
  height: 258px;
  width: 760px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.panelList {
  height: 258px;
  width: 760px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style> 
