import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import NoteApp from './NoteApp'

function Landing() {
  return (
    <div style={{ textAlign: 'center', padding: '4rem' }}>
      <h1>Selamat datang 👋</h1>
      <p>Catatan sederhana dengan React + Supabase</p>
      <Link to="/app">
        <button style={{ padding: '1rem 2rem', fontSize: '1rem' }}>Masuk Aplikasi</button>
      </Link>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/app" element={<NoteApp />} />
      </Routes>
    </Router>
  )
}

export default App