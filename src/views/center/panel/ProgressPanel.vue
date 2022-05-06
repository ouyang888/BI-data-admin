<template>
  <div class="main">
    <div class="backgroundPic">
      <div class="content">
        <CircleProgress
          style="position: absolute"
          :rate="data.bar1"
          :size="130"
          :circleSize="130"
          :color="'#5AFFA3'"
        />
        <CircleProgress
          style="position: absolute"
          :rate="data.bar2"
          :size="155"
          :circleSize="155"
          :color="'#7A5AFF'"
        />
        <div class="big-round">
          <div class="round">
            <p class="round-title">{{ data.ballTitle }}</p>
            <p class="sort">{{ data.ballNum }}%</p>
          </div>
        </div>
        <div class="title">{{ data.bigBallTitle }}</div>
      </div>
    </div>
    <div class="bottom">
      <span :style="{ background: '#5AFFA4' }" class="bottom-color"></span>
      <span class="bottom-title">{{ data.textLeft }}</span>
      <span :style="{ background: '#7A5AFF' }" class="bottom-color"></span>
      <span class="bottom-title">{{ data.textRight }}</span>
      <div class="bottom-text">
        <span>{{ data.textLeft }}</span>
        <span>毛利率{{ data.topGPM }}%</span>
      </div>
      <div class="bottom-text">
        <span>{{ data.textRight }}</span>

        <span>毛利率{{ data.bottomGPM }}%</span>
      </div>
    </div>
  </div>
</template>
<script>
import CircleProgress from "@/components/CircleProgress.vue";

export default {
  name: "ProgressPanel",
  components: {
    CircleProgress,
  },
  props: {
    data: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.main {
  height: 230px;
}

.backgroundPic {
  height: 200px;
  width: 192px;
  background-image: url("../../../assets/img/backgroundPanel.svg");
  background-repeat: no-repeat;
  background-position: 50% 62%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  width: 192px;
  height: 192px;
  top: 7%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
}

.big-round {
  width: 105px;
  height: 105px;
  border-radius: 50%;
  box-shadow: inset 0px 0px 20px 0px rgba(102, 255, 255, 0.52);
  display: flex;
  align-items: center;
  justify-content: center;
}

.round {
  width: 85px;
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 50%;
  background: #0c098b;
  box-shadow: inset 0px 0px 20px 0px rgba(102, 255, 255, 0.52);
  border: 1px solid rgba(50, 197, 255, 0.22);
}

.round-title {
  font-size: 12px;
  color: #32c5ff;
  letter-spacing: -0.01px;
  text-align: center;
  font-weight: 500;
  margin-bottom: 0;
}

.sort {
  font-size: 24px;
  color: #ffffff;
  letter-spacing: -0.01px;
  text-align: center;
  font-weight: 600;
  margin-top: 1px;
  margin-bottom: 0;
}

.title {
  position: absolute;
  bottom: 20px;
  opacity: 0.8;
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
  line-height: 17px;
  font-weight: 400;
}

.bottom {
  text-align: center;
  margin-top: 18px;
}

.bottom-color {
  width: 8px;
  height: 8px;
  margin-left: 5px;
  display: inline-block;
}

.bottom-title {
  opacity: 0.8;
  padding-left: 5px;
  font-size: 12px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
  line-height: 17px;
  font-weight: 400;
}

.bottom-text {
  margin-top: 8px;
  opacity: 0.7;
  font-size: 10px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
  line-height: 10px;
  font-weight: 400;
}

.bottom-text span {
  margin-left: 5px;
}
</style>