<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <img
          class="img-fluid rounded"
          src="https://source.unsplash.com/800x400/?food"
          alt=""
        />
      </div>
      <div class="col-md d-flex flex-column justify-content-center ml-md-3">
        <h5 class="fw-bold fs-1">{{ nama }}</h5>
        <div class="d-flex my-3">
          <a href=""><i class="bi bi-facebook"></i></a>
          <a href=""><i class="bi bi-instagram px-3"></i></a>
          <a href=""><i class="bi bi-whatsapp"></i></a>
        </div>
        <p class="card-text">{{ deskripsi }}</p>
        <nuxt-link class="btn custom-button" :to="`/tambah/edit/${resepId}`"
          >Edit</nuxt-link
        >
        <hr />
      </div>
      <p class="card-text">{{ bahan }}</p>
    </div>
  </div>
</template>
<style scoped>
.custom-button {
  font-weight: 600;
  color: black;
  border: solid 1px black;
  width: 80px;
}
.custom-button:hover {
  background-color: rgb(242, 189, 120);
}
</style>

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
