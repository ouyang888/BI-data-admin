<template>
  <div class="wrapper">
    <div class="backgroundPic">
      <div class="content">
        <CircleProgress style="position:absolute" :rate="100" :size="130" :circleSize="130" />
        <CircleProgress style="position:absolute" :rate="70" :color="'#7100E0'" :size="130" :circleSize="130"/>
        <CircleProgress style="position:absolute" :rate="30" :color="'#0050E0'" :size="130" :circleSize="130"/>

        <CircleProgress style="position:absolute" :rate="100" :size="155" :circleSize="155" />
        <CircleProgress style="position:absolute" :rate="70" :color="'#7100E0'" :size="155" :circleSize="155"/>
        <CircleProgress style="position:absolute" :rate="30" :color="'#0050E0'" :size="155" :circleSize="155" />
        <div class="big-round">
          <div class="round">
            <p class="round-title">{{data.ballTitle}}</p>
            <p class="sort" v-for="(v,name,i) in data.sabArr" :key="i">
              {{name}}:
              {{v}}%
            </p>
          </div>
        </div>
      </div>
      <div class="title">产品结构</div>     
    </div>
    <div class="mt">
    <div class="bottom-title" style="margin-top:8px">
      <span style="margin-right:5px" >{{data.top}}:</span>
      <span v-for="(v, name, i) in data.topArr" :key="i">
        {{name}}:
        {{v}}%
      </span>
    </div>
    <div class="bottom-title">
      <span  style="margin-right:5px">{{data.bottom}}:</span>
       <span v-for="(v, name, i) in data.bottomArr" :key="i">
        {{name}}:
        {{v}}%
      </span>
    </div>
  </div>

  </div>

</template>
<script>
import CircleProgress from '@/components/CircleProgress.vue'
export default {
  name: 'SadmeterPanel',
  props: {
    data:{
      type: Object
    }
  },
  components:{
    CircleProgress,
    // ProgressPanel
  },

}
</script>

<style scoped>
.wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top:10px;
}
.backgroundPic{
  height: 200px;
  width: 192px;
  background-image: url('../../../assets/img/backgroundPanel.svg');
  background-repeat:no-repeat;
  background-position: 50% 62%;
  position: relative;
  display: flex;
  align-items:center;
  justify-content:center;
}
.content {
  width: 192px;
  height: 192px;
  top:7%;
  position: absolute;
  display: flex;
  align-items:center;
  justify-content:center;
}
.big-round {
  width: 105px;
  height: 105px;
  border-radius: 50%;
  box-shadow: inset 0px 0px 20px 0px rgba(102, 255, 255, 0.52);
  display: flex;
  align-items:center;
  justify-content:center;
}
.round {
  width: 85px;
  height: 85px;
  display: flex;
  align-items: center;
  justify-content:center;
  flex-direction: column;
  border-radius: 50%;
  background: #0C098B;
  box-shadow: inset 0px 0px 20px 0px rgba(102, 255, 255, 0.52);
  border: 1px solid rgba(50, 197, 255, 0.22);
}
.round-title{
  margin: 0;
  font-size: 12px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #32C5FF;
  line-height: 17px;
}
.sort {
  margin: 0;
  font-size: 8px;
  /* // font-weight: 400; */
  color: #FFFFFF;
  line-height: 15px;
}
.title {
  position: absolute;
  bottom: 8px;
  opacity: 0.8;
  font-size: 14px;
  color: #FFFFFF;
  letter-spacing: 0;
  text-align: center;
  line-height: 17px;
  font-weight: 400;
}
.bottom-title{
  opacity: 0.7;
  font-size: 10px;
  color: #FFFFFF;
  letter-spacing: 0;
  text-align: center;
  line-height: 10px;
  font-weight: 400;
}
.bottom-title span{
  display: inline-block;
  padding-bottom: 5px;
}
.mt{
  margin-top:20px;
}
</style>