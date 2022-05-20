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
          <div class="card-font" @click="gotoCatSeries(trendName + '自营')">
            {{ trendName }}自营
          </div>
          <div class="card-border-box">
            <div class="line"></div>
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
            <div class="line4"></div>
            <div class="left-right-box">
              <div style="margin-left: 14px">
                <div class="flex-top-card">
                  <div class="top-left-font">实时达成</div>
                  <div class="flex-finish">
                    <div class="finish-font">责任制 <span>100亿</span></div>
                    <div class="finish-font">完成率 <span>75%</span></div>
                  </div>
                </div>
                <div class="flex-top-card">
                  <div class="card-big-num">75亿</div>
                  <div class="flex-finish">
                    <!-- <div class="finish-font">进度 <span>s</span></div>
                    <div class="finish-font">完成率 <span>75%</span></div> -->
                  </div>
                  <div style="display: flex; align-items: center">
                    <div class="finish-font">进度</div>
                    <div>
                      <div class="progress">
                        <a-progress
                          :percent="50"
                          :show-info="false"
                          strokeColor="#FF8B2F"
                        />
                      </div>
                      <div class="progress">
                        <a-progress
                          :percent="50"
                          :show-info="false"
                          strokeColor="rgb(102, 255, 255)"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  "
                ></div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  "
                ></div>
              </div>
              <div class="mt-border"></div>
              <div style="margin-right: 14px">
                <div class="flex-top-card">
                  <div class="top-left-font">库存达成</div>
                  <div class="flex-finish">
                    <div class="finish-font">责任制 <span>100亿</span></div>
                    <div class="finish-font">完成率 <span>75%</span></div>
                  </div>
                </div>
                <div class="flex-top-card">
                  <div class="card-big-num">75亿</div>
                  <div style="display: flex; align-items: center">
                    <div class="finish-font">毛利率<span>75%</span></div>
                  </div>
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  "
                ></div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  "
                ></div>
              </div>
            </div>
            <div class="line"></div>
          </div>
        </div>
        <div class="card-box">
          <div class="card-font" @click="gotoCatSeries(trendName + '企业购')">
            {{ trendName }}企业购
          </div>
          <div class="card-border-box">
            <div class="line"></div>
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
            <div class="line4"></div>
            <div class="left-right-box">
              <div style="margin-left: 14px">
                <div class="flex-top-card">
                  <div class="top-left-font">实时达成</div>
                  <div class="flex-finish">
                    <div class="finish-font">责任制 <span>100亿</span></div>
                    <div class="finish-font">完成率 <span>75%</span></div>
                  </div>
                </div>
                <div class="flex-top-card">
                  <div class="card-big-num">75亿</div>
                  <div style="display: flex; align-items: center">
                    <div class="finish-font">进度</div>
                    <div>
                      <div class="progress">
                        <a-progress
                          :percent="50"
                          :show-info="false"
                          strokeColor="#FF8B2F"
                        />
                      </div>
                      <div class="progress">
                        <a-progress
                          :percent="50"
                          :show-info="false"
                          strokeColor="rgb(102, 255, 255)"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  "
                ></div>
              </div>
              <div class="mt-border"></div>
              <div style="margin-right: 14px">
                <div class="flex-top-card">
                  <div class="top-left-font">库存达成</div>
                  <div class="flex-finish">
                    <div class="finish-font">责任制 <span>100亿</span></div>
                    <div class="finish-font">完成率 <span>75%</span></div>
                  </div>
                </div>
                <div class="flex-top-card">
                  <div class="card-big-num">75亿</div>
                  <div style="display: flex; align-items: center">
                    <div class="finish-font">毛利率<span>75%</span></div>
                  </div>
                </div>
                <!-- <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  "
                >
                  <div class="card-middle-progress">
                    <div style="display: flex; align-items: center">
                      <div class="finish-font">进度</div>
                      <div>
                        <div class="progress-middle">
                          <a-progress
                            :percent="50"
                            :show-info="false"
                            strokeColor="#FF8B2F"
                          />
                        </div>
                        <div class="progress-middle">
                          <a-progress
                            :percent="50"
                            :show-info="false"
                            strokeColor="rgb(102, 255, 255)"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-middle-progress">
                    <div style="display: flex; align-items: center">
                      <div class="finish-font">进度</div>
                      <div>
                        <div class="progress-middle">
                          <a-progress
                            :percent="50"
                            :show-info="false"
                            strokeColor="#FF8B2F"
                          />
                        </div>
                        <div class="progress-middle">
                          <a-progress
                            :percent="50"
                            :show-info="false"
                            strokeColor="rgb(102, 255, 255)"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-middle-progress">
                    <div style="display: flex; align-items: center">
                      <div class="finish-font">进度</div>
                      <div>
                        <div class="progress-middle">
                          <a-progress
                            :percent="50"
                            :show-info="false"
                            strokeColor="#FF8B2F"
                          />
                        </div>
                        <div class="progress-middle">
                          <a-progress
                            :percent="50"
                            :show-info="false"
                            strokeColor="rgb(102, 255, 255)"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div> -->
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  "
                ></div>
              </div>
            </div>
            <div class="line"></div>
          </div>
        </div>
        <div class="card-box">
          <div class="card-font" @click="gotoCatSeries(trendName + 'POP')">
            {{ trendName }}POP
          </div>
          <div class="card-border-box">
            <div class="line"></div>
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
            <div class="line4"></div>
            <div class="left-right-box">
              <div style="margin-left: 14px">
                <div class="flex-top-card">
                  <div class="top-left-font">实时达成</div>
                  <div class="flex-finish">
                    <div class="finish-font">责任制 <span>100亿</span></div>
                    <div class="finish-font">完成率 <span>75%</span></div>
                  </div>
                </div>
                <div class="flex-top-card">
                  <div class="card-big-num">75亿</div>
                  <div style="display: flex; align-items: center">
                    <div class="finish-font">进度</div>
                    <div>
                      <div class="progress">
                        <a-progress
                          :percent="50"
                          :show-info="false"
                          strokeColor="#FF8B2F"
                        />
                      </div>
                      <div class="progress">
                        <a-progress
                          :percent="50"
                          :show-info="false"
                          strokeColor="rgb(102, 255, 255)"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  "
                ></div>
              </div>
              <div class="mt-border"></div>
              <div style="margin-right: 14px">
                <div class="flex-top-card">
                  <div class="top-left-font">库存达成</div>
                  <div class="flex-finish">
                    <div class="finish-font">责任制 <span>100亿</span></div>
                    <div class="finish-font">完成率 <span>75%</span></div>
                  </div>
                </div>
                <div class="flex-top-card">
                  <div class="card-big-num">75亿</div>
                  <div style="display: flex; align-items: center">
                    <div style="display: flex; align-items: center">
                      <div class="finish-font">毛利率<span>75%</span></div>
                    </div>
                  </div>
                </div>

                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  "
                ></div>
              </div>
            </div>
            <div class="line"></div>
          </div>
        </div>
        <div class="card-box">
          <div class="card-font" @click="gotoCatSeries(trendName + '新通路')">
            {{ trendName }}新通路
          </div>
          <div class="card-border-box">
            <div class="line"></div>
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
            <div class="line4"></div>
            <div class="left-right-box">
              <div style="margin-left: 14px">
                <div class="flex-top-card">
                  <div class="top-left-font">实时达成</div>
                  <div class="flex-finish">
                    <div class="finish-font">责任制 <span>100亿</span></div>
                    <div class="finish-font">完成率 <span>75%</span></div>
                  </div>
                </div>
                <div class="flex-top-card">
                  <div class="card-big-num">75亿</div>
                  <div class="flex-finish">
                    <!-- <div class="finish-font">进度 <span>s</span></div>
                    <div class="finish-font">完成率 <span>75%</span></div> -->
                  </div>
                  <div style="display: flex; align-items: center">
                    <div class="finish-font">进度</div>
                    <div>
                      <div class="progress">
                        <a-progress
                          :percent="50"
                          :show-info="false"
                          strokeColor="#FF8B2F"
                        />
                      </div>
                      <div class="progress">
                        <a-progress
                          :percent="50"
                          :show-info="false"
                          strokeColor="rgb(102, 255, 255)"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  "
                ></div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  "
                ></div>
              </div>
              <div class="mt-border"></div>
              <div style="margin-right: 14px">
                <div class="flex-top-card">
                  <div class="top-left-font">库存达成</div>
                  <div class="flex-finish">
                    <div class="finish-font">责任制 <span>100亿</span></div>
                    <div class="finish-font">完成率 <span>75%</span></div>
                  </div>
                </div>
                <div class="flex-top-card">
                  <div class="card-big-num">75亿</div>
                  <div style="display: flex; align-items: center">
                    <div class="finish-font">毛利率<span>75%</span></div>
                  </div>
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  "
                ></div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  "
                ></div>
              </div>
            </div>
            <div class="line"></div>
          </div>
        </div>
        <div class="card-box">
          <div class="card-font" @click="gotoCatSeries(trendName + '代理')">
            {{ trendName }}代理
          </div>
          <div class="card-border-box">
            <div class="line"></div>
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
            <div class="line4"></div>
            <div class="left-right-box">
              <div style="margin-left: 14px">
                <div class="flex-top-card">
                  <div class="top-left-font">实时达成</div>
                  <div class="flex-finish">
                    <div class="finish-font">责任制 <span>100亿</span></div>
                    <div class="finish-font">完成率 <span>75%</span></div>
                  </div>
                </div>
                <div class="flex-top-card">
                  <div class="card-big-num">75亿</div>
                  <div style="display: flex; align-items: center">
                    <div class="finish-font">进度</div>
                    <div>
                      <div class="progress">
                        <a-progress
                          :percent="50"
                          :show-info="false"
                          strokeColor="#FF8B2F"
                        />
                      </div>
                      <div class="progress">
                        <a-progress
                          :percent="50"
                          :show-info="false"
                          strokeColor="rgb(102, 255, 255)"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  "
                ></div>
              </div>
              <div class="mt-border"></div>
              <div style="margin-right: 14px">
                <div class="flex-top-card">
                  <div class="top-left-font">库存达成</div>
                  <div class="flex-finish">
                    <div class="finish-font">责任制 <span>100亿</span></div>
                    <div class="finish-font">完成率 <span>75%</span></div>
                  </div>
                </div>
                <div class="flex-top-card">
                  <div class="card-big-num">75亿</div>
                  <div style="display: flex; align-items: center">
                    <div class="finish-font">毛利率<span>75%</span></div>
                  </div>
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  "
                ></div>
              </div>
            </div>
            <div class="line"></div>
          </div>
        </div>
        <div class="card-box">
          <div class="card-font" @click="gotoCatSeries('其他')">其他</div>
          <div class="card-border-box">
            <div class="line"></div>
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
            <div class="line4"></div>
            <div class="left-right-box">
              <div style="margin-left: 14px">
                <div class="flex-top-card">
                  <div class="top-left-font">实时达成</div>
                  <div class="flex-finish">
                    <div class="finish-font">责任制 <span>100亿</span></div>
                    <div class="finish-font">完成率 <span>75%</span></div>
                  </div>
                </div>
                <div class="flex-top-card">
                  <div class="card-big-num">75亿</div>
                  <div style="display: flex; align-items: center">
                    <div class="finish-font">进度</div>
                    <div>
                      <div class="progress">
                        <a-progress
                          :percent="50"
                          :show-info="false"
                          strokeColor="#FF8B2F"
                        />
                      </div>
                      <div class="progress">
                        <a-progress
                          :percent="50"
                          :show-info="false"
                          strokeColor="rgb(102, 255, 255)"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  "
                ></div>
              </div>
              <div class="mt-border"></div>
              <div style="margin-right: 14px">
                <div class="flex-top-card">
                  <div class="top-left-font">库存达成</div>
                  <div class="flex-finish">
                    <div class="finish-font">责任制 <span>100亿</span></div>
                    <div class="finish-font">完成率 <span>75%</span></div>
                  </div>
                </div>
                <div class="flex-top-card">
                  <div class="card-big-num">75亿</div>
                  <div style="display: flex; align-items: center">
                    <div class="finish-font">毛利率<span>75%</span></div>
                  </div>
                </div>

                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  "
                ></div>
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
        <div>
          <div class="middle-font left-file">
            内销线上{{ trendName }}日达成趋势图
          </div>
          <div id="main" class="echartsBox"></div>
        </div>
        <div>
          <div class="middle-font">{{ trendName }}店铺日达成趋势图</div>
          <div class="right-box-qushi">
            <div class="flex-right-bottom">
              <div>
                <div class="border-top-line"></div>
                <div class="border-left-line"></div>
                <div class="flex-echrats-right">
                  <div class="right-font-title">淘系</div>
                  <div id="main2" class="echartsBox-min"></div>
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
export default {
  components: {
    ProgressPanel,
    SpeedPanel,
    SadPanel,
  },
  data() {
    return {
      trendName: "",
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
        bar1: 0,
        bar2: 0,
        ballTitle: "线上",
        bigBallTitle: "毛利率",
        textLeft: "自营",
        textRight: "代运营",
        titleTop: "自营",
        titleBottom: "代运营",
        topGPM: 0,
        bottomGPM: 0,
        ballNum: 0,
      },
      speedData: {
        bar: 0,
        speedBar: 0,
        ballTitle: "线上达成",
        ballNum: 0,
        ballLeftTitle: "自营",
        ballRightTitle: "代运营",
        ballLeftNum: 0,
        ballRightNum: 0,
        bottomNum: 0,
        bottomTitle1: "自营",
        bottomClose: 0,
        bottomTime: 0,
        bottomTitle2: "代运营",
        bottomClose1: 0,
        bottomTime1: 0,
      },
      sabData: {
        bar1: 70,
        bar2: 50,
        ballTitle: "线上",
        top: "自营",
        bottom: "代运营",
         sabArr: { S: 0, A: 0, B: 0 },
        topArr: { S: 0, A: 0, B: 0  },
        bottomArr: { S: 0, A: 0, B: 0  },
        // sabArr: [{'高端机':32},{'明星机':18},{'入口机':21},{'常规机':9},{'结构及':5}],
        // topArr: [{'高端机':32},{'明星机':18},{'入口机':21},{'常规机':9},{'结构及':5}],
        // bottomArr: [{'高端机':32},{'明星机':18},{'入口机':21},{'常规机':9},{'结构及':5}]
      },
    };
  },
  methods: {
    gotoDomestic(){
     this.$router.push("/center/index")
    },

//  * cnyAmt 自营/代运营金额

//  * onLineCnyAmt 合作模式二级总金额

//  * businessModelCompleteRadio 自营/代运营金额完成率

//  * onLineCompleteRadioRadio 合作模式二级金额完成率

//  * saleTasTQty 合作模式二级责任制销量

//  * 
     //仪表盘(左中)
    async getdashboard() {
      // localStorage.getItem("");
      try {
        //2022-03,京东,线上
        const res = await API.getData("offlinePlatformTop", '2022-03,线上,京东');
        let panelDataList = res.rows;
        this.progressData.ballNum = (
          panelDataList[0].onLineGrossProfitRadio * 100
        ).toFixed(1);
        this.speedData.speedBar = (
          panelDataList[0].businessModelCompleteRadio * 100
        ).toFixed(1);
        this.speedData.bar = (panelDataList[0].dateRadio * 100).toFixed(1);
        this.speedData.ballNum = panelDataList[0].onLineCnyAmt.toFixed(1);
//         * saleTaskAmt 合作模式二级责任制金额

//  * cnyAmt 自营/代运营金额

//  * onLineCnyAmt 合作模式二级总金额

//  * businessModelCompleteRadio 自营/代运营金额完成率

//  * onLineCompleteRadioRadio 合作模式二级金额完成率

//  * saleTasTQty 合作模式二级责任制销量
        // this.speedData.bottomNum = panelDataList[0].saleTaskAmt.toFixed(1)
        for (var i = 0; i < panelDataList.length; i++) {
          if (panelDataList[i].businessModel == "直营") {
            this.progressData.bar2 = (
              panelDataList[i].grossProfitRadio * 100
            ).toFixed(1);
            this.progressData.topGPM = (
              panelDataList[i].grossProfitRadio * 100
            ).toFixed(1);
            this.speedData.bottomClose1 =  panelDataList[i].businessModelCompleteRadio.toFixed(1)
            this.speedData.bottomTime1 =  panelDataList[i].dateRadio.toFixed(1)
            
          } 
           if (panelDataList[i].businessModel == "代运营") {
            //  Console.log("代运营",panelDataList[i].dateRadio)
            this.progressData.bar1 = (
              panelDataList[i].grossProfitRadio * 100
            ).toFixed(1);
            this.progressData.bottomGPM = (
              panelDataList[i].grossProfitRadio * 100
            ).toFixed(1);
             this.speedData.ballRightNum =  panelDataList[i].saleTaskAmt.toFixed(1)

            //  <span>{{data.bottomTitle1}}:</span><span>完成率:{{data.bottomClose}}%</span><span>时间进度:{{data.bottomTime}}%</span>
            this.speedData.bottomClose1 =  panelDataList[i].businessModelCompleteRadio.toFixed(1)
            this.speedData.bottomTime1 =  panelDataList[i].dateRadio.toFixed(1)
          }

          
        }
      } catch (error) {
        console.log(error);
      }
    },

    toModuleResponsible() {
      this.$router.push({ name: "moduleResponsible" });
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
          data: ["2022-01", "2022-02", "2022-03", "2022-04", "2022-05"],
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
      myChart2.setOption(option);
    },
 
  },
  mounted() {
    this.trendName = this.$route.query.key
    this.getdashboard();
    this.myEcharts();
    this.myEcharts2();
    this.myEcharts3();
    this.myEcharts4();
    this.myEcharts5();
    this.myEcharts6();
    this.myEcharts7();
    this.myEcharts8();
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
