<template>
  <div>
    <div class="footer">
      <div class="footer-hd">
        <p>
          <a href="http://www.mingrisoft.com/" target="_blank">明日科技</a>
          <b>|</b>
          <a href="javascript:void(0)" @click="show">商城首页</a>
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
          <em>© 2016-2025 mingrisoft.com</em>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopcartBottom",
  methods:{
    show: function () {
      this.$router.push({name:'home'});
    }
  }
}
</script>
