<script>
  export default {
    name:'RegisterBottom',
    methods:{
     show:function (){
        this.$router.push({name:'home'});
      }
    }
  }
</script>

<template>
  <div class="footer">
    <div class="footer-hd">
      <p>
        <a href="http://www.mingrisoft.com/" target="_blank">明日科技</a>
        <b>|</b>
        <a href="javascript:void(0)" @click="show">商场首页</a>
        <b>|</b>
        <a href="javascript:void(0)">支付宝</a>
        <b>|</b>
        <a href="javascript:void(0)">物流</a>
      </p>
    </div>
    <div class="footer-bd">
      <p>
        <a href="http://www.mingrisoft.com/Index/ServiceCenter/aboutus.html" target="_blank">关于明日</a>
        <a href="javascript:void(0)">合作伙伴</a>
        <a href="javascript:void(0)">联系我们</a>
        <a href="javascript:void(0)">网站地图</a>
        <em>© 2016-2025 mingrisoft.com 版权所有</em>
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>