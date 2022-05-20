 <template>
  <div style="height: 100%" class="flex j-c a-c bg">
    <div class="img-size">
      <div class="logo-wrapper flex d-c j-c a-c">
        <!-- <img class="logo" src="../assets/img/logoLogin.png" alt="" /> -->
        <div class="logo-name">智能产销中台</div>
        <a-input
          class="input"
          v-model="userInfo.username"
          placeholder="请输入账号"
          @keydown.enter="submit"
        />
        <a-input
          class="input"
          :type="passwordType"
          v-model="userInfo.password"
          placeholder="密码"
          @keydown.enter="_Login"
        >
          <a-icon slot="suffix" @click="showPassword" :type="eyeType" />
        </a-input>
        <a-button
          class="login-btn"
          style="width: 100%; height: 40px"
          @click="_Login"
          type="primary"
        >
          登录</a-button
        >
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import api from "@/service/api";
import { getToken } from "@/utils/auth";
import VueCookies from "vue-cookies";
Vue.prototype.cookie = VueCookies;
export default {
  name: "login",
  data() {
    return {
      checked: false,
      passwordType: "password",
      eyeType: "eye-invisible",
      userInfo: {
        username: "",
        password: "",
        rememberMe: true,
      },
    };
  },
  methods: {
    //登录
    async _Login() {
      let formData = new FormData();
      formData.append("username", this.userInfo.username);
      formData.append("password", this.userInfo.password);
      formData.append("rememberMe", this.userInfo.rememberMe);
      const result = await api.login(formData);
      // console.log(result);
      if (result.code === 0) {
        localStorage.setItem("token", result.data.sessionId);
        localStorage.setItem("userName", result.data.userName);
        this.cookie.set("JSESSIONID", result.data.sessionId);
        this.$router.push("/");
      }else{
        this.$message.error("账号/密码错误");
      }
    },
    submit() {
      const { username, password } = this.userInfo;
      //   if (!this.$phoneRule(username) && username !== "admin")
      //     return this.$message.error("手机号格式错误");
      //   if (!password.trim()) return this.$message.error("请输入密码");
      this._Login();
    },
    staff() {
      this._Login({ logInType: "Mip" });
    },
    showPassword() {
      let { passwordType, eyeType } = this;
      this.passwordType = passwordType === "password" ? "text" : "password";
      this.eyeType = eyeType === "eye" ? "eye-invisible" : "eye";
    },
  },
  mounted() {
    this.$store.commit("clearAuthoriths");
    if (getToken()) return this.$router.replace("/");
    if (localStorage.getItem("inspection-account")) {
      const userInfo = JSON.parse(localStorage.getItem("inspection-account"));
      this.userInfo.code = userInfo.code;
      this.userInfo.password = userInfo.password;
      this.checked = true;
    }
  },
  // 过滤器
  filters: {},
  watch: {},
};
</script>
<style lang="scss" scoped>
.bg {
  background: url("https://signin.midea.com/themes/midea/images/bg.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.logo-wrapper {
  width: 350px;
  background: #fff;
  padding: 40px;
  border-radius: 12px;
  position: relative;
  left: 94%;
  top: 20%;
  .logo-name {
    padding-bottom: 40px;
    padding-top: 16px;
    width: 90%;
    text-align: center;
    color: #222222;
    font-size: 16px;
    border-radius: 31px;
    font-weight: bold;
  }
  .input {
    margin-bottom: 10px;
  }
  .staff {
    font-size: 12px;
    color: #222222;
    border-bottom: 1px solid #ffc30d;
    font-weight: bold;
  }
  .login-btn {
    background: #0499ff;
    color: #fff;
    border: none;
    margin-top: 27px;
  }
}

::v-deep.logo-wrapper {
  .ant-checkbox-inner {
    border-radius: 50% !important;
  }
  .ant-checkbox-wrapper:hover .ant-checkbox-inner,
  .ant-checkbox:hover .ant-checkbox-inner,
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: #bbbbbb;
  }
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #ffc30d;
    border-color: #ffc30d;
  }
}
.img-size {
  background: url("https://signin.midea.com/themes/midea/images/banner.png");
  background-size: 100%;
  background-repeat: no-repeat;
  width: 970px;
  height: 600px;
}
</style>
