<template>
  <div>
    <section>
      <div class="container">
        <div class="row mt-3">
          <div class="col d-flex align-items-center my-3">
            <div class="col-md">
              <p class="">MEMBUAT RESEP, BERBAGI RESEP</p>
              <TypingText />

              <p>
                Jadilah bagian dari komunitas kami dan mulailah petualangan
                kuliner Anda sekarang!
              </p>
              <a class="btn btn-dark" href="/form/register">
                MARI BERGABUNG DENGAN KAMI
              </a>
            </div>
          </div>
          <div class="col-md">
            <img
              src=" https://source.unsplash.com/800x600/?food"
              alt=""
              class="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container my-5">
        <div class="row mt-4 justify-content-between">
          <div class="col-md-3">
            <h1 class="fw-bold">{{ resepId }}</h1>
            <p>SEMUA RESEP</p>
            <hr />
            <p>
              Di sini, kami membawa Anda dalam perjalanan kuliner yang tak
              terlupakan, dari hidangan klasik hingga kreasi yang inovatif.
            </p>
          </div>
          <div class="col-md-3">
            <h1 class="fw-bold">15</h1>
            <p>MAKANAN</p>
            <hr />
            <p>
              kami menawarkan berbagai macam hidangan sehat yang lezat. Mulai
              dari salad segar hingga hidangan sayuran yang kreatif, kami
              memiliki banyak pilihan yang ramah diet.
            </p>
          </div>
          <div class="col-md-3">
            <h1 class="fw-bold">5</h1>
            <p>MINUMAN</p>
            <hr />
            <p>
              Apakah Anda haus akan minuman segar? Cicipi berbagai macam minuman
              yang menyegarkan, mulai dari jus buah alami khas kami yang
              inovatif. Kami punya minuman untuk setiap kesempatan.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="blog">
      <div class="container my-5">
        <div class="row">
          <div class="col">
            <img src="" alt="" />
          </div>
        </div>
        <div class="row">
          <div class="col-md">
            <img
              class="img-fluid rounded"
              src=" https://source.unsplash.com/800x600/?food"
              alt=""
            />
          </div>
          <div class="col mt-2">
            <p>Koleksi Resep yang Luar Biasa</p>
            <h1>
              Kami menghadirkan koleksi resep yang beragam, mulai dari makanan
              sehari-hari yang sederhana hingga hidangan khusus yang
              mengesankan.
            </h1>
            <div class="row mt-md-5">
              <div class="col-md">
                <p>Other lifestyle products</p>
                <p>Book recommendations</p>
              </div>
              <div class="col-md">
                <p>Food & supplements</p>
                <p>Utensils & appliances</p>
              </div>
              <hr class="mt-md-5" />
            </div>
            <a
              class="element fw-bold text-dark text-decoration-none"
              href="/image"
              >LEBIH BANYAK RESEP</a
            >
          </div>
        </div>
      </div>
    </section>
    <section id="About">
      <div class="container my-5">
        <div class="row">
          <div class="text-center">
            <img
              class="img-fluid rounded"
              src="https://source.unsplash.com/800x400/?food"
              alt=""
            />
          </div>
          <div class="col mt-2">
            <p>ABOUT RESEPKITA</p>
            <h1>Jelajahi Koleksi Kami</h1>
            <p>
              Sekarang, saatnya Anda untuk memulai perjalanan Anda dalam mencari
              rasa dan eksplorasi kuliner. Jelajahi koleksi resep kami, temukan
              inspirasi, dan mulailah memasak. Kami yakin Anda akan menemukan
              sesuatu yang istimewa untuk dinikmati bersama orang yang Anda
              cintai.
            </p>
            <hr />
          </div>
        </div>
        <a
          class="element fw-bold text-dark text-decoration-none"
          href="/recipes"
          >TENTANG KAMI</a
        >
      </div>
    </section>
  </div>
</template>
<style>
.custom-button {
  color: black;
  text-decoration: none;
  padding: 0;
  font-weight: 600;
}

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
</style>
<script>
import TypingText from '~/components/TypingText.vue'
export default {
  name: 'IndexPage',
  data() {
    return {
      resepId: null,
      TypingText,
      isLoggedIn: true,
    }
  },

  mounted() {
    this.getResep()
  },
  methods: {
    async getResep() {
      try {
        const response = await this.$axios.get('/rest/v1/resep?select=id', {
          headers: {
            apikey: process.env.supabaseKey,
          },
        })

        const firstId = response?.data[0]?.id

        this.resepId = firstId || null
      } catch (error) {
        console.error('Terjadi kesalahan:', error)
      }
    },
  },
}
</script>
