<template>
  <div class="">
    <headerWeb1 v-if="isLoggedIn" />
    <HeaderLogin v-else />
    <br />
    <nuxt class="mt-5" />
    <!-- <footerWeb /> -->
  </div>
</template>
<script>
import { mapState } from 'vuex'

import headerWeb1 from '@/components/HeaderWeb1.vue'
import HeaderLogin from '@/components/HeaderLogin.vue'
// import footerWeb from '@/components/FooterWeb.vue'
export default {
  components: {
    headerWeb1,
    HeaderLogin,
    // footerWeb,
  },

  computed: {
    ...mapState(['isLoggedIn']),
  },
}
</script>
