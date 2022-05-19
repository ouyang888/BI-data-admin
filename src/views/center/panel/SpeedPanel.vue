<template>
  <div class="panel-content">
    <CircleProgress 
      style="position:absolute" 
      :rate="data.bar" 
      :size="255" 
      :circleSize="255"
      :color="'#FFA500'" 
      :deg="{start: 135,end:45}" />
    <CircleProgress 
      style="position:absolute" 
      :rate="data.speedBar" 
      :size="215" 
      :circleSize="215"
      :barSize="30"
      :isBackground="false"
      :color="'rgb(0,224,219,0.4)'" 
      :deg="{start: 132,end:48}" />
    <div class="backgroundPic">
        <!-- <CircleProgress style="position:absolute" :rate="40" :size="155" /> -->
          <div class="round">
            <p class="round-title">{{data.ballTitle}}</p>
            <p class="sort">{{data.ballNum}}{{modelLabel}}</p> 
            <div class="round-data">
              <span class="round-content">
                <p>{{data.ballLeftTitle}}</p>
                <p>{{data.ballLeftNum}}{{modelLabel}}</p>
              </span>
              <span class="round-content">
                <p>{{data.ballRightTitle}}</p>
                <p>{{data.ballRightNum}}{{modelLabel}}</p>
              </span>
            </div>
          </div>
          <div class="content">责任制{{data.bottomNum}}{{modelLabel}}</div>
    </div>
    <div class="bottom">
      <p>
        <span>{{data.bottomTitle1}}:</span><span>完成率:{{data.bottomClose}}%</span><span>时间进度:{{data.bottomTime}}%</span>
      </p>
      <p>
        <span>{{data.bottomTitle2}}:</span><span>完成率:{{data.bottomClose1}}%</span><span>时间进度:{{data.bottomTime1}}%</span>
      </p>

    </div>
  </div>

</template>
<script>
import CircleProgress from '@/components/CircleProgress.vue'
export default {
  name: 'ProgressPanel',
  props: {
    data:{
      type: Object
    }
  },
  components:{
    CircleProgress
  },
  computed:{
    modelLabel(){
      return this.$store.state.showMoney==true?'亿':'万'
    }
  }

 
}
</script>

<style scoped>
.panel-content {
  height: 280px;
  width: 280px;
  position: relative;
  display: flex;
  align-items:center;
  justify-content:center;
  flex-direction: column;
}
.backgroundPic{
  height: 256px;
  width: 250px;
  background-image: url('../../../assets/img/speedPanel.svg');
  background-repeat:no-repeat;
  background-position: 50% 153%;
  display: flex;
  align-items:center;
  justify-content:center;
  flex-direction: column;
}
.content {
  font-size: 18px;
  color: #FFFFFF;
  letter-spacing: -0.01px;
  text-align: center;
  font-weight: 500;
}
.bottom {
  position: absolute;
  bottom: 2px
}
.bottom p{
  margin-bottom: -1px;
}
.bottom span {
  opacity: 0.7;
  font-size: 10px;
  color: #FFFFFF;
  letter-spacing: 0;
  text-align: center;
  line-height: 10px;
  font-weight: 400;
}
.round {
  width: 110px;
  height: 132px;
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content:center;
  flex-direction: column;
}
.round-title{
  font-size: 12px;
  color: #32C5FF;
  letter-spacing: -0.01px;
  text-align: center;
  font-weight: 500;
  margin-bottom: 0;
}
.sort {
  font-size: 24px;
  color: #FFFFFF;
  letter-spacing: -0.01px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 0;
}
.round-data{
  /* width: 75px; */
  width: 80px;
  /* margin-top: 10px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.round-content {
  /* // height: 21px; */
  opacity: 0.7;
  font-size: 10px;
  color: #FFFFFF;
  letter-spacing: 0;
  text-align: center;
  line-height: 10px;
  font-weight: 400;
}
.round-content p {
  margin-top: 5px;
}
</style>