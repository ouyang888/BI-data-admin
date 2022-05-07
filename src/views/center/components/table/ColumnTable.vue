<template>
    <div>
        <!-- <el-scrollbar> -->
        <el-table border :data="mesInfo" :cell-style="{ padding: '5px 0', borderColor: '#1E1D51' }"
            :row-style="rowStyle" :header-cell-style="headerCellStyle" class="exportTable" height="270">
            <el-table-column prop="mode" label="产司" width="48" height="43px"></el-table-column>
            <el-table-column label="内销" align="center" style="padding:0">
                <el-table-column :prop="headTitle.inSale.inSaleRespon" :label="headTitle.inSale.title" align="center">
                </el-table-column>
                <el-table-column :prop="headTitle.inSale.inSaleDone" :label="headTitle.inSale.text" align="center"
                    style="font-weight: 600">
                    <template v-slot="scope">
                        <div class="precent">
                            <div style="width: 30px">
                                {{ scope.row.inSaleDone }}
                            </div>
                            <div style="margin-top: 5px">
                                <Progress style="margin-bottom: 3px" :rate="40" :color="'#FF8B2F'"
                                    class="precentCompentes" />
                                <Progress :rate="60" :color="'#66FFFF'" class="precentCompentes" />
                            </div>
                        </div>
                    </template>
                </el-table-column>
                <!-- <el-table-column v-for="(k,i) in tableList.headTitle.inSale" :label="k"></el-table-column> -->
            </el-table-column>
            <el-table-column label="外销" align="center" height="30px">
                <el-table-column :prop="headTitle.outSale.outSaleRespon" :label="headTitle.outSale.title"
                    align="center">
                </el-table-column>
                <el-table-column :prop="headTitle.outSale.outSaleDone" :label="headTitle.outSale.text" align="center">
                    <template v-slot="scope">
                        <div class="precent">
                            <div style="width: 30px">
                                {{ scope.row.outSaleDone }}
                            </div>
                            <div style="margin-top: 5px">
                                <Progress style="margin-bottom: 3px" :rate="40" :color="'#FF8B2F'"
                                    class="precentCompentes" />
                                <Progress :rate="60" :color="'#66FFFF'" class="precentCompentes" />
                            </div>
                        </div>
                    </template>
                </el-table-column>
                <!-- <el-table-column v-for="(k,i) in tableList.headTitle.outSale" :label="k"></el-table-column> -->
            </el-table-column>
            <el-table-column label="合计" align="center" height="30px">
                <!-- <el-table-column v-for="(k,i) in tableList.headTitle.totalDone" :label="k"></el-table-column> -->
                <el-table-column :prop="headTitle.total.totalRespon" :label="headTitle.total.title" align="center">
                </el-table-column>
                <el-table-column :prop="headTitle.total.totalDone" :label="headTitle.total.text" align="center">
                    <template v-slot="scope">
                        <div class="precent">
                            <div style="width: 30px">
                                {{ scope.row.totalDone }}
                            </div>
                            <div style="margin-top: 5px">
                                <Progress style="margin-bottom: 3px" :rate="40" :color="'#FF8B2F'"
                                    class="precentCompentes" />
                                <Progress :rate="60" :color="'#66FFFF'" class="precentCompentes" />
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
    import Progress from "@/views/componets/Progress.vue";
    export default defineComponent({
        name: "ColumnTable",
        components: {
            Progress,
        },
        props: {
            tableList: {
                type: Object
            }
        },
        data() {
            return {
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
                headTitle: {
                    inSale: {
                        title: "责任制",
                        text: "累计达成",
                        inSaleRespon: "inSaleRespon",
                        inSaleDone: "inSaleDone",
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
            };
        },
        methods: {
            rowStyle({ row, rowIndex }) {
                return {
                    backgroundColor: "#070640",
                    color: "rgba(255,255,255,0.8)",
                    fontFamily: 'PingFangSC-Regular'
                };
            },
            headerCellStyle({ row, column, rowIndex, columnIndex }) {
                if (rowIndex === 0 && columnIndex === 0) {
                    return {
                        backgroundImage:
                            "linear-gradient(to bottom , #50C0FF,#5AFFA3,#66FFFF)",
                        color: "#fff",
                        borderColor: "#1E1D51",
                    };
                } else {
                    return {
                        backgroundColor: "#041370",
                        color: "#fff",
                        borderColor: "#1E1D51",
                    };
                }
            }
        },
    });
</script>
<style scoped lang="stylus">
    .exportTable {
        font-size: 13px;
        width: 550px;
        height: 270px;
        border-color: #1E1D51;
        margin: 0 auto;
        background-color: rgb(4, 19, 112);
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

    :deep(.el-table--enable-row-hover .el-table__body tr:hover > td) {
        background-color: #070640 !important;
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
    :deep(.el-table__body-wrapper) {
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

    :deep(.el-table__fixed-right) {
        height: 100% !important;
        bottom: 7px !important;
        right: 7px !important;

        .el-table__fixed-body-wrapper {
            height: calc(100% - 43px) !important;
        }
    }

    /* 头部加粗 */
    :deep(.el-table .el-table__header tr:first-child) {
        height: 45px;
        line-height: 45px;
        font-weight: 600;
    }

    :deep(.el-table th) {
        padding: 0;
    }

    :deep(.el-table .el-table__header tr:nth-child(2)) {
        height: 35px;
        line-height: 35px;
        color: rgba(255, 255, 255, 0.8);
        font-family: PingFangSC-Regular
    }
    ::-webkit-scrollbar-thumb{
        background:#070640;
    }
    ::-webkit-scrollbar-track{
        background:#070640;
    }
</style>