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
        <div class="card-box" @click="online()">
          <div class="card-font">线上</div>
          <a-spin class="cardLoad" size="large" v-if="showLoadingLeft" />
          <div class="noData" v-else-if="innerLeft && innerLeft.length < 1">暂无数据</div>
          <div class="card-border-box" v-else>
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
                    <div class="finish-font">
                      责任制 <span>{{ innerLeftInfo.saleTaskAmt || 0 }}{{ $store.state.unit }}</span>
                    </div>
                    <div class="finish-font">
                      完成率
                      <span>{{
                          innerLeftInfo.onLineRadio
                      }}%</span>
                    </div>
                  </div>
                </div>
                <div class="flex-top-card">
                  <div class="card-big-num">{{ innerLeftInfo.sumCnyamt }}<span class="unit">{{ $store.state.unit
                  }}</span>
                  </div>
                  <div style="display: flex; align-items: center">
                    <div class="finish-font">进度</div>
                    <div>
                      <div class="progress">
                        <a-progress :percent="innerLeftInfo.dateRadio" :show-info="false" strokeColor="#FF8B2F" />
                      </div>
                      <div class="progress">
                        <a-progress :percent="innerLeftInfo.onLineRadio" :show-info="false"
                          strokeColor="rgb(102, 255, 255)" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cardList" style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  ">
                  <template v-for="(item, index) in innerLeft">
                    <div class="card-middle-progress" :key="index" v-if="index < 3">
                      <div style="display: flex; align-items: center">
                        <div class="finish-font">
                          {{ item.businessEntityName }}
                        </div>
                        <div>
                          <div class="progress-middle">
                            <a-progress :percent="item.dateRadio" :show-info="false" strokeColor="#FF8B2F" />
                          </div>
                          <div class="progress-middle">
                            <a-progress :percent="item.cnyAmtRadio * 100" :show-info="false"
                              strokeColor="rgb(102, 255, 255)" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
                </div>

                <div class="cardList" style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  ">
                  <template v-for="(item, index) in innerLeft">
                    <div class="card-middle-progress" :key="index" v-if="index > 2">
                      <div style="display: flex; align-items: center">
                        <div class="finish-font">
                          {{ item.businessEntityName }}
                        </div>
                        <div>
                          <div class="progress-middle">
                            <a-progress :percent="item.dateRadio" :show-info="false" strokeColor="#FF8B2F" />
                          </div>
                          <div class="progress-middle">
                            <a-progress :percent="item.cnyAmtRadio * 100" :show-info="false"
                              strokeColor="rgb(102, 255, 255)" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
                </div>

                <div class="flex-bottoms">
                  <div>
                    结构
                    <span v-for="(item, index) in innerSabLeft" :key="index">
                      <span>{{ item.position }}</span> -
                      <span>{{ item.positionRatio }}%;</span>
                    </span>
                  </div>
                </div>
                <div class="flex-bottoms" style="padding-bottom: 10px; padding-top: 4px">
                  <div>
                    毛利率
                    <span class="light-blue">{{ innerLeftInfo.onLineProfitRadio || 0 }}%</span>
                  </div>
                </div>
              </div>
              <div class="mt-border"></div>
              <div style="margin-right: 14px">
                <div class="flex-top-card">
                  <div class="top-left-font">线上库存</div>
                  <div class="flex-finish">
                    <div class="finish-font">
                      责任制
                      <span> 0.0{{ $store.state.unit }}</span>
                    </div>
                    <div class="finish-font">
                      完成率 <span>{{ innerRightInfo.onLineRadio || 0.0 }}%</span>
                    </div>
                  </div>
                </div>
                <div class="flex-top-card">
                  <div class="card-big-num">
                    {{ innerRightInfo.sumCnyamt || 0 }}<span class="unit">{{ $store.state.unit }}</span>
                  </div>
                  <div style="display: flex; align-items: center">
                    <div class="finish-font">进度</div>
                    <div>
                      <div class="progress">
                        <a-progress :percent="innerRightInfo.dateRadio || 10" :show-info="false"
                          strokeColor="#FF8B2F" />
                      </div>
                      <div class="progress">
                        <a-progress :percent="innerRightInfo.onLineRadio || 20" :show-info="false"
                          strokeColor="rgb(102, 255, 255)" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cardList" style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  ">
                  <template v-for="(item, index) in innerRight">
                    <div class="card-middle-progress" :key="index" v-if="index < 3">
                      <div style="display: flex; align-items: center">
                        <div class="finish-font">
                          {{ item.businessEntityName }}
                        </div>
                        <div class="light-blue">15{{ $store.state.unit }}</div>
                      </div>
                    </div>
                  </template>
                </div>
                <div class="cardList" style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  ">
                  <template v-for="(item, index) in innerRight">
                    <div class="card-middle-progress" :key="index" v-if="index >= 3">
                      <div style="display: flex; align-items: center">
                        <div class="finish-font">
                          {{ item.businessEntityName }}
                        </div>
                        <div class="light-blue">15{{ $store.state.unit }}</div>
                      </div>
                    </div>
                  </template>
                </div>
                <div class="flex-bottoms">
                  <div>
                    结构
                    <span v-for="(item, index) in innerSabLeft" :key="index">
                      <span>{{ item.position }}</span> -
                      <span>{{ item.positionRatio }}%;</span>
                    </span>
                  </div>
                </div>
                <div class="flex-bottoms" style="padding-bottom: 10px; padding-top: 4px">
                  <div>
                    毛利率
                    <span class="light-blue">{{ innerRightInfo.onLineProfitRadio || 0 }}%</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="line"></div>
          </div>
        </div>
        <div class="card-box" @click="gotoSummary">
          <div class="card-font">线下</div>
          <a-spin class="cardLoad" size="large" v-if="showLoadingRight" />
          <div class="noData" v-else-if="outterLeft && outterLeft.length < 1">暂无数据</div>
          <div class="card-border-box" v-else>
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
                    <div class="finish-font">
                      责任制 <span>{{ outterLeftInfo.saleTaskAmt }}{{ $store.state.unit }}</span>
                    </div>
                    <div class="finish-font">
                      完成率
                      <span>{{
                          outterLeftInfo.onLineRadio
                      }}%</span>
                    </div>
                  </div>
                </div>
                <div class="flex-top-card">
                  <div class="card-big-num">{{ outterLeftInfo.sumCnyamt }}<span class="unit">{{ $store.state.unit
                  }}</span></div>
                  <div style="display: flex; align-items: center">
                    <div class="finish-font">进度</div>
                    <div>
                      <div class="progress">
                        <a-progress :percent="outterLeftInfo.dateRadio" :show-info="false" strokeColor="#FF8B2F" />
                      </div>
                      <div class="progress">
                        <a-progress :percent="outterLeftInfo.onLineRadio" :show-info="false"
                          strokeColor="rgb(102, 255, 255)" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cardList" style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  ">
                  <template v-for="(item, index) in outterLeft">
                    <div class="card-middle-progress" :key="index" v-if="index < 3">
                      <div style="display: flex; align-items: center">
                        <div class="finish-font">
                          {{ item.businessEntityName }}
                        </div>
                        <div>
                          <div class="progress-middle">
                            <a-progress :percent="item.dateRadio" :show-info="false" strokeColor="#FF8B2F" />
                          </div>
                          <div class="progress-middle">
                            <a-progress :percent="item.cnyAmtRadio * 100" :show-info="false"
                              strokeColor="rgb(102, 255, 255)" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
                </div>
                <div class="cardList" style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  ">
                  <template v-for="(item, index) in outterLeft">
                    <div class="card-middle-progress" :key="index" v-if="index > 2">
                      <div style="display: flex; align-items: center">
                        <div class="finish-font">
                          {{ item.businessEntityName }}
                        </div>
                        <div>
                          <div class="progress-middle">
                            <a-progress :percent="item.dateRadio" :show-info="false" strokeColor="#FF8B2F" />
                          </div>
                          <div class="progress-middle">
                            <a-progress :percent="item.cnyAmtRadio * 100" :show-info="false"
                              strokeColor="rgb(102, 255, 255)" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
                </div>
                <div class="flex-bottoms">
                  <div>
                    结构
                    <span v-for="(item, index) in outterSabLeft" :key="index">
                      <span>{{ item.position }}</span> -
                      <span>{{ item.positionRatio }}%;</span>
                    </span>
                  </div>
                </div>
                <div class="flex-bottoms" style="padding-bottom: 10px; padding-top: 4px">
                  <div>
                    毛利率
                    <span class="light-blue">{{ outterLeftInfo.onLineProfitRadio }}%</span>
                  </div>
                </div>
              </div>
              <div class="mt-border"></div>
              <div style="margin-right: 14px">
                <div class="flex-top-card">
                  <div class="top-left-font">线下库存</div>
                  <div class="flex-finish">
                    <div class="finish-font">
                      责任制
                      <span>0.0 {{ $store.state.unit }}</span>
                    </div>
                    <div class="finish-font">
                      完成率
                      <span>{{
                          outterRightInfo.onLineRadio
                      }}%</span>
                    </div>
                  </div>
                </div>
                <div class="flex-top-card">
                  <div class="card-big-num">
                    {{ outterRightInfo.sumCnyamt || 0 }}<span class="unit">{{ $store.state.unit }}</span>
                  </div>
                  <div style="display: flex; align-items: center">
                    <div class="finish-font">进度</div>
                    <div>
                      <div class="progress">
                        <a-progress :percent="outterRightInfo.dateRadio || 10" :show-info="false"
                          strokeColor="#FF8B2F" />
                      </div>
                      <div class="progress">
                        <a-progress :percent="outterRightInfo.onLineRadio || 20" :show-info="false"
                          strokeColor="rgb(102, 255, 255)" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cardList" style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  ">
                  <template v-for="(item, index) in outterRight">
                    <div class="card-middle-progress" :key="index" v-if="index < 3">
                      <div style="display: flex; align-items: center">
                        <div class="finish-font">
                          {{ item.businessEntityName }}
                        </div>
                        <div class="light-blue">15{{ $store.state.unit }}</div>
                      </div>
                    </div>
                  </template>
                </div>
                <div class="cardList" style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  ">
                  <template v-for="(item, index) in outterRight">
                    <div class="card-middle-progress" :key="index" v-if="index >= 3">
                      <div style="display: flex; align-items: center">
                        <div class="finish-font">
                          {{ item.businessEntityName }}
                        </div>
                        <div class="light-blue">15{{ $store.state.unit }}</div>
                      </div>
                    </div>
                  </template>
                </div>
                <div class="flex-bottoms">
                  <div>
                    结构
                    <span v-for="(item, index) in outterSabLeft" :key="index">
                      <span>{{ item.position }}</span> -
                      <span>{{ item.positionRatio }}%;</span>
                    </span>
                  </div>
                </div>
                <div class="flex-bottoms" style="padding-bottom: 10px; padding-top: 4px">
                  <div>
                    毛利率
                    <span class="light-blue">{{ outterRightInfo.onLineProfitRadio || 0 }}%</span>
                  </div>
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
              <div class="item" v-for="(item, index) in echartsLabel" :key="index">
                <div class="lump" :class="item.class"></div>
                <div class="text">{{ item.text }}</div>
              </div>
            </template>
          </div>
          <div id="main" class="echartsBox" v-show="!showLoading"></div>
          <div class="echartsBox" v-show="showLoading"></div>
        </div>
        <div>
          <div class="middle-font">线上日达成趋势图</div>
          <div class="legend">
            <template v-if="echartsLabel">
              <div class="item" v-for="(item, index) in echartsLabel" :key="index">
                <div class="lump" :class="item.class"></div>
                <div class="text">{{ item.text }}</div>
              </div>
            </template>
          </div>
          <div id="main2" class="echartsBox" v-show="!showLoading"></div>
          <div class="echartsBox" v-show="showLoading"></div>
        </div>
        <div>
          <div class="middle-font">线下日达成趋势图</div>
          <div class="legend">
            <template v-if="echartsLabel">
              <div class="item" v-for="(item, index) in echartsLabel" :key="index">
                <div class="lump" :class="item.class"></div>
                <div class="text">{{ item.text }}</div>
              </div>
            </template>
          </div>
          <div id="main3" class="echartsBox" v-show="!showLoading"></div>
          <div class="echartsBox" v-show="showLoading"></div>
        </div>
      </div>
      <div class="flex-fang">
        <div class="fang-color"></div>
        <div class="fang-color"></div>
      </div>
      <div class="select-box">
        <selectTime @changeDate="changeDate" />
      </div>
    </div>

    <!-- 底部表格 -->
    <innerTableCardBox :leftData="tableInner" :rightData="tableOutter" :leftObj="leftObj" :rightObj="rightObj"
      title1="线上" title2="线下" />
  </div>
</template>
<script>
import API from "../../../service/api";
import ProgressPanel from "@/views/center/panel/ProgressPanel.vue";
import SpeedPanel from "@/views/center/panel/SpeedPanel.vue";
import SadPanel from "@/views/center/panel/SadPanel.vue";
import innerTableCardBox from '@/views/center/components/table/innerTableCardBox.vue';
import selectTime from '@/components/selectTime.vue';

export default {
  name: "s",
  components: {
    ProgressPanel,
    SpeedPanel,
    SadPanel,
    innerTableCardBox,
    selectTime
  },
  data() {
    return {
      showLoading: false,
      allInnerDirectDate: [],
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
        bottom: "线上",
        top: "线下",
        sabArr: { S: 0, A: 0, B: 0 },
        topArr: { S: 0, A: 0, B: 0 },
        bottomArr: { S: 0, A: 0, B: 0 },
        // sabArr: [{'高端机':32},{'明星机':18},{'入口机':21},{'常规机':9},{'结构及':5}],
        // topArr: [{'高端机':32},{'明星机':18},{'入口机':21},{'常规机':9},{'结构及':5}],
        // bottomArr: [{'高端机':32},{'明星机':18},{'入口机':21},{'常规机':9},{'结构及':5}]
      },
      echartsLabel: [
        { class: "plan", text: "实际达成" },
        { class: "average", text: "日均线" },
      ],
      innerLeft: [],
      innerLeftInfo: {},
      innerRight: [{ cnyAmtRadio: 20, businessEntityName: '环境', dateRadio: 12 },
      { cnyAmtRadio: 20, businessEntityName: '烹饪', dateRadio: 12 },
      { cnyAmtRadio: 20, businessEntityName: '电磁', dateRadio: 12 },
      { cnyAmtRadio: 20, businessEntityName: '调理', dateRadio: 12 },
      { cnyAmtRadio: 20, businessEntityName: '电动', dateRadio: 12 },
      { cnyAmtRadio: 20, businessEntityName: '饮品', dateRadio: 12 }],
      innerRightInfo: {},
      innerSabLeft: [],
      innerSabRight: [],
      outterLeft: [],
      outterLeftInfo: {},
      outterRight: [{ cnyAmtRadio: 20, businessEntityName: '环境', dateRadio: 12 },
      { cnyAmtRadio: 20, businessEntityName: '烹饪', dateRadio: 12 },
      { cnyAmtRadio: 20, businessEntityName: '电磁', dateRadio: 12 },
      { cnyAmtRadio: 20, businessEntityName: '调理', dateRadio: 12 },
      { cnyAmtRadio: 20, businessEntityName: '电动', dateRadio: 12 },
      { cnyAmtRadio: 20, businessEntityName: '饮品', dateRadio: 12 },],
      outterRightInfo: {},
      outterSabLeft: [],
      outterSabRight: [],
      // 底部表格
      tableInner: [],
      tableOutter: [],
      rowSpanNumber1: 6,
      rowSpanNumber2: 6,
      titleHead: {
        tAvgAmt: '责任制',
        cnyAmt: '累计达成',
        amtRadio: '任务完成率',
        profitRadio: '毛利率',
        days: ' 周转天数',
        amtFinish: '说到做到',
        ranking: '排名',
      },
      showLoadingLeft: true,
      showLoadingRight: true,
      leftObj: {
        name: 'cooprLevel2',  /*标题*/
        level: 'cooprLevel2Manager',/*责任人*/
        tAvgAmt: 'tAvgAmt',/*责任制*/
      },
      rightObj: {
        name: 'cooprLevel2',
        level: 'cooprLevel2Manager',
        tAvgAmt: 'tAvgAmt'
      },
    };
  },
  computed: {
    ontime() {
      return this.$store.state.year + '-' + this.$store.state.month;
    },
    showMoney() {
      return this.$store.state.showMoney;
    },
    model() { /* 获取本部，OEM */
      return this.$store.state.model
    }

  },
  watch: {
    ontime: { /*监听月度 数据更改 调用接口 */
      handler: function (newValue, oldValue) {
        this.init(newValue);
      }
    },
    model: { /*监听产司 数据更改 调用接口 */
      handler: function (newValue, oldValue) {
        this.init(this.ontime);
      }

    },
    showMoney: { /*监听金额:数量版 数据更改 调用接口 */
      handler: function (newValue, oldValue) {
        this.init(this.ontime);
      }
    },

  },
  methods: {
    //三个仪表盘(左中)
    async getdashboard(params) {
      try {
        const res = await API.getData('innerDirectTopTotal', params);
        //内销汇总仪表盘左边&&中间
        let panelDataList = res.rows;
        if (res.rows.length < 1) {
          this.speedData = {
            bar: 0,
            speedBar: 0,
            ballTitle: "事业部达成",
            ballNum: 0,
            ballLeftTitle: "内销",
            ballRightTitle: "外销",
            ballLeftNum: 0,
            ballRightNum: 0,
            bottomNum: 0,
            bottomTitle1: "内销",
            bottomClose: 0,
            bottomTime: 0,
            bottomTitle2: "外销",
            bottomClose1: 0,
            bottomTime1: 0,
          };
          this.progressData = {
            bar1: 0,
            bar2: 0,
            ballTitle: "事业部",
            bigBallTitle: "毛利率",
            textLeft: "内销",
            textRight: "外销",
            titleTop: "内销",
            titleBottom: "外销",
            topGPM: 0,
            bottomGPM: 0,
            ballNum: 0,
          };
          return;
        }
        this.progressData.ballNum = (
          panelDataList[0].directProfitRadio * 100
        ).toFixed(2);
        this.speedData.bar = (panelDataList[0].dateRadio * 100).toFixed(2);
        this.speedData.speedBar = (
          panelDataList[0].directAmtRadio * 100
        ).toFixed(2);
        this.speedData.ballNum = panelDataList[0].directCnyAmt.toFixed(2);
        this.speedData.bottomNum = panelDataList[0].saleTaskAmt.toFixed(2);

        for (var i = 0; i < panelDataList.length; i++) {
          if (panelDataList[i].cooprLevel1 == "线上") {
            this.progressData.topGPM = (
              panelDataList[i].onLineProfitRadio * 100
            ).toFixed(2);
            this.progressData.bar1 = (
              panelDataList[i].onLineProfitRadio * 100
            ).toFixed(2);
            this.speedData.ballLeftNum = !!panelDataList[i].cnyAmt?panelDataList[i].cnyAmt.toFixed(2):0;
            this.speedData.bottomClose =
              !!panelDataList[i].cnyAmtRadio?(panelDataList[i].cnyAmtRadio*100).toFixed(2):0;
            this.speedData.bottomTime = (panelDataList[i].dateRadio*100).toFixed(2);
          } else if (panelDataList[i].cooprLevel1 == "线下") {
            // this.progressData.bar1 = 10;
            this.progressData.bottomGPM = (
              panelDataList[i].onLineProfitRadio * 100
            ).toFixed(1);
            this.progressData.bar2 = (
              panelDataList[i].onLineProfitRadio * 100
            ).toFixed(1);
            this.speedData.ballRightNum = !!panelDataList[i].cnyAmt?panelDataList[i].cnyAmt.toFixed(2):0;
            this.speedData.bottomClose1 =
            !!panelDataList[i].cnyAmtRadio?(panelDataList[i].cnyAmtRadio*100).toFixed(2):0;
            this.speedData.bottomTime1 = (panelDataList[i].dateRadio*100).toFixed(2);
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
    //三个仪表盘(右)
    async queryCardSAB(params) {
      try {
        const res = await API.getData('innerDirectTopSAB', params);
        let RightSAB = res.rows;
        if (RightSAB.length < 1) {
          this.sabData = {
            bar1: 0,
            bar2: 0,
            bar3: 0,
            bar4: 0,
            bar5: 0,
            ballTitle: "事业部",
            bottom: "外销",
            top: "内销",
            sabArr: { s: 0, a: 0, b: 0 },
            topArr: { s: 0, a: 0, b: 0 },
            bottomArr: { s: 0, a: 0, b: 0 },
          };
          return;
        }
        for (var i = 0; i < RightSAB.length; i++) {
          if (RightSAB[i].cooprLevel1 == "线上") {
            this.sabData.bar1 = (RightSAB[i].level1PositionRatio * 100).toFixed(
              1
            );
            if (RightSAB[i].position == "S") {
              this.sabData.topArr.S = (
                RightSAB[i].level1PositionRatio * 100
              ).toFixed(2);
            } else if (RightSAB[i].position == "A") {
              this.sabData.topArr.A = (
                RightSAB[i].level1PositionRatio * 100
              ).toFixed(2);
            } else if (RightSAB[i].position == "B") {
              this.sabData.topArr.B = (
                RightSAB[i].level1PositionRatio * 100
              ).toFixed(2);
            }

            if (RightSAB[i].position == "S") {
              this.sabData.sabArr.s = (
                RightSAB[i].directPositionRatio * 100
              ).toFixed(2);
            } else if (RightSAB[i].position == "A") {
              this.sabData.sabArr.a = (
                RightSAB[i].directPositionRatio * 100
              ).toFixed(2);
            } else if (RightSAB[i].position == "B") {
              this.sabData.sabArr.b = (
                RightSAB[i].directPositionRatio * 100
              ).toFixed(2);
            }

          } else if (RightSAB[i].cooprLevel1 == "线下") {
            this.sabData.bar2 = (RightSAB[i].level1PositionRatio * 100).toFixed(
              1
            );
            if (RightSAB[i].position == "S") {
              this.sabData.bottomArr.S = (
                RightSAB[i].level1PositionRatio * 100
              ).toFixed(2);
            } else if (RightSAB[i].position == "A") {
              this.sabData.bottomArr.A = (
                RightSAB[i].level1PositionRatio * 100
              ).toFixed(2);
            } else if (RightSAB[i].position == "B") {
              this.sabData.bottomArr.B = (
                RightSAB[i].level1PositionRatio * 100
              ).toFixed(2);
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
      try {
        const res = await API.getData(
          'innerDirectChart',
          params
        );

        if (res.rows.length < 1) {
          this.allList = [0];
          this.allLiine = '';
          this.innerDirectDate = [];
          this.allInnerDirectDate = [];
          this.innerDirectList = [0];
          this.innerDirectLine = '';
          this.outerDirectDate = [];
          this.outerDirectList = [0];
          this.outerDirectLine = '';
          this.showLoading = false;
          this.myEcharts();
          this.myEcharts2();
          this.myEcharts3();
          return;
        } else {
          // 先清空数据再赋值
          this.allList = [];
          this.allLiine = '';
          this.innerDirectDate = [];
          this.allInnerDirectDate = [];
          this.innerDirectList = [];
          this.innerDirectLine = '';
          this.outerDirectDate = [];
          this.outerDirectList = [];
          this.outerDirectLine = '';
        }
        // debugger;
        res.rows.forEach((item) => {
          if (item.cooprLevel1 == "线上") {
            // console.log(item.orderDate.substr(5));

            this.innerDirectDate.push(item.orderDate.substr(5));
            this.innerDirectList.push(item.CnyAmt);
            this.innerDirectLine = item.saleAvgAmt || 0;

          } else if (item.cooprLevel1 == "线下") {
            this.outerDirectDate.push(item.orderDate.substr(5));
            this.outerDirectList.push(item.CnyAmt);
            this.outerDirectLine = item.saleAvgAmt || 0;

          }

          this.allList.push(item.totalCnyAmt);
          this.allInnerDirectDate.push(item.orderDate.substr(5));
          this.allLiine = item.totalsaleAvgAmt || 0;

        });

        this.myEcharts2();
        this.myEcharts3();
        this.myEcharts();
        this.showLoading = false;
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
          data: this.allInnerDirectDate,
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
                  yAxis: this.innerDirectLine,
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
    gotoSummary() {
      this.$router.push("/center/offlineSummary");
    },
    // 右边卡片/
    async getCard(params) {
      // try {
      this.showLoadingLeft = true;
      this.showLoadingRight = true;
      const inner = await API.getData('innerDirectInOutKard', params);
      const innersab = await API.getData('innerDirectRightSAB', params);
      // console.log("inner,", inner);
      this.showLoadingLeft = false;
      this.showLoadingRight = false;
      if (inner.rows.length == 0) {
        this.innerLeft = [];
        this.outterLeft = [];
        return;
      }

      inner.rows.forEach((v) => {
        v.dateRadio = v.dateRadio * 100;
        v.onLineRadio = (v.onLineRadio * 100).toFixed(0);
        v.onLineProfitRadio = (v.onLineProfitRadio * 100).toFixed(2);
        v.sumCnyamt = v.sumCnyamt.toFixed(1);
        v.saleTaskAmt = v.saleTaskAmt.toFixed(1);
      });

      this.outterLeft = inner.rows.filter((v) => {
        return v.cooprLevel1 == "线下";
      });
      this.outterLeft.splice(6);
      this.outterLeftInfo = this.outterLeft[0];

      this.innerLeft = inner.rows.filter((v) => {
        return v.cooprLevel1 == "线上";
      });
      this.innerLeft.splice(6);
      this.innerLeftInfo = this.innerLeft[0];


      this.innerSabLeft = innersab.rows.filter(v => {
        return v.cooprLevel1 == '线上' && v.position != '其他';
      })
      this.innerSabLeft.forEach(v => {
        v.positionRatio = (v.level1PositionRatio * 100).toFixed(2)
      })
      // console.log('this.innerSabLeft', this.innerSabLeft)
      this.outterSabLeft = innersab.rows.filter(v => {
        return v.cooprLevel1 == '线下' && v.position != '其他';
      })
      this.outterSabLeft.forEach(v => {
        v.positionRatio = (v.level1PositionRatio * 100).toFixed(2)
      })

      // }catch(err){
      //   console.log(err)
      // }
    },
    async getTable(params) {
      // let time= params && params.splice('-','');
      try {
        let tableInner = await API.getData("innerDirectOnOutline", params);
        let tableOutter = await API.getData("innerDirectline", params);
        this.tableInner = tableInner.rows;
        this.tableOutter = tableOutter.rows;
        this.tableInner = tableInner.rows.filter(v => {
          return v.cooprLevel2Manager != '合计' && !!v.cooprLevel2
        })
        let innerbottom = tableInner.rows.filter(v => {
          if (v.cooprLevel2Manager == '合计') {
            v.cooprLevel2 = '合计'
          }
          return v.cooprLevel2Manager == '合计'
        })
        this.tableInner = this.tableInner.concat(innerbottom);



        this.tableOutter = tableOutter.rows.filter(v => {
          return v.cooprLevel2Manager != '合计' && !!v.cooprLevel2
        })

        let outterbottom = tableOutter.rows.filter(v => {
          if (v.cooprLevel2Manager == '合计') {
            v.cooprLevel2 = '合计'
            v.ranking = ''
          }
          return v.cooprLevel2Manager == '合计'
        })
        this.tableOutter = this.tableOutter.concat(outterbottom);
        // console.log('outterbottom', outterbottom)
      } catch (err) {
        console.log(err);
      }
    },
    init(ontime) { /*初始化数据方法*/
      // let tableParams = `${this.ontime},${this.ontime},${model},`;

      let params = {  /*年月*/
        month_date: ontime
      };
      let listParams = { /*年月日*/
        start_date: `${ontime}-01`,
        end_date: `${ontime}-${this.$store.state.endDay}`
      }
      this.getList(listParams);
      this.getdashboard(params);
      this.queryCardSAB(params);
      this.getCard(params);
      this.getTable(params);
    },
    changeDate(start, end) { /*echart切换时间*/
      let listParams = { /*年月日*/
        start_date: start,
        end_date: end
      }
      this.getList(listParams);
    },
  },
  created() {
    this.init(this.ontime);
  },
  mounted() { },
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
  margin: 0 auto;
  border: 1px solid hsla(210, 86%, 39%, 0.66);
  position: relative;
  margin-top: 25px;
  /* margin-bottom: 14px; */
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
  margin-bottom: 20px;
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

::v-deep .ant-table-thead>tr>th {
  background: rgb(4, 19, 112);
  border-bottom: 1px solid rgb(55, 56, 112);
  border-right: 1px solid rgb(55, 56, 112);
}

::v-deep .ant-table-thead>tr>th .ant-table-header-column {
  color: #fff;
  font-size: 14px;
}

::v-deep .ant-table-bordered .ant-table-tbody>tr>td {
  border: 1px solid rgb(55, 56, 112);
  color: #fff;
}

::v-deep .ant-table-tbody>tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected)>td {
  background: transparent;
}

::v-deep .ant-spin-nested-loading {
  margin: 14px;
}

::v-deep .ant-table-thead>tr:first-child>th:first-child {
  background: linear-gradient(to right,
      rgb(80, 192, 255),
      rgb(90, 255, 163),
      rgb(102, 255, 255));
}

.top-flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 98%;
  margin: 0 auto;
}

.dashboard-box {
  /* width: 50%; */
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
  /* width:90%; */
}

.top-left-font {
  font-size: 14px;
  color: #fff;
  margin-right: 8px;
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

/* .progress {
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
} */

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

::v-deep .ant-table-bordered .ant-table-body>table {
  border: none;
}

.select-box {
  position: absolute;
  right: 20px;
  top: 30px;
  z-index: 11;
  width: 186px;
}

/* 仪表盘样式 */
.main {
  height: 230px;
}

::v-deep .ant-table-thead>tr:first-child>th:first-child {
  background: linear-gradient(to right,
      rgb(80, 192, 255),
      rgb(90, 255, 163),
      rgb(102, 255, 255));
}

.content {
  width: 192px;
  height: 192px;
  top: 7%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
}

.big-round {
  width: 105px;
  height: 105px;
  border-radius: 50%;
  box-shadow: inset 0px 0px 20px 0px rgba(102, 255, 255, 0.52);
  display: flex;
  align-items: center;
  justify-content: center;
}

.round {
  width: 85px;
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 50%;
  background: #0c098b;
  box-shadow: inset 0px 0px 20px 0px rgba(102, 255, 255, 0.52);
  border: 1px solid rgba(50, 197, 255, 0.22);
}

.round-title {
  font-size: 12px;
  color: #32c5ff;
  letter-spacing: -0.01px;
  text-align: center;
  font-weight: 500;
}

.sort {
  font-size: 24px;
  color: #ffffff;
  letter-spacing: -0.01px;
  text-align: center;
  font-weight: 600;
}

.title {
  position: absolute;
  bottom: 20px;
  opacity: 0.8;
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
  line-height: 17px;
  font-weight: 400;
}

.bottom {
  text-align: center;
  margin-top: 18px;
}

.bottom-color {
  width: 8px;
  height: 8px;
  margin-left: 5px;
  display: inline-block;
}

.bottom-title {
  opacity: 0.8;
  padding-left: 5px;
  font-size: 12px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
  line-height: 17px;
  font-weight: 400;
}

.bottom-text {
  margin-top: 3px;
  opacity: 0.7;
  font-size: 10px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
  line-height: 10px;
  font-weight: 400;
}

.bottom-text span {
  margin-left: 5px;
}

.card-big-num {
  color: #66ffff;
  font-size: 28px;
}

.progress {
  width: 110px;
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

::v-deep .ant-table-bordered .ant-table-body>table {
  border: none;
}

/* 计划 */
.plan {
  border-bottom: 2px solid #66ffff;
}

/* 实际 */
.actual {
  border-bottom: 2px solid #6c02cf;
}

/* 日均线 */
.average {
  border-bottom: 2px dashed #ff8b2f;
}

.text {
  color: #fff;
  font-size: 12px;
}

.select-box {
  position: absolute;
  right: 20px;
  top: 30px;
  z-index: 11;
  width: 186px;
}

/* 仪表盘样式 */
.main {
  height: 230px;
}

.backgroundPic {
  height: 200px;
  width: 192px;
  background-image: url("../../../assets/img/backgroundPanel.svg");
  background-repeat: no-repeat;
  background-position: 50% 62%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  width: 192px;
  height: 192px;
  top: 7%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
}

.big-round {
  width: 105px;
  height: 105px;
  border-radius: 50%;
  box-shadow: inset 0px 0px 20px 0px rgba(102, 255, 255, 0.52);
  display: flex;
  align-items: center;
  justify-content: center;
}

.round {
  width: 85px;
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 50%;
  background: #0c098b;
  box-shadow: inset 0px 0px 20px 0px rgba(102, 255, 255, 0.52);
  border: 1px solid rgba(50, 197, 255, 0.22);
}

.round-title {
  font-size: 12px;
  color: #32c5ff;
  letter-spacing: -0.01px;
  text-align: center;
  font-weight: 500;
}

.panelList {
  height: 258px;
  width: 760px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.flex-loading {
  position: relative;
  left: 50%;
  right: 50%;
}

/* .cardList{
  flex-wrap: wrap;
} */

/* .card-middle-progress{
  width:33.33%;
} */
::v-deep .ant-table-fixed {
  background: rgb(7 6 64);
}

.card-middle-progress {
  height: 28px;
}
</style> 
