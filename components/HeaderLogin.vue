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
          <div class="navbar-nav ms-auto">
            <a class="element nav-link" href="/">Home</a>
            <a class="element nav-link" href="/recipes">Resep</a>
            <a class="element nav-link" href="/form/register">Daftar</a>
            <a class="element nav-link" href="/form/login/login">Masuk</a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.element {
  position: relative;
  text-decoration: none;
  display: inline-block;
  padding-bottom: 2px;
}

.element::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 100%;
  height: 3px;
  background-color: rgb(242, 189, 120);
  transition: right 0.3s ease;
}

.element:hover::before {
  right: 0;
}
</style>
<script></script>
