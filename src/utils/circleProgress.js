class circleProgress {
    constructor(params) {
        /*
            需要传入的参数
            el canvas 元素
            progress  真实的进度比例 0 - 1  之间 100% 就是1；
            number 当前进度表示的数额
        */  
        const { el, progress, number, color, deg,barSize,circleSize,isBackground} = params;
        // console.log("params",params)
        //获取canvas 元素 及其 2d context
        const cav = el
        this.ctx = cav.getContext('2d');
        // 获取canvas 元素的宽高信息 用来计算圆形进度的 圆点坐标 
        const { width, height } = cav.getBoundingClientRect();
        // this.w = width;
        // this.h = height;
        // this.x = width / 2;
        // this.y = height / 2;
        this.w = circleSize
        this.h = circleSize;
        this.x = circleSize / 2;
        this.y = circleSize / 2;
        this.r = width/2-(barSize/2);
        // this.r = circleSize/2-5;
        this.barSize = barSize
        this.isBackground = isBackground
        // Math.PI / 180 是很直观的度数换算公式 -> 度数 *  Math.PI / 180; 
        this.angle = Math.PI / 180;
        
        // 圆形进度的开始 和 结束 路径角度度数
        this.beginDeg = deg.start;
        this.endDeg = deg.end;
  
        // 计算出真实进度条的结束 路径 角度度数
        this.progressDeg = this.beginDeg + (360 - this.beginDeg + this.endDeg) * progress;
        
        this.aniDeg = this.beginDeg;
        this.number = number;
        this.move(color);
    }


    /*
        获取圆形上某个点的xy坐标
        公式：
        x = 圆心x坐标 + 半径 * Math.cos(点的角度*Math.PI/180)
        y = 圆心y坐标 + 半径 * Math.sin(点的角度*Math.PI/180)
    */ 
    getPointPos(deg) {
        const { ctx, x, y, r, angle } = this;
        return {
            xPos: x + r * Math.cos(deg * angle),
            yPos: y + r * Math.sin(deg * angle)
        }
    }

    // 绘制文字
    drawFont(font) {
      font = `${font}%`
        const { ctx, w, h } = this;
        // 获取文字的宽度 用已计算文字的x坐标 居中显示
        ctx.font = 'bold 9px arial';
        const fontW = ctx.measureText(font).width;
        ctx.fillStyle = '#FFF';
        let x = this.w + ((this.x/2-5) * Math.cos(this.progressDeg))
        // ctx.fillText(font, (w - fontW) / 2, h / 2 + 12)
        ctx.fillText(font, this.x, 10)
    }

    // 绘制圆形
    drawCircle(color, endDeg,isBar = false, barSize) {
      if (isBar) {
         const { ctx, x, y, r, angle } = this;
        ctx.beginPath();
        // ctx.lineCap = "round";
        ctx.lineWidth = barSize;
        let radgrad = ctx.createLinearGradient(0, 0, y,0)
        // radgrad.addColorStop(0, '#1B6FFF');
        // radgrad.addColorStop(0.5, '#7A5AFF');
        // radgrad.addColorStop(1, '#7066FF');
        ctx.strokeStyle = color;
        ctx.arc(x, y, r, this.beginDeg * angle, endDeg * angle);
        ctx.stroke();
        ctx.closePath();
      } else {
        const { ctx, x, y, r, angle } = this;
        ctx.beginPath();
        // ctx.lineCap = "round";
        ctx.lineWidth = barSize;
        // let radgrad = ctx.createLinearGradient(0, 0, this.w, 0)
        // radgrad.addColorStop(0, '#1B6FFF');
        // radgrad.addColorStop(0.5, '#7A5AFF');
        // radgrad.addColorStop(1, '#7066FF');
        // color = radgrad
        ctx.strokeStyle = color;
        ctx.arc(x, y, r, this.beginDeg * angle, endDeg * angle);
        ctx.stroke();
        ctx.closePath();
      }
        const { ctx, x, y, r, angle } = this;
        ctx.beginPath();
        // ctx.lineCap = "round";
        ctx.lineWidth = barSize;
        // let radgrad = ctx.createLinearGradient(0, 0, this.w, 0)
        // radgrad.addColorStop(0, '#1B6FFF');
        // radgrad.addColorStop(0.5, '#7A5AFF');
        // radgrad.addColorStop(1, '#7066FF');
        // color = radgrad
        ctx.strokeStyle = color;
        ctx.arc(x, y, r, this.beginDeg * angle, endDeg * angle);
        ctx.stroke();
        ctx.closePath();
    }



    // 绘制圆点
    drawPoint() {
        const { ctx, x, y, r, angle, aniDeg } = this;
        // 绘制圆形
        ctx.beginPath();
        ctx.fillStyle = "rgb(255,105,180,0.7)";
        const { xPos, yPos } = this.getPointPos(aniDeg)
        ctx.moveTo(xPos-2,yPos-20);
        ctx.lineTo(xPos,xPos);
        ctx.lineTo(xPos-10,xPos-10);
        // ctx.arc(xPos, yPos, 8, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    }

    // 动画绘制
    move(color) {
        const { ctx, x, y, r, angle, w, h, progressDeg, number,barSize,isBackground } = this;

        let font = 0;
        let last = false;
        const draw = () => {
            // canvas 动画美帧绘制前 都需要把上一帧清除掉
            ctx.clearRect(0, 0, w, h);
            // 绘制背景圆弧 
            if (isBackground) {
              this.drawCircle('rgb(255,255,255,0.17)', this.endDeg);
            }
            // 绘制真实进度圆弧
            this.drawCircle(color, this.aniDeg, true,barSize);
            // 绘制真实进度圆点
            if (!isBackground) { //大仪表盘
              this.drawPoint();
            }
            
            // 缓动公式  A = A + (B - A) / 速率；
            // 需要注意的是公式会无穷接近B 所以需要加一个临界判断；
            this.aniDeg = this.aniDeg + (progressDeg - this.aniDeg) / 20;
            font = font + (number - font) / 20;
            if (isBackground) {
              this.drawFont(Math.floor(font))
            }
            if (last) { return; }
            if ((progressDeg - this.aniDeg > 1)) {
                //使用requestAnimationFrame来实现动画 效果会更加细腻
                requestAnimationFrame(draw)
            } else {
                // 临界判断 最后一次绘制 达到目标进度；
                last = true;
                this.aniDeg = progressDeg;
                font = number;
                draw();
            }
        }
        draw();
    }
}

export default circleProgress