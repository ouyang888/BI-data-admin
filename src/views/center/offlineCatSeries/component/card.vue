<template>
  <div class="flex-card" >
    <div class="card-box" v-for="(v,i) in list" :key="i">
      <div class="card-font" @click="gotoCatSeries(v.cooprLevel1)">{{v.cooprLevel1}} </div>
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
                <div class="finish-font">责任制 <span>{{v.cooprLevel1TaskAmt}}亿</span></div>
                <div class="finish-font">完成率 <span>{{v.cooprLevel1AmtRadio}}%</span></div>
              </div>
            </div>
            <div class="flex-top-card">
              <div class="card-big-num">{{v.cooprLevel1NameAmt}}亿</div>
               <div class="flex-finish">
                <!-- <div class="finish-font">进度 <span>s</span></div>
                <div class="finish-font">完成率 <span>75%</span></div> -->
              </div>
              <div style="display: flex; align-items: center">
                <div class="finish-font">进度</div>
                <div>
                  <div class="progress">
                    <a-progress
                      :percent="v.dateRadio"
                      :show-info="false"
                      strokeColor="#FF8B2F"
                    />
                  </div>
                  <div class="progress">
                    <a-progress
                      :percent="v.saleAmtRadio"
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

  </div>
</template>

<script>
  export default {
    name: 'DataCard',
    props: {
      list: {
        type: Array,
        default: function () { return [] }
      },
      cardObj: {
        type:Object,
        default: function () { return {} }
      },
    },
    methods: {
      gotoCatSeries(val) {
        this.$emit('gotoCatSeries',val)
      }
    }

  }
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
    background: url("../../../../assets/img/tableVBackround.svg");
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
    width: 50%;
    position: relative;
  }

  .card-box {
    background-image: url("../../../../assets/img/smallCardBackground.svg");
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
    justify-content:flex-start;
  }
  /* .card-box::nth-child(2n){
    margin-left:10px;
    margin-
  } */

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

  ::v-deep .ant-table-bordered .ant-table-body>table {
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