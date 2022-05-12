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
          <div class="card-font" @click="gotoDomestic">内销</div>
        
          <a-spin class="cardLoad" size="large" v-if="showLoadingLeft" />
          <div class="noData" v-else-if="innerLeft && innerLeft.length<1">暂无数据</div>
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
                      责任制 <span>{{ innerLeftInfo.saleTaskAmt }} {{modelLabel}}</span>
                    </div>
                    <div class="finish-font">
                      完成率
                      <span
                        >{{
                          innerLeftInfo.onLineRadio > 100
                            ? 100
                            : innerLeftInfo.onLineRadio
                        }}%</span
                      >
                    </div>
                  </div>
                </div>
                <div class="flex-top-card">
                  <div class="card-big-num">{{ innerLeftInfo.sumCnyamt }}{{modelLabel}}</div>
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
                <div
                  class="cardList"
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  "
                >
                  <!-- <template v-for="(item,index) in innerLeft" :key="index">
                  {{item}} -->
                  <template v-for="(item, index) in innerLeft" >
                  <div
                    class="card-middle-progress"
                    v-if="index < 3"
                    :key="index" 
                  >
                      <div style="display: flex; align-items: center">
                        <div class="finish-font">
                          {{ item.businessEntityName }}
                        </div>
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
                              :percent="item.cnyAmtRadio * 100"
                              :show-info="false"
                              strokeColor="rgb(102, 255, 255)"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
                </div>

                <div
                  class="cardList"
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  "
                >
                <template v-for="(item, index) in innerLeft">
                      <div
                        class="card-middle-progress"
                        v-if="index > 2"
                        :key="index"
                        >
                      <div style="display: flex; align-items: center">
                        <div class="finish-font">
                          {{ item.businessEntityName }}
                        </div>
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
                              :percent="item.cnyAmtRadio * 100"
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
                  <div>
                    结构
                    <span v-for="(item, index) in innerSabLeft" :key="index">
                      <span>{{ item.position }}</span> -
                      <span>{{ item.positionRatio}}%;</span>
                    </span>
                  </div>
                </div>
                <div
                  class="flex-bottoms"
                  style="padding-bottom: 10px; padding-top: 4px"
                >
                  <div>
                    毛利率
                    <span class="light-blue"
                      >{{ innerLeftInfo.onLineProfitRadio }}%</span
                    >
                  </div>
                </div>
              </div>
              <div class="mt-border"></div>
              <div style="margin-right: 14px">
                <div class="flex-top-card">
                  <div class="top-left-font">线下达成</div>
                  <div class="flex-finish">
                    <div class="finish-font">
                      责任制 <span>{{ innerRightInfo.saleTaskAmt }}{{modelLabel}}</span>
                    </div>
                    <div class="finish-font">
                      完成率 <span>{{ innerRightInfo.onLineRadio }}%</span>
                    </div>
                  </div>
                </div>
                <div class="flex-top-card">
                  <div class="card-big-num">{{ innerRightInfo.sumCnyamt }}{{modelLabel}}</div>
                  <div style="display: flex; align-items: center">
                    <div class="finish-font">进度</div>
                    <div>
                      <div class="progress">
                        <a-progress
                          :percent="innerRightInfo.dateRadio"
                          :show-info="false"
                          strokeColor="#FF8B2F"
                        />
                      </div>
                      <div class="progress">
                        <a-progress
                          :percent="innerRightInfo.onLineRadio"
                          :show-info="false"
                          strokeColor="rgb(102, 255, 255)"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="cardList"
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  "
                >
                <template v-for="(item, index) in innerRight">
                  <div
                    class="card-middle-progress"
                    v-if="index < 3"
                    :key="index"
                  >
                      <div style="display: flex; align-items: center">
                        <div class="finish-font">
                          {{ item.businessEntityName }}
                        </div>
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
                              :percent="item.cnyAmtRadio * 100"
                              :show-info="false"
                              strokeColor="rgb(102, 255, 255)"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
                </div>
                <div
                  class="cardList"
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  "
                >
                <template v-for="(item, index) in innerRight">
                      <div
                        class="card-middle-progress"
                        v-if="index >= 3"
                        :key="index"
                      >
                      <div style="display: flex; align-items: center">
                        <div class="finish-font">
                          {{ item.businessEntityName }}
                        </div>
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
                              :percent="item.cnyAmtRadio * 100"
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
                  <div>
                    结构
                    <span v-for="(item, index) in innerSabRight" :key="index">
                      <span>{{ item.position }}</span> -
                      <span>{{ item.positionRatio * 100 }}%;</span>
                    </span>
                  </div>
                </div>
                <div
                  class="flex-bottoms"
                  style="padding-bottom: 10px; padding-top: 4px"
                >
                  <div>
                    毛利率
                    <span class="light-blue"
                      >{{ innerRightInfo.onLineProfitRadio }}%</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="line"></div>
          </div>
        </div>
        <div class="card-box">
          <div class="card-font" @click="gotoExport">外销</div>
          <a-spin class="cardLoad" size="large" v-if="showLoadingRight" />
          <div class="noData" v-else-if="outterLeft && outterLeft.length<1">暂无数据</div>
          <div class="card-border-box" v-else>
            <div class="line"></div>
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
            <div class="line4"></div>
            <div class="left-right-box">
              <div style="margin-left: 14px">
                <div class="flex-top-card">
                  <div class="top-left-font">OBM达成</div>
                  <div class="flex-finish">
                    <div class="finish-font">
                      责任制 <span>{{ outterLeftInfo.saleTaskAmt }}{{modelLabel}}</span>
                    </div>
                    <div class="finish-font">
                      完成率
                      <span
                        >{{
                          outterLeftInfo.onLineRadio > 100
                            ? 100
                            : outterLeftInfo.onLineRadio
                        }}%</span
                      >
                    </div>
                  </div>
                </div>
                <div class="flex-top-card">
                  <div class="card-big-num">{{ outterLeftInfo.sumCnyamt }}{{modelLabel}}</div>
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
                <div
                  class="cardList"
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  "
                >
                <template  v-for="(item, index) in outterLeft" >
                  <div
                    class="card-middle-progress"
                    v-if="index < 3"
                    :key="index"
                  >
                      <div style="display: flex; align-items: center">
                        <div class="finish-font">
                          {{ item.businessEntityName }}
                        </div>
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
                              :percent="item.cnyAmtRadio * 100"
                              :show-info="false"
                              strokeColor="rgb(102, 255, 255)"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
                </div>
                <div
                  class="cardList"
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  "
                >
                <template v-for="(item, index) in outterLeft">
                      <div
                        class="card-middle-progress"
                        v-if="index > 2"
                        :key="index"
                      >
                      <div style="display: flex; align-items: center">
                        <div class="finish-font">
                          {{ item.businessEntityName }}
                        </div>
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
                              :percent="item.cnyAmtRadio * 100"
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
                  <div>
                    结构
                    <span v-for="(item, index) in outterSabLeft" :key="index">
                      <span>{{ item.position }}</span> -
                      <span>{{ item.positionRatio * 100 }}%;</span>
                    </span>
                  </div>
                </div>
                <div
                  class="flex-bottoms"
                  style="padding-bottom: 10px; padding-top: 4px"
                >
                  <div>
                    毛利率
                    <span class="light-blue"
                      >{{ outterLeftInfo.onLineProfitRadio }}%</span
                    >
                  </div>
                </div>
              </div>
              <div class="mt-border"></div>
              <div style="margin-right: 14px">
                <div class="flex-top-card">
                  <div class="top-left-font">OEM达成</div>
                  <div class="flex-finish">
                    <div class="finish-font">
                      责任制 <span>{{ outterRightInfo.saleTaskAmt }}{{modelLabel}}</span>
                    </div>
                    <div class="finish-font">
                      完成率
                      <span
                        >{{
                          outterRightInfo.onLineRadio > 100
                            ? 100
                            : outterRightInfo.onLineRadio
                        }}%</span
                      >
                    </div>
                  </div>
                </div>
                <div class="flex-top-card">
                  <div class="card-big-num">{{ outterRightInfo.sumCnyamt }}{{modelLabel}}</div>
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
                <div
                  class="cardList"
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  "
                >
                <template v-for="(item, index) in outterRight">
                  <div
                    class="card-middle-progress"
                    v-if="index < 3"
                    :key="index"
                  >
                      <div style="display: flex; align-items: center">
                        <div class="finish-font">
                          {{ item.businessEntityName }}
                        </div>
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
                              :percent="item.cnyAmtRadio * 100"
                              :show-info="false"
                              strokeColor="rgb(102, 255, 255)"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
                </div>
                <div
                  class="cardList"
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  "
                >
                <template v-for="(item, index) in outterRight">
                      <div
                        class="card-middle-progress"
                        v-if="index >= 3"
                        :key="index"
                      >
                      <div style="display: flex; align-items: center">
                        <div class="finish-font">
                          {{ item.businessEntityName }}
                        </div>
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
                              :percent="item.cnyAmtRadio * 100"
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
                  <div>
                    结构
                    <span v-for="(item, index) in outterSabLeft" :key="index">
                      <span>{{ item.position }}</span> -
                      <span>{{ item.positionRatio * 100 }}%;</span>
                    </span>
                  </div>
                </div>
                <div
                  class="flex-bottoms"
                  style="padding-bottom: 10px; padding-top: 4px"
                >
                  <div>
                    毛利率
                    <span class="light-blue"
                      >{{ outterRightInfo.onLineProfitRadio }}%</span
                    >
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
          <div class="middle-font">事业部日达成趋势图</div>
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
          <div id="main" class="echartsBox" v-show="!showLoading"></div>
          <div class="echartsBox" v-show="showLoading"></div>
        </div>
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
          <div id="main2" class="echartsBox" v-show="!showLoading"></div>
          <div class="echartsBox" v-show="showLoading"></div>

        </div>
        <div>
          <div class="middle-font">外销日达成趋势图</div>
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
          <div id="main3" class="echartsBox" v-show="!showLoading"></div>
          <div class="echartsBox" v-show="showLoading"></div>
        </div>
      </div>
      <div class="flex-fang">
        <div class="fang-color"></div>
        <div class="fang-color"></div>
      </div>
    </div>

    <!-- 底部表格 -->

    <TableCardBox
      :leftData="tableInner"
      :rightData="tableOutter"
      :rowSpanNumber2="rowSpanNumber2"
      :rowSpanNumber1="rowSpanNumber1"
      :titleHead="titleHead"
    />
  </div>
</template>
<script>
import ProgressPanel from "@/views/center/panel/ProgressPanel.vue";
import SpeedPanel from "@/views/center/panel/SpeedPanel.vue";
import SadPanel from "@/views/center/panel/SadPanel.vue";
import API from "../../../service/api";
import TableCardBox from "@/views/center/components/table/TableCardBox.vue";
export default {
  name: "s",
  components: {
    ProgressPanel,
    SpeedPanel,
    SadPanel,
    TableCardBox,
  },
  data() {
    return {
      dataTimeMany: "2022-04-01,2022-04-31,2022-04-01,2022-04-31",
      showLoading: false,
      divisionList: [],
      divisionDate: [],
      divisionLine: "",

      innerDirectList: [],
      innerDirectDate: [],
      innerDirectLine: "",

      outerDirectList: [],
      outerDirectDate: [],
      outerDirectLine: "",

      echartsLabel: [
        { class: "plan", text: "实际达成" },
        { class: "average", text: "日均线" },
      ],
      progressData: {
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
      },
      speedData: {
        bar: 0,
        speedBar: 0,
        ballTitle: "事业部达成",
        ballNum: 0,
        ballLeftTitle: "内",
        ballRightTitle: "外",
        ballLeftNum: 0,
        ballRightNum: 0,
        bottomNum: 0,
        bottomTitle1: "内",
        bottomClose: 0,
        bottomTime: 0,
        bottomTitle2: "外",
        bottomClose1: 0,
        bottomTime1: 0,
      },
      sabData: {
        bar1: 0,
        bar2: 0,
        bar3: 0,
        bar4: 0,
        bar5: 0,
        ballTitle: "事业部",
        bottom: "外销",
        top: "内",
        sabArr: { s: 0, a: 0, b: 0 },
        topArr: { s: 0, a: 0, b: 0 },
        bottomArr: { s: 0, a: 0, b: 0 },
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
      rowSpanNumber1: [0,0],
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
      showLoadingLeft:true,
      showLoadingRight:true,
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
      return this.$store.state.showMoney==true?'亿':'亿'
    },
    model(){ /* 获取本部，OEM */
      return this.$store.state.model
    }
    
  },
  watch:{
    ontime:{ /*监听数据更改 调用接口 */
     handler: function (newValue, oldValue) {
        this.init();
      }
    },
    model:{ /*监听数据更改 调用接口 */
      handler: function(newValue,oldValue){
        this.init();
      }

    },
    showMoney:{
      handler:function(newValue,oldValue){
        this.init();
      }
    }

  },
  created() {
     this.init();
   },
  methods: {



    init(){ /*初始化数据方法*/
    let params = {  /*年月*/
      month_date:this.ontime
    };
    let listParams = { /*年月日*/
      start_date:`${this.ontime}-01`,
      end_date:`${this.ontime}-31`
    }

    this.getList(listParams);
    this.getCard(params);
    this.getTable(params);
    // this.getdashboard(params);
    // this.queryCardSAB(params);
    },
    gotoDomestic() {
      this.$router.push("/center/domestic");
    },
    gotoExport() {
      this.$router.push("/center/export");
    },
    // 右边卡片/
    async getCard(params) {
      this.showLoadingLeft = true;
      this.showLoadingRight = true;
      let innerObj = {
        code:"directITotalInnerTotal"
      };
      let outtObj = {
        code:"directTotalOutterTotal"
      };
      let innerSAB = {
        code:"directTotalInnerSAB"
      };
      let outterSAB = {
        code:"directTotalOutterSAB"
      };
      Object.assign(innerObj,params);
      Object.assign(outtObj,params);
      Object.assign(innerSAB,params);
      Object.assign(outterSAB,params);
      try {
        const inner = await API.getTotal(innerObj);
        const outter = await API.getTotal(outtObj);
        const innersab = await API.getTotal(innerSAB);
        const outtersab = await API.getTotal(outterSAB);
        console.log("inner,", outter);
          this.showLoadingLeft = false;
          this.showLoadingRight = false;
        if(inner.rows.length<1){
          this.innerLeft = [];
        } else{
          inner.rows.forEach((v) => {
          v.dateRadio = v.dateRadio * 100>100?100: v.dateRadio * 100;
          v.onLineRadio = v.onLineRadio * 100>100?100:v.onLineRadio * 100;
          v.sumCnyamt = v.sumCnyamt.toFixed(0);
          v.saleTaskAmt =  v.saleTaskAmt.toFixed(1);
        });
        
        outter.rows.forEach((v) => {
          v.dateRadio = v.dateRadio * 100;
          v.onLineRadio = v.onLineRadio * 100;
          v.sumCnyamt = v.sumCnyamt.toFixed(0);
          v.saleTaskAmt =  v.saleTaskAmt.toFixed(1);
        });

        
        this.innerLeft = inner.rows.filter((v) => {
          return v.cooprLevel1 == "线上";
        });
        this.innerLeftInfo = this.innerLeft[0];
        if (this.innerLeftInfo.onLineRadio) {
          this.innerLeftInfo.onLineRadio =
            this.innerLeftInfo.onLineRadio.toFixed(0);
        }
        if (this.innerLeftInfo.onLineProfitRadio) {
          this.innerLeftInfo.onLineProfitRadio = (
            this.innerLeftInfo.onLineProfitRadio * 100
          ).toFixed(0);
        }
        if (this.innerLeftInfo.cnyAmt) {
          this.innerLeftInfo.cnyAmt = this.innerLeftInfo.cnyAmt.toFixed(0);
        }
   

        this.innerRight = inner.rows.filter((v) => {
          return v.cooprLevel1 == "线下";
        });
        this.innerRightInfo = this.innerRight[0];
        if (this.innerRightInfo.onLineRadio) {
          this.innerRightInfo.onLineRadio =
            this.innerRightInfo.onLineRadio.toFixed(0);
        }
        if (this.innerRightInfo.onLineProfitRadio) {
          this.innerRightInfo.onLineProfitRadio = (
            this.innerRightInfo.onLineProfitRadio * 100
          ).toFixed(0);
        }

        if (this.innerRightInfo.cnyAmt) {
          this.innerRightInfo.cnyAmt = this.innerRightInfo.cnyAmt.toFixed(0);
        }

        }
        if(outter.rows.length<1){
          this.outterLeft = [];
   
        }else{

          outter.rows.forEach((v) => {
            v.dateRadio = v.dateRadio * 100;
            v.onLineRadio = v.onLineRadio * 100;
          });
  
          this.outterLeft = outter.rows.filter((v) => {
            return v.obmOem == "OBM";
          });
          this.outterLeftInfo = this.outterLeft[0];
          if (this.outterLeftInfo.onLineRadio) {
            this.outterLeftInfo.onLineRadio =
              this.outterLeftInfo.onLineRadio.toFixed(0);
          }
          if (this.outterLeftInfo.onLineProfitRadio) {
            this.outterLeftInfo.onLineProfitRadio = (
              this.outterLeftInfo.onLineProfitRadio * 100
            ).toFixed(0);
          }
          if (this.outterLeftInfo.cnyAmt) {
            this.outterLeftInfo.cnyAmt = this.outterLeftInfo.cnyAmt.toFixed(0);
          }
     
  
          this.outterRight = outter.rows.filter((v) => {
            return v.obmOem == "OEM";
          });
          this.outterRightInfo = this.outterRight[0];
          if (this.outterRightInfo.onLineRadio) {
            this.outterRightInfo.onLineRadio =
              this.outterRightInfo.onLineRadio.toFixed(0);
          }
          if (this.outterRightInfo.onLineProfitRadio) {
            this.outterRightInfo.onLineProfitRadio = (
              this.outterRightInfo.onLineProfitRadio * 100
            ).toFixed(0);
          }
          if (this.outterRightInfo.cnyAmt) {
            this.outterRightInfo.cnyAmt = this.outterRightInfo.cnyAmt.toFixed(0);
          }
     

        }   
        if(innersab.rows.length<1){

          this.innerSabLeft = [];
          this.innerSabRight = [];
        }else{

        innersab.rows.forEach(v=>{
          v.positionRatio = (v.positionRatio*100).toFixed(1);
        })


        this.innerSabLeft = innersab.rows.filter((v) => {
          return v.cooprLevel1 == "线上";
        });

        this.innerSabRight = innersab.rows.filter((v) => {
          return v.cooprLevel1 == "线下";
        });
      }

          if(outtersab.rows.length<1){

                this.outterSabLeft = [];
                this.outterSabRight = [];
              }else{
              
              outtersab.rows.forEach(v=>{
                v.positionRatio = (v.positionRatio*100).toFixed(1);
              })


              this.outterSabLeft = outtersab.rows.filter((v) => {
                return v.obmOem == "OBM";
              });

              this.outterSabRight = outtersab.rows.filter((v) => {
                return v.obmOem == "OEM";
              });
            }



      } catch (err) {
        console.log(err);
      }
    },
    // 底部table/
    async getTable(params) {
      let innerObj = {
        code:'directTotalinnerBottom'
      }
      Object.assign(innerObj,params);
      let outterObj = {
        code:'directTotalOutterBottom'
      }
      Object.assign(outterObj,params);
      try {
        let tableInner = await API.getTotal(innerObj);
        let tableOutter = await API.getTotal(outterObj);

        // this.tableInner = tableInner.rows;
        this.tableOutter = tableOutter.rows;
        this.rowSpanNumber2 = [this.tableOutter.length - 1];

        let innerTop = tableInner.rows.filter((v) => {
          return v.marketChannel == "线上";
        });

        let innerBottom = tableInner.rows.filter((v) => {
          return v.marketChannel == "线下";
        });
        this.rowSpanNumber1 = [innerTop.length,innerBottom.length];
        console.log('innerBottom.length',innerBottom.length,this.rowSpanNumber1)
        let innerTotal = tableInner.rows.filter((v) => {
          return v.marketChannel == "底部合计";
        });
        this.tableInner = innerTop.concat(innerBottom, innerTotal);
        console.log("this.tableInner", this.rowSpanNumber1, this.tableInner);

        // console.log("this.data", this.data);
      } catch (err) {
        console.log(err);
      }
    },
    //中间折线图
    async getList(params) {
    this.showLoading = true;
    this.divisionDate = [];
    this.divisionList = [];
    this.divisionLine = '';
    this.innerDirectList =  [];
    this.innerDirectDate = [];
    this.innerDirectLine = "";
    this.outerDirectDate = [];
    this.outerDirectList = [];
    this.outerDirectLine = '';
      try {

      let obj = {
        code:"directTotalInnerChart",
      }
       Object.assign(params,obj);

        const res = await API.getTotal(
          params
        );
        // let obj = { divisionArr: [], innerDirect:[],outerDirect: [] };
        if(res.rows.length<1){
          this.divisionDate = [];
            this.divisionList = [0];
            this.divisionLine = 0;
          this.innerDirectDate = [];
            this.innerDirectList = [0];
            this.innerDirectLine = 0;
          this.outerDirectDate = [];
            this.outerDirectList = [0];
            this.outerDirectLine = 0;
            this.showLoading = false;
            this.myEcharts();
            this.myEcharts2();
            this.myEcharts3();
            return;
        }
        
        let newArr = res.rows.filter((item) => {
          var timeArr = item.orderDate
            .replace(" ", ":")
            .replace(/\:/g, "-")
            .split("-");
          var yue = timeArr[1];
          var ri = timeArr[2];
          if (item.directName == "事业部") {
            // obj.divisionArr.push(item)
            this.divisionDate.push(yue + "-" + ri);
            this.divisionList.push(item.totalCnyAmt);
            this.divisionLine = item.saleAvgAmt;
            this.myEcharts();
          } else if (item.directName == "内销") {
            this.innerDirectDate.push(yue + "-" + ri);
            this.innerDirectList.push(item.totalCnyAmt);
            this.innerDirectLine = item.saleAvgAmt;
            this.myEcharts2();
          } else if (item.directName == "外销") {
            this.outerDirectDate.push(yue + "-" + ri);
            this.outerDirectList.push(item.totalCnyAmt);
            this.outerDirectLine = item.saleAvgAmt;
            this.myEcharts3();
          }
          this.showLoading = false;
        });
      } catch (error) {
        console.log(error);
      }
    },

    //三个仪表盘(左中)
    async getdashboard(params) {
      let obj = {
        code:'directTotalDashboard'
      };
      Object.assign(params,obj)

      
      try {
        const res = await API.getTotal(params);
        //内销汇总仪表盘左边&&中间
        let panelDataList = res.rows;
        if(res.rows.length<1){
          this.speedData = {
            bar: 0,
            speedBar: 0,
            ballTitle: "事业部达成",
            ballNum: 0,
            ballLeftTitle: "内",
            ballRightTitle: "外",
            ballLeftNum: 0,
            ballRightNum: 0,
            bottomNum: 0,
            bottomTitle1: "内",
            bottomClose: 0,
            bottomTime: 0,
            bottomTitle2: "外",
            bottomClose1: 0,
            bottomTime1: 0,
               };
            this.progressData = {
                bar1: 0,
                bar2: 0,
                ballTitle: "事业部",
                bigBallTitle: "毛利率",
                textLeft: "内",
                textRight: "外",
                titleTop: "内",
                titleBottom: "外",
                topGPM: 0,
                bottomGPM: 0,
                ballNum: 0,
         };
          return;
        }
        this.progressData.ballNum = (
          panelDataList[0].grossProfitRadio * 100
        ).toFixed(1);
        this.speedData.speedBar = (panelDataList[0].cnyAmt * 100).toFixed(1);
        this.speedData.bar = (panelDataList[0].dateRadio * 100).toFixed(1);
        this.speedData.ballNum = panelDataList[0].sumCnyAmt.toFixed(1);
        this.speedData.bottomNum = panelDataList[0].saleTaskAmt.toFixed(1);
        for (var i = 0; i < panelDataList.length; i++) {
          if (panelDataList[i].directName == "内销") {
            this.progressData.bar1 = (
              panelDataList[i].directNameGrossProfitRadio * 100
            ).toFixed(1);
            this.progressData.topGPM = (
              panelDataList[i].directNameGrossProfitRadio * 100
            ).toFixed(1);
            this.speedData.ballLeftNum = panelDataList[i].cnyAmt.toFixed(1);
            this.speedData.bottomClose =
              panelDataList[i].orgQtyRadio.toFixed(1);
            this.speedData.bottomTime = panelDataList[i].dateRadio.toFixed(1);
          } else if (panelDataList[i].directName == "外销") {
            this.progressData.bar2 = (
              panelDataList[i].directNameGrossProfitRadio * 100
            ).toFixed(1);
            this.progressData.bottomGPM = (
              panelDataList[i].directNameGrossProfitRadio * 100
            ).toFixed(1);
            this.speedData.ballRightNum = panelDataList[i].cnyAmt.toFixed(1);
            this.speedData.bottomClose1 =
              panelDataList[i].orgQtyRadio.toFixed(1);
            this.speedData.bottomTime1 = panelDataList[i].dateRadio.toFixed(1);
          }
        }
        console.log('this.speedData',this.speedData)
      } catch (error) {
        console.log(error);
      }
    },
    //三个仪表盘(右)
    async queryCardSAB(params) {
      let obj = {
        code:'directTotalDashboardSAB'
      };
      Object.assign(params,obj)
      try {
        const res = await API.getTotal(params);
        let RightSAB = res.rows;
        if(RightSAB.length<1 ){
            this.sabData = {
              bar1: 0,
              bar2: 0,
              bar3: 0,
              bar4: 0,
              bar5: 0,
              ballTitle: "事业部",
              bottom: "外",
              top: "内",
              sabArr: { s: 0, a: 0, b: 0 },
              topArr: { s: 0, a: 0, b: 0 },
              bottomArr: { s: 0, a: 0, b: 0 },
            };
           return;
        }

        for (var i = 0; i < RightSAB.length; i++) {
          if (RightSAB[i].directName == "事业部") {
            // this.sabData.bar1 = (RightSAB[i].positionRatio*100).toFixed(1)
            if (RightSAB[i].position == "S") {
              this.sabData.sabArr.s = (RightSAB[i].positionRatio * 100).toFixed(
                1
              );
            } else if (RightSAB[i].position == "A") {
              this.sabData.sabArr.a = (RightSAB[i].positionRatio * 100).toFixed(
                1
              );
            } else if (RightSAB[i].position == "B") {
              this.sabData.sabArr.b = (RightSAB[i].positionRatio * 100).toFixed(
                1
              );
            }
          } else if (RightSAB[i].directName == "内销") {
            this.sabData.bar1 = (RightSAB[i].positionRatio * 100).toFixed(1);
            if (RightSAB[i].position == "S") {
              this.sabData.topArr.s = (RightSAB[i].positionRatio * 100).toFixed(
                1
              );
            } else if (RightSAB[i].position == "A") {
              this.sabData.topArr.a = (RightSAB[i].positionRatio * 100).toFixed(
                1
              );
            } else if (RightSAB[i].position == "B") {
              this.sabData.topArr.b = (RightSAB[i].positionRatio * 100).toFixed(
                1
              );
            }
          } else if (RightSAB[i].directName == "外销") {
            this.sabData.bar2 = (RightSAB[i].positionRatio * 100).toFixed(1);
            if (RightSAB[i].position == "S") {
              this.sabData.bottomArr.s = (
                RightSAB[i].positionRatio * 100
              ).toFixed(1);
            } else if (RightSAB[i].position == "A") {
              this.sabData.bottomArr.a = (
                RightSAB[i].positionRatio * 100
              ).toFixed(1);
            } else if (RightSAB[i].position == "B") {
              this.sabData.bottomArr.b = (
                RightSAB[i].positionRatio * 100
              ).toFixed(1);
            }
          }
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
        // labelData: [
        //   { class: "plan", text: "实际达成" },
        //   { class: "average", text: "日均线" },
        // ],
        // legend: {
        //   data: ["实际达成", "日均线"],
        // },
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
          data: this.divisionDate,
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
            data: this.divisionList,
            markLine: {
              data: [
                {
                  yAxis: this.divisionLine,
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
    changeDate(val) {
      console.log("更新时间");
    },
  },

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
::v-deep .ant-table-thead > tr:first-child > th:first-child {
  background: linear-gradient(
    to right,
    rgb(80, 192, 255),
    rgb(90, 255, 163),
    rgb(102, 255, 255)
  );
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

</style> 
