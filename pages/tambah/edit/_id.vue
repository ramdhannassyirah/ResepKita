<template>
  <div class="container">
    <form @submit="updateResep">
      <div class="form-group">
        <label for="nama">Nama Resep:</label>
        <input
          type="text"
          id="nama"
          v-model="updatedResep.nama"
          class="form-control"
          required
        />
      </div>
      <div class="form-group">
        <label for="deskripsi">Deskripsi:</label>
        <textarea
          id="deskripsi"
          v-model="updatedResep.deskripsi"
          class="form-control"
          required
        ></textarea>
      </div>
      <div class="form-group">
        <label for="bahan">Bahan-bahan:</label>
        <textarea
          id="bahan"
          v-model="updatedResep.bahan"
          class="form-control"
          required
        ></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Update</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      updatedResep: {
        nama: '',
        deskripsi: '',
        bahan: '',
      },
    }
  },
  async created() {
    // Ambil ID resep dari parameter URL
    const resepId = this.$route.params.id

    // Panggil metode untuk mengambil detail resep berdasarkan ID
    await this.getDetailResep(resepId)
  },
  methods: {
    async getDetailResep(resepId) {
      try {
        const response = await this.$axios.get(
          `/rest/v1/resep?id=eq.${resepId}`,
          {
            headers: {
              apikey: process.env.supabaseKey,
            },
          }
        )
        if (response.status === 200) {
          const data = response.data[0]

          if (data) {
            // Mengisi data yang ada ke dalam formulir
            this.updatedResep.nama = data.nama
            this.updatedResep.deskripsi = data.deskripsi
            this.updatedResep.bahan = data.bahan
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
    async updateResep() {
      try {
        // Ambil ID resep dari parameter URL
        const resepId = this.$route.params.id

        const response = await this.$axios.patch(
          `/rest/v1/resep?id=eq.${resepId}`,
          this.updatedResep, // Kirim data resep yang sudah diupdate sebagai payload
          {
            headers: {
              apikey: process.env.supabaseKey,
              'Content-Type': 'application/json',
            },
          }
        )
        if (response.status === 200) {
          console.log('Data berhasil diupdate ke Supabase.')
        } else {
          throw new Error('Gagal mengupdate data ke Supabase.')
        }
      } catch (error) {
        console.error('Error:', error.message)
      }
    },
  },
}
</script>
