<script>

import IndexRecommend from "@/views/index/IndexRecommend.vue";
import IndexActivity from "@/views/index/IndexActivity.vue";
import IndexPhone from "@/views/index/IndexPhone.vue";
import IndexComputer from "@/views/index/IndexComputer.vue";

  export default {
    name:'IndexShopMain',
    components: {
      IndexRecommend,
      IndexActivity,
      IndexPhone,
      IndexComputer
    }
  }
</script>

<template>
  <div class="shopMainbg">
    <div class="shopMain" id="shopmain">
      <IndexRecommend/><IndexActivity/><IndexPhone/><IndexComputer/>
    </div>
  </div>
</template>

<style>

</style>