<script>
import IndexNavMenu from "@/views/index/IndexNavMenu.vue";
import IndexBanner from "@/views/index/IndexBanner.vue";
import IndexShopMain from "@/views/index/IndexShopMain.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
  name: 'IndexHome',
  components: {
    TheFooter,
    IndexShopMain,
    IndexBanner,
    IndexNavMenu,
  }
}
</script>

<template>
  <div>
    <IndexNavMenu/><IndexBanner/><IndexShopMain/><TheFooter/>
  </div>
</template>

<style scoped>

</style>