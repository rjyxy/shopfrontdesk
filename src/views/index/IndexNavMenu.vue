<script>
  import TheNav from '@/components/TheNav.vue'
  import IndexMenu from "@/views/index/IndexMenu.vue";

  export default {
    name: 'IndexNavMenu',
    components:{
      TheNav,
      IndexMenu
    }
  }
</script>

<template>
  <div class="shopNav">
    <div class="slideall">
      <TheNav/>
      <IndexMenu/>
    </div>
  </div>
</template>