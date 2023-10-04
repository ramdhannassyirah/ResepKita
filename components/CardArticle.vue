<template>
  <div class="contaier">
    <div class="row">
      <div class="col">
        <div class="">
          <img
            class="img-fluid"
            src="https://source.unsplash.com/random"
            alt=""
          />
          <div class="card-body">
            <h5 class="card-title">{{ nama }}</h5>

            <p class="card-text">
              {{ deskripsi }}
            </p>
          </div>
          <nuxt-link :to="`/resep/${resepId}`" class="text-dark"
            >Go somewhere</nuxt-link
          >
          <button @click="onDelete()">Delete</button>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    nama: {
      type: String,
      default: '',
    },
    deskripsi: {
      type: String,
      default: '',
    },
    resepId: {
      type: Number,
      default: Number,
    },
  },
  methods: {
    async onDelete() {
      try {
        const response = await this.$axios.delete(
          `/rest/v1/resep?id=eq.${this.resepId}`,
          {
            headers: {
              apikey: process.env.supabaseKey,
              'Content-Type': 'application/json',
            },
          }
        )
        if (response.status === 204) {
          console.log('Resep berhasil dihapus.')
          // Arahkan ulang halaman setelah penghapusan berhasil
          this.$router.go() // Reload halaman saat ini
        } else {
          console.error('Gagal menghapus resep.')
        }
      } catch (error) {
        console.error('Error:', error.message)
      }
    },
  },
}
</script>
