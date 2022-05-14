import store from '../store/index';
import moment from 'moment';
export default {
    data(){
        return {
             /**
             * 目前支持手机号
                电信	133,149,153,173,174,177,180,181,189,191,193,199
                移动	134,135,136,137,138,139,147,148,150,151,152,157,158,159,172,178,182,183,184,187,188,195,198
                联通	130,131,132,145,146,155,156,166,175,176,185,186,196
                广电	190,192,197
                电信虚拟	162,1700,1701,1702
                移动虚拟	165,1703,1705,1706
                联通虚拟	167,1704,1707,1708,1709,171
            */
            phoneRule: /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/, //手机号正则
        }
    },
    methods:{
        $Confirm(title,text,ok,cancelText="返回",okText="确定",onCancel) {
            this.$confirm({
                title: title,
                icon:'none',
                content: () =>  <div ref="confirm" style="color:rgb(126, 120, 120);opacity:0.8;marginLeft:-38px">{text}</div>,
                onOk: ok,
                $ConfirmLoading:true,
                onCancel:onCancel,
                bodyStyle:{"background":'red'},
                class: 'test',
                okText:okText,
                cancelText:cancelText,
                centered:true,
                maskClosable:true,
                maskStyle:{
                    "background-color":"rgba(0,0,0,0.6)",
                },
            });
        },
        // 导出列表
        $Export(fileName,data,type){ 
            const link = document.createElement("a");
            // let res = await API.exportOrder(this.queryListData);
           
            // 创建Blob对象，设置文件类型
            let blob = new Blob([data], { type: type||"application/vnd.ms-excel" });
            let objectUrl = URL.createObjectURL(blob); // 创建URL
            link.href = objectUrl;
            link.download = fileName; // 自定义文件名
            link.click(); // 下载文件
            URL.revokeObjectURL(objectUrl); // 释放内存
        },
        // 下载图片
        $downloadIamge(imgsrc, name) {
            //下载图片地址和图片名
            var image = new Image();
            // 解决跨域 Canvas 污染问题
            image.setAttribute("crossOrigin", "anonymous");
            image.onload = function() {
            var canvas = document.createElement("canvas");
            canvas.width = image.width;
            canvas.height = image.height;
            var context = canvas.getContext("2d");
            context.drawImage(image, 0, 0, image.width, image.height);
            var url = canvas.toDataURL("image/png"); //得到图片的base64编码数据
        
            var a = document.createElement("a"); // 生成一个a元素
            var event = new MouseEvent("click"); // 创建一个单击事件
            a.download = name || "photo"; // 设置图片名称
            a.href = url; // 将生成的URL设置为a.href属性
            a.dispatchEvent(event); // 触发a的单击事件
            };
            image.src = imgsrc;
        },
        // 点击拷贝
        $copy(data){
            let url = data;
            let oInput = document.createElement('input');
            oInput.value = url;
            document.body.appendChild(oInput);
            oInput.select(); // 选择对象;
            // console.log(oInput.value)
            document.execCommand("Copy"); // 执行浏览器复制命令
            this.$message.success("复制成功",0.5)
            oInput.remove()
        },
         //选择框绝对定位
        $getPopupContainer(){
            
            return this.$refs.content
        },
        // 赋予选择框搜索选择
        $filterOption(value,option){
            return option.componentOptions.children[0].text.indexOf(value) >= 0
        },
        // 不可选未来时间
        $disabledDate (current) {
            return current && current > moment().endOf('day').format('x')
        },
        //手机号正则
        $phoneRule(test){
            return this.phoneRule.test(test)
        },
        $noPermission(string){
            let userAuthoritys = store.getters.getAuthoriths;
            if(userAuthoritys.indexOf(string) <= -1) {
                return true
            }
            return false
        },
    },

}