<template>
  <div class="execl">
    <el-table
      border
      :data="tableData"
      :span-method="objectSpanMethod"
      show-summary
      :summary-method="getSummaries"
      width="864px"
      class="execl-box"
      :cell-style="{ padding: '5px 0', borderColor: '#1E1D51' }"
      :row-style="rowStyle"
      :header-cell-style="headerCellStyle"
      height="287"
    >
           
      <el-table-column
        :prop="headerObj.name"
        align="center"
        :label="title"
        height="30px"
      >
      </el-table-column>
           
      <el-table-column v-if="!level.includes(router)"
        :prop="headerObj.level"
        align="center"
        label="责任人"
        height="30px"
      >
        <template v-slot="scope">
          <div class="nameColor" @click="handleClick">
            {{ scope.row[headerObj.level] }}
          </div>
        </template>
      </el-table-column>
           
      <el-table-column
        :prop="headerObj.tAvgAmt"
        align="center"
        :label="'责任制'+$store.state.tableUnit"
        height="30px"
        >
        <!-- v-if="tAvgAmtArr.includes(router)" -->
      
        <template v-slot="scope">
          {{ !scope.row[headerObj.tAvgAmt] || Math.abs(scope.row[headerObj.tAvgAmt].toFixed(2)) ==0?0:scope.row[headerObj.tAvgAmt].toFixed(2) }}
        </template>
      </el-table-column>
           
      <el-table-column
        prop="cnyAmt"
        align="center"
        :label="'累计达成'+$store.state.tableUnit"
        height="30px"
      >
        <template v-slot="scope">
          {{ !!scope.row.cnyAmt && Math.abs(scope.row.cnyAmt.toFixed(2))!=0 ?scope.row.cnyAmt.toFixed(2):0}}
        </template>
      </el-table-column>
           
      <el-table-column
        :prop="headerObj2.amtRadio"
        align="center"
        label="任务完成率"
        height="30px"
        width="130"
      >
        <template v-slot="scope">
          <div class="precent">
            <div class="precent-in" style="width: 88px">
              {{
                scope.row[headerObj2.amtRadio] && scope.row[headerObj2.amtRadio]
                  ? (scope.row[headerObj2.amtRadio]*100).toFixed(2) + "%"
                  : 0 + "%"
              }}
            </div>
            <div style="margin-top: 5px">
              <Progress
                style="margin-bottom: 3px"
                :rate="!!scope.row.dateRadio?scope.row.dateRadio*100:0"
                :color="'#FF8B2F'"
                class="precentCompentes"
              />
              <Progress
                :rate="!!scope.row[headerObj2.amtRadio]?scope.row[headerObj2.amtRadio]*100:0"
                :color="'#66FFFF'"
                class="precentCompentes"
              />
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column :prop="headerObj2.profitRadio" align="center" label="毛利率">
        <template v-slot="scope">
          {{
            scope.row[headerObj2.profitRadio]
              ? (scope.row[headerObj2.profitRadio]*100).toFixed(2) + "%"
              : 0 + "%"
          }}
        </template>
      </el-table-column>
           
      <!-- <el-table-column
        prop="turnoverDays"
        align="center"
        label="周转天数"
        height="30px"
      >
      </el-table-column> -->
           
      <el-table-column
        :prop="headerObj2.amtFinish"
        align="center"
        label="说到做到"
        height="30px"
      >
        <template v-slot="scope">
          <!-- <div class="precent">
            <div class="precent-in"> -->
             {{
                scope.row[headerObj2.amtFinish]
                  ? (scope.row[headerObj2.amtFinish]).toFixed(2) 
                  : 0 
              }}
  <!--{{ scope.row.amtFinish }}-->
            <!-- </div>
            <div style="margin-top: 5px"> -->
              <!-- <Progress
                style="margin-bottom: 3px"
                :rate="!!scope.row.dateRadio*100?scope.row.dateRadio*100:0"
                :color="'#FF8B2F'"
                class="precentCompentes"
              />-->

      
           
             <!--   <Progress
                :rate="scope.row[headerObj2.amtFinishRadio]*100"
                :color="'#66FFFF'"
                class="precentCompentes"
              />-->
            <!-- </div>
          </div> -->
        </template>
      </el-table-column>
           
      <el-table-column prop="ranking" align="center" label="排名" height="30px">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import Progress from "./Progress.vue";
export default{
  name: "SellSportTable",
  props: {
    mesInfo: {
      type: Array,
    },
    color: {
      type: String,
    },
    title: {
      type: String,
    },
    headerObj:{
      type:Object,
      default:function(){
        return {
          name:'cooprLevel2',
         level:'coopr_level3_manager',
         tAvgAmt:'tAvgAmt'
      } 
     }
    },
    headerObj2:{
      type:Object,
      default:function(){
        return {
          profitRadio:'profitRadio',/*任务完成率*/
          amtRadio:'amtRadio',/*毛利率*/
          amtFinish:'amtFinish',/*amtFinish*/
          amtFinishRadio:'amtFinishRadio'
          
      } 
     }
    },

    
  
  },
  data(){
    return{

    level:['exprotAreaAll','exprotAreaAllDepartment'], /* 过滤责任人路由 */
    tableData:[],/*talbe*/
    endObj:{}, /*最后一条数据*/
    // tAvgAmtArr:['domestic'], /*需要显示责任制的 路由名*/
  }

  },
  watch:{
    mesInfo:{
      handler:function(newValue,oldValue){
        // newValue.forEach((v,i)=>{
        //   // v.amtRadio = Number((v.amtRadio*100).toFixed(2));
        //   // v.profitRadio = Number((v.profitRadio*100).toFixed(2));
        //   if(newValue.length == i+1){ /*统一处理底部合计名称问题*/
        //     console.log('headerObj.name',this.headerObj.name)
        //     v[this.headerObj.name] = '合计';
        //     v.ranking = '';
        //   }
        // })
        this.tableData = newValue.slice(0,newValue.length - 1);
        this.endObj = newValue.slice(newValue.length -1 ,newValue.length)[0];

      }
    }
      
  },
  components: {
    Progress,
  },
  computed: {
    numberFilter(number) {
      let numVal = number.toFixed(2);
      return numVal;
    },
    router(){
      return this.$route.name
    },
    modelLabel() {
      return this.$store.state.showMoney == true ? "亿" : "万";
    },

  },

  methods: {
    towNumber(val) {
      return val.toFixed(2);
    },
    handleClick() {
      this.$emit("handleClick");
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      let number = 0;
      this.mesInfo.forEach((item, idnex) => {
        number++;
      });
      if (rowIndex === number - 1) {
        if (columnIndex == 0) {
          return [1, 2];
        }
        if(columnIndex == 1){
          return [0,0]
        }
      }
    },
    rowStyle({ row, rowIndex }) {
      return {
        backgroundColor: "#070640",
        color: "rgba(255,255,255,0.8)",
        fontFamily: "PingFangSC-Regular",
      };
    },
    headerCellStyle({ row, rowIndex, column, columnIndex }) {
      if (rowIndex === 0 && columnIndex === 0) {
        return {
          backgroundImage: this.color,
          color: "#fff",
          borderColor: "#1E1D51",
        };
      } else {
        let countenance = {
          color: "#fff",
          backgroundColor: "#041370",
          padding: "9px 0",
          borderColor: "#1E1D51",
        };
        return countenance;
      }
    },
    getSummaries(){
           
          //  console.log('this.endObj',this.endObj);
           let arr = ['合计',''];
 
           let arrContent = [this.endObj[this.headerObj.tAvgAmt] && this.endObj[this.headerObj.tAvgAmt].toFixed(2) || 0,this.endObj.cnyAmt && this.endObj.cnyAmt.toFixed(2) || 0,this.endObj[this.headerObj2.amtRadio] && (Number(this.endObj[this.headerObj2.amtRadio])*100).toFixed(2)+'%' || 0+'%',this.endObj[this.headerObj2.profitRadio] && Number(this.endObj[this.headerObj2.profitRadio]*100).toFixed(2)+'%' || 0+'%',this.endObj[this.headerObj2.amtFinish] || 0,''];
          //  arrContent.forEach((v,i)=>{

          //   // if(Number(v).toString()=='Number'){
          //   //   debugger;
          //   //  v = v.toFixed(2);
          //   // }
          //   // if(i==2 || i==3){
          //   //   v = v+'%';
          //   // }

          //  });
           arrContent.push('');
           arr = arr.concat(arrContent);
          
           // 增加右边合计
          //  arr.push(this.endObj.cnyAmt);
          // debugger;
 
           return arr;
 
 
       }
  },
};
</script>
<style scoped lang="scss">
.el-table {
                display: flex;
                flex-direction: column;
}

.el-table__body-wrapper {
     order:1;
}


  .execl {
    /* width: 900px; */
    width:calc(50% - 15px);
    height: 324px;
    background-color: rgba(2, 0, 77, 0.4);
    box-shadow: inset 0px 0px 34px 0px rgba(17, 40, 255, 0.66);
    border: 2px solid #0d53b7;
    background-image: url("../../../../assets/img/tableVBackround.svg");
    border-radius: 0 0 10px 10px;
    background-repeat: no-repeat;
    background-size: 100%;
  }

  .execl-box {
    /* width: 864px; */
    /* height: 287px; */
    margin: 20px auto 0;
    border-color: #1e1d51;
    background: #070640;
  }


  .nameColor {
    color: #00ddff;
    /* cursor: pointer; */
  }

  .precent {
    /* width: 90px; */
    height: 23px;
    display: flex;
  }

  .precentCompentes {
    width: 35px;
    height: 4px;
  }

  body .el-table::before {
    z-index: inherit;
  }

  .el-table--border::after,
  .el-table--group::after {
    width: 0;
    height: 0;
  }

  .el-table__fixed-right {
    height: 100% !important;
    bottom: 7px !important;
    right: 7px !important;

    .el-table__fixed-body-wrapper {
      height: calc(100% - 43px) !important;
    }
  }
  ::v-deep .el-table .el-table__cell{
    padding:8px 0;
  }

  /* 头部加粗 */
  ::v-deep.el-table .el-table__header tr {
    font-weight: 600;
  }
  /*去掉空白*/
  ::v-deep .el-table__cell.gutter{
    background:#041370;
  }


</style>
