<template>
  <div class="execl">
    <div >

    
       <el-table
        border
        :data="mesInfo"
        :span-method="objectSpanMethod"
        width="864px"
        class="exportTable"
        :cell-style="{padding: '5px 0', borderColor: '#1E1D51'  }"
        :row-style="rowStyle"
        height="240px"
        :header-cell-style="headerCellStyle"
      >
        <el-table-column
          align="center"
          prop="category"
          label="品类"
          height="30px"
        >
         <template v-slot="scope"  style="text-align: center;border:1px solid red;">
            <div  class="nameColor"   @click="handleClick">
              {{ scope.row.category }}
            </div>
        
          </template>
        </el-table-column>
             
  
             
        <el-table-column
          prop="onLineCnyAmt"
          align="center"
          label="线上"
          height="30px"
        >
         <template v-slot="scope">
            <div class="precent">
              <div style="width: 40%">
              {{ scope.row.onLineCnyAmt }}
            </div>
            <div style="margin-top: 5px">
                  <Progress style="margin-bottom: 3px;text-align: center;" :rate="scope.row.onLineCompleteRatio" :color="'#FF8B2F'"
                      class="precentCompentes" />
                  <Progress :rate="scope.row.dateRadio" :color="'#66FFFF'" class="precentCompentes" />
            </div>
            </div>
          </template> 
      
        </el-table-column>
             
        <el-table-column
          prop="outLineCnyAmt"
          align="center"
          label="线下"
          height="30px"
        >
           <template v-slot="scope">
              <div class="precent">
                  <div style="width: 40%">
                      {{ scope.row.outLineCnyAmt .toFixed(1) }}
                  </div>
                  <div style="margin-top: 5px">
                      <Progress style="margin-bottom: 3px" :rate="scope.row.outLineCompleteRatio" :color="'#FF8B2F'"
                          class="precentCompentes" />
                      <Progress :rate="scope.row.dateRadio" :color="'#66FFFF'" class="precentCompentes" />
                  </div>
              </div>
            </template>
        </el-table-column>
             
        <el-table-column
          prop="totalCnyAmt"
          align="center"
          label="合计"
          height="30px">
          <template v-slot="scope">
            <div class="precent">
              <div style="width: 40%">
                {{ scope.row.totalCnyAmt }}
              </div>
                <div style="margin-top: 5px">
                  <Progress style="margin-bottom: 3px" :rate="scope.row.totalCompleteRatio" :color="'#FF8B2F'"
                      class="precentCompentes" />
                  <Progress :rate="scope.row.dateRadio" :color="'#66FFFF'" class="precentCompentes" />
              </div>
            </div>
          </template>
        </el-table-column>
    
      </el-table>
    </div>
  </div>
</template>
<script>

import Progress from "./Progress.vue";
export default ({
  name: "PisSummaryTable",
  props: {
    mesInfo: {
      type: Array,
    },
    color: {
      type: String,
    },
    directName: {
      type: String,
    },
    rowSpanNumber: {
      type: Number,
    },
    cooprMode:{
      type:Boolean
    }
  },
  components: {
    Progress,
  },
  data() {
    return {};
  },
  methods: {
    handleClick(){
      this.$emit('handleClick')
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      let number = 0;
      this.mesInfo.forEach((item, idnex) => {
        number++
      });
      // 底部合计合并单元格
      if (rowIndex === (number-1)) {
        if (columnIndex == 1 || columnIndex == 2) {
          return [0, 0];
        }
        if (columnIndex === 0) {
          return [1, 3];
        }
      }
      // 上下线合并单元格
      // if (columnIndex === 0) {
      //     if (rowIndex % this.rowSpanNumber === 0) {
      //       return {
      //         rowspan: this.rowSpanNumber,
      //         colspan: 1,
      //       };
      //     } else {
      //       return {
      //         rowspan: 0,
      //         colspan: 0,
      //       };
      //     }
      // }
    },
    rowStyle({ row, rowIndex }) {
      return {
        backgroundColor: "#070640",
        color: "#fff",
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
});
</script>
<style scoped>
.execl {
  width:calc(50% - 15px);
  height: 254px;
  background-color: rgba(2, 0, 77, 0.4);
  box-shadow: inset 0px 0px 34px 0px rgba(17, 40, 255, 0.66);
  border: 2px solid #0d53b7;
  background-image: url("../../../../assets/img/tableVBackround.svg");
  border-radius: 0 0 10px 10px;
}

.execl-box {
  width: 864px;
  height: 200px;
  margin: 20px auto 0;
}

.nameColor {
  color: #00ddff;
  cursor: pointer;
}


.precent {
  width: 100%;
  height: 23px;
  display: flex;
}

.precentCompentes {
  width: 35px;
  height: 4px;
}

:deep(.el-table--enable-row-hover .el-table__body tr:hover > td) {
  background-color: #070640 !important;
}

.tableRowClass {
  margin-right: 5px !important;
  font-size: 8px !important;
}

.exportTable {
  border: 1px solid #1e1d51;
}

body .el-table::before {
  z-index: inherit;
}

.el-table--border::after,
.el-table--group::after {
  width: 0;
  height: 0;
}
</style>
