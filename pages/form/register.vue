<template>
  <div class="container">
    <div class="row text-center">
      <div class="col">
        <h1>Sign Up</h1>
      </div>
      <div class="">
        <form @submit.prevent="signUp">
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
            class="my-2 rounded px-2"
          />

          <br />
          <button type="submit" class="btn btn-dark my-2">Sign Up</button>
        </form>
        <p>sudah memiliki akun?<a href="login">login</a></p>
      </div>
    </div>
    <!-- Tampilkan alert jika signupSuccess adalah false -->
    <div v-if="!signupSuccess" class="alert alert-dark">
      Pendaftaran berhasil! Verifikasi Email terlebih dahulu
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      username: '',
      signupSuccess: true,
    }
  },
  methods: {
    async signUp() {
      try {
        const response = await this.$axios.post(
          '/auth/v1/signup',
          {
            email: this.email,
            password: this.password,
            username: this.username,
          },
          {
            headers: {
              apikey: process.env.supabaseKey,
            },
          }
        )

        console.log(response.data)

        // Jika pendaftaran berhasil, set signupSuccess ke false
        if (response.data.message === 'Sign Up successful') {
          this.signupSuccess = false
        }
      } catch (error) {
        console.error(error)

        // Jika pendaftaran gagal, set signupSuccess ke false
        this.signupSuccess = false
      }
    },
  },
}
</script>
