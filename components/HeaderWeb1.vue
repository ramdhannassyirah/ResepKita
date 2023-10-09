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
                nama
              </a>
              <ul class="dropdown-menu">
                <a class="element dropdown-item" href="/resepSaya"
                  >Resep Saya</a
                >
                <a class="element dropdown-item" href="/tambah/add"
                  >Tambah resep</a
                >
                <button class="element dropdown-item" @click="logout">
                  Logout
                </button>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['isLoggedIn']), // Mengambil status login dari Vuex
  },
  methods: {
    ...mapMutations(['SET_LOGGED_IN']),
    logout() {
      localStorage.removeItem('access_token')

      this.SET_LOGGED_IN(false)

      this.$router.push('/')
    },
  },
}
</script>
