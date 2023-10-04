<template>
  <div class="container">
    <div class="">
      <img
        class="card-img-top"
        src="https://source.unsplash.com/random"
        alt=""
      />
      <div class="card-body">
        <h5 class="card-title">{{ nama }}</h5>
        <p class="card-text">{{ deskripsi }}</p>
        <p class="card-text">{{ bahan }}</p>
      </div>
    </div>
    <nuxt-link to="/tambah/_id/edit">Edit</nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nama: '',
      deskripsi: '',
      bahan: '',
      resepId: '',
    }
  },
  async created() {
    const params = this.$route.params
    await this.getDetailData(params?.id)
  },
  methods: {
    async getDetailData(resepId) {
      try {
        const response = await this.$axios.get(
          `/rest/v1/resep?id=eq.${resepId}`,
          {
            headers: {
              apikey: process.env.supabaseKey,
              'Content-Type': 'application/json',
              Prefer: 'return=representation',
            },
          }
        )
        if (response.status === 200) {
          const data = response.data[0] // Ambil data pertama dari respons

          if (data) {
            this.nama = data.nama
            this.deskripsi = data.deskripsi
            this.bahan = data.bahan
            this.resepId = data.id
          } else {
            console.error('Resep tidak ditemukan.')
          }
        } else {
          console.error('Gagal mengambil data resep.')
        }
      } catch (error) {
        console.error('Error:', error.message)
      }
    },
    onEdit() {
      this.$router.push(`/form/${this.resepId}/edit`)
    },
  },
}
</script>

<style scoped>
/* Gaya CSS khusus untuk komponen ini, jika diperlukan */
</style>
