<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="custom-card">
          <div class="image-container">
            <img
              class="img-fluid rounded"
              src="https://source.unsplash.com/300x350/?food"
              alt=""
            />
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ nama }}</h5>

            <p class="card-text">
              {{ deskripsi }}
            </p>
          </div>
          <nuxt-link :to="`/resep/${resepId}`" class="element btn custom-button"
            >Detail</nuxt-link
          >
          <a class="element btn custom-button" @click="onDelete()">Delete</a>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.element {
  position: relative;
  text-decoration: none;
  display: inline-block; /* Membuat elemen memiliki lebar sesuai teks */
  padding-bottom: 2px; /* Sesuaikan sesuai kebutuhan */
}

.element::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 100%; /* Mulai dari luar elemen */
  height: 3px; /* Atur tinggi garis bawah sesuai keinginan */
  background-color: rgb(242, 189, 120); /* Warna garis bawah */
  transition: right 0.3s ease; /* Efek transisi bergerak */
}

.element:hover::before {
  right: 0; /* Berhenti di ujung kanan elemen */
}
hr {
  height: 2px;
  background-color: black;
  color: black;
  border: none;
}
.image-container {
  width: 300px; /* Atur lebar sesuai kebutuhan */
  height: 350px; /* Atur tinggi sesuai kebutuhan */
  overflow: hidden; /* Mengatur overflow agar gambar tetap terkandung dalam kotak */
  position: relative;
}

/* Gambar dalam container */
.image-container img {
  width: 100%;
  height: 100%;
  transition: transform 0.2s;
}

/* Efek zoom saat hover */
.image-container:hover img {
  transform: scale(1.2); /* Atur skala sesuai kebutuhan */
}
.custom-card {
  border: none;
}
.custom-button {
  color: black;
  text-decoration: none;
  padding: 0;
}
.custom-button:hover {
  color: rgb(242, 189, 120);
}
</style>
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
