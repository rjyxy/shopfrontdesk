<template>
  <div class="introduceMain">
    <div class="mrtabs" data-mr-tabs>
      <ul class="mr-avg-sm-3 mr-tabs-nav mr-nav mr-nav-tabs">
        <li id="infoTitle" :class= "{'mr-active': current == 'ShopinfoDettails'}">
          <a @click="current='ShopinfoDetails'">
            <span class="index-needs-dt-txt">宝贝详情</span>
          </a>
        </li>

        <li id="commentTitle" :class= "{'mr-active': current == 'ShopinfoComment'}">
          <a @click="current='ShopinfoComment'">
            <span class="index-needs-dt-txt">全部评价</span>
          </a>
        </li>

        <li id="youLikeTitle" :class= "{'mr-active': current == 'ShopinfoLike'}">
          <a @click="current='ShopinfoLike'">
            <span class="index-needs-dt-txt">猜你喜欢</span>
          </a>
        </li>
      </ul>
      <div class="mr-tabs-bd">
        <component :is="current"></component>
      </div>
    </div>
    <div class="clear"></div>

    <div class="footer">
      <div class="footer-hd">
        <p>
          <a href="http://www.mingrisoft.com/" target="_blank">明日科技</a>
          <b>|</b>
          <a href="javasript：void(0)" @click="show">商城首页</a>
          <b>|</b>
          <a href="javasript：void(0)">支付宝</a>
          <b>|</b>
          <a href="javasript：void(0)">物流</a>
        </p>
      </div>
      <div class="footer-bd">
        <p>
          <a href="http://www.mingrisoft.com/Index/ServiceCenter/aboutus.html" target="_blank">关于明日</a>
          <a href="javasript：void(0)">合作伙伴</a>
          <a href="javasript：void(0)">联系我们</a>
          <a href="javasript：void(0)">网站地图</a>
          <em>© 2016-2025 mingrisoft.com 版权所有</em>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
//引入组件
import ShopinfoDetails from "@/views/shopinfo/ShopinfoDetails.vue";
import ShopinfoComment from "@/views/shopinfo/ShopinfoComment.vue";
import ShopinfoLike from "@/views/shopinfo/ShopinfoLike.vue";

export default {
  name: "ShopinfoIntroduce",
  data: function () {
    return {
      //当前显示组件
      current: 'ShopinfoDetails'
    }
  },
  components: {
    ShopinfoDetails,
    ShopinfoComment,
    ShopinfoLike
  },
  methods: {
    show: function () {
      //跳转到主页
      this.$router.push({name:'home'});
    }
  }
}
</script>

<style src="@/assets/css/optstyle.css" scoped></style>
<style src="@/assets/css/infoStyle.css" scoped></style>