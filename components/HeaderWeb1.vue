<template>
  <div class="container">
    <nav
      class="navbar navbar-expand-lg fixed-top border-bottom border-dark bg-white"
    >
      <div class="container">
        <a class="navbar-brand" href="/">ResepKita</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="element nav-link" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="element nav-link" href="/recipes">Resep</a>
            </li>

            <li class="nav-item dropdown">
              <a
                class="element nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ nama }}
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="element dropdown-item" href="/resepSaya"
                    >Resep Saya</a
                  >
                </li>
                <li>
                  <a class="element dropdown-item" href="/tambah/add"
                    >Tambah resep</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nama: [],
      // Ganti dengan nama pengguna yang sesuai
    }
  },
  async created() {
    // Gantilah supabaseUrl dan supabaseKey sesuai dengan konfigurasi Supabase Anda

    const supabaseAuthUrl = `${process.env.supabaseApi}/auth/v1/token?grant_type=anonymous`

    try {
      // Get the session token
      const {
        data: { accessToken },
      } = await this.$axios.post(
        supabaseAuthUrl,

        {
          headers: {
            apikey: process.env.supabaseKey,
          },
        }
      )

      // Make an authenticated request
      const { data } = await this.$axios.get(
        `${process.env.supabaseApi}/rest/v1/auth/users`,
        {
          headers: {
            Authorization: `'Bearer ${accessToken}'`,
          },
        }
      )

      this.nama = data.nama // Atur nama pengguna berdasarkan data yang diterima
    } catch (error) {
      console.error('Error:', error.message)
    }
  },
}
</script>
