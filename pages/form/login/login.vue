<!-- pages/Login.vue -->
<template>
  <div class="container text-center">
    <div class="row align-items-center">
      <div class="col">
        <h1>Login</h1>
        <form @submit.prevent="login">
          <input
            v-model="email"
            type="email"
            placeholder="Email"
            class="my-2 rounded px-2"
          />
          <br />
          <input
            v-model="password"
            type="password"
            placeholder="Password"
            class="my-2 rounded rounded px-2"
          />
          <br />
          <button type="submit" class="btn btn-dark my-2">Login</button>
        </form>
        <p>belum memiliki akun?<a href="../register">Daftar</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },

  methods: {
    ...mapMutations(['SET_LOGGED_IN']),
    async login() {
      try {
        const response = await this.$axios.post(
          '/auth/v1/token?grant_type=password',
          {
            email: this.email,
            password: this.password,
          },
          {
            headers: {
              apikey: process.env.supabaseKey,
            },
          }
        )

        console.log(response.data)

        if (response.data.access_token) {
          // Simpan token di localStorage
          localStorage.setItem('access_token', response.data.access_token)

          // Set isLoggedIn ke true di store
          this.$store.commit('SET_LOGGED_IN', true)

          // Redirect ke halaman yang dilindungi setelah login berhasil
          this.$router.push('/resepSaya')
        } else {
          // Tangani jika login gagal
          console.error('Login failed:', response.data.error_description)
        }
      } catch (error) {
        console.error('Error during login:', error)
      }
    },
  },
}
</script>
