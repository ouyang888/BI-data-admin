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
          <div class="card-font" @click="leftGo()">南美区-张莱欧</div>
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
                        <a-progress :percent="50" :show-info="false" strokeColor="#FF8B2F" />
                      </div>
                      <div class="progress">
                        <a-progress :percent="50" :show-info="false" strokeColor="rgb(102, 255, 255)" />
                      </div>
                    </div>
                  </div>
                </div>
                <div style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  ">
                  <div class="card-middle-progress">
                    <div style="display: flex; align-items: center">
                      <div class="finish-font">进度</div>
                      <div>
                        <div class="progress-middle">
                          <a-progress :percent="50" :show-info="false" strokeColor="#FF8B2F" />
                        </div>
                        <div class="progress-middle">
                          <a-progress :percent="50" :show-info="false" strokeColor="rgb(102, 255, 255)" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-middle-progress">
                    <div style="display: flex; align-items: center">
                      <div class="finish-font">进度</div>
                      <div>
                        <div class="progress-middle">
                          <a-progress :percent="50" :show-info="false" strokeColor="#FF8B2F" />
                        </div>
                        <div class="progress-middle">
                          <a-progress :percent="50" :show-info="false" strokeColor="rgb(102, 255, 255)" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-middle-progress">
                    <div style="display: flex; align-items: center">
                      <div class="finish-font">进度</div>
                      <div>
                        <div class="progress-middle">
                          <a-progress :percent="50" :show-info="false" strokeColor="#FF8B2F" />
                        </div>
                        <div class="progress-middle">
                          <a-progress :percent="50" :show-info="false" strokeColor="rgb(102, 255, 255)" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  ">
                  <div class="card-middle-progress">
                    <div style="display: flex; align-items: center">
                      <div class="finish-font">进度</div>
                      <div>
                        <div class="progress-middle">
                          <a-progress :percent="50" :show-info="false" strokeColor="#FF8B2F" />
                        </div>
                        <div class="progress-middle">
                          <a-progress :percent="50" :show-info="false" strokeColor="rgb(102, 255, 255)" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-middle-progress">
                    <div style="display: flex; align-items: center">
                      <div class="finish-font">进度</div>
                      <div>
                        <div class="progress-middle">
                          <a-progress :percent="50" :show-info="false" strokeColor="#FF8B2F" />
                        </div>
                        <div class="progress-middle">
                          <a-progress :percent="50" :show-info="false" strokeColor="rgb(102, 255, 255)" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-middle-progress">
                    <div style="display: flex; align-items: center">
                      <div class="finish-font">进度</div>
                      <div>
                        <div class="progress-middle">
                          <a-progress :percent="50" :show-info="false" strokeColor="#FF8B2F" />
                        </div>
                        <div class="progress-middle">
                          <a-progress :percent="50" :show-info="false" strokeColor="rgb(102, 255, 255)" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex-bottoms">
                  <div>线上结构 S-10%; A-20%; B-70%</div>
                </div>
                <div class="flex-bottoms" style="padding-bottom: 10px; padding-top: 4px">
                  <div>线上毛利率 <span class="light-blue">75%</span></div>
                </div>
              </div>
              <div class="mt-border"></div>
              <div style="margin-right: 14px">
                <div class="flex-top-card">
                  <div class="top-left-font">线下达成</div>
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
                        <a-progress :percent="50" :show-info="false" strokeColor="#FF8B2F" />
                      </div>
                      <div class="progress">
                        <a-progress :percent="50" :show-info="false" strokeColor="rgb(102, 255, 255)" />
                      </div>
                    </div>
                  </div>
                </div>
                <div style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  ">
                  <div class="card-middle-progress">
                    <div style="display: flex; align-items: center">
                      <div class="finish-font">进度</div>
                      <div>
                        <div class="progress-middle">
                          <a-progress :percent="50" :show-info="false" strokeColor="#FF8B2F" />
                        </div>
                        <div class="progress-middle">
                          <a-progress :percent="50" :show-info="false" strokeColor="rgb(102, 255, 255)" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-middle-progress">
                    <div style="display: flex; align-items: center">
                      <div class="finish-font">进度</div>
                      <div>
                        <div class="progress-middle">
                          <a-progress :percent="50" :show-info="false" strokeColor="#FF8B2F" />
                        </div>
                        <div class="progress-middle">
                          <a-progress :percent="50" :show-info="false" strokeColor="rgb(102, 255, 255)" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-middle-progress">
                    <div style="display: flex; align-items: center">
                      <div class="finish-font">进度</div>
                      <div>
                        <div class="progress-middle">
                          <a-progress :percent="50" :show-info="false" strokeColor="#FF8B2F" />
                        </div>
                        <div class="progress-middle">
                          <a-progress :percent="50" :show-info="false" strokeColor="rgb(102, 255, 255)" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  ">
                  <div class="card-middle-progress">
                    <div style="display: flex; align-items: center">
                      <div class="finish-font">进度</div>
                      <div>
                        <div class="progress-middle">
                          <a-progress :percent="50" :show-info="false" strokeColor="#FF8B2F" />
                        </div>
                        <div class="progress-middle">
                          <a-progress :percent="50" :show-info="false" strokeColor="rgb(102, 255, 255)" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-middle-progress">
                    <div style="display: flex; align-items: center">
                      <div class="finish-font">进度</div>
                      <div>
                        <div class="progress-middle">
                          <a-progress :percent="50" :show-info="false" strokeColor="#FF8B2F" />
                        </div>
                        <div class="progress-middle">
                          <a-progress :percent="50" :show-info="false" strokeColor="rgb(102, 255, 255)" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-middle-progress">
                    <div style="display: flex; align-items: center">
                      <div class="finish-font">进度</div>
                      <div>
                        <div class="progress-middle">
                          <a-progress :percent="50" :show-info="false" strokeColor="#FF8B2F" />
                        </div>
                        <div class="progress-middle">
                          <a-progress :percent="50" :show-info="false" strokeColor="rgb(102, 255, 255)" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex-bottoms">
                  <div>线上结构 S-10%; A-20%; B-70%</div>
                </div>
                <div class="flex-bottoms" style="padding-bottom: 10px; padding-top: 4px">
                  <div>线上毛利率 <span class="light-blue">75%</span></div>
                </div>
              </div>
            </div>
            <div class="line"></div>
          </div>
        </div>
        <div class="card-box">
          <div class="card-font" @click="rightGo()">北美区-李林</div>
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
                        <a-progress :percent="50" :show-info="false" strokeColor="#FF8B2F" />
                      </div>
                      <div class="progress">
                        <a-progress :percent="50" :show-info="false" strokeColor="rgb(102, 255, 255)" />
                      </div>
                    </div>
                  </div>
                </div>
                <div style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  ">
                  <div class="card-middle-progress">
                    <div style="display: flex; align-items: center">
                      <div class="finish-font">进度</div>
                      <div>
                        <div class="progress-middle">
                          <a-progress :percent="50" :show-info="false" strokeColor="#FF8B2F" />
                        </div>
                        <div class="progress-middle">
                          <a-progress :percent="50" :show-info="false" strokeColor="rgb(102, 255, 255)" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-middle-progress">
                    <div style="display: flex; align-items: center">
                      <div class="finish-font">进度</div>
                      <div>
                        <div class="progress-middle">
                          <a-progress :percent="50" :show-info="false" strokeColor="#FF8B2F" />
                        </div>
                        <div class="progress-middle">
                          <a-progress :percent="50" :show-info="false" strokeColor="rgb(102, 255, 255)" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-middle-progress">
                    <div style="display: flex; align-items: center">
                      <div class="finish-font">进度</div>
                      <div>
                        <div class="progress-middle">
                          <a-progress :percent="50" :show-info="false" strokeColor="#FF8B2F" />
                        </div>
                        <div class="progress-middle">
                          <a-progress :percent="50" :show-info="false" strokeColor="rgb(102, 255, 255)" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  ">
                  <div class="card-middle-progress">
                    <div style="display: flex; align-items: center">
                      <div class="finish-font">进度</div>
                      <div>
                        <div class="progress-middle">
                          <a-progress :percent="50" :show-info="false" strokeColor="#FF8B2F" />
                        </div>
                        <div class="progress-middle">
                          <a-progress :percent="50" :show-info="false" strokeColor="rgb(102, 255, 255)" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-middle-progress">
                    <div style="display: flex; align-items: center">
                      <div class="finish-font">进度</div>
                      <div>
                        <div class="progress-middle">
                          <a-progress :percent="50" :show-info="false" strokeColor="#FF8B2F" />
                        </div>
                        <div class="progress-middle">
                          <a-progress :percent="50" :show-info="false" strokeColor="rgb(102, 255, 255)" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-middle-progress">
                    <div style="display: flex; align-items: center">
                      <div class="finish-font">进度</div>
                      <div>
                        <div class="progress-middle">
                          <a-progress :percent="50" :show-info="false" strokeColor="#FF8B2F" />
                        </div>
                        <div class="progress-middle">
                          <a-progress :percent="50" :show-info="false" strokeColor="rgb(102, 255, 255)" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex-bottoms">
                  <div>线上结构 S-10%; A-20%; B-70%</div>
                </div>
                <div class="flex-bottoms" style="padding-bottom: 10px; padding-top: 4px">
                  <div>线下毛利率 <span class="light-blue">75%</span></div>
                </div>
              </div>
              <div class="mt-border"></div>
              <div style="margin-right: 14px">
                <div class="flex-top-card">
                  <div class="top-left-font">线下达成</div>
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
                        <a-progress :percent="50" :show-info="false" strokeColor="#FF8B2F" />
                      </div>
                      <div class="progress">
                        <a-progress :percent="50" :show-info="false" strokeColor="rgb(102, 255, 255)" />
                      </div>
                    </div>
                  </div>
                </div>
                <div style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  ">
                  <div class="card-middle-progress">
                    <div style="display: flex; align-items: center">
                      <div class="finish-font">进度</div>
                      <div>
                        <div class="progress-middle">
                          <a-progress :percent="50" :show-info="false" strokeColor="#FF8B2F" />
                        </div>
                        <div class="progress-middle">
                          <a-progress :percent="50" :show-info="false" strokeColor="rgb(102, 255, 255)" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-middle-progress">
                    <div style="display: flex; align-items: center">
                      <div class="finish-font">进度</div>
                      <div>
                        <div class="progress-middle">
                          <a-progress :percent="50" :show-info="false" strokeColor="#FF8B2F" />
                        </div>
                        <div class="progress-middle">
                          <a-progress :percent="50" :show-info="false" strokeColor="rgb(102, 255, 255)" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-middle-progress">
                    <div style="display: flex; align-items: center">
                      <div class="finish-font">进度</div>
                      <div>
                        <div class="progress-middle">
                          <a-progress :percent="50" :show-info="false" strokeColor="#FF8B2F" />
                        </div>
                        <div class="progress-middle">
                          <a-progress :percent="50" :show-info="false" strokeColor="rgb(102, 255, 255)" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  ">
                  <div class="card-middle-progress">
                    <div style="display: flex; align-items: center">
                      <div class="finish-font">进度</div>
                      <div>
                        <div class="progress-middle">
                          <a-progress :percent="50" :show-info="false" strokeColor="#FF8B2F" />
                        </div>
                        <div class="progress-middle">
                          <a-progress :percent="50" :show-info="false" strokeColor="rgb(102, 255, 255)" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-middle-progress">
                    <div style="display: flex; align-items: center">
                      <div class="finish-font">进度</div>
                      <div>
                        <div class="progress-middle">
                          <a-progress :percent="50" :show-info="false" strokeColor="#FF8B2F" />
                        </div>
                        <div class="progress-middle">
                          <a-progress :percent="50" :show-info="false" strokeColor="rgb(102, 255, 255)" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-middle-progress">
                    <div style="display: flex; align-items: center">
                      <div class="finish-font">进度</div>
                      <div>
                        <div class="progress-middle">
                          <a-progress :percent="50" :show-info="false" strokeColor="#FF8B2F" />
                        </div>
                        <div class="progress-middle">
                          <a-progress :percent="50" :show-info="false" strokeColor="rgb(102, 255, 255)" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex-bottoms">
                  <div>线上结构 S-10%; A-20%; B-70%</div>
                </div>
                <div class="flex-bottoms" style="padding-bottom: 10px; padding-top: 4px">
                  <div>线上毛利率 <span class="light-blue">75%</span></div>
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
        <div>
          <div class="middle-font left-file">内销日达成趋势图</div>
          <div id="main" class="echartsBox"></div>
        </div>
        <div>
          <div class="middle-font">大区日达成趋势图</div>
          <div class="right-box-qushi">
            <div class="flex-right-bottom">
              <div class="content-cart">
                <div class="border-top-line"></div>
                <div class="border-left-line"></div>
                <div class="flex-echrats-right">
                  <div class="right-font-title">北美零售营销中心</div>
                  <div id="main2" class="echartsBox-min"></div>
                </div>
                <div class="border-top-line"></div>
                <div class="border-left-line1"></div>
                <div class="border-left-line2"></div>
                <div class="border-left-line3"></div>
              </div>
            </div>
            <div class="flex-right-bottom">
              <div class="content-cart">
                <div class="border-top-line"></div>
                <div class="border-left-line"></div>
                <div class="flex-echrats-right">
                  <div class="right-font-title">韩国业务区</div>
                  <div id="main3" class="echartsBox-min"></div>
                </div>
                <div class="border-top-line"></div>
                <div class="border-left-line1"></div>
                <div class="border-left-line2"></div>
                <div class="border-left-line3"></div>
              </div>
            </div>
            <div class="flex-right-bottom">
              <div class="content-cart">
                <div class="border-top-line"></div>
                <div class="border-left-line"></div>
                <div class="flex-echrats-right">
                  <div class="right-font-title">日本业务区</div>
                  <div id="main4" class="echartsBox-min"></div>
                </div>
                <div class="border-top-line"></div>
                <div class="border-left-line1"></div>
                <div class="border-left-line2"></div>
                <div class="border-left-line3"></div>
              </div>
            </div>
            <div class="flex-right-bottom">
              <div class="content-cart">
                <div class="border-top-line"></div>
                <div class="border-left-line"></div>
                <div class="flex-echrats-right">
                  <div class="right-font-title">北美KA营销中心</div>
                  <div id="main5" class="echartsBox-min"></div>
                </div>
                <div class="border-top-line"></div>
                <div class="border-left-line1"></div>
                <div class="border-left-line2"></div>
                <div class="border-left-line3"></div>
              </div>
            </div>
            <div class="flex-right-bottom">
              <div class="content-cart">
                <div class="border-top-line"></div>
                <div class="border-left-line"></div>
                <div class="flex-echrats-right">
                  <div class="right-font-title">西北欧营销中心</div>
                  <div id="main6" class="echartsBox-min"></div>
                </div>
                <div class="border-top-line"></div>
                <div class="border-left-line1"></div>
                <div class="border-left-line2"></div>
                <div class="border-left-line3"></div>
              </div>
            </div>
            <div class="flex-right-bottom">
              <div class="content-cart">
                <div class="border-top-line"></div>
                <div class="border-left-line"></div>
                <div class="flex-echrats-right">
                  <div class="right-font-title">亚太业务区</div>
                  <div id="main7" class="echartsBox-min"></div>
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
        <a-table :bordered="true" :columns="columns" :data-source="data" :pagination="false">
          <a slot="name" slot-scope="text">{{ text }}</a>
          <template slot="name" slot-scope="name">
                       <a @click="gotoDomestic"> {{ name }}</a>
                      </template>
        </a-table>
      </div>
      <div class="execl">
        <a-table :bordered="true" :columns="columns" :data-source="data" :pagination="false">
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
  // import echarts from "echarts";
  import ProgressPanel from "@/views/center/panel/ProgressPanel.vue";
  import SpeedPanel from "@/views/center/panel/SpeedPanel.vue";
  import SadPanel from "@/views/center/panel/SadPanel.vue";
  import API from "../../../service/api";
  export default {
    name: "s",
    components: {
      ProgressPanel,
      SpeedPanel,
      SadPanel,
    },
    data() {
      return {
        time: "2022-03",
        showLoading: false,
        AmericaDate: [],
        AmericaList: [],
        AvgTaskAmtDate: [],
        AvgTaskAmtList: [],
        AvgTaskAmtLine: [],
        AmericaLine: [],
        koreaData: [],
        koreaList: [],
        koreaLine: [],
        JapanDate: [],
        JapanList: [],
        JapanLine: [],
        AmericaKaDate: [],
        AmericaKaList: [],
        AmericaKaLine: [],
        NorthwestDate: [],
        NorthwestList: [],
        NorthwestLine: [],
        AsiaDate: [],
        AsiaList: [],
        AsiaLine: [],
        progressData: {
          bar1: 3,
          bar2: 5,
          ballTitle: "外销",
          bigBallTitle: "毛利率",
          textLeft: "OBM",
          textRight: "OEM",
          titleTop: "OBM",
          titleBottom: "OEM",
          topGPM: 7,
          bottomGPM: 8,
          ballNum: 67,
        },

        speedData: {
          bar: 1,
          speedBar: 50,
          ballTitle: "外销达成",
          ballNum: 67,
          ballLeftTitle: "OBM",
          ballRightTitle: "OEM",
          ballLeftNum: 4,
          ballRightNum: 5,
          bottomNum: 6,
          bottomTitle1: "OBM",
          bottomClose: 7,
          bottomTime: 8,
          bottomTitle2: "OEM",
          bottomClose1: 9,
          bottomTime1: 11,
        },
        sabData: {
          // bar1: 70,
          // bar2: 50,
          // bar3: 30,
          // bar4: 12,
          // bar5: 7,
          ballTitle: "外销",
          bottom: "OBM",
          top: "OEM",
          sabArr: { s: 31, a: 18, b: 21 },
          topArr: { s: 30, a: 18, b: 21 },
          bottomArr: { s: 338, a: 18, b: 21 },
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
            key: "address2",
            align: "center",
          },
          {
            title: "任务完成率",
            dataIndex: "address",
            key: "address3",
            align: "center",
          },
          {
            title: "毛利率",
            dataIndex: "address",
            key: "address4",
            align: "center",
          },
          {
            title: "周转天数",
            dataIndex: "address",
            key: "address5",
            align: "center",
          },
          {
            title: "说到做到",
            dataIndex: "address",
            key: "address6",
            align: "center",
          },
          {
            title: "排名",
            dataIndex: "address",
            key: "address7",
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
      };
    },
    methods: {
      // 三个仪表盘
      leftGo() {
       this.$router.push("/center/exprotAreaAll");
    },
    rightGo() {
      this.$router.push("/center/exprotAreaAll");
    },
      //三个仪表盘(左中)
      async getdashboard() {
        try {
          const res = await API.getData("sellOutTopDashBoard", this.time);
          //内销汇总仪表盘左边&&中间
          let panelDataList = res.rows;
          // directProfitRadio: 0.2713  销向毛利率
          this.progressData.ballNum = (
            panelDataList[0].directProfitRadio * 100
          ).toFixed(1);
          //    
          // ⅵ. directCnyAmt: 5.8799  销向总销售金额
          this.speedData.ballNum = panelDataList[0].directCnyAmt.toFixed(1)
          // 销向金额完成率
          // 销向数量完成率
          this.speedData.speedBar = (panelDataList[0].directAmtRadio * 100).toFixed(1)
          this.speedData.bar = (panelDataList[0].directQtyRadio * 100).toFixed(1)
          //  销向总销售数量
          this.speedData.ballNum = (panelDataList[0].directsaleVolume / 1000000).toFixed(1)

          // 责任制
          this.speedData.bottomNum = panelDataList[0].saleTaskAmt.toFixed(1)
          for (var i = 0; i < panelDataList.length; i++) {
            if (panelDataList[i].obmOem == "OBM") {
              this.progressData.bar1 = (panelDataList[i].cnyAmtRadio * 100).toFixed(1)
              this.progressData.topGPM = (panelDataList[i].obmOemProfitRadio * 100).toFixed(1)
              this.speedData.ballLeftNum = panelDataList[i].cnyAmt.toFixed(1)

              this.speedData.bottomClose = panelDataList[i].orgQtyRadio.toFixed(1)
              this.speedData.bottomTime = panelDataList[i].dateRadio.toFixed(1)

            } else if (panelDataList[i].obmOem == "OEM") {
              this.progressData.bar2 = (panelDataList[i].cnyAmtRadio * 100).toFixed(1)
              this.progressData.bottomGPM = (panelDataList[i].obmOemProfitRadio * 100).toFixed(1)
              this.speedData.ballRightNum = panelDataList[i].cnyAmt.toFixed(1)
              this.speedData.bottomClose1 = panelDataList[i].orgQtyRadio.toFixed(1)
              this.speedData.bottomTime1 = panelDataList[i].dateRadio.toFixed(1)

            }
          }
        } catch (error) {
          console.log(error);
        }
      },

      //三个仪表盘(右)
      async queryCardSAB() {
        try {
          const res = await API.getData("sellOutTopDashBoardSAB", this.time);
          // console.log("右但是,", res);
          let RightSAB = res.rows;
          for (var i = 0; i < RightSAB.length; i++) {
            if (RightSAB[i].obmOem == "OBM") {
              this.sabData.bottomArr.s = (RightSAB[i].directPositionRatio * 100).toFixed(1)
              this.sabData.bottomArr.a = (RightSAB[i].directPositionRatio * 100).toFixed(1)
              this.sabData.bottomArr.b = (RightSAB[i].directPositionRatio * 100).toFixed(1)
            } else if (RightSAB[i].obmOem == "OEM") {
              this.sabData.topArr.s = (RightSAB[i].directPositionRatio * 100).toFixed(1)
              this.sabData.topArr.a = (RightSAB[i].directPositionRatio * 100).toFixed(1)
              this.sabData.topArr.b = (RightSAB[i].directPositionRatio * 100).toFixed(1)
            }
          }
        } catch (error) {
          console.log(error);
        }
      },
      // 中部
      //中间折线图
      async getList() {
        this.showLoading = true;
        try {
          const res = await API.getData(
            "sellOuttotalchart",
            "202203,202203,20220301,20220314"
          );

          console.log("sell", res);
          let sellOutDataList = res.rows;
          let newArr = sellOutDataList.filter((item) => {
            var timeArr = item.orderDate
              .replace(" ", ":")
              .replace(/\:/g, "-")
              .split("-");

            var yue = timeArr[1];
            var ri = timeArr[2];

            // for (let i = 0; i < sellOutDataList.length; i++) {

            //   setTimeout(() => {
            //     console.log(i);

            //   }, 1000)

            // }
            // 外销日内
            if (item.totalAvgTaskAmt !== null && item.totalAmt !== null) {
              this.AvgTaskAmtDate.push(yue + "-" + ri);
              this.AvgTaskAmtList.push(item.totalAmt);
              this.AvgTaskAmtLine = item.totalAvgTaskAmt;
              this.myEcharts();
            }


            if (item.cooprLevel1 == "北美零售营销中心") {
              // obj.divisionArr.push(item)
              this.AmericaDate.push(yue + "-" + ri);
              this.AmericaList.push(item.CnyAmt);
              this.AmericaLine = item.tAvgAmt;
              this.myEcharts2();
            } else if (item.cooprLevel1 == "韩国业务区") {
              this.koreaData.push(yue + "-" + ri);
              this.koreaList.push(item.CnyAmt);
              this.koreaLine = item.tAvgAmt;
              this.myEcharts3();
            } else if (item.cooprLevel1 == "日本业务区") {
              this.JapanDate.push(yue + "-" + ri);
              this.JapanList.push(item.CnyAmt);
              this.JapanLine = item.tAvgAmt;
              this.myEcharts4();
            }
            else if (item.cooprLevel1 == "北美KA营销中心") {
              this.AmericaKaDate.push(yue + "-" + ri);
              this.AmericaKaList.push(item.CnyAmt);
              this.AmericaKaLine = item.tAvgAmt;
              this.myEcharts5();
            }
            else if (item.cooprLevel1 == '西北欧营销中心') {
              this.NorthwestDate.push(yue + "-" + ri);
              this.NorthwestList.push(item.CnyAmt);
              this.NorthwestLine = item.tAvgAmt;
              this.myEcharts6();
            }
            else if (item.cooprLevel1 == '亚太业务区') {
              this.AsiaDate.push(yue + "-" + ri);
              this.AsiaList.push(item.CnyAmt);
              this.AsiaLine = item.tAvgAmt;
              this.myEcharts7();
            }

            this.showLoading = false;
          });

        } catch (error) {
          console.log(error);
        }
      },

      gotoDomestic() {
        this.$router.push("/center/index");
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
            data: this.AmericaDate,
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
              data: this.AmericaList,
              markLine: {
                // data:this.AmericaLine,
                data: [
                  {
                    yAxis: this.AmericaLine,
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
            data: this.koreaData,
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
              data: this.koreaList,
              markLine: {
                data: [
                  {
                    yAxis: this.koreaLine,

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
            data: this.JapanDate,
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
              data: this.JapanList,
              markLine: {
                data: [
                  {
                    yAxis: this.JapanLine,
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
            data: this.AmericaKaDate,
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
              data: this.AmericaKaList,
              markLine: {
                data: [
                  {
                    yAxis: this.AmericaKaLine,

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
            data: this.NorthwestDate,
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
              data: this.NorthwestList,
              markLine: {
                data: [
                  {
                    yAxis: this.NorthwestLine,

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
            data: this.AsiaDate,
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
              data: this.AsiaList,
              markLine: {
                data: [
                  {
                    yAxis: this.AsiaLine,

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

      online() {
        this.$router.push("/center/onlineSummary");

      },
      offline() {
        this.$router.push("/center/offlineSummary");

      }
    },
    created() {
      this.getdashboard();
      this.queryCardSAB();
      this.getList();
    },
    mounted() {
      this.myEcharts();
      this.myEcharts2();
      this.myEcharts3();
      this.myEcharts4();
      this.myEcharts5();
      this.myEcharts6();
      this.myEcharts7();
      // this.myEcharts8();
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
    height: 280px;
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
    margin-left: 20px;
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

    font-size: 15px;
    color: #fff;
    text-align: center;
    /* margin-right: 1px; */
    width: 45%;
  }
.content-cart{
  width: 100%;
}
  .flex-right-bottom {
    display: flex;
    /* align-items: center; */
    /* justify-content: space-between; */
    width: 32%;
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

  ::v-deep .ant-table-bordered .ant-table-body>table {
    border: none;
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