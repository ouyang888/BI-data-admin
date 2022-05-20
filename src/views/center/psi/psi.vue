<template>
  <div style="background: #02004d" >
    <div class="main-box">
      <!-- 整列左边 -->
      <div class="left-box">
        <!-- 上 -->
        <div class="card-box">
          <div class="card-font" @click="toggle">S</div>
          <div class="card-border-box">
            <div class="line"></div>
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
            <div class="line4"></div>
            <div class="left-right-box">
              <div class="centerInfo" v-if="sale === '内销'">
                <div class="flex-top-card">
                  <div class="top-left-font">{{ sale }}</div>
                  <div class="flex-finish">
                    <div class="finish-font">
                      责任制
                      <span>{{
                        Number(departmentInfo.saleTaskAmt).toFixed(2)
                      }}</span
                      >{{modelLabel}}
                    </div>
                
                    <div class="finish-font">
                      完成率
                    
                       <span v-if="departmentInfo.cnyAmtRadio===null"
                        >0%</span
                      >
                   
  
                        <span v-else
                        >{{
                          Number(departmentInfo.cnyAmtRadio*100).toFixed(2) > 100
                            ? 100
                            :  Number(departmentInfo.cnyAmtRadio*100).toFixed(2)
                        }}%</span
                      >
                    </div>
                  </div>
                </div>
                <div class="flex-top-card">
              
                  <div class="card-big-num">
                    {{ Number(departmentInfo.cnyAmt).toFixed(2) }}{{modelLabel}}
                  </div>
                  <div style=" display: flex; align-items: center; ">
                    <div class="finish-font">进度</div>
                    <div>
                      <div class="progress">
                        <a-progress
                          :percent="departmentInfo.dateRadio * 100"
                          :show-info="false"
                          strokeColor="#FF8B2F"
                        />
                      </div>
                      <div class="progress">
                        <a-progress
                          :percent="departmentInfo.businessCnyAmtRadio * 100"
                          :show-info="false"
                          strokeColor="rgb(102, 255, 255)"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                clasee="wrapInfo" style=" display: flex;
            align-items: center;
            justify-content: space-between;
            width: 90%;
            flex-wrap: wrap;
            min-width: 200px;"
                 
                >
                  <div
                    class="card-middle-progress"
                    v-for="(item, index) in processInfo"
                    :key="index"
                  >
                    <div style="display: flex; align-items: center">
                      <div class="finish-font">
                        {{ item.businessEntityName }}
                      </div>
                      <div>
                        <div class="progress-middle">
                          <a-progress
                            :percent="item.dateRadio*100"
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
                </div>

                <div class="flex-bottoms">
                  <div>
                    结构
                    <span v-for="(item, index) in homeSabInfo" :key="index">
                      <span>{{ item.position }}</span> -
                      <span>{{ item.positionRatio.toFixed(1) * 100 }}%;</span>
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
                      >{{
                        Number(
                          homeGrossProfitRadio.grossProfitRadio * 100
                        ).toFixed(2)
                      }}%</span
                    >
                  </div>
                </div>
              </div>
    
              <div class="mt-border"></div>
              <div class="centerInfo"  >
                <div class="flex-top-card">
                  <div class="top-left-font">{{ sales }}</div>
                  <div class="flex-finish">
                    <div class="finish-font">
                      责任制
                      <span>{{
                        Number(departmentInfo1.saleTaskAmt).toFixed(2)
                      }}</span
                      >{{modelLabel}}
                    </div>
                    <div class="finish-font">
                      完成率
                      <span
                        >
                    
                       <span v-if="departmentInfo1.cnyAmtRadio===null"
                        >0%</span
                      >
                        <span v-else
                        >{{
                          Number(departmentInfo1.cnyAmtRadio*100).toFixed(2) > 100
                            ? 100
                            :Number(departmentInfo1.cnyAmtRadio*100).toFixed(2)
                        }}%</span
                      >
                        
                        </span
                      >
                    </div>
                  </div>
                </div>
                <div class="flex-top-card">
                  <div class="card-big-num">

                    {{ Number(departmentInfo1.cnyAmt).toFixed(2) }}{{modelLabel}}
                  </div>
                  <div style="display: flex; align-items: center">
                    <div class="finish-font">进度</div>
                    <div>
                      <div class="progress">
                        <a-progress
                          :percent="departmentInfo1.dateRadio* 100"
                          :show-info="false"
                          strokeColor="#FF8B2F"
                        />
                      </div>
                      <div class="progress">
                        <a-progress
                          :percent="departmentInfo1.businessCnyAmtRadio * 100"
                          :show-info="false"
                          strokeColor="rgb(102, 255, 255)"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                class="warpInfo"
              style=" display: flex;
            align-items: center;
            justify-content: space-between;
            width: 90%;
            flex-wrap: wrap;
            min-width: 200px;"
                
                >
                  <div
                    class="card-middle-progress"
                    v-for="(item, index) in processInfo1"
                    :key="index"
                  >
                    <div style="display: flex; align-items: center;">
                      <div class="finish-font">
                        {{ item.businessEntityName }}
                      </div>
                      <div>
                        <div class="progress-middle">
                          <a-progress
                            :percent="item.dateRadio* 100"
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
                </div>

                <div class="flex-bottoms">
                  <div>
                    结构
             
                    <span v-for="(item, index) in homeSabInfo1" :key="index">
                      <span>{{ item.position }}</span> -
                      <span>{{ item.positionRatio.toFixed(1) * 100 }}%;</span>
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
                      >{{
                        Number(
                          homeGrossProfitRadio1.grossProfitRadio * 100
                        ).toFixed(2)
                      }}%</span
                    >
                  </div>
                </div>
              </div>
              <!-- <div style="flex: 1; padding: 10px" v-if="this.sales='外销'">
                <div class="flex-top-card">
                  <div class="top-left-font">外销达成</div>
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
                </div>
                <div
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
                </div>
                <div class="flex-bottoms">
                  <div>线上结构 S-10%; A-20%; B-70%</div>
                </div>
                <div
                  class="flex-bottoms"
                  style="padding-bottom: 10px; padding-top: 4px"
                >
                  <div>线上毛利率 <span class="light-blue">75%</span></div>
                </div>
              </div> -->
            </div>
            <div class="line"></div>
          </div>
        </div>
        <!-- 中 -->
        <div class="middle-box">
          <div class="flex-fang">
            <div class="fang-color"></div>
            <div class="fang-color"></div>
          </div>
          <div class="flex-char">
            
            <div>
              <div class="middle-font">事业部年度销售规划及达成趋势图</div>
               <div class="legend"> 
                <template v-if="echartsLabel">
                  <div class="item" v-for="(item,index) in echartsLabel" :key="index">
                    <div class="lump" :class="item.class"></div>
                    <div class="text">{{item.text}}</div>
                  </div>
                </template>
              </div>
              <div id="main" class="echartsBox"></div>
            </div>
          </div>
        </div>
        <!-- 底部表格 -->
        <div class="flex-bottom">
           <TableCardBox   :mesInfo="nesInfo" :headTitle="headTitle" />   
            <!-- <TableCardBox   />    -->
             <!-- <TableCardBox :leftData="tableInner" :rightData="tableOutter" 
      :rowSpanNumber2="rowSpanNumber2" :rowSpanNumber1="rowSpanNumber1" 
      :titleHead="titleHead" style="transform: scale(0.98);"/>    -->
          <!-- <div class="execl">
            <a-table
              :bordered="true"
              :columns="columns"
              :data-source="data"
              :pagination="false"
            >
              <a slot="name" slot-scope="text">{{ text }}</a>
            </a-table>
          </div> -->
        </div>
        <!-- 底部表格 -->
        <!-- <div class="flex-bottom">
                  <div class="execl">
                      <a-table :bordered="true" :columns="columns" :data-source="data" :pagination="false">
                          <a slot="name" slot-scope="text">{{ text }}</a>
                      </a-table>
                  </div>
              </div> -->
                  <!-- 底部表格 -->
    <!-- <div class="flex-bottom">
      <TableCardBox :leftData="tableInner" :rightData="tableOutter" :rowSpanNumber2="rowSpanNumber2" :rowSpanNumber1="rowSpanNumber1" :titleHead="titleHead"/>
    </div> -->
      </div>

      <!-- 整列中间 -->
      <div class="center-box">
        <!-- 上 -->
        <div class="card-box">
          <div class="card-font">P</div>
          <div class="card-border-box">
            <div class="line"></div>
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
            <div class="line4"></div>
            <div class="left-right-box">
              <div class="centerInfo" >
                <div class="flex-top-card">
                  <div class="top-left-font">内销</div>
                  <div class="flex-finish">
                    <div class="finish-font">责任制 <span>100{{this.modelLabel}}</span></div>
                    <div class="finish-font">完成率 <span>75%</span></div>
                  </div>
                </div>
                <div class="flex-top-card">
                  <div class="card-big-num">75{{this.modelLabel}}</div>
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
                    width: 90%;
                    flex-wrap: wrap;
                    min-width: 200px;
                  "
                >
                  <div class="card-middle-progress">
                    <div style="display: flex; align-items: center ;">
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
                    <div style="display: flex; align-items: center;  
                  ">
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
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    justify-content: space-between;
                    width: 90%;
                    flex-wrap: wrap;
                    min-width: 200px;
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
                </div>
                <div class="flex-bottoms">
                  <div>结构 S-10%; A-20%; B-70%</div>
                </div>
                <div
                  class="flex-bottoms"
                  style="padding-bottom: 10px; padding-top: 4px"
                >
                  <div>毛利率 <span class="light-blue">75%</span></div>
                </div>
              </div>
              <div class="mt-border"></div>
              <div class="centerInfo" >
                <div class="flex-top-card">
                  <div class="top-left-font">外销达成</div>
                  <div class="flex-finish">
                    <div class="finish-font">责任制 <span>100{{this.modelLabel}}</span></div>
                    <div class="finish-font">完成率 <span>75%</span></div>
                  </div>
                </div>
                <div class="flex-top-card">
                  <div class="card-big-num">75{{this.modelLabel}}</div>
                  <div style="display: flex; align-items: center;">
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
                       width: 90%;
                    flex-wrap: wrap;
                    min-width: 200px;

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
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
               
                    width: 90%;
                    flex-wrap: wrap;
                    min-width: 200px;
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
                </div>
                <div class="flex-bottoms">
                  <div>结构 S-10%; A-20%; B-70%</div>
                </div>
                <div
                  class="flex-bottoms"
                  style="padding-bottom: 10px; padding-top: 4px"
                >
                  <div>毛利率 <span class="light-blue">75%</span></div>
                </div>
              </div>
            </div>
            <div class="line"></div>
          </div>
        </div>

        <!-- 整列中 -->
        <div class="middle-box">
          <div class="flex-fang">
            <div class="fang-color"></div>
            <div class="fang-color"></div>
          </div>
          <div class="flex-char">
            <div>
              <div class="middle-font"> 事业部年度生产规划及达成趋势图</div>
                <div class="legend"> 
                <template v-if="echartsLabel">
                  <div class="item" v-for="(item,index) in echartsLabel" :key="index">
                    <div class="lump" :class="item.class"></div>
                    <div class="text">{{item.text}}</div>
                  </div>
                </template>
              </div>
              <div id="main2" class="echartsBox">
        
              </div>
            </div>
          </div>
        </div>
          <TableCardBox   :mesInfo="mesInfo2" :headTitle="headTitle2" />   
        <!-- 底部表格 -->
           <!-- <TableCardBox :leftData="tableInner" :rightData="tableOutter" 
      :rowSpanNumber2="rowSpanNumber2" :rowSpanNumber1="rowSpanNumber1" 
      :titleHead="titleHead" style="transform: scale(0.98);"/>    -->
           <!-- <TableCardBox  />    -->
        <!-- <div class="flex-bottom">
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
        </div> -->
      </div>
      <!-- 整列右边 -->
      <div class="right-box">
        <!-- 上 -->
        <div class="card-box">
          <div class="card-font">I</div>
          <div class="card-border-box">
            <div class="line"></div>
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
            <div class="line4"></div>
            <div class="left-right-box">
              <div class="centerInfo" >
                <div class="flex-top-card">
                  <div class="top-left-font">内销</div>
                  <div class="flex-finish">
                    <div class="finish-font">责任制 <span>100{{this.modelLabel}}</span></div>
                    <div class="finish-font">完成率 <span>75%</span></div>
                  </div>
                </div>
                <div class="flex-top-card">
                  <div class="card-big-num">76{{this.modelLabel}}</div>
                  <div style="display: flex; align-items: center">
                    <!-- <div class="finish-font">环境</div>
                    <div class="fontInfo">
                      21亿
                
                    </div> -->
                  </div>
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 90%;
                    flex-wrap: wrap;
                    min-width: 200px;
                    
                  "
                >
                  <div class="card-middle-progress">
                    <div style="display: flex; align-items: center">
                      <div class="finish-font">环境</div>
                      <div class="fontInfo">
                        11亿
                        <!-- <div class="progress-middle">
                          <a-progress
                            :percent="50"
                            :show-info="false"
                            strokeColor="#FF8B2F"
                          />
                        </div> -->
                        <!-- <div class="progress-middle">
                          <a-progress
                            :percent="50"
                            :show-info="false"
                            strokeColor="rgb(102, 255, 255)"
                          />
                        </div> -->
                      </div>
                    </div>
                  </div>
                  <div class="card-middle-progress">
                    <div style="display: flex; align-items: center">
                      <div class="finish-font">进度</div>
                      <div class="fontInfo">
                        32亿
                        <!-- <div class="progress-middle">
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
                        </div> -->
                      </div>
                    </div>
                  </div>
                  <div class="card-middle-progress">
                    <div style="display: flex; align-items: center">
                      <div class="finish-font">烹饪</div>
                      <div class="fontInfo">
                        3亿
                        <!-- <div class="progress-middle">
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
                        </div> -->
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                      width: 90%;
                    flex-wrap: wrap;
                    min-width: 200px;
                  "
                >
                  <div class="card-middle-progress">
                    <div style="display: flex; align-items: center">
                      <div class="finish-font">电动</div>
                      <div class="fontInfo">
                        2亿
                        <!-- <div class="progress-middle">
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
                        </div> -->
                      </div>
                    </div>
                  </div>
                  <div class="card-middle-progress">
                    <div style="display: flex; align-items: center">
                      <div class="finish-font">饮品</div>
                      <div  class="fontInfo">
                        9亿
                        <!-- <div class="progress-middle">
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
                        </div> -->
                      </div>
                    </div>
                  </div>
                  <div class="card-middle-progress">
                    <div style="display: flex; align-items: center">
                      <div class="finish-font">条理</div>
                      <div class="fontInfo">
                        12亿
                       
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex-bottoms">
                  <div>结构 S-10%; A-20%; B-70%</div>
                </div>
                <div
                  class="flex-bottoms"
                  style="padding-bottom: 10px; padding-top: 4px"
                >
                  <div>毛利率 <span class="light-blue">75%</span></div>
                </div>
              </div>
              <div class="mt-border"></div>
              <div class="centerInfo">
                <div class="flex-top-card">
                  <div class="top-left-font">外销库存</div>
                  <div class="flex-finish">
                    <div class="finish-font">库存目标 <span>100{{this.modelLabel}}</span></div>
                    <div class="finish-font">库存比 <span>75%</span></div>
                  </div>
                </div>
                <div class="flex-top-card">
                  <div class="card-big-num">75亿</div>
                  <div style="display: flex; align-items: center">
                    <!-- <div class="finish-font">条理</div>
                      <div class="fontInfo">
                        15亿
                       
                      </div> -->
                  </div>
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                      width: 90%;
                    flex-wrap: wrap;
                    min-width: 200px;
                  "
                >
                  <div class="card-middle-progress">
                    <div style="display: flex; align-items: center">
                       <div class="finish-font">条理</div>
                      <div class="fontInfo">
                        18亿
                       
                      </div>
                    </div>
                  </div>
                  <div class="card-middle-progress">
                    <div style="display: flex; align-items: center">
                    <div class="finish-font">电动</div>
                      <div class="fontInfo">
                        28亿
                       
                      </div>
                    </div>
                  </div>
                  <div class="card-middle-progress">
                    <div style="display: flex; align-items: center">
                     <div class="finish-font">烹饪</div>
                      <div class="fontInfo">
                        78亿
                       
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                      width: 90%;
                    flex-wrap: wrap;
                    min-width: 200px;
                  "
                >
                  <div class="card-middle-progress">
                    <div style="display: flex; align-items: center">
                     <div class="finish-font">环境</div>
                      <div class="fontInfo">
                        18亿
                       
                      </div>
                    </div>
                  </div>
                  <div class="card-middle-progress">
                    <div style="display: flex; align-items: center">
                     <div class="finish-font">烹饪</div>
                      <div class="fontInfo">
                        71亿
                       
                      </div>
                    </div>
                  </div>
                  <div class="card-middle-progress">
                    <div style="display: flex; align-items: center">
                      <div class="finish-font">电池</div>
                      <div class="fontInfo">
                        88亿
                       
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex-bottoms">
                  <div>结构 S-10%; A-20%; B-70%</div>
                </div>
                <div
                  class="flex-bottoms"
                  style="padding-bottom: 10px; padding-top: 4px"
                >
                  <div>毛利率 <span class="light-blue">75%</span></div>
                </div>
              </div>
            </div>
            <div class="line"></div>
          </div>
        </div>
        <!-- 内容中 -->
        <div class="middle-box">
          <div class="flex-fang">
            <div class="fang-color"></div>
            <div class="fang-color"></div>
          </div>
          <div class="flex-char">
            <div>
              <div class="middle-font">事业部年库存生产规划及达成趋势图</div>
                  <div class="legend"> 
                <template v-if="echartsLabel">
                  <div class="item" v-for="(item,index) in echartsLabel" :key="index">
                    <div class="lump" :class="item.class"></div>
                    <div class="text">{{item.text}}</div>
                  </div>
                </template>
              </div>
              <div id="main3" class="echartsBox">
              </div>
            </div>
          </div>
        </div>

        <!-- 底部表格 -->
     
      <div class="flex-bottom">
      <!-- <TableCardBox :leftData="tableInner" :rightData="tableOutter" 
      :rowSpanNumber2="rowSpanNumber2" :rowSpanNumber1="rowSpanNumber1" 
      :titleHead="titleHead" style="transform: scale(0.98);"/>    -->
         <!-- <TableCardBox />    -->
           <TableCardBox   :mesInfo="mesInfo3" :headTitle="headTitle3" />   
       </div>
        <!-- 底部表格3 -->
        <!-- <div class="flex-bottom">
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
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import API from "../../../service/api";
import TableCardBox from '@/views/center/components/table/ColumnTable.vue';
// import echarts from "echarts";
export default {
  name: "s",
   components: {
    TableCardBox
  },
  data() {
    return {
      // * tQtyAll 合计责任制销量

      //* orgQtyAll 合计累计达成销量
        echartsLabel: [
          { class: "plan", text: "实际达成" },
          { class: "plan", text: "规划达成" },
          { class: "average", text: "日均线" },
        ],
          headTitle1: {
                    inSale: {
                        title: "责任制",
                        text: "累计达成",
                        innerSaleTaskAmt: "innerSaleTaskAmt",
                        innerCnyAmt: "innerCnyAmt",
                    },
                    outSale: {
                        title: "责任制",
                        text: "累计达成",
                        outerSaleTaskAmt: "outerSaleTaskAmt",
                        outerCnyAmt: "outerCnyAmt",
                    },
                    total: {
                        title: "责任制",
                        text: "累计达成",
                        saleTaskAmtAll: "saleTaskAmtAll",
                        cnyAmtAll: "cnyAmtAll",
                    },
                },
          headTitle2: {
                    inSale: {
                        title: "双向契约",
                        text: "累计达成",
                        innerSaleTaskAmt: "innerSaleTaskAmt",
                        innerCnyAmt: "innerCnyAmt",
                    },
                    outSale: {
                        title: "双向契约",
                        text: "累计达成",
                        outerSaleTaskAmt: "outerSaleTaskAmt",
                        outerCnyAmt: "outerCnyAmt",
                    },
                    total: {
                        title: "双向契约",
                        text: "累计达成",
                        saleTaskAmtAll: "saleTaskAmtAll",
                        cnyAmtAll: "cnyAmtAll",
                    },
          },
           headTitle3: {
                    inSale: {
                        title: "目标",
                        text: "实际达成",
                        day:"周转天数",
                        innerSaleTaskAmt: "innerSaleTaskAmt",
                        innerCnyAmt: "innerCnyAmt",
                        dayAll:"day"
                    },
                    outSale: {
                        title: "周转天数",
                        text: "累计达成",
                        day:"周转天数",
                        outerSaleTaskAmt: "outerSaleTaskAmt",
                        outerCnyAmt: "outerCnyAmt",
                        dayAll:"day"
                    },
                    total: {
                        title: "责任制",
                        text: "累计达成",
                        day:"周转天数",
                        saleTaskAmtAll: "saleTaskAmtAll",
                        cnyAmtAll: "cnyAmtAll",
                        dayAll:"day"
                    },
          },
         headTitle: {
                    inSale: {
                        title: "责任制",
                        text: "累计达成",
                     
                        innerSaleTaskAmt: "innerSaleTaskAmt",
                        innerCnyAmt: "innerCnyAmt",
                    },
                    outSale: {
                        title: "责任制",
                        text: "累计达成",
                     
                        outerSaleTaskAmt: "outerSaleTaskAmt",
                        outerCnyAmt: "outerCnyAmt",
                    },
                    total: {
                        title: "责任制",
                        text: "累计达成",
                      
                        SaleTaskAmtAll: "SaleTaskAmtAll",
                        cnyAmtAll: "cnyAmtAll",
                    },
                },
                 nesInfo: [
                    {
                        businessEntityName: "环境",
                        innerSaleTaskAmt: 23,
                        innerCnyAmt: 41,
                        outerSaleTaskAmt: 44,
                        outerCnyAmt: 65,
                        totalRespon: 79,
                        totalDone: 80,
                        outerCnyAmtRatio :20,
                        innerCnyAmtRatio:90,
                        outerCnyAmtRatio:13,
                    
                        
                    },
                    {
                        businessEntityName: "烹饪",
                        innerSaleTaskAmt: 24,
                        innerCnyAmt: 21,
                        outerSaleTaskAmt: 44,
                        outerCnyAmt: 35,
                        totalRespon: 79,
                          outerCnyAmtRatio :20,
                        innerCnyAmtRatio:90,
                        outerCnyAmtRatio:13,
                        totalDone: 80,
                    },
                    {
                        businessEntityName: "电磁",
                        innerSaleTaskAmt: 25,
                        innerCnyAmt: 21,
                        outerSaleTaskAmt: 44,
                        outerCnyAmt: 65,
                        totalRespon: 79,
                        totalDone: 80,
                          outerCnyAmtRatio :20,
                        innerCnyAmtRatio:90,
                        outerCnyAmtRatio:13,
                    },
                    {
                        businessEntityName: "调理",
                        innerSaleTaskAmt: 27,
                        innerCnyAmt: 21,
                        outerSaleTaskAmt: 44,
                        outerCnyAmt: 65,
                        totalRespon: 79,
                        totalDone: 80,
                          outerCnyAmtRatio :20,
                        innerCnyAmtRatio:90,
                        outerCnyAmtRatio:13,
                    },
                    {
                        businessEntityName: "电动",
                        innerSaleTaskAmt: 43,
                        innerCnyAmt: 21,
                        outerSaleTaskAmt: 44,
                        outerCnyAmt: 65,
                        totalRespon: 79,
                        totalDone: 80,
                          outerCnyAmtRatio :20,
                        innerCnyAmtRatio:90,
                        outerCnyAmtRatio:13,
                    },
                    {
                        businessEntityName: "饮品",
                        innerSaleTaskAmt: 23,
                        innerCnyAmt: 21,
                        outerSaleTaskAmt: 49,
                        outerCnyAmt: 65,
                        totalRespon: 79,
                        totalDone: 80,
                          outerCnyAmtRatio :20,
                        innerCnyAmtRatio:90,
                        outerCnyAmtRatio:13,
                    },
                    {
                        businessEntityName: "合计",
                        innerSaleTaskAmt: 83,
                        innerCnyAmt: 21,
                        outerSaleTaskAmt: 49,
                        outerCnyAmt: 65,
                        totalRespon: 79,
                        totalDone: 80,
                          outerCnyAmtRatio :20,
                        innerCnyAmtRatio:90,
                        outerCnyAmtRatio:13,
                    },
                ],
                  mesInfo3: [
                    {
                        businessEntityName: "环境",
                        innerSaleTaskAmt: 123,
                        innerCnyAmt: 141,
                        outerSaleTaskAmt: 144,
                        outerCnyAmt: 165,
                        saleTaskAmtAll: 193,
                        cnyAmtAll: 230,
                        outerCnyAmtRatio:30,
                        outerCnyAmtRatio:13,
                        outerCnyAmtRatio :2,
                        day:9
                    },
                    {
                        businessEntityName: "烹饪",
                         innerSaleTaskAmt: 22,
                        innerCnyAmt: 1,
                        outerSaleTaskAmt: 34,
                        outerCnyAmt: 65,
                        saleTaskAmtAll: 93,
                        cnyAmtAll: 130,
                        innerCnyAmtRatio:90,
                        outerCnyAmtRatio:13,
                        dateRadio :2,
                        day:10
                    },
                    {
                        businessEntityName: "电磁",
                        innerSaleTaskAmt: 223,
                        innerCnyAmt: 114,
                        outerSaleTaskAmt: 234,
                        outerCnyAmt: 65,
                        saleTaskAmtAll: 94,
                        cnyAmtAll: 101,
                        innerCnyAmtRatio:90,
                        outerCnyAmtRatio:13,
                        dateRadio :2,
                        day:11
                    },
                    {
                        businessEntityName: "调理",
                        innerSaleTaskAmt: 9,
                        innerCnyAmt: 13,
                        outerSaleTaskAmt: 34,
                        outerCnyAmt: 365,
                        saleTaskAmtAll: 95,
                        cnyAmtAll: 103,
                          innerCnyAmtRatio:90,
                        outerCnyAmtRatio:13,
                        dateRadio :2,
                        day:12
                    },
                    {
                        businessEntityName: "电动",
                        innerSaleTaskAmt: 49,
                        innerCnyAmt: 33,
                        outerSaleTaskAmt: 44,
                        outerCnyAmt: 65,
                        saleTaskAmtAll: 355,
                        cnyAmtAll: 93,
                          innerCnyAmtRatio:90,
                        outerCnyAmtRatio:13,
                        dateRadio :2,
                         day:12
                    },
                    {
                        businessEntityName: "饮品",
                        innerSaleTaskAmt: 749,
                        innerCnyAmt: 363,
                        outerSaleTaskAmt: 434,
                        outerCnyAmt: 65,
                        saleTaskAmtAll: 25,
                        cnyAmtAll: 108,
                          innerCnyAmtRatio:90,
                        outerCnyAmtRatio:13,
                        dateRadio :2,
                         day:12
                    },
                     {
                        businessEntityName: "饮品",
                        innerSaleTaskAmt: 49,
                        innerCnyAmt: 3363,
                        outerSaleTaskAmt: 434,
                        outerCnyAmt: 65,
                        saleTaskAmtAll: 25,
                        cnyAmtAll: 108,
                        outerCnyAmtRatio:90,
                        day:12,
                          innerCnyAmtRatio:90,
                        outerCnyAmtRatio:13,
                        dateRadio :2,
                    }
                   
                ],
                 mesInfo2: [
                    {
                        businessEntityName: "环境",
                        innerSaleTaskAmt: 23,
                        innerCnyAmt: 41,
                        outerSaleTaskAmt: 44,
                        outerCnyAmt: 65,
                        saleTaskAmtAll: 93,
                        cnyAmtAll: 230,
                          innerCnyAmtRatio:90,
                        outerCnyAmtRatio:13,
                        dateRadio :2,
                        
                        day:9
                    },
                    {
                        businessEntityName: "烹饪",
                         innerSaleTaskAmt: 22,
                        innerCnyAmt: 1,
                        outerSaleTaskAmt: 34,
                        outerCnyAmt: 65,
                        saleTaskAmtAll: 93,
                        cnyAmtAll: 130,
                        innerCnyAmtRatio:90,
                        outerCnyAmtRatio:13,
                        dateRadio :2,
                        day:10
                    },
                    {
                        businessEntityName: "电磁",
                        innerSaleTaskAmt: 223,
                        innerCnyAmt: 14,
                        outerSaleTaskAmt: 234,
                        outerCnyAmt: 65,
                        saleTaskAmtAll: 94,
                        cnyAmtAll: 101,
                        innerCnyAmtRatio:90,
                        outerCnyAmtRatio:13,
                        dateRadio :2,
                        day:11
                    },
                    {
                        businessEntityName: "调理",
                        innerSaleTaskAmt: 49,
                        innerCnyAmt: 13,
                        outerSaleTaskAmt: 34,
                        outerCnyAmt: 65,
                        saleTaskAmtAll: 95,
                        cnyAmtAll: 103,
                          innerCnyAmtRatio:90,
                        outerCnyAmtRatio:13,
                        dateRadio :2,
                        dateRadio:10,
                        day:12
                    },
                    {
                        businessEntityName: "电动",
                        innerSaleTaskAmt: 49,
                        innerCnyAmt: 33,
                        outerSaleTaskAmt: 44,
                        outerCnyAmt: 65,
                        saleTaskAmtAll: 55,
                        cnyAmtAll: 93,
                        outerCnyAmtRatio:90,
                        outerCnyAmtRatio :20,
                        innerCnyAmtRatio:90,
                        outerCnyAmtRatio:13,
                        dateRadio :2,
                        dateRadio:10,
                        day:12
                    },
                    {
                        businessEntityName: "饮品",
                        innerSaleTaskAmt: 49,
                        innerCnyAmt: 363,
                        outerSaleTaskAmt: 434,
                        outerCnyAmt: 65,
                        saleTaskAmtAll: 25,
                        cnyAmtAll: 108,
                          outerCnyAmtRatio :20,
                        innerCnyAmtRatio:90,
                        outerCnyAmtRatio:13,
                         day:12
                    },
                     {
                        businessEntityName: "饮品",
                        innerSaleTaskAmt: 49,
                        innerCnyAmt: 363,
                        outerSaleTaskAmt: 434,
                        outerCnyAmt: 65,
                        saleTaskAmtAll: 25,
                        cnyAmtAll: 108,
                          outerCnyAmtRatio :20,
                        innerCnyAmtRatio:90,
                        outerCnyAmtRatio:13,
                         day:12
                    }
                   
                ],
                mesInfo: [
                    {
                        businessEntityName: "环境",
                        innerSaleTaskAmt: 23,
                        innerCnyAmt: 41,
                        outerSaleTaskAmt: 44,
                        outerCnyAmt: 65,
                        SaleTaskAmtAll: 93,
                        cnyAmtAll: 230,
                          outerCnyAmtRatio :20,
                        innerCnyAmtRatio:90,
                        outerCnyAmtRatio:13,
                        
                    },
                    {
                        businessEntityName: "烹饪",
                         innerSaleTaskAmt: 22,
                        innerCnyAmt: 1,
                        outerSaleTaskAmt: 34,
                        outerCnyAmt: 65,
                        SaleTaskAmtAll: 93,
                        cnyAmtAll: 130,
                          outerCnyAmtRatio :20,
                        innerCnyAmtRatio:90,
                        outerCnyAmtRatio:13,
                        
                    },
                    {
                        businessEntityName: "电磁",
                        innerSaleTaskAmt: 223,
                        innerCnyAmt: 14,
                        outerSaleTaskAmt: 234,
                        outerCnyAmt: 65,
                        saleTaskAmtAll: 94,
                        cnyAmtAll: 101,
                          outerCnyAmtRatio :20,
                        innerCnyAmtRatio:90,
                        outerCnyAmtRatio:13,
                      
                    },
                    {
                        businessEntityName: "调理",
                        innerSaleTaskAmt: 9,
                        innerCnyAmt: 13,
                        outerSaleTaskAmt: 34,
                        outerCnyAmt: 65,
                        saleTaskAmtAll: 95,
                        cnyAmtAll: 103,
                          outerCnyAmtRatio :20,
                        innerCnyAmtRatio:90,
                        outerCnyAmtRatio:13,
                        
                    },
                    {
                        businessEntityName: "电动",
                        innerSaleTaskAmt: 49,
                        innerCnyAmt: 33,
                        outerSaleTaskAmt: 44,
                        outerCnyAmt: 65,
                        saleTaskAmtAll: 55,
                        cnyAmtAll: 93,
                          outerCnyAmtRatio :20,
                        innerCnyAmtRatio:90,
                        outerCnyAmtRatio:13,
                        
                    },
                    {
                        businessEntityName: "饮品",
                        innerSaleTaskAmt: 49,
                        innerCnyAmt: 363,
                        outerSaleTaskAmt: 434,
                        outerCnyAmt: 65,
                        saleTaskAmtAll: 25,
                        cnyAmtAll: 108,
                          outerCnyAmtRatio :20,
                        innerCnyAmtRatio:90,
                        outerCnyAmtRatio:13,
                    },
                     {
                        businessEntityName: "饮品",
                        innerSaleTaskAmt: 49,
                        innerCnyAmt: 363,
                        outerSaleTaskAmt: 434,
                        outerCnyAmt: 65,
                        saleTaskAmtAll: 25,
                        cnyAmtAll: 108,
                          outerCnyAmtRatio :20,
                        innerCnyAmtRatio:90,
                        outerCnyAmtRatio:13,
                    }
                   
                ],
       tableList: [
                    {
                        headTitle: {
                            inSale: {
                                inSaleRespon: "责任制",
                                inSaleDone: "累计达成",
                            },
                            outSale: {
                                title: "责任制",
                                text: "累计达成",
                                outSaleRespon: "outSaleRespon",
                                outSaleDone: "outSaleDone",
                            },
                            total: {
                                title: "责任制",
                                text: "累计达成",
                                totalRespon: "totalRespon",
                                totalDone: "totalDone",
                            },
                        },
                        mesInfo: [
                            {
                                mode: "环境",
                                inSaleRespon: 23,
                                inSaleDone: 21,
                                outSaleRespon: 44,
                                outSaleDone: 65,
                                totalRespon: 79,
                                totalDone: 80,
                            },
                            {
                                mode: "烹饪",
                                inSaleRespon: 23,
                                inSaleDone: 21,
                                outSaleRespon: 44,
                                outSaleDone: 65,
                                totalRespon: 79,
                                totalDone: 80,
                            },
                            {
                                mode: "电磁",
                                inSaleRespon: 23,
                                inSaleDone: 21,
                                outSaleRespon: 44,
                                outSaleDone: 65,
                                totalRespon: 79,
                                totalDone: 80,
                            },
                            {
                                mode: "调理",
                                inSaleRespon: 23,
                                inSaleDone: 21,
                                outSaleRespon: 44,
                                outSaleDone: 65,
                                totalRespon: 79,
                                totalDone: 80,
                            },
                            {
                                mode: "电动",
                                inSaleRespon: 23,
                                inSaleDone: 21,
                                outSaleRespon: 44,
                                outSaleDone: 65,
                                totalRespon: 79,
                                totalDone: 80,
                            },
                            {
                                mode: "饮品",
                                inSaleRespon: 23,
                                inSaleDone: 21,
                                outSaleRespon: 44,
                                outSaleDone: 65,
                                totalRespon: 79,
                                totalDone: 80,
                            },
                            {
                                mode: "合计",
                                inSaleRespon: 23,
                                inSaleDone: 21,
                                outSaleRespon: 44,
                                outSaleDone: 65,
                                totalRespon: 79,
                                totalDone: 80,
                            },
                        ],
                    },
                ], 
      departmentInfo: [],
      processInfo: [],
      homeSabInfo: [],
      homeGrossProfitRadio: {},
      departmentInfo1: [],
      processInfo1: [],
      homeSabInfo1: [],
      homeGrossProfitRadio1: {},
      sale: "内销",
      sales: "外销",
      showLoading:false,
      divisionList:[],
      divisionDate:[],
      divisionLine:"",
      innerDirectList:[],
      innerDirectDate:[],
      innerDirectLine:"",
      outerDirectList:[],
      outerDirectDate:[],
      outerDirectLine:"",
       // 底部表格
      tableInner:[],
      tableOutter:[],
      rowSpanNumber1:6,
      rowSpanNumber2:6,
      mode:"本部,OEM,待定",
      mode2:"本部,OEM,待定,本部,OEM,待定",
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
          // width:50
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
          key: "address2",
          align: "center",
        },
        {
          title: "毛利率",
          dataIndex: "address",
          key: "address2",
          align: "center",
        },
        {
          title: "周转天数",
          dataIndex: "address",
          key: "address",
          align: "center",
        },
        {
          title: "说到做到",
          dataIndex: "address",
          key: "address",
          align: "center",
        },
        {
          title: "排名",
          dataIndex: "address",
          key: "address2",
          align: "center",
        },
      ],
      data: [
        // {
        //     key: "1",
        //     name: "John Brown",
        //     age: 32,
        //     address: "New York No. ",
        //     tags: ["nice", "developer"],
        // },

        {
          key: "1",
          name: "Joe Black",
          age: 32,
          address: "Sidney No. ",
          tags: ["cool", "teacher"],
        },
        {
          key: "2",
          name: "Joe Black",
          age: 32,
          address: "Sidney No. ",
          tags: ["cool", "teacher"],
        },
        {
          key: "3",
          name: "Joe Black",
          age: 32,
          address: "Sidney No. ",
          tags: ["cool", "teacher"],
        },
        {
          key: "4",
          name: "Joe Black",
          age: 32,
          address: "Sidney No. ",
          tags: ["cool", "teacher"],
        },
        {
          key: "5",
          name: "Joe Black",
          age: 32,
          address: "Sidney No. ",
          tags: ["cool", "teacher"],
        },
      ],
    };
  },
    computed:{
    ontime(){
      return this.$store.state.year +'-'+ this.$store.state.month//this.$store.state.model;
    },
    // ontime2(){
    //   return this.$store.state.year +'-'+ this.$store.state.month +',' + this.$store.state.year +'-'+ this.$store.state.month;
    // },
    // ontime3(){
    //   return this.$store.state.year +'-'+ this.$store.state.month +',' + this.$store.state.year +'-'+ this.$store.state.month +','+ this.$store.state.year +'-'+ this.$store.state.month+',' +this.$store.state.year +'-'+ this.$store.state.month;
    // },
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
    toggle(){
      this.$router.push("/center/index");

    },
    async getList(timeInfo) {
      // const res = await API.getData("homeDashBoard", ontime);
      // const homeSab = await API.getData("homeSab", ontime2);
      // const homeGrossProfitRadio = await API.getData(
      //   "homeGrossProfitRadio",
      //   ontime2
      // );
       let obj = {
        code:"homeDashBoard",
      }

       let homeSabInfo = {
        code:"homeSab",
      }
        const res = await API.getTotal(
         Object.assign(timeInfo,obj)
        );
        const homeSab = await API.getTotal(Object.assign(timeInfo,homeSabInfo));
         let homeGross = {
        code:"homeGrossProfitRadio",
        }
        const homeGrossProfitRadio = await API.getTotal(
         Object.assign(timeInfo,homeGross)
        );
      //const homeSab = await API.getTotal(Object.assign(timeInfo,homeSabInfo));
  
         
        this.departmentInfo = res.rows.filter((v) => {
          return v.directName == "内销";
        })[0];
        // console.log( this.departmentInfo);
        this.processInfo = res.rows.filter((v) => {
          return v.directName == "内销";
        });
        //this.homeSabInfo = homeSab.rows;
         this.homeSabInfo = homeSab.rows.filter((v) => {
          return v.directName == "内销";
        })
        // console.log("this.homeSabInfo this.homeSabInfo this.homeSabInfo ",this.homeSabInfo );
        this.homeGrossProfitRadio = homeGrossProfitRadio.rows.filter((v) => {
          return v.directName ==this.sale;
        })[0];
              console.log("外销",this.homeGrossProfitRadio);
      
           this.departmentInfo1 = res.rows.filter((v) => {
          return v.directName == this.sales;
        })[0];
        console.log("外销",this.departmentInfo1);

        this.processInfo1 = res.rows.filter((v) => {
          return v.directName == "外销";
        });
        this.homeSabInfo1 = homeSab.rows.filter((v) => {
          return v.directName == "外销";
        });
          // console.log("homeSabInfo1",this.homeSabInfo );
        this.homeGrossProfitRadio1 = homeGrossProfitRadio.rows.filter((v) => {
          return v.directName == this.sales;
        })[0];

    },
   // 底部table/
    async getTable(ontime) {
      try {
          let time = {
        code:'homeByDirectTotal'
      };
      Object.assign(ontime,time)

        // let tableInner = await API.getData(
        //   "homeByDirectTotal",
        //   ontime
        // );
       let tableInner =await API.getTotal(ontime);

        this.nesInfo=tableInner.rows;
        // let tableOutter = await API.getData(
        //   "homeByDirectTotal",
        //   "2022-03"
        // );

        // this.tableInner = tableInner.rows;
        // this.tableOutter = tableOutter.rows;
        // this.rowSpanNumber2 = this.tableOutter.length;

        // let innerTop = tableInner.rows.filter((v) => {
        //   return v.marketChannel == "线上";
        // });
        // this.rowSpanNumber1 = innerTop.length;

        // let innerBottom = tableInner.rows.filter((v) => {
        //   return v.marketChannel == "线下";
        // });
        // let innerTotal = tableInner.rows.filter((v) => {
        //   return v.marketChannel == "底部合计";
        // });
        // this.tableInner = innerTop.concat(innerBottom,innerTotal);
        // console.log('this.tableInner',this.rowSpanNumber1,this.tableInner)


        // console.log("this.data", this.data);
      } catch (err) {
        console.log(err);
      }
    },
     async getLine(params) {
      this.showLoading = true
      try {
      let chart = {
        code:'homeAnnualAmtChart'
      };
      Object.assign(params,chart)

        const res = await API.getTotal(params);
        this.divisionDate=[];
        // let obj = { divisionArr: [], innerDirect:[],outerDirect: [] };
        let newArr = res.rows.filter((item)=>{
        var timeArr = item.orderDate.replace(" ", ":").replace(/\:/g, "-").split("-");
        var yue = timeArr[1];
        var ri = timeArr[2];
          // if(item.事业部S == "事业部S"){
            // obj.divisionArr.push(item)
            this.divisionDate.push(yue+'-'+ri)
            this.divisionList.push(item.totalCnyAmt)
            console.log("折线图",item.saleAvgAmt);
            this.divisionLine=item.saleAvgAmt;
            this.myEcharts();
          this.showLoading = false
        })
         
      } catch (error) {
        console.log(error);
      }
    },

    async infoList(){
      let res = await API.textInfo()
      console.log("88888",res)
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
              label:true,
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
      myChart3.setOption(option);
    },
    
    init(model){
    // this.getList();
    // this.getCard(this.ontime);
    // this.getTable(this.ontime);
    // this.getdashboard(this.ontime);
    // this.queryCardSAB(this.ontime);

    // let params = `${this.ontime},${model}`;
    // let time = `${this.ontime}-01,${this.ontime}-31`; /*年月日*/
    // let lineParams =  `${time},${model},${time},${model}`;

    let params = {  /*年月*/
      month_date:this.ontime
    };
    let listParams = { /*年月日*/
      start_date:`${this.ontime}-01`,
      end_date:`${this.ontime}-31`
    }

   
    this.getList(params);
    this.getLine(listParams);
    this.getTable(params);
    this.myEcharts();
    this.myEcharts2();
    this.myEcharts3();
    }
  },
  mounted() {
    this.init(this.model);
    this.infoList();
  },
};
</script>
<style scoped>
     .fontInfo{
       color: #66ffff;
     }

       
    .main-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 33;
        /* padding: 10px 10px; */
    }

    /* 整列左边 */
    .left-box {
        height: 89vh;
        overflow: hidden;
        /* width: 605px; */
        flex: 1;
        margin-top: 20px;
        margin-left: 20px;
        margin-right: 10px;
        box-sizing: border-box;
        background-image: url("../../../assets/img/backgrounCard.svg");
        background-repeat: no-repeat;
        background-size: cover;
    }

    /* flex-card */




    /* 整列中间 */
    .center-box {
        height: 89vh;
        overflow: hidden;
        /* width: 605px; */
        margin-top: 20px;
        margin-left: 8px;
        margin-right: 8px;
        box-sizing: border-box;
        flex: 1;
        background-image: url("../../../assets/img/backgrounCard.svg");
        background-repeat: no-repeat;
        background-size: cover;
    }

    /* 右边 */
    .right-box {
        height: 89vh;
        overflow: hidden;
        /* width: 605px; */
        margin-top: 20px;
        margin-left: 10px;
        margin-right: 20px;
        box-sizing: border-box;
        flex: 1;
        background-image: url("../../../assets/img/backgrounCard.svg");
        background-repeat: no-repeat;
        background-size: cover;
    }

    /*上 card-box */
    .card-box {
        height: 248px;
        /* width: 605px; */
        width: 100%;
        /* background-image: url("../../../assets/img/bigCardBackground.svg"); */
        background-repeat: no-repeat;
        /* margin-left: 20px; */
        background-size: cover;
    }

    .card-font {
        font-size: 16px;
        color: #fff;
        text-align: center;
        font-weight: 600;
        cursor: pointer;
        color: #19ecff;
    }

    /* .flex-card {
display: flex;
margin-top: 20px;
} */
    .flex-top-card {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    .top-left-font {
        font-size: 14px;
        color: #fff;
        margin-right: 20px;
    }

    .card-border-box {
        margin:20px 14px;
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
    .centerInfo{
      flex: 1;padding-top: 10px;padding-left: 40px;
       
       
    }
    .wrapInfo{
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 80%;
            flex-wrap: wrap;
            min-width: 200px;
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
        margin-right: 15px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
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
        height: 32px;
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

    /* 中 */
    .flex-char {
        width: 100%;
        margin: 10px auto;
        /* margin-bottom: 20px; */
    }

    .echartsBox {
        width: 100%;
        height: 25vh;
    }

    .fang-color {
        width: 10px;
        height: 10px;
        /* background-color: hsla(188, 100%, 50%, 1); */
    }

    .middle-box {
        width: 100%;
        /* margin: 30px auto; */
        /* border: 1px solid hsla(210, 86%, 39%, 0.66); */
    }

    .flex-font-middle {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        color: #fff;
    }

    .middle-font {
        font-size: 18px;
        color: #fff;
        font-weight: 600;
        text-align: center;
        margin-bottom: 10px;
    }


    .flex-bottom {
        width: 100%;
        margin: 0 auto;
        /* padding-bottom: 20px; */
    }

    .execl {
        /* background: url("../../../assets/img/tableVBackround.svg"); */
        /* width: 99%; */
        /* height: 368px; */
        /* height: 27vh; */
        /* align-items: center;
        background-size: cover;
        background-color: rgba(2, 0, 77, 0.4);
        box-shadow: inset 0px 0px 34px 0px rgba(17, 40, 255, 0.66);
        border: 2px solid #0d53b7;
        border-radius: 0 0 10px 10px;
        margin-left: 4px; */
        

    }

    ::v-deep .ant-table-thead>tr>th {
        background: rgb(4, 19, 112);
        border-bottom: 1px solid rgb(55, 56, 112);
        border-right: 1px solid rgb(55, 56, 112);
        padding: 0;
        font-family: 'Microsoft YaHei';
        font-size: 12px;
    }

    ::v-deep .ant-table-thead>tr>th .ant-table-header-column {
        color: #fff;
        font-size: 12px;
        padding: 0;

    }

    ::v-deep .ant-table-bordered .ant-table-tbody>tr>td {
        border: 1px solid rgb(55, 56, 112);
        color: #fff;
        padding: 0;
        line-height: 26px;
        font-family: 'Microsoft YaHei';
        font-size: 12px;
        line-height: 40px;
    }

    ::v-deep .ant-table-tbody>tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected)>td {
        background: transparent;
    }

    ::v-deep .ant-spin-nested-loading {
        margin: 14px;
    }

    ::v-deep .ant-table-thead>tr:first-child>th:first-child {
        background: linear-gradient(to right, rgb(80, 192, 255), rgb(90, 255, 163), rgb(102, 255, 255));

    }
    ::v-deep .el-table .el-table__header-wrapper .el-table__cell{
      padding:2px 0;
    }
    ::v-deep .el-table .el-table__body-wrapper .el-table__cell{
      padding:2px 0;
    }
</style>