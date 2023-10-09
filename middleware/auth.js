// middleware/auth.js
export default function ({ store, redirect }) {
  // Cek apakah pengguna sudah login
  if (!store.state.isLoggedIn) {
    // Jika belum login, redirect ke halaman login atau halaman lain yang sesuai
    return redirect('/login')
  }
}
