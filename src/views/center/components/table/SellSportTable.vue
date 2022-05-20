<template>
  <div class="execl">
    <el-table
      border
      :data="mesInfo"
      :span-method="objectSpanMethod"
      show-summary
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
           
      <el-table-column v-if="router !== 'exprotAreaAll' || exprotAreaAllDepartment"
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
        label="责任制"
        height="30px"
      >
        <template v-slot="scope">
          {{ Math.abs(scope.row[headerObj.tAvgAmt]).toFixed(2) }}
        </template>
      </el-table-column>
           
      <el-table-column
        prop="cnyAmt"
        align="center"
        label="累计达成"
        height="30px"
      >
        <template v-slot="scope">
          {{ Math.abs(scope.row.cnyAmt).toFixed(0) }}
        </template>
      </el-table-column>
           
      <el-table-column
        prop="amtRadio"
        align="center"
        label="任务完成率"
        height="30px"
      >
        <template v-slot="scope">
          <div class="precent">
            <div class="precent-in">
              {{
                scope.row.amtRadio
                  ? Math.round(scope.row.amtRadio) + "%"
                  : 0 + "%"
              }}
            </div>
            <div style="margin-top: 5px">
              <Progress
                style="margin-bottom: 3px"
                :rate="scope.row.dateRadio*100"
                :color="'#FF8B2F'"
                class="precentCompentes"
              />
              <Progress
                :rate="scope.row.amtRadio"
                :color="'#66FFFF'"
                class="precentCompentes"
              />
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="profitRadio" align="center" label="毛利率">
        <template v-slot="scope">
          {{
            scope.row.profitRadio
              ? Math.round(scope.row.profitRadio) + "%"
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
        prop="amtFinish"
        align="center"
        label="说到做到"
        height="30px"
      >
        <template v-slot="scope">
          <div class="precent">
            <div class="precent-in">
              {{ scope.row.amtFinish }}
            </div>
            <div style="margin-top: 5px">
              <Progress
                style="margin-bottom: 3px"
                :rate="scope.row.dateRadio"
                :color="'#FF8B2F'"
                class="precentCompentes"
              />
              <Progress
                :rate="scope.row.amtFinish"
                :color="'#66FFFF'"
                class="precentCompentes"
              />
            </div>
          </div>
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
  
  },
  watch:{
    mesInfo:{
      handler:function(newValue,oldValue){
        newValue.forEach((v,i)=>{
          v.amtRadio = Number((v.amtRadio*100).toFixed(0));
          v.profitRadio = Number((v.profitRadio*100).toFixed(0));
          if(newValue.length == i+1){ /*统一处理底部合计名称问题*/
            console.log('headerObj.name',this.headerObj.name)
            v[this.headerObj.name] = '合计';
            v.ranking = '';
          }
        })
        this.mesInfo = newValue;

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
    }

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
  },
};
</script>
<style scoped lang="scss">
.execl {
  width:calc(50% - 15px);
  height: 324px;
  background-color: rgba(2, 0, 77, 0.4);
  box-shadow: inset 0px 0px 34px 0px rgba(17, 40, 255, 0.66);
  border: 2px solid #0d53b7;
  background-image: url("../../../../assets/img/tableVBackround.svg");
  border-radius: 0 0 10px 10px;
}

.execl-box {
  /* width: 864px; */
  height: 287px;
  margin: 5px auto 0;
  border-color: #1e1d51;
}

::v-deep.el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: #070640 !important;
}

.nameColor {
  color: #00ddff;
  /* cursor: pointer; */
}

.precent {
  width: 90px;
  height: 23px;
  display: flex;
}
.precent-in{
  width:40px;
}
.precentCompentes {
  width: 35px;
  height: 4px;
}

.exportTable {
}

body .el-table::before {
  z-index: inherit;
}

.el-table--border::after,
.el-table--group::after {
  width: 0;
  height: 0;
}

::v-deep.el-table__body-wrapper {
  &::-webkit-scrollbar {
    height: 6px;
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background-color: #070640;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #8383a5;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #8383a5;
  }
}
::v-deep.el-table__fixed-right {
  height: 100% !important;
  bottom: 7px !important;
  right: 7px !important;
  .el-table__fixed-body-wrapper {
    height: calc(100% - 43px) !important;
  }
}
::v-deep .el-table .el-table__cell.gutter{
  background:#041370;
}
::v-deep .el-table__body-wrapper{
  background: #070640;
}
::v-deep .el-table--border th.el-table__cell.gutter:last-of-type{
  border-bottom: 1px solid rgb(7 6 64);
}

</style>
