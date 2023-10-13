export const state = () => ({
  isLoggedIn: false, // Menyimpan status login
})

export const mutations = {
  SET_LOGGED_IN(state) {
    // Cek apakah token ada di localStorage
    const token = localStorage.getItem('access_token')

    // Jika token ada, set isLoggedIn ke true
    state.isLoggedIn = token
  },
}
