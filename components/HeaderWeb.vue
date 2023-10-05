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
            <li class="nav-item">
              <a class="element nav-link" href="/">Blog</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="element nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Nama Pengguna
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
<style scoped>
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
