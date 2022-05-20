<template>
  <div >
    <!-- {{mesInfo}} -->
    <el-table  :data="mesInfo" :span-method="objectSpanMethod"
     show-summary
      :summary-method="getSummaries"
      :cell-style="{ padding: '0px 0', borderColor: '#1E1D51' }" :row-style="rowStyle" type="index"
      :header-cell-style="headerCellStyle" class="execl-box" >

      <el-table-column prop="marketChannel" align="center" :label="directName">
        <template v-slot="scope">
            <div class="nameColor" @click="handleClick">
              {{ scope.row.cooprMode }}
            </div>
          </template>
      </el-table-column>
      <el-table-column prop="marketCenter" align="center" :label="cooprMode" v-if="setTrueOrFalse">
        <template v-slot="scope">
            <div class="nameColor" @click="handleClick">
              {{ scope.row.businessEntityName1 }}
            </div>
          </template>
      
      </el-table-column>
      <el-table-column prop="saleVolume1" align="center" label="外销">
        <!-- <div class="nameColor" @click="handleClick">{{张茉欧}}</div> -->
        <template v-slot="scope">
            <div class="nameColor" @click="handleClick">
            {{scope.row.saleVolume1}}
              <!-- <Progress style="margin-bottom: 3px" :rate="scope.row.dateRadio*100" :color="'#FF8B2F'"
                class="precentCompentes" />
              <Progress :rate="scope.row.saleVolume1*100" :color="'#66FFFF'" class="precentCompentes" />
           -->
            </div>
          </template>
      </el-table-column>
          <!-- <el-table-column prop="saleVolume1" align="center" label="总计">

        <template v-slot="scope">
            <div class="nameColor" @click="handleClick">
    
            <div style="margin-top: -15px"> 
             {{scope.row.saleTaskAmt}}<div style="width: 30px"></div>
              <Progress :rate="scope.row.dateRadio*100" :color="'#FF8B2F'"
                class="precentCompentes" />
              <Progress :rate="scope.row.saleVolume1*100" :color="'#66FFFF'" class="precentCompentes" />
            </div>
            </div>
          </template>
      </el-table-column> -->
   
      <!-- <el-table-column v-for="(item, i) in titleHead" :key="i" :prop="i" :label="item" align="center">
        <template v-slot="scope">
          <div class="precent">
            <div style="width: 30px">{{ scope.row[i].toFixed(0)}}</div>
            <div style="margin-top: 5px"> 
              <Progress style="margin-bottom: 3px" :rate="scope.row.dateRadio*100" :color="'#FF8B2F'"
                class="precentCompentes" />
              <Progress :rate="scope.row[i.replace('businessEntityName','completeRadio')]*100" :color="'#66FFFF'" class="precentCompentes" />
            </div>
          </div>
        </template>
      </el-table-column>  -->


      <el-table-column prop="businessEntityName2" label="总计44" align="center">
        <template v-slot="scope">
         <div class="precent">
            <div style="width: 30px">{{scope.row.saleTaskAmt}}</div>
            <div style="margin-top: 5px">
              <Progress style="margin-bottom: 3px" :rate="scope.row.businessEntityName2*100" :color="'#FF8B2F'"
                class="precentCompentes" />
              <Progress :rate="scope.row.businessEntityName2*100" :color="'#66FFFF'" class="precentCompentes" />
            </div>
          </div>
        </template>
      </el-table-column>



    </el-table>
    
  </div>
</template>
<script>
  import Progress from "./Progress.vue";

  export default {
    name: "RowTable",
    props: {
      mesInfo: {
        type: Array,
      },
      directName: {
        type: String,
      },
      rowSpanNumber: {
        type: Number,
      },
      color: {
        type: String,
      },
      titleHead: {
        type: Object,
      },
      setTrueOrFalse: {
        type: Boolean,
      },
      cooprMode: {
        type: String,
      },
    },
    components: {
      Progress,
    },
    methods: {
         getSummaries(param) {
           alert(2);
           debugger;
        const { columns, data } = param;
        const sums = [];
      
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = '总价';
            return;
          }
          const values = data.map(item => Number(item[column.property]));
          if (!values.every(value => isNaN(value))) {
            sums[index] = values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
            sums[index] += ' 元';
          } else {
            sums[index] = 'N/A';
          }
        });
        console.log("水瓶座",sums);

        return sums;
      },
      handleClick(row, index) {
        this.$emit("handleClick");
      },
      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        let number = 0;
        // console.log('this.mesInfo',this.mesInfo)
        this.mesInfo.forEach((item, idnex) => {
          number++;
        });
        // console.log(number, "numbernumbernumber");
        // 底部合计合并单元格
        // if (rowIndex === number - 1) {
        //   if (columnIndex == 1 || columnIndex == 2) {
        //     return [0, 0];
        //   }
        //   if (columnIndex === 0) {
        //     return [1, 2];
        //   }
        // }
        //       if (rowIndex === 6) {
        //   if (columnIndex == 1 || columnIndex == 2) {
        //     return [0, 0];
        //   }
        //   if (columnIndex === 0) {
        //     return [1, 3];
        //   }
        // }
        // if (columnIndex === 0) {
        //   if (rowIndex % this.rowSpanNumber === 0) {
        //     return {
        //       rowspan: 0,
        //       colspan: 0,
        //     };
        //   } else {
        //     return {
        //       rowspan: 0,
        //       colspan: 0,
        //     };
        //   }
        // }
      },
      rowStyle({ row, rowIndex }) {
        return {
          backgroundColor: "#070640",
          color: "rgba(255,255,255,0.8)",
          fontFamily: 'PingFangSC-Regular'
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
          let color = {
            color: "#fff",
            backgroundColor: "#041370",
            padding: "0px 0",
            borderColor: "#1E1D51",
          };
          return color;
        }
      },
    },
  };
</script>
<style scoped lang="scss">
  .execl {
    width: 925px;
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
    width: 864px;
    margin: 20px auto 0;
    border-color: #1e1d51;
  }

  ::v-deep .el-table--enable-row-hover .el-table__body tr:hover > td {
    background-color: #070640 !important;
  }

  .nameColor {
    color: #00ddff;
    cursor: pointer;
  }

  .precent {
    width: 90px;
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

 ::v-deep .el-table__body-wrapper{
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
</style>