<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="">
          <img
            class="img-fluid"
            src="https://source.unsplash.com/200x300/?food"
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
}
</script>
