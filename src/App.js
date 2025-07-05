import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Landing() {
  console.log('✅ Landing component rendered');
  return (
    <div style={{ textAlign: 'center', padding: '4rem' }}>
      <h1>Selamat datang 👋</h1>
      <p>Catatan sederhana dengan React + Supabase</p>
      <Link to="/app">
        <button style={{ padding: '1rem 2rem', fontSize: '1rem' }}>Masuk Aplikasi</button>
      </Link>
    </div>
  );
}

function NoteAppPlaceholder() {
  return (
    <div style={{ padding: '4rem' }}>
      <h1>Ini halaman catatan</h1>
      <p>Fitur akan muncul di sini...</p>
      <Link to="/">
        <button>Kembali ke Landing</button>
      </Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/app" element={<NoteAppPlaceholder />} />
      </Routes>
    </Router>
  );
}

export default App;
