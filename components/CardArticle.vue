<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card custom-card">
          <div class="image-container">
            <img
              class="img-responsive hover-zoom rounded"
              src="https://source.unsplash.com/300x350/?food"
              alt=""
            />
          </div>
          <div class="my-2">
            <h5 class="card-title">{{ nama }}</h5>
            <p class="card-text">
              {{ deskripsi }}
            </p>
          </div>
          <nuxt-link :to="`/resep/${resepId}`" class="custom-button"
            >Selengkapnya</nuxt-link
          >
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>
<style>
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
}
.custom-button:hover {
  color: green;
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
}
</script>
