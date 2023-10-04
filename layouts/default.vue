<template>
  <div class="">
    <headerWeb />
    <br />
    <nuxt class="mt-5" />
    <!-- <footerWeb /> -->
  </div>
</template>
<script>
import headerWeb from '@/components/HeaderWeb.vue'
// import footerWeb from '@/components/FooterWeb.vue'
export default {
  components: {
    headerWeb,
    // footerWeb,
  },
}
</script>
