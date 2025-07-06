import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import NoteApp from './NoteApp'

function Landing() {
  return (
    <div style={{ textAlign: 'center', padding: '4rem' }}>
      <h1>Selamat Datang, Sayang 👋</h1>
      <p>Aplikasi catatan dengan React + Supabase</p>
      <Link to="/app">
        <button>Masuk Aplikasi</button>
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
