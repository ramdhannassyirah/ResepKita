<template>
  <div class="container">
    <div class="row py-3">
      <div class="col text-center">
        <h1 class="">RESEP</h1>
        <p>Kumpulan Resep Terbaik untuk Setiap Kesempatan</p>
        <hr />
      </div>
    </div>
    <div class="row">
      <card-article
        v-for="(item, id) of resep"
        :key="id"
        :nama="item?.nama"
        :deskripsi="item?.deskripsi"
        :resep-id="item?.id"
        class="col-md-4"
      />
    </div>
  </div>
</template>
<style></style>
<script>
import CardArticle from '~/components/CardArticle.vue'

export default {
  components: { CardArticle },
  data() {
    return {
      isCreate: false,
      resep: [],
    }
  },
  mounted() {
    this.getResep()
  },
  methods: {
    async getResep() {
      const response = await this.$axios.get('/rest/v1/resep', {
        headers: {
          apikey: process.env.supabaseKey,
        },
      })

      this.resep = response?.data
    },
  },
}
</script>
