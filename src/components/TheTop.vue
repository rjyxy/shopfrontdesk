<script>
//引入辅助函数
import {mapState,mapGetters,mapActions} from "vuex";
export default {
  name: 'TheTop',
  computed: {
    ...mapState([
        /**
         * this.user 映射为 this.$store.state.user
         * this.isLogin 映射为 this.$store.state.isLogin*/
        'user',
        'isLogin'
    ]),
    ...mapGetters([
        /**this.length 映射为 this.$store.getters.length */
        'length'
    ])
  },
  methods: {
    show: function (value) {
      if (value == 'shopcart'){
        if (this.user == null) {
          //用户登录
          alert('亲，请登录！');
          // 跳转到登录界面
          this.$router.push({name:'login'});
          return false;
        }
      }
      this.$router.push({name:value});
    },
    ...mapActions([
      /**this.logoutAction() 映射为 this.$store.dispatch('logoutAction') */
        'logoutAction'
    ]),
    logout: function (){
      if (confirm('确定退出登录吗？')){
        // 退出登录界面
        this.logoutAction();
        // 挑战到主页
        this.$router.push({name:'home'})
      }else {
        return false;
      }
    }
  }
}
</script>

<template>
  <div class="hmtop">
  <!--顶部导航条-->
    <div class="mr-container header">
      <ul class="message-l">
        <div class="topMessage">
          <div class="menu-hd">
            <a @click="show('login')" target="_top" class="h" style="color: red" v-if="!isLogin">
              亲，请登录
            </a>
            <span v-else style="color: green">
              {{user}}，欢迎您
              <a @click="logout" style="color: red">
                退出登录
              </a>
            </span>
            <a @click="show('register')" target="_top" style="color: red;margin-left: 20px;">
              免费注册
            </a>
          </div>
        </div>
      </ul>
      <ul class="message-r">
        <div class="topMessage home">
          <div class="menu-hd">
            <a @click="show('home')" target="_top" class="h" style="color: red" >
              商城首页
            </a>
          </div>
        </div>
          <div class="topMessage my-shangcheng">
            <div class="menu-hd Myshangcheng">
              <a href="#" target="_top">
                <i class="mr-icon-user mr-icon-fw"></i>
                个人中心
              </a>
            </div>
          </div>
          <div class="topMessage mini-cart">
            <div class="menu-hd">
              <a id="mc-menu-hd" @click="show('shopcart')" target="_top">
                <i class="mr-icon-shopping-cart mr-icon-fw"></i>
                  <span style="color: red">购物车</span>
                  <strong id="J_MiniCartNum" class="h" v-if="isLogin">{{length}}</strong>
              </a>
            </div>
          </div>
          <div class="topMessage favorite">
            <div class="menu-hd">
              <a href="#" target="_top">
                <i class="mr-icon-heart mr-icon-fw"></i>
                <span>收藏夹</span>
              </a>
            </div>
          </div>
      </ul>
    </div>
  <!--悬浮搜索框-->
    <div class="nav white">
      <div class="logo">
        <a @click="show('home')">
          <img src="@/assets/images/logo.png">
        </a>
      </div>
        <div class="logoBig">
          <li @click="show('home')">
            <img src="@/assets/images/logobig.png">
          </li>
        </div>
        <div class="search-bar pr">
          <form>
            <input id="searchInput" name="index_noe_header_sysc" type="text" placeholder="搜索" autocomplete="off">
            <input id="ai-topsearch" class="submit mr-btn" value="搜索" index="1" type="submit">
          </form>
        </div>
    </div>
    <div class="clear"></div>
  </div>
</template>

<style scoped lang="scss">
.logoBig li{
  //定义鼠标指针形状
  cursor: pointer;
}
a{
  //定义鼠标指针形状
  cursor: pointer;
}

</style>