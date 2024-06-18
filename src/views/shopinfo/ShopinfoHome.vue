<template>
  <div>
    <b class="line"></b><div class="nav-table">
    <TheNav/>
  </div>
    <ShopinfoInfo/>
    <ShopinfoDiscount/>
    <ShopinfoRelated/>
  </div>
</template>

<script>
import TheNav from "@/components/TheNav.vue"
import ShopinfoDiscount from "@/views/shopinfo/ShopinfoDiscount.vue"
import ShopinfoInfo from "@/views/shopinfo/ShopinfoInfo.vue";
import ShopinfoRelated from "@/views/shopinfo/ShopinfoRelated.vue";

export default {
  name: 'ShopinfoHome',
  components: {
    TheNav,
    ShopinfoInfo,
    ShopinfoDiscount,
    ShopinfoRelated
  }
}
</script>

<style scoped>

</style>