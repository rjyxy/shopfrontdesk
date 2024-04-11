<script >
  import LoginBottom from "@/views/login/LoginBottom.vue";
  //引入组件
  import { mapActions } from 'vuex';

  export default {
    name:'LoginHome',
    components: {
      //注册组件
      LoginBottom
    },
    data: function () {
      return {
        //用户名
        user:null,
        //密码
        password:null
      }
    },
    methods: {
      ...mapActions([
          //this.loginAction()映射为this.$store.dispatch('loginAction')
          'loginAction'
                 ]),
      login:function (){
        /*
        * 获取用户名
        * 获取密码
        */
        var user=this.user;
        var password=this.password;
        if (user == null){
          alert('请输入用户名：');
          return false;
        }
        if (user !=='mr' || password !== 'mrsoft') {
          alert('您输入的账户或密码错误：');
          return false;
        }else {
          alert('登录成功！');
          /*
          * 触发action并传递用户名
          *跳转到主页
          */
          this.loginAction(user);
          this.$router.push({name:'home'})
        }
      },
      show:function (){
        //跳转到注册页面
        this.$router.push({name:'register'});
      }
    }
  }
</script>

<template>
  <div>
    <div class="login-banner">
      <div class="login-main">
        <div class="login-banner-bg"><span></span><img src="@/assets/images/big.jpg"></div>
        <div class="login-box">
          <h3 class="title">登录</h3>
          <div class="clear"></div>
          <div class="login-form">
            <form>
              <div class="user-name">
                <label for="user"><i class="mr-icon-user"></i> </label>
                <input type="text" v-model="user" id="user" placeholder="邮箱/手机/用户名">
              </div>
              <div class="user-pass">
                <label for="password"><i class="mr-icon-lock"></i> </label>
                <input type="password" v-model="password" id="password" placeholder="请输入密码">
              </div>
            </form>
          </div>
          <div class="login-links">
            <label class="remember-me"><input id="remember-me" type="checkbox">记住密码</label>
            <a href="javascript:void(0)" @click="show" class="mr-fr">注册</a>
            <br/>
          </div>
          <div class="mr-cf">
            <input type="submit" name="" value="登 录" @click="login" class="mr-btn mr-btn-primary mr-btn-sm">
          </div>
          <div class="partner">
            <h3>合作账号</h3>
            <li><a href="javascript:void(0)"><i class="mr-icon-qq mr-icon-sm"></i><span>QQ登录</span> </a> </li>
            <li><a href="javascript:void(0)"><i class="mr-icon-weibo mr-icon-sm"></i><span>微博登录</span> </a> </li>
            <li><a href="javascript:void(0)"><i class="mr-icon-weixin mr-icon-sm"></i><span>微信登录</span> </a> </li>
          </div>
        </div>
      </div>
    </div>
    <LoginBottom/>
  </div>
</template>

<style src="@/assets/css/login.css" scoped>

</style>