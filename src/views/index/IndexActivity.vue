<script>
  export default {
    name: 'IndexActivity',
    methods: {
      show:function () {
        this.$router.push({name:'shopinfo'});
      }
    }
  }
</script>

<template>
  <!--热门活动 -->
  <div class="mr-container activity">
    <div class="shopTitle">
      <h4>活动</h4>
      <h3>每期活动 优惠享不停</h3>
      <span class="more" >
        <a href="javascript:void(0)">全部活动 <i class="mr-icon-angle-right" style="padding-left: 10px;" ></i> </a>
      </span>
    </div>
    <div class="mr-g mr-g-fixed">
      <div class="mr-u-sm-3">
        <div class="icon-sale one"></div>
        <h4>秒杀</h4>
        <div class="activityMain">
          <a href="javascript:void(0)" @click="show"><img src="@/assets/images/activity-1.jpg"/></a>
        </div>
        <div class="info">
          <h3><a href="javascript:void(0)" @click="show">春节送礼优选</a> </h3>
        </div>
      </div>
      <div class="mr-u-sm-3">
        <div class="icon-sale two"></div>
        <h4>特惠</h4>
        <div class="activityMain ">
          <a href="javascript:void(0)" @click="show"><img src="@/assets/images/activity2.jpg"></a>
        </div>
        <div class="info">
          <h3><a href="javascript:void(0)" @click="show">春节送礼优选</a> </h3>
        </div>
      </div>
      <div class="mr-u-sm-3">
        <div class="icon-sale three"></div>
        <h4>团购</h4>
        <div class="activityMain ">
          <a href="javascript:void(0)" @click="show"><img src="@/assets/images/activity3.jpg" alt=""></a>
        </div>
        <div class="info">
          <h3><a href="javascript:void(0)" @click="show">春节送礼优选</a> </h3>
        </div>
      </div>
      <div class="mr-u-sm-3 last">
        <div class="icon-sale"></div>
        <h4>超值</h4>
        <div class="activityMain ">
          <a href="javascript:void(0)" @click="show"><img src="@/assets/images/activity.jpg" alt=""></a>
        </div>
        <div class="info">
          <h3><a href="javascript:void(0)" @click="show">春节送礼优选</a> </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>