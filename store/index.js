export const state = () => ({
  isLoggedIn: false, // Menyimpan status login
})

export const mutations = {
  SET_LOGGED_IN(state, isLoggedIn) {
    state.isLoggedIn = isLoggedIn
  },
}
