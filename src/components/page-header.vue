<template>
  <div>
    
    <div class="flex-title">
      <div class="flex-back">
        <div class="back">
          <a-icon type="left" style="color: #19ecff" />后退
        </div>
        <div class="left-font">当前页面：销向汇总页111</div>
      </div>
      <div class="flex-right">
        <div class="right-font">
          <a-icon
            type="printer"
            style="color: #19ecff; margin-right: 4px"
          />打印
        </div>
        <div class="right-font">
          <a-icon
            type="upload"
            style="color: #19ecff; margin-right: 4px"
          />导出数据
        </div>
      </div>
    </div>
    <div class="flex-header" solt="center">
        
      <div class="flex-font-left">
        <div class="head-box"><span>PSI</span></div>
        <div class="head-box active"><span>S</span></div>
        <div class="head-box"><span>I</span></div>
        <div class="head-box"><span>P</span></div>
        <div class="change-flex" style="margin-left: 14px">
          <div class="change-box"><span>金额版</span></div>
          <div class="change-box"><span>数量版</span></div>
        </div>
      </div>
      <div class="title-bg">
        <div class="title">生活电器数智产销中台</div>
      </div>
      <div class="flex-font-left">
        <div class="head-box-right" style="margin-right: 14px">
          <span
            >产地<a-icon type="down" style="padding-left: 3px; font-size: 14px"
          /></span>
        </div>
        <div class="change-flex">
          <div class="head-box-right active"><span>销向</span></div>
          <div class="head-box-right"><span>产司</span></div>
        </div>
        <div class="change-flex">
          <div class="head-box-right right-width"><span>年度</span></div>
          <div class="head-box-right right-width"><span>月度</span></div>
        </div>
      </div>
    </div>
   
  </div>
</template>

<script>
export default {
  name: "page-header",

};
</script>
<style lang="scss" scoped>
.title {
  font-size: 36px;
  font-weight: 600;
  text-align: center;
  letter-spacing: 8px;
  color: #fff;
  width: 100%;
  position: relative;
  top: -16px;
}
.flex-title {
  display: flex;
  justify-content: space-between;
}
.left-font {
  color: #fff;
  letter-spacing: 2px;
  font-size: 18px;
  margin-left: 16px;
}
.back {
  color: #19ecff;
  font-size: 18px;
}
.flex-back {
  display: flex;
  margin-left: 16px;
  white-space: nowrap;
  margin-top: 10px;
}
.flex-right {
  color: #19ecff;
  display: flex;
  font-size: 18px;
  white-space: nowrap;
  margin-top: 10px;
}
.right-font {
  margin-right: 16px;
  cursor: pointer;
}
.title-bg {
  background: url("/assets/img/navIcon.svg");
  background-size: 100% 100%;
  width: 100%;
  margin: 0 auto;
}
.flex-header {
  display: flex;
}
.head-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 68px;
  height: 44px;
  transform: skewX(18deg);
  border: 1px solid #00f9ff;
  color: #19ecff;
  background: linear-gradient(0deg, #0e5fff 0%, rgba(28, 0, 255, 0) 100%);
  font-size: 18px;
  margin-left: 14px;
}
.head-box span {
  transform: skewX(-18deg);
}
.flex-font-left {
  margin-top: 10px;
  display: flex;
  align-items: center;
}
.head-box {
  cursor: pointer;
  opacity: 0.5;
}
.head-box:hover {
  opacity: 1;
}
.change-box {
  display: flex;
  align-items: center;
  justify-content: center;
  transform: skewX(18deg);
  border: 1px solid #00f9ff;
  color: #19ecff;
  background: linear-gradient(0deg, #0e5fff 0%, rgba(28, 0, 255, 0) 100%);
  font-size: 18px;
  width: 110px;
  height: 44px;
  opacity: 0.5;
}
.active {
  opacity: 1 !important;
}
.change-box:hover {
  opacity: 1;
}
.change-box span {
  transform: skewX(-18deg);
}
.change-flex {
  display: flex;
  align-items: center;
  margin-right: 14px;
}
.head-box-right {
  display: flex;
  align-items: center;
  justify-content: center;
  transform: skewX(-18deg);
  border: 1px solid #00f9ff;
  color: #19ecff;
  background: linear-gradient(0deg, #0e5fff 0%, rgba(28, 0, 255, 0) 100%);
  font-size: 18px;
  width: 110px;
  height: 44px;
  cursor: pointer;
  opacity: 0.5;
}
.head-box-right:hover {
  opacity: 1;
}
.head-box-right span {
  transform: skewX(18deg);
}
.right-width {
  width: 90px !important;
}
.change-box {
  cursor: pointer;
}
</style>