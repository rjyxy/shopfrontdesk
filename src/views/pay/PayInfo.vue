<template>
  <!--信息-->
  <div class="order-go clearfix">
    <div class="pay-confirm clearfix">
      <div class="box">
        <div tabindex="0" id="holyshit267" class="realPay"><em class="t">实付款：</em>
          <span class="price g_price">
            <span>￥</span>
            <em class="style-large-bold-red" id="J_ActualFee">{{lastPrice.toFixed(2)}}</em>
          </span>
        </div>
        <div id="holyshit268" class="pay-address">
          <p class="buy-footer-address">
            <span class="buy-line-title buy-line-title-type">寄送至：</span>
            <span class="buy-address-detail">
              <span class="province">吉林</span>省
              <span class="city">长春</span>市
              <span class="dist">朝阳</span>区
              <span class="street">**花园****号</span>
            </span>
          </p>
          <p class="buy-footer-address">
            <span class="buy-line-title">收货人：</span>
            <span class="buy-address-detail">
              <span class="buy-user">Tony</span>
              <span class="buy-phone">1567699****</span>
            </span>
          </p>
        </div>
      </div>
      <div id="holyshit269" class="submitOrder">
        <div class="go-btn-wrap">
          <a id="J_Go" class="btn-go" tabindex="0" title="点击此按钮，提交订单" @click="show">提交订单</a>
        </div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  //父组件传递的数据
  props:['lastPrice'],
  methods: {
    ...mapActions({
      //this.emptyCar() 映射为 this.$store.dispatch('emptyCarAction')
      emptyCar: 'emptyCarAction'
    }),
    show: function () {
      //执行清空购物车操作
      this.emptyCar();
      //跳转到主页
      this.$router.push({name:'home'})
    }
  }
}
</script>


<style src="@/assets/css/cartstyle.css" scoped>
</style>

<style src="@/assets/css/jsstyle.css" scoped>
</style>