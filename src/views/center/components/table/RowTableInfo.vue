<template>
  <div class="execl">
    <el-table border :data="tableData" :span-method="objectSpanMethod" 
     show-summary
      :summary-method="getSummaries"
      
      :cell-style="{ padding: '5px 0', borderColor: '#1E1D51' }" :row-style="rowStyle" type="index"
      :header-cell-style="headerCellStyle" class="execl-box" height="287" >
      <el-table-column prop="category" align="center" label="品类"></el-table-column>
      
   <el-table-column v-for="(item, i) in titleHead" :key="i" :prop="i" :label="item+$store.state.tableUnit" align="center" width="220">
    <template v-slot="scope">
          <div class="precent">
            <div style="width: 45%">{{ !scope.row[i]?0:scope.row[i].toFixed(2)}}</div>
            <div style="margin-top: 5px"> 
              <Progress style="margin-bottom: 3px" :rate="scope.row.dateRadio*100" :color="'#FF8B2F'"
                class="precentCompentes" />
              <Progress :rate="scope.row[i.replace('CnyAmt','CompleteRatio')]" :color="'#66FFFF'" class="precentCompentes" />
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
                type: Array,
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
            headerObj: {
                type: Object,
                default: function() {
                    return {
                        marketChannel: 'marketChannel',
                        marketCenter: 'marketCenter',
                        manager: 'manager'
                    }
                }
            }
        },
        components: {
            Progress,
        },
        data() {
            return {
                tableData:[],/*talbe*/
                endObj:{}, /*最后一条数据*/
                cell: 2,
                arr: ['domesticDepartment', 'department', 'exportDepartment'],
                /*渠道路由名*/
                complete: ['department', 'exportDepartment'] /*控制不同模版完成率显示*/

            }
        },
        computed: {
            router() {
                return this.$route.name
            }

        },
        methods: {
 
            handleClick(obj) {
                this.$emit("handleClick", obj);
            },
            objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        let number = 0;
        // console.log('this.mesInfo',this.mesInfo)
        this.mesInfo.forEach((item, idnex) => {
          number++;
        });
        // console.log(number, "numbernumbernumber");
        // 底部合计合并单元格
        let cell = 2; //设置跨列
        if(this.arr.includes(this.router)){
          cell--;
        }
        if (rowIndex === number - 1) {
          if (0<columnIndex && columnIndex<=cell) {
            return [0, 0];
          }
          if (columnIndex === 0) {
            if(!this.arr.includes(this.router)){

              return [1, 3];
            }else{
            return [1, 2];
          }
          }
        }
        //       if (rowIndex === 6) {
        //   if (columnIndex == 1 || columnIndex == 2) {
        //     return [0, 0];
        //   }
        //   if (columnIndex === 0) {
        //     return [1, 3];
        //   }
        // }
        if (columnIndex === 0) {


          if(this.rowSpanNumber.length == 2){
          
          if (rowIndex == 0) {
            return {
              rowspan: this.rowSpanNumber[0],
              colspan: 1,
            };
          } else if(rowIndex == this.rowSpanNumber[0]){
            return {
              rowspan: this.rowSpanNumber[1],
              colspan: 1,
            };
            
          }else if(rowIndex == this.rowSpanNumber[0] + this.rowSpanNumber[1]){
            return {
              rowspan: 1,
              colspan: 1,
            };
          }
          
          else {
            return {
              rowspan: 0,
              colspan: 0,
            };
          }
        }else if(this.rowSpanNumber.length == 1){

          if (rowIndex == 0) {
            return {
              rowspan: this.rowSpanNumber[0],
              colspan: 1,
            };
          } else if(rowIndex == this.rowSpanNumber[0]){
            return {
              rowspan: 1,
              colspan: 1,
            };
            
          }         
          else {
            return {
              rowspan: 0,
              colspan: 0,
            };
          }

        }
        }
      },
            rowStyle({
                row,
                rowIndex
            }) {
                return {
                    backgroundColor: "#070640",
                    color: "rgba(255,255,255,0.8)",
                    fontFamily: 'PingFangSC-Regular'
                };
            },
            headerCellStyle({
                row,
                rowIndex,
                column,
                columnIndex
            }) {
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
              getSummaries(){
           
          console.log('this.endObj',this.endObj);
          let arr = ['合计'];

          for(var i in this.titleHead){

              arr.push(this.endObj[i]);

          }
          return arr;


      }
        },
        watch: {
            mesInfo: {
                handler: function(newValue, oldValue) {
         
                   this.tableData = newValue.slice(0,newValue.length - 1);
            this.endObj = newValue.slice(newValue.length -1 ,newValue.length)[0];

                }
            }
        }
    };
</script>
<style scoped lang="scss">
    .el-table {
        display: flex;
        flex-direction: column;
    }
    
    .el-table__body-wrapper {
        order: 1;
    }
    
    .execl {
        /* width: 900px; */
        width: calc(50% - 15px);
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
    
     ::v-deep .el-table .el-table__cell {
        padding: 8px 0;
    }
    /* 头部加粗 */
    
     ::v-deep.el-table .el-table__header tr {
        font-weight: 600;
    }
    /*去掉空白*/
    
     ::v-deep .el-table__cell.gutter {
        background: #041370;
    }
</style>