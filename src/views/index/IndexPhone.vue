<script>
  export default {
    name: 'IndexPhone',
    data: function (){
      return {
        //手机品牌数组
        brands: ['小米','荣耀','华为','vivo','联想','OPPO'],
        //手机核数数组
        storage: ['18G','16G','12G','8G','6G','4G']
      }
    },
    methods: {
      show: function (){
        //跳转到商品详情页
        this.$router.push({name:'shopinfo'});
      }
    }
  }
</script>

<template>
  <!--手机-->
  <div id="f1">
    <div class="mr-container">
      <div class="shopTitle">
        <h4>手机</h4>
        <h3>手机风暴</h3>
        <div class="today-brands">
          <a href="javascript:void(0)" v-for="item in brands" :key="item">{{item}}</a>
        </div>
        <span class="more">
          <a href="javascript:void(0)">更多手机<i class="mr-icon-angle-right" style="padding-left: 10px;"></i> </a>
        </span>
      </div>
    </div>
    <div class="mr-g mr-g-fixed floodFive">
      <div class="mr-u-sm-5 mr-u-md-3 text-one list">
        <div class="word">
          <a class="outer" href="javascript:void(0)" v-for="item in storage" :key="item">
            <span class="inner"><b class="text">{{item}}</b> </span>
          </a>
        </div>
        <a href="javascript:void(0)">
          <img src="@/assets/images/tel.png" width="100px" height="170px"/>
          <div class="outer-con">
            <div class="title">
              免费领30天碎屏险
            </div>
            <div class="sub-title">
              颜值之星，双摄之星
            </div>
          </div>
        </a>
        <div class="triangle-topright"></div>
      </div>
        <div class="mr-u-sm-7 mr-u-md-5 mr-u-lg-2 text-two">
          <div class="outer-con">
            <div class="title">
              vivo X90
            </div>
            <div class="sub-title">
              ￥3999.00
            </div>
            <i class="mr-icon-shopping-basket mr-icon-md seprate"></i>
          </div>
          <a href="javascript:void(0)" @click="show"><img src="@/assets/images/phone1.jpg"/></a>
        </div>
        <div class=" mr-u-md-2 mr-u-lg-2 text-three sug">
          <div class="outer-con">
            <div class="title">
              小米13
            </div>
            <div class="sub-title">
              ￥4299.00
            </div>
            <i class="mr-icon-shopping-basket mr-icon-md seprate"></i>
          </div>
          <a href="javascript:void(0)" @click="show"><img src="@/assets/images/phone2.jpg"/></a>
        </div>
        <div class="mr-u-md-2 mr-u-lg-2 text-three big">
          <div class="outer-con">
            <div class="title">
              OPPO Find N2
            </div>
            <div class="sub-title">
              ￥7999.00
            </div>
            <i class="mr-icon-shopping-basket mr-icon-md seprate"></i>
          </div>
          <a href="javascript:void(0)" @click="show"><img src="@/assets/images/phone5.jpg"/></a>
        </div>
        <div class="mr-u-sm-4 mr-u-md-5 mr-u-lg-4 text-five">
          <div class="outer-con">
            <div class="title">
              华为 Mate 50
            </div>
            <div class="sub-title">
              ￥4999.00
            </div>
            <i class="mr-icon-shopping-basket mr-icon-md seprate"></i>
          </div>
          <a href="javascript:void(0)" @click="show"><img src="@/assets/images/phone3.jpg"/></a>
        </div>
        <div class="mr-u-sm-4 mr-u-md-2 mr-u-lg-4 text-six">
          <div class="outer-con">
            <div class="title">
              荣耀80
            </div>
            <div class="sub-title">
              ￥2799.00
            </div>
            <i class="mr-icon-shopping-basket mr-icon-md seprate"></i>
          </div>
          <a href="javascript:void(0)" @click="show"><img src="@/assets/images/phone4.jpg"/></a>
        </div>
        <div class="mr-u-sm-4 mr-u-md-2 mr-u-lg-4 text-six big">
          <div class="outer-con">
            <div class="title">
              OPPO Reno9
            </div>
            <div class="sub-title">
              ￥2699.00
            </div>
            <i class="mr-icon-shopping-basket mr-icon-md seprate"></i>
          </div>
          <a href="javascript:void(0)" @click="show"><img src="@/assets/images/phone6.jpg"/></a>
        </div>
      </div>
    <div class="clear"></div>
  </div>
</template>

<style scoped>

</style>