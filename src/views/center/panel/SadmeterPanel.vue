<template>
  <div class="panelList">
    <ProgressPanel :data="progressData" />
    <SpeedPanel :data="speedData" />
    <SadPanel :data="sabData"/>
  </div>
</template>
<script>
  import ProgressPanel from './ProgressPanel.vue'
  import SpeedPanel from './SpeedPanel.vue'
  import SadPanel from './SadPanel.vue'

  export default {
    name: 'SadmeterPanel',
    props: {

    },
    components: {
      ProgressPanel,
      SpeedPanel,
      SadPanel,
    },
    data() {

      return {

        progressData: {
          bar1: 0,
          bar2: 0,
          ballTitle: '产司',
          bigBallTitle: '毛利率',
          textLeft: '内销',
          textRight: '外销',
          titleTop: '内销',
          titleBottom: '外销',
          topGPM: 0,
          bottomGPM: 0,
          ballNum: 0
        },
        speedData: {
          bar: 0,
          speedBar: 0,
          ballTitle: '事业部达成',
          ballNum: 0,
          ballLeftTitle: '自营',
          ballRightTitle: '代运营',
          ballLeftNum: 0,
          ballRightNum: 0,
          bottomNum: 0,
          bottomTitle1: '内销',
          bottomClose: 0,
          bottomTime: 0,
          bottomTitle2: '外销',
          bottomClose1: 0,
          bottomTime1: 0
        },
        sabData: {
          bar1: 70,
          bar2: 50,
          bar3: 30,
          bar4: 12,
          bar5: 7,
          ballTitle: '内销',
          bottom: '线上',
          top: '线下',
          sabArr: { 's': 32, 'a': 18, 'b': 21 },
          topArr: { 's': 32, 'a': 18, 'b': 21 },
          bottomArr: { 's': 32, 'a': 18, 'b': 21 }
          // sabArr: [{'高端机':32},{'明星机':18},{'入口机':21},{'常规机':9},{'结构及':5}],
          // topArr: [{'高端机':32},{'明星机':18},{'入口机':21},{'常规机':9},{'结构及':5}],
          // bottomArr: [{'高端机':32},{'明星机':18},{'入口机':21},{'常规机':9},{'结构及':5}]
        }
      }
    }
  }
</script>

<style scoped>
  .panelList {
    height: 258px;
     width: 760px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
</style>