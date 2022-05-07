<template>
  <div class="container">
    <div class="background"></div>
    <div :style="{width: `${rate>=100?100:rate}%`,backgroundColor: color}" class="bar"></div>
  </div>
</template>

<script>
export default {
  name: 'Progress',
  props: {
    color: {
      type: String,
    },
    rate: {
      type: Number,
      default: 0
    },
  },
}
</script>

<style scoped>
.container {
  height: 5px;
  width: 100%;
  position: relative;
}
.background {
  height: 5px;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 100px;
  opacity: 0.16;
  background: #FFFFFF;
  border-radius: 3px;
}
.bar {
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 100px;
  /* background-color: #FF8B2F; */
  z-index: 999;

}

</style>