<template>
    <div class="execl">

        <el-table border :data="mesInfo" :cell-style="{padding: '5px 0',borderColor: '#1E1D51' }"
            :row-style="rowStyle" :header-cell-style="headerCellStyle" class="exportTable"  >
            <el-table-column prop="businessEntityName" label="产司" width="60"   height="287" >
            </el-table-column>
            <el-table-column :label="'内销-'+$store.state.unit" align="center" style="padding:0">
                <el-table-column :prop="headTitle.inSale.innerSaleTaskAmt" :label="headTitle.inSale.title" align="center">
                 <template v-slot="scope">
                                {{ Number(scope.row.innerSaleTaskAmt).toFixed(2) }}
                </template>
                </el-table-column>
                <el-table-column :prop="headTitle.inSale.innerCnyAmt" :label="headTitle.inSale.text" align="center"
                    style="font-weight: 400">
                    <template v-slot="scope">
                        <div class="precent">
                            <div style="width: 30px">
                                {{ scope.row.innerCnyAmt.toFixed(2) }}
                            </div>
                            <div style="margin-top: 5px">
                                <Progress style="margin-bottom: 3px" :rate="scope.row.dateRadio*100" :color="'#FF8B2F'"
                                    class="precentCompentes" />
                                <Progress :rate="scope.row.innerCnyAmtRatio*100" :color="'#66FFFF'" class="precentCompentes" />
                            </div>
                        </div>
                    </template>
                </el-table-column>
                   <el-table-column v-if="headTitle.total.day!==null&&headTitle.total.day !==undefined" :prop="headTitle.total.day" :label="headTitle.total.day" align="center">
                    <template v-slot="scope" v-if="headTitle.total.day!==null">
                        <div class="precent" v-if="headTitle.total.day!==null">
                            <div style="width: 30px">
                                {{ scope.row.day }}
                            </div>
                            <div style="margin-top: 5px" v-if="headTitle.total.day!==null">
                                  <Progress style="margin-bottom: 3px" :rate="scope.row.dateRadio*100" :color="'#FF8B2F'"
                                    class="precentCompentes" />
                                <Progress :rate="scope.row.cnyAmtAllRatio*100" :color="'#66FFFF'" class="precentCompentes" />
                            </div>
                        </div>
                    </template>
                </el-table-column>

                <!-- <el-table-column v-for="(k,i) in tableList.headTitle.inSale" :label="k"></el-table-column> -->
            </el-table-column>
            <el-table-column :label="'外销-'+$store.state.unit" align="center" height="20px">
                <el-table-column :prop="headTitle.outSale.outerSaleTaskAmt" :label="headTitle.outSale.title" height="20px"
                    align="center">
                     <template v-slot="scope">
                                {{ Number(scope.row.outerSaleTaskAmt).toFixed(2) }}
                </template>
                </el-table-column>
                <el-table-column :prop="headTitle.outSale.outerCnyAmt" :label="headTitle.outSale.text" align="center" height="20px" >
                    <template v-slot="scope">
                        <div class="precent">
                            <div style="width: 30px">
                                 {{ Number(scope.row.outerCnyAmt).toFixed(2) }}
                            </div>
                            <div style="margin-top: 5px">
                                  <Progress style="margin-bottom: 3px" :rate="scope.row.dateRadio*100" :color="'#FF8B2F'"
                                    class="precentCompentes" />
                                <Progress :rate="scope.row.outerCnyAmtRatio*100" :color="'#66FFFF'" class="precentCompentes" />
                            </div>
                        </div>
                    </template>
                </el-table-column>
                   <el-table-column v-if="headTitle.total.day!==null&&headTitle.total.day !==undefined" :prop="headTitle.total.day" :label="headTitle.total.day" align="center">
                    <template v-slot="scope" v-if="headTitle.total.day!==null">
                        <div class="precent" v-if="headTitle.total.day!==null">
                            <div style="width: 30px">
                                {{ scope.row.day }}
                            </div>
                            <div style="margin-top: 5px" v-if="headTitle.total.day!==null">
                                  <Progress style="margin-bottom: 3px" :rate="scope.row.dateRadio*100" :color="'#FF8B2F'"
                                    class="precentCompentes" />
                                <Progress :rate="scope.row.cnyAmtAllRatio*100" :color="'#66FFFF'" class="precentCompentes" />
                            </div>
                        </div>
                    </template>
                </el-table-column>
                <!-- <el-table-column v-for="(k,i) in tableList.headTitle.outSale" :label="k"></el-table-column> -->
            </el-table-column>
            <el-table-column :label="'合计-'+$store.state.unit" align="center" height="20px" width="50">
                <!-- <el-table-column v-for="(k,i) in tableList.headTitle.totalDone" :label="k"></el-table-column> -->
                <el-table-column :prop="headTitle.total.saleTaskAmtAll" :label="headTitle.total.title" align="center" height="20px">
                     <template v-slot="scope">
   
                              {{ Number(scope.row.saleTaskAmtAll).toFixed(2) }}
                     </template>
                </el-table-column>

              
                <el-table-column :prop="headTitle.total.cnyAmtAll" :label="headTitle.total.text" align="center">
                    <template v-slot="scope">
                        <div class="precent">
                      
                            <div style="width: 30px">
                           {{ Number(scope.row.cnyAmtAll).toFixed(2) }}
                            </div>
                            <div style="margin-top: 5px">
                                  <Progress style="margin-bottom: 3px" :rate="scope.row.dateRadio*100" :color="'#FF8B2F'"
                                    class="precentCompentes" />
                                <Progress :rate="scope.row.cnyAmtAllRatio*100" :color="'#66FFFF'" class="precentCompentes" />
                            </div>
                        </div>
                    </template>
                </el-table-column>
             
                <el-table-column v-if="headTitle.total.day!==null&&headTitle.total.day !==undefined" :prop="headTitle.total.day" :label="headTitle.total.day" align="center">
                    <template v-slot="scope" v-if="headTitle.total.day!==null">
                        <div class="precent" v-if="headTitle.total.day!==null">
                            <div style="width: 30px">
                                {{ scope.row.day }}
                            </div>
                            <div style="margin-top: 5px" v-if="headTitle.total.day!==null">
                                <Progress style="margin-bottom: 3px" :rate="scope.row.dateRadio*100" :color="'#FF8B2F'"
                                    class="precentCompentes" />
                                <Progress :rate="scope.row.cnyAmtAllRatio*100" :color="'#66FFFF'" class="precentCompentes" />
                            </div>
                        </div>
                    </template>
                </el-table-column>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
    import { reactive, ref, defineComponent } from "vue";  
    import Progress from "./Progress.vue";
    export default {
        name: "ColumnTable",
        components: {
            Progress,
        },
        props: {
            // tableList: {
            //     type: Object
            // },
            mesInfo: {
                type: Object
            },
            headTitle: {
                type: Object
            },
            
            
        },
        data() {
            return {
                // tableList: [
                //     {
                //         headTitle: {
                //             inSale: {
                //                 inSaleRespon: "责任制",
                //                 inSaleDone: "累计达成",
                //             },
                //             outSale: {
                //                 title: "责任制",
                //                 text: "累计达成",
                //                 outSaleRespon: "outSaleRespon",
                //                 outSaleDone: "outSaleDone",
                //             },
                //             total: {
                //                 title: "责任制",
                //                 text: "累计达成",
                //                 totalRespon: "totalRespon",
                //                 totalDone: "totalDone",
                //             },
                //         },
                //         mesInfo: [
                //             {
                //                 mode: "环境",
                //                 inSaleRespon: 23,
                //                 inSaleDone: 21,
                //                 outSaleRespon: 44,
                //                 outSaleDone: 65,
                //                 totalRespon: 79,
                //                 totalDone: 80,
                //             },
                //             {
                //                 mode: "烹饪",
                //                 inSaleRespon: 23,
                //                 inSaleDone: 21,
                //                 outSaleRespon: 44,
                //                 outSaleDone: 65,
                //                 totalRespon: 79,
                //                 totalDone: 80,
                //             },
                //             {
                //                 mode: "电磁",
                //                 inSaleRespon: 23,
                //                 inSaleDone: 21,
                //                 outSaleRespon: 44,
                //                 outSaleDone: 65,
                //                 totalRespon: 79,
                //                 totalDone: 80,
                //             },
                //             {
                //                 mode: "调理",
                //                 inSaleRespon: 23,
                //                 inSaleDone: 21,
                //                 outSaleRespon: 44,
                //                 outSaleDone: 65,
                //                 totalRespon: 79,
                //                 totalDone: 80,
                //             },
                //             {
                //                 mode: "电动",
                //                 inSaleRespon: 23,
                //                 inSaleDone: 21,
                //                 outSaleRespon: 44,
                //                 outSaleDone: 65,
                //                 totalRespon: 79,
                //                 totalDone: 80,
                //             },
                //             {
                //                 mode: "饮品",
                //                 inSaleRespon: 23,
                //                 inSaleDone: 21,
                //                 outSaleRespon: 44,
                //                 outSaleDone: 65,
                //                 totalRespon: 79,
                //                 totalDone: 80,
                //             },
                //             {
                //                 mode: "合计",
                //                 inSaleRespon: 23,
                //                 inSaleDone: 21,
                //                 outSaleRespon: 44,
                //                 outSaleDone: 65,
                //                 totalRespon: 79,
                //                 totalDone: 80,
                //             },
                //         ],
                //     },
                // ],  tableList: [
                //     {
                //         headTitle: {
                //             inSale: {
                //                 inSaleRespon: "责任制",
                //                 inSaleDone: "累计达成",
                //             },
                //             outSale: {
                //                 title: "责任制",
                //                 text: "累计达成",
                //                 outSaleRespon: "outSaleRespon",
                //                 outSaleDone: "outSaleDone",
                //             },
                //             total: {
                //                 title: "责任制",
                //                 text: "累计达成",
                //                 totalRespon: "totalRespon",
                //                 totalDone: "totalDone",
                //             },
                //         },
                //         mesInfo: [
                //             {
                //                 mode: "环境",
                //                 inSaleRespon: 23,
                //                 inSaleDone: 21,
                //                 outSaleRespon: 44,
                //                 outSaleDone: 65,
                //                 totalRespon: 79,
                //                 totalDone: 80,
                //             },
                //             {
                //                 mode: "烹饪",
                //                 inSaleRespon: 23,
                //                 inSaleDone: 21,
                //                 outSaleRespon: 44,
                //                 outSaleDone: 65,
                //                 totalRespon: 79,
                //                 totalDone: 80,
                //             },
                //             {
                //                 mode: "电磁",
                //                 inSaleRespon: 23,
                //                 inSaleDone: 21,
                //                 outSaleRespon: 44,
                //                 outSaleDone: 65,
                //                 totalRespon: 79,
                //                 totalDone: 80,
                //             },
                //             {
                //                 mode: "调理",
                //                 inSaleRespon: 23,
                //                 inSaleDone: 21,
                //                 outSaleRespon: 44,
                //                 outSaleDone: 65,
                //                 totalRespon: 79,
                //                 totalDone: 80,
                //             },
                //             {
                //                 mode: "电动",
                //                 inSaleRespon: 23,
                //                 inSaleDone: 21,
                //                 outSaleRespon: 44,
                //                 outSaleDone: 65,
                //                 totalRespon: 79,
                //                 totalDone: 80,
                //             },
                //             {
                //                 mode: "饮品",
                //                 inSaleRespon: 23,
                //                 inSaleDone: 21,
                //                 outSaleRespon: 44,
                //                 outSaleDone: 65,
                //                 totalRespon: 79,
                //                 totalDone: 80,
                //             },
                //             {
                //                 mode: "合计",
                //                 inSaleRespon: 23,
                //                 inSaleDone: 21,
                //                 outSaleRespon: 44,
                //                 outSaleDone: 65,
                //                 totalRespon: 79,
                //                 totalDone: 80,
                //             },
                //         ],
                //     },
                // ],
                // headTitle: {
                //     inSale: {
                //         title: "责任制",
                //         text: "累计达成",
                //         inSaleRespon: "inSaleRespon",
                //         inSaleDone: "inSaleDone",
                //     },
                //     outSale: {
                //         title: "责任制",
                //         text: "累计达成",
                //         outSaleRespon: "outSaleRespon",
                //         outSaleDone: "outSaleDone",
                //     },
                //     total: {
                //         title: "责任制",
                //         text: "累计达成",
                //         totalRespon: "totalRespon",
                //         totalDone: "totalDone",
                //     },
                // },
                // mesInfo: [
                //     {
                //         mode: "环境",
                //         inSaleRespon: 23,
                //         inSaleDone: 21,
                //         outSaleRespon: 44,
                //         outSaleDone: 65,
                //         totalRespon: 79,
                //         totalDone: 80,
                //     },
                //     {
                //         mode: "烹饪",
                //         inSaleRespon: 23,
                //         inSaleDone: 21,
                //         outSaleRespon: 44,
                //         outSaleDone: 65,
                //         totalRespon: 79,
                //         totalDone: 80,
                //     },
                //     {
                //         mode: "电磁",
                //         inSaleRespon: 23,
                //         inSaleDone: 21,
                //         outSaleRespon: 44,
                //         outSaleDone: 65,
                //         totalRespon: 79,
                //         totalDone: 80,
                //     },
                //     {
                //         mode: "调理",
                //         inSaleRespon: 23,
                //         inSaleDone: 21,
                //         outSaleRespon: 44,
                //         outSaleDone: 65,
                //         totalRespon: 79,
                //         totalDone: 80,
                //     },
                //     {
                //         mode: "电动",
                //         inSaleRespon: 23,
                //         inSaleDone: 21,
                //         outSaleRespon: 44,
                //         outSaleDone: 65,
                //         totalRespon: 79,
                //         totalDone: 80,
                //     },
                //     {
                //         mode: "饮品",
                //         inSaleRespon: 23,
                //         inSaleDone: 21,
                //         outSaleRespon: 44,
                //         outSaleDone: 65,
                //         totalRespon: 79,
                //         totalDone: 80,
                //     },
                //     {
                //         mode: "合计",
                //         inSaleRespon: 23,
                //         inSaleDone: 21,
                //         outSaleRespon: 44,
                //         outSaleDone: 65,
                //         totalRespon: 79,
                //         totalDone: 80,
                //     },
                // ],
            };
        },
        methods: {
            rowStyle({ row, rowIndex }) {
                return {
                    backgroundColor: "#070640",
                    color: "rgba(255,255,255,0.8)",
                    fontFamily: 'PingFangSC-Regular',
                    height:20,
                    fontWeight: 400
                };
            },
            headerCellStyle({ row, column, rowIndex, columnIndex }) {
                if (rowIndex === 0 && columnIndex === 0) {
                    return {
                        backgroundImage:
                        "linear-gradient(to bottom , #50C0FF,#5AFFA3,#66FFFF)",
                        height:"30px",
                        color: "#fff",
                        borderColor: "#1E1D51",
                        lineHight:"10px",
                        padding:"3px",
                        fontWeight: 400
                    

                    };
                } else {
                    return {
                        backgroundColor: "#041370",
                        color: "#fff",
                        borderColor: "#1E1D51",
                        lineHight:"10px",
                        padding:"3px",
                        fontWeight: 400
                    };
                }
            }
        },
    };
</script>
<style scoped lang="scss">
    .execl {
    width: 99%;
    /* height:280px; */
    /* background-color: rgba(2, 0, 77, 0.4);
    box-shadow: inset 0px 0px 34px 0px rgba(17, 40, 255, 0.66);
    border: 2px solid #0d53b7;
     background-image: url("@/assets/tableVBackround.svg");
    border-radius: 0 0 10px 10px; */
    }
    .el-table--scrollable-y .el-table__body-wrapper {
            overflow-y: auto;
    }
    .exportTable {
        font-size: 13px;
        /* width: 550px; */
        height: 267px;
        border-color: #1E1D51;
        margin: 5px auto 0;
        /* background-color: rgb(4, 19, 112); */
        font-weight: 200px;
    }

    body .el-table::before {
        z-index: inherit;
    }

    .el-table--border::after,
    .el-table--group::after {
        width: 0;
        height: 0;
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

    ::v-deep.el-table--enable-row-hover .el-table__body tr:hover > td {
        background-color: #070640 !important;
    }
     ::v-deep.el-table .el-table__cell{
     padding: 0;
    }

    ::v-deep.el-table thead.is-group th.el-table__cell{
     padding: 0;
    }

    /* 边框线 */
    body .el-table::before {
        z-index: inherit;
    }

    .el-table--border::after,
    .el-table--group::after {
        width: 0;
        height: 0;
    }

    /* 滚动条 */
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

    /* 头部加粗 */
    ::v-deep.el-table .el-table__header tr:first-child {
        height: 25px;
        line-height: 25px;
        /* font-weight: 600; */
    }

    ::v-deep.el-table th {
        padding: 0;
    }
     ::v-deep.el-table tr {
        padding: 0;
    }
   ::v-deep.el-table .cell {
        padding: 0;
        font-weight: 400;
    }

    ::v-deep.el-table .el-table__header tr:nth-child(2) {
        height: 25px;
        line-height: 25px;
        color: rgba(255, 255, 255, 0.8);
        font-family: PingFangSC-Regular
    }
    ::-webkit-scrollbar-thumb{
        background:#070640;
    }
    ::-webkit-scrollbar-track{
        background:#070640;
    }
    
::v-deep.el-table--scrollable-x .el-table__body-wrapper{
        overflow-y: scroll;

}
::v-deep .el-table .el-table__body-wrapper {
    height: 200px;
    overflow-y: scroll;
    
}
</style>