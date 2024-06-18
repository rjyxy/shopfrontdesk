<template>
<!-- 订单-->
  <div>
    <div class="concent">
      <div id="payTable">
        <h3>确认订单信息</h3>
        <div class="cart-table-th">
          <div class="wp">
            <div class="th th-item">
              <div class="td-inner">商品信息</div>
            </div>
            <div class="th th-price">
              <div class="td-inner">单价</div>
            </div>
            <div class="th th-amount">
              <div class="td-inner">数量</div>
            </div>
            <div class="th th-sum">
              <div class="td-inner">金额</div>
            </div>
            <div class="th th-oplist">
              <div class="td-inner">配送方式</div>
            </div>
          </div>
        </div>
        <div class="clear"></div>
        <div class="main">
          <div class="goods" v-for="(item,index) in list" :key="index">
            <span class="name">
              <img src="item.img">
              {{item.name}}
            </span>
            <span class="unitPrice">{{ item.unitPrice.toFixed(2)}}</span>
            <span class="num">
              {{item.num}}
            </span>
            <span class="unitTotalPrice">{{ item.unitPrice * item.num.toFixed(2)}}</span>
            <span class="pay-logis">
              快递发货
            </span>
          </div>
        </div>
      </div>
    </div>
    <PayMessage :totalPrice="totalPrice"/>
  </div>
</template>
<script>
  import PayMessage from "@/views/pay/PayMessage.vue";
  import {mapGetters} from "vuex";

  export  default {
    components: {
      PayMessage
    },
    computed: {
      ...mapGetters([
          //this.list映射为this.$store.getters.list
          'list'
      ]),
      totalPrice: function () {
        //计算商品价格
        var totalPrice = 0;
        this.list.forEach(function (item) {
          if (item.isSelect){
            totalPrice += item.num * item.unitPrice;
          }
        });
        return totalPrice;
      }
    }
  }
</script>
<style src="@/assets/css/cartstyle.css" scoped></style>
<style src="@/assets/css/jsstyle.css" scoped></style>
<style src="@/assets/css/orderstyle.css" scoped></style>