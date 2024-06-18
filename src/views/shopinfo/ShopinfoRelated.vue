<template>
  <div class="introduce">
    <ShopinfoBrowse/><ShopinfoIntroduce/>
  </div>
</template>

<script>
import ShopinfoBrowse from "@/views/shopinfo/ShopinfoBrowse.vue"
import ShopinfoIntroduce from "@/views/shopinfo/ShopinfoIntroduce.vue";
export default {
  name: 'ShopinfoRelated',
  components: {
    ShopinfoBrowse,
    ShopinfoIntroduce
  }
}
</script>
<style src="@/assets/css/optstyle.css" scoped></style>
<style src="@/assets/css/infoStyle.css" scoped></style>