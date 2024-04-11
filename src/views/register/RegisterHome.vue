<script>
  //引入组件
  import RegisterBottom from '@/views/register/RegisterBottom.vue'
  export default {
    name: 'RegisterHome',
    components: {
      //注册组件
      RegisterBottom
    },
    data: function (){
      return {
        /*
        是否同意注册协议复选框
        电子邮箱
        密码
        确认密码
        手机号
        */
        checked:false,
        email:'',
        password:'',
        passwordRepeat:'',
        tel:''
      }
    },
    methods: {
      mr_verify:function () {
        //获取表单对象
        var email = this.email;
        var password = this.password;
        var passwordRepeat = this.passwordRepeat;
        var tel = this.tel;
        //验证表单元素是否为空
        if (email==='' || email === null) {
          alert("邮箱不为空！");
          return;
        }
        if (password === '' || password === null) {
          alert("密码不能为空！");
          return;
        }
        if (passwordRepeat === '' || passwordRepeat === null) {
          alert("确认密码不能为空！");
          return;
        }
        if (tel === '' || tel === null) {
          alert("手机号码不能为空！");
          return;
        }
        if (password !== passwordRepeat) {
          alert("密码设置前后不一致！");
          return;
        }
        //验证邮箱格式
        var apos = email.indexOf("@")
        var dotpos = email.lastIndexOf(".")
        if (apos < 1 || dotpos - apos < 2) {
          alert("邮箱格式错误！");
          return;
        }
        //验证手机号格式
        if (isNaN(tel)) {
          alert("手机号请输入数字！");
          return;
        }
        /*const  params = {
          email: this.email,
          password: this.password,
          tel: this.tel
        };

        //发送post请求
        this.$axios.post('/registeruser',params).then(() => {
          //请求成功，处理结果
          console.error("注册成功");
        }).catch(error => {
          //请求失败，处理错误
          console.error(error);
        });*/
        alert('注册成功！');
        //跳转到主页
        this.$router.push({name:'home'});
      },
      show:function () {
        //跳转到登录界面
        this.$router.push({name:'login'})
      }
    }
  }
</script>

<template>
  <div>
    <div class="res-banner">
      <div class="res-main">
        <div class="login-banner-bg"><span></span><img src="@/assets/images/big.jpg" /></div>
        <div class="login-box">
          <div class="mr-tabs" id="doc-my-tabs">
            <h3 class="title">注册</h3>
            <div class="mr-tabs-bd">
              <div class="mr-tab-panel mr-active">
                <form method="post">
                  <div class="user-email">
                    <label for="email"><i class="mr-icon-envelope-o"></i></label>
                    <input type="email" v-model="email" id="email" placeholder="请输入邮箱账号">
                  </div>
                  <div class="user-pass">
                    <label for="password"><i class="mr-icon-lock"></i> </label>
                    <input type="password" v-model="password" id="password" placeholder="设置密码">
                  </div>
                  <div class="user-pass">
                    <label for="passwordRepeat"><i class="mr-icon-lock"></i></label>
                    <input type="password" v-model="passwordRepeat" id="passwordRepeat" placeholder="确认密码">
                  </div>
                  <div class="user-pass">
                    <label for="passwordRepeat"><i class="mr-icon-mobile"></i>
                      <span style="color: red;margin-left: 5px">*</span></label>
                    <input type="text" v-model="tel" id="tel" placeholder="请输入手机号">
                  </div>
                </form>
                <div class="login-links">
                  <label for="reader-me">
                    <input id="reader-me" type="checkbox" v-model="checked"> 点击表示您同意商城《服务协议》
                  </label>
                  <a href="javascript:void(0)" @click="show" class="mr-fr">登录</a>
                </div>
                <div class="mr-cf">
                  <input type="submit" name="" :disabled="!checked" @click="mr_verify" value="注册"
                          class="mr-btn mr-btn-primary mr-btn-sm mr-fl">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <RegisterBottom/>
  </div>
</template>

<style src="@/assets/css/login.css" scoped></style>