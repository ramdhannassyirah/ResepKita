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
                nama pengguna
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
                <li>
                  <button class="element dropdown-item" @click="logout">
                    logout
                  </button>
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
  methods: {
    logout() {
      try {
        // Hapus token dari localStorage
        localStorage.removeItem('access_token')

        // Set isLoggedIn ke false di store
        this.isLoggedIn(false)

        // Redirect ke halaman login atau halaman beranda
        this.$router.push('/login') // Gantilah dengan halaman login yang sesuai
      } catch (error) {
        console.error('Error during logout:', error)
      }
    },
  },
}
</script>
