<template>
  <div class="box">
    <div class="title">
      <span class="check">选择</span>
      <span class="name">商品信息</span>
      <span class="unitPrice">单价</span>
      <span class="num">数量</span>
      <span class="unitTotalPrice">金额</span>
      <span class="operation">操作</span>
    </div>
    <ShopcartCart></ShopcartCart>
    <ShopcartBottom></ShopcartBottom>
  </div>
</template>

<script>
import ShopcartCart from "@/views/shopcart/ShopcartCart.vue";
import ShopcartBottom from "@/views/shopcart/ShopcartBottom.vue";

export default {
  name: "ShopcartHome",
  components: {
    ShopcartCart,
    ShopcartBottom
  }
}
</script>
<style src="@/assets/css/style.css" scoped>

</style>