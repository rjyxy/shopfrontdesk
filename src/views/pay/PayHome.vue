<template>
  <div class="concent">
    <div class="paycont">
      <PayOrder/><PayAddress/><PayLogistics/><PayBottom/><PayPayment/>
    </div>
  </div>
</template>

<script>
import PayAddress from '@/views/pay/PayAddress.vue'
import PayLogistics from '@/views/pay/PayLogistics.vue'
import PayPayment from '@/views/pay/PayPayment.vue'
import PayOrder from "@/views/pay/PayOrder.vue";
import PayBottom from "@/views/pay/PayBottom.vue";

export default {
  name: "PayHome",
  components: {
    PayBottom,
    PayOrder,
    PayAddress,
    PayLogistics,
    PayPayment
  }
}
</script>


<style src="@/assets/css/cartstyle.css" scoped>
</style>

<style src="@/assets/css/jsstyle.css" scoped>
</style>