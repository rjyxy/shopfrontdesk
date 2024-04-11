<template>
<!--今日推荐-->
  <div class="mr-g mr-g-fixed recommendation">
    <div class="clock mr-u-sm-3">
    </div>
    <div class="mr-u-sm-4 mr-u-lg-3">
      <div class="info">
        <h3>真的有鱼</h3>
        <h4>开年福利篇</h4>
      </div>
      <div class="recommendationMain one">
        <a href="javascript:void(0)" @click="show"><img src="@/assets/images/tj.png" alt=""></a>
      </div>
    </div>
    <div class="mr-u-sm-4 mr-u-lg-3">
      <div class="info">
        <h3>囤货过冬</h3>
        <h4>让爱早回家</h4>
      </div>
      <div class="recommendationMain two">
        <a href="javascript:void(0)" @click="show"><img src="@/assets/images/tj1.png" alt=""></a>
      </div>
    </div>
      <div class="mr-u-sm-4 mr-u-lg-3">
        <div class="info">
          <h3>浪漫情人节</h3>
          <h4>甜甜蜜蜜</h4>
        </div>
        <div class="recommendationMain three">
          <a href="javascript:void(0)" @click="show"><img src="@/assets/images/tj2.png" alt=""></a>
        </div>
      </div>
    
  </div>
</template>

<script>
export default {
  name:'IndexRecommend',
  methods:{
    show:function (){
      this.$router.push({name:'shopinfo'})
    }
  }
}
</script>

<style scoped>

</style>