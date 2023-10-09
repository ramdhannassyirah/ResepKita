<template>
  <div class="container">
    <div class="row">
      <div class="col text-center">
        <h1 class="">TAMBAH RESEP</h1>
        <p>Berkontribusi dengan resepmu</p>
        <hr />
      </div>

      <form @submit="addResep">
        <!-- Input Gambar -->
        <div class="row">
          <!-- Input Nama Resep -->
          <div class="col">
            <label for="nama">Nama Resep:</label>
            <input
              type="text"
              id="nama"
              v-model="newResep.nama"
              class="form-control"
              required
            />
          </div>

          <div class="col">
            <label for="deskripsi">Deskripsi:</label>
            <input
              type="text"
              id="deskripsi"
              v-model="newResep.deskripsi"
              class="form-control"
              required
            />
          </div>
        </div>

        <div class="form-group">
          <label for="bahan">Bahan-bahan:</label>
          <textarea
            id="bahan"
            v-model="newResep.bahan"
            class="form-control"
            required
          ></textarea>
        </div>

        <!-- Tombol Submit -->
        <button type="submit" class="btn btn-dark mt-3">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newResep: {
        nama: '',
        deskripsi: '',
        bahan: '',
      },
    }
  },
  methods: {
    async addResep() {
      try {
        const response = await this.$axios.post(
          '/rest/v1/resep',
          this.newResep, // Kirim data resep sebagai payload
          {
            headers: {
              apikey: process.env.supabaseKey,
            },
          }
        )
        if (response.status === 201) {
          console.log('Data berhasil ditambahkan ke Supabase.')
        } else {
          throw new Error('Gagal menambahkan data ke Supabase.')
        }
      } catch (error) {
        console.error('Error:', error.message)
      }
    },
  },
}
</script>
