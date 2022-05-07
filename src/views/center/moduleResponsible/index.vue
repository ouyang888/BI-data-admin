<template>
    <div style="background: #02004d">
      <!-- 头部仪表盘和卡片 -->
      <div class="top-flex"  >
        <!-- 仪表盘 -->
        <div class="dashboard-box">仪表</div>
        <!-- 右侧卡片 -->
        <div class="flex-card" >
          <div class="card-box">
            <div class="card-font">淘系</div>
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
                  >
                  
                  </div>
                  <div
                    style="
                      display: flex;
                      align-items: center;
                      justify-content: space-between;
                    "
                  >
                   
                  </div>
                 
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
                  >
                   
                  </div>
                  <div
                    style="
                      display: flex;
                      align-items: center;
                      justify-content: space-between;
                    "
                  >
                  
                  </div>
                 
                </div>
              </div>
              <div class="line"></div>
            </div>
          </div>
          <div class="card-box" >
            <div class="card-font">京东</div>
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
                  >
                    
                  </div>
                 
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
                  >
                  
                  </div>
                
                </div>
              </div>
              <div class="line"></div>
            </div>
          </div>
          <div class="card-box" >
            <div class="card-font">淘系</div>
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
                  >
                    
                  </div>
                 
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
                  >
                  
                  </div>
                
                </div>
              </div>
              <div class="line"></div>
            </div>
          </div>
             <div class="card-box">
            <div class="card-font">美的平台</div>
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
                  >
                  
                  </div>
                  <div
                    style="
                      display: flex;
                      align-items: center;
                      justify-content: space-between;
                    "
                  >
                   
                  </div>
                 
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
                  >
                   
                  </div>
                  <div
                    style="
                      display: flex;
                      align-items: center;
                      justify-content: space-between;
                    "
                  >
                  
                  </div>
                 
                </div>
              </div>
              <div class="line"></div>
            </div>
          </div>
          <div class="card-box" >
            <div class="card-font">兴趣电商</div>
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
                  >
                    
                  </div>
                 
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
                  >
                  
                  </div>
                
                </div>
              </div>
              <div class="line"></div>
            </div>
          </div>
          <div class="card-box" >
            <div class="card-font">天猫自运营</div>
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
                  >
                    
                  </div>
                 
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
                  >
                  
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
            <div class="middle-font">内销日达成趋势图</div>
            <div id="main" class="echartsBox"></div>
          </div>
          <div>
            <div class="middle-font">大区日达成趋势图</div>
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
              <div class="flex-right-bottom">
                <div>
                  <div class="border-top-line"></div>
                  <div class="border-left-line"></div>
                  <div class="flex-echrats-right">
                    <div class="right-font-title">京东</div>
                    <div id="main3" class="echartsBox-min"></div>
                  </div>
                  <div class="border-top-line"></div>
                  <div class="border-left-line1"></div>
                  <div class="border-left-line2"></div>
                  <div class="border-left-line3"></div>
                </div>
              </div>
              <div class="flex-right-bottom">
                <div>
                  <div class="border-top-line"></div>
                  <div class="border-left-line"></div>
                  <div class="flex-echrats-right">
                    <div class="right-font-title">拼多多</div>
                    <div id="main4" class="echartsBox-min"></div>
                  </div>
                  <div class="border-top-line"></div>
                  <div class="border-left-line1"></div>
                  <div class="border-left-line2"></div>
                  <div class="border-left-line3"></div>
                </div>
              </div>
              <div class="flex-right-bottom">
                <div>
                  <div class="border-top-line"></div>
                  <div class="border-left-line"></div>
                  <div class="flex-echrats-right">
                    <div class="right-font-title">美的</div>
                    <div id="main5" class="echartsBox-min"></div>
                  </div>
                  <div class="border-top-line"></div>
                  <div class="border-left-line1"></div>
                  <div class="border-left-line2"></div>
                  <div class="border-left-line3"></div>
                </div>
              </div>
              <div class="flex-right-bottom">
                <div>
                  <div class="border-top-line"></div>
                  <div class="border-left-line"></div>
                  <div class="flex-echrats-right">
                    <div class="right-font-title">兴趣</div>
                    <div id="main6" class="echartsBox-min"></div>
                  </div>
                  <div class="border-top-line"></div>
                  <div class="border-left-line1"></div>
                  <div class="border-left-line2"></div>
                  <div class="border-left-line3"></div>
                </div>
              </div>
              <div class="flex-right-bottom">
                <div>
                  <div class="border-top-line"></div>
                  <div class="border-left-line"></div>
                  <div class="flex-echrats-right">
                    <div class="right-font-title">天猫自营</div>
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
  // import echarts from "echarts";
  export default {
    name: "s",
    data() {
      return {
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
        //  headInfo:[{
        //    title:"套系",
        //    responsibility:"100",
  
           
           
  
  
        // }],
      };
    },
    methods: {
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
    mounted() {
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
    margin: 10px 20px 10px 10px;
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
    justify-content: start;
    width: 98%;
    margin: 0 auto;
  }
  .dashboard-box {
       height: 140px;
      border: 1px solid hsla(210, 86%, 39%, 0.66);
      /* flex: 0.82; */
      margin-top: 23px;
      /* padding-top: 40px; */
      margin-right: 30px;
      width: 600px;
      font-size: 18px;
      color: white;
      text-align: center;
      width: 32%;
  }
  
  .card-box {
    background-image: url("../../../assets/img/smallCardBackground.svg");
    background-repeat: no-repeat;
    margin-right: 20px;
    background-size: 100% 95%;
    /* height: 154px;
    width: 400px; */
    margin: 4px 8px 4px 8px;
  }
  .card-font {
    font-size: 18px;
    color: #fff;
    text-align: center;
    font-weight: 600; 
    cursor: pointer;
    color: #19ecff;
  }
  .flex-card {
    /* display: flex;
    margin-top: 20px; */
        display: flex;
      margin-top: 20px;
      align-items: center;
      justify-content: space-between;
      /* width: 100%; */
      flex-wrap: wrap;
      width: 70%;
      padding: 10px;
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
  .flex-finish {
    /* display: flex; */
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
  </style> 
  