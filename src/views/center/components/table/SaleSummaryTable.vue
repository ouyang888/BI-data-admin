<template>
  <div class="execl">
    <div class="execl-box">
      <el-table
        border
        :data="mesInfo"
        :span-method="objectSpanMethod"
        width="864px"
        class="exportTable"
        :cell-style="{ padding: '5px 0', borderColor: '#1E1D51' }"
        :row-style="rowStyle"
        :header-cell-style="headerCellStyle"
      >
        <el-table-column
          prop="marketChannel"
          align="center"
          :label="directName"
          height="30px"
        ></el-table-column>
             
        <el-table-column
          prop="cooprMode"
          align="center"
          label="渠道"
          height="30px"
          v-if="()=>mesInfo[0].cooprMode ? true : false "
          
        >
        <template>{{mesInfo[0].cooprMode}}</template>
        </el-table-column>
             
        <el-table-column
          prop="manager3"
          align="center"
          label="负责人"
          height="30px"
        >
          <!-- <template v-slot="scope">
            <div style="text-align: center" class="nameColor"  @click="handleClick">
              {{ scope.row.manager }}
            </div>
          </template> -->
            <div style="text-align:center" class="nameColor" @click="handleClick">张茉欧</div>
        </el-table-column>
             
        <el-table-column
          prop="businessEntityName1"
          align="center"
          label="环境"
          height="30px"
        >
          <template v-slot="scope">
            <div class="precent">
              <div style="width: 30px">
                {{ scope.row.businessEntityName1 }}
              </div>
              <div style="margin-top: 5px">
                <Progress
                  style="margin-bottom: 3px"
                  :rate="scope.row.saleTaskAmt"
                  :color="'#FF8B2F'"
                  class="precentCompentes"
                />
                <Progress
                  :rate="scope.row.completeRadio1"
                  :color="'#66FFFF'"
                  class="precentCompentes"
                />
              </div>
            </div>
          </template>
        </el-table-column>
             
        <el-table-column
          prop="businessEntityName2"
          align="center"
          label="烹饪"
          height="30px"
        >
          <template v-slot="scope">
            <div class="precent">
              <div style="width: 30px">
                {{ scope.row.businessEntityName2 }}
              </div>
              <div style="margin-top: 5px">
                <Progress
                  style="margin-bottom: 3px"
                  :rate="scope.row.saleTaskAmt"
                  :color="'#FF8B2F'"
                  class="precentCompentes"
                />
                <Progress
                  :rate="scope.row.completeRadio2"
                  :color="'#66FFFF'"
                  class="precentCompentes"
                />
              </div>
            </div>
          </template>
        </el-table-column>
             
        <el-table-column
          prop="businessEntityName3"
          align="center"
          label="电磁"
          height="30px"
        >
          <template v-slot="scope">
            <div class="precent">
              <div style="width: 30px">
                {{ scope.row.businessEntityName3 }}
              </div>
              <div style="margin-top: 5px">
                <Progress
                  style="margin-bottom: 3px"
                  :rate="scope.row.saleTaskAmt"
                  :color="'#FF8B2F'"
                  class="precentCompentes"
                />
                <Progress
                  :rate="scope.row.completeRadio3"
                  :color="'#66FFFF'"
                  class="precentCompentes"
                />
              </div>
            </div>
          </template>
        </el-table-column>
             
        <el-table-column
          prop="businessEntityName4"
          align="center"
          label="调理"
          height="30px"
        >
          <template v-slot="scope">
            <div class="precent">
              <div style="width: 30px">
                {{ scope.row.businessEntityName4 }}
              </div>
              <div style="margin-top: 5px">
                <Progress
                  style="margin-bottom: 3px"
                  :rate="scope.row.saleTaskAmt"
                  :color="'#FF8B2F'"
                  class="precentCompentes"
                />
                <Progress
                  :rate="scope.row.completeRadio4"
                  :color="'#66FFFF'"
                  class="precentCompentes"
                />
              </div>
            </div>
          </template>
        </el-table-column>
             
        <el-table-column
          prop="businessEntityName5"
          align="center"
          label="电动"
          height="30px"
        >
          <template v-slot="scope">
            <div class="precent">
              <div style="width: 30px">
                {{ scope.row.businessEntityName5 }}
              </div>
              <div style="margin-top: 5px">
                <Progress
                  style="margin-bottom: 3px"
                  :rate="scope.row.saleTaskAmt"
                  :color="'#FF8B2F'"
                  class="precentCompentes"
                />
                <Progress
                  :rate="scope.row.completeRadio5"
                  :color="'#66FFFF'"
                  class="precentCompentes"
                />
              </div>
            </div>
          </template>
        </el-table-column>
             
        <el-table-column
          prop="businessEntityName6"
          align="center"
          label="饮品"
          height="30px"
        >
          <template v-slot="scope">
            <div class="precent">
              <div style="width: 30px">
                {{ scope.row.businessEntityName6 }}
              </div>
              <div style="margin-top: 5px">
                <Progress
                  style="margin-bottom: 3px"
                  :rate="scope.row.saleTaskAmt"
                  :color="'#FF8B2F'"
                  class="precentCompentes"
                />
                <Progress
                  :rate="scope.row.completeRadio6"
                  :color="'#66FFFF'"
                  class="precentCompentes"
                />
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="合计" prop="cnyAmt" align="center">
          <template v-slot="scope">
            <div class="precent">
              <div style="width: 30px">
                {{ scope.row.cnyAmt }}
              </div>
              <div style="margin-top: 5px">
                <Progress
                  style="margin-bottom: 3px"
                  :rate="scope.row.saleTaskAmt"
                  :color="'#FF8B2F'"
                  class="precentCompentes"
                />
                <Progress
                  :rate="scope.row.saleVolumeAll"
                  :color="'#66FFFF'"
                  class="precentCompentes"
                />
              </div>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import { reactive, ref, defineComponent } from "vue";
import Progress from "@/views/componets/Progress.vue";
export default defineComponent({
  name: "SellSportTable",
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
  width: 905px;
  height: 324px;
  background-color: #090c66;
  box-shadow: inset 0px 0px 34px 0px rgba(17, 40, 255, 0.66);
  border: 2px solid #0d53b7;
  /* background-image: url("@/assets/tableVBackround.svg"); */
  border-radius: 0 0 10px 10px;
}

.execl-box {
  width: 864px;
  height: 300px;
  margin: 20px auto 0;
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
