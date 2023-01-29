<template>
  <div>
    <van-nav-bar title="登录" left-arrow @click-left="$router.back()" />
    <!-- 表单 -->
   <van-form @submit="onLogin" :show-error="false" :show-error-message="false" :validate-first="true"  @failed="onFailed" ref="login-form">

  <van-field
    v-model="user.mobile"
    clearable
    placeholder="请输入手机号" :rules="formRules.mobile" name="mobile">
  </van-field>

  <van-field
    v-model="user.code"
    clearable
    placeholder="请输入验证码" :rules="formRules.code" name="code">
  <template #button>
    <van-count-down
              class="countDown"
              @finish="isCount = false"
              v-if="isCount"
              format="ss秒后可发送"
              :time="1000 * 5"
            />
    <van-button size="small" round @click.prevent="onSendsms" :loading="isloading" v-if="!isCount">发送验证码</van-button>
  </template>
  </van-field>

<van-button type="info" block class="btn">登录</van-button>
</van-form>
  </div>
</template>

<script>
import { login, sendSms } from "@/api/user";
import { Toast } from "vant";
export default {
  name: "login",
  data() {
    return {
      user: {
        mobile: "",
        code: "",
        // 13911111111
        // 246810
      },
      // 验证规则
      formRules: {
        mobile: [
          {
            required: true,
            pattern:
              /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
            message: "请输入正确的手机号！",
            trigger: "onBlur",
          },
        ],
        code: [
          {
            required: true,
            pattern: /\d{6}$/,
            message: "请输入正确的验证码！",
            trigger: "onBlur",
          },
        ],
      },
      isCount: false,
      isloading: false,
    };
  },
  methods: {
    async onLogin() {
      Toast.loading({
        message: "登录中...",
        forbidClick: true, //禁止
        duration: 0,
      });
      try {
        let result = await login(this.user);
        Toast.success("登录成功！");
        this.$store.dispatch("setUser", result.data.data);

        // 跳转之前 清除页面缓存
        // this.$store.commit("REMOVECACHEPAGE", "layout");

        // // this.$router.back();
        // // 跳转回原来的页面
         this.$router.push(this.$route.query.redirect || "/");
      } catch (error) {
        console.log(error);
        Toast.fail("登录失败！");
      }
    },
    onFailed(error) {
      if (error.errors[0]) {
        this.$toast({
          message: error.errors[0].message,
          position: "top",
        });
      }
    },
    async onSendsms() {
      // 让button显示loading
      this.isloading = true;
      // 校验手机号之后再进行发送
      try {
        await this.$refs["login-form"].validate("mobile");
        // 验证通过
        await sendSms(this.user.mobile);
        this.isCount = true;
      } catch (error) {
        let msg = "";
        // 进行错误的判断
        if (error && error.response && error.response.status == 429) {
          msg = "发送太频繁了请稍后重试";
        } else if (error.name == "mobile") {
          msg = error.message;
        } else if (error.response.status == 404) {
          msg = "手机号错误，请重新尝试";
        } else {
          msg = "未知错误，请重新尝试";
        }
        this.$toast({
          message: msg,
          position: "top",
        });
      }
      // 让button关闭loading
      this.isloading = false;
    },
  },
  // beforeRouteEnter (to, from, next) {
  //     next(vm=>{
  //         if(vm.$store.state.user){
  //             Toast('你已经登陆过了~');
  //             next(from)
  //         }else{
  //             return true;
  //         }
  //     })
  //  }
};
</script>

<style scoped lang="less">
body {
  background-color: #F7F8FA;
}
.btn {
  margin-top: 20px;
}
</style>