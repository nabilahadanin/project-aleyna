import { useEffect, useState } from 'react'
import { supabase } from './lib/supabase'

function App() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    async function fetchNotes() {
      const { data, error } = await supabase.from('notes').select('*')
      if (error) console.error(error)
      else setNotes(data)
    }

    fetchNotes()
  }, [])

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Daftar Catatan</h1>
      <ul>
        {notes.map(note => (
          <li key={note.id}>{note.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
