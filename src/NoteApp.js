import { useEffect, useState } from 'react'
import { supabase } from './lib/supabase'

function NoteApp() {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [editingId, setEditingId] = useState(null)
  const [editText, setEditText] = useState('')

  const fetchNotes = async () => {
    const { data, error } = await supabase.from('notes').select('*').order('created_at', { ascending: false })
    if (!error) setNotes(data)
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  const addNote = async () => {
    if (!newNote) return
    await supabase.from('notes').insert([{ text: newNote }])
    setNewNote('')
    fetchNotes()
  }

  const deleteNote = async (id) => {
    await supabase.from('notes').delete().eq('id', id)
    fetchNotes()
  }

  const updateNote = async () => {
    if (!editText) return
    await supabase.from('notes').update({ text: editText }).eq('id', editingId)
    setEditingId(null)
    setEditText('')
    fetchNotes()
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Catatan Saya</h2>
      <div>
        <input value={newNote} onChange={(e) => setNewNote(e.target.value)} placeholder="Tulis catatan" />
        <button onClick={addNote}>Tambah</button>
      </div>
      <ul>
        {notes.map(note => (
          <li key={note.id}>
            {editingId === note.id ? (
              <>
                <input value={editText} onChange={(e) => setEditText(e.target.value)} />
                <button onClick={updateNote}>Simpan</button>
                <button onClick={() => setEditingId(null)}>Batal</button>
              </>
            ) : (
              <>
                {note.text}
                <button onClick={() => {
                  setEditingId(note.id)
                  setEditText(note.text)
                }}>Edit</button>
                <button onClick={() => deleteNote(note.id)}>Hapus</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NoteApp