import { useState, useEffect } from 'react'
import axios from 'axios'

import Note from "./components/Note"

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  const notesToShow = showAll ? notes : notes.filter(note => note.important);

  useEffect(() => {
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        setNotes(response.data)
      })
  }, [])

  async function addNoteServer(noteObject) {
    let result = await axios.post('http://localhost:3001/notes', noteObject);
    let newNotes = [...notes, result.data];
    setNotes(newNotes);
  }

  function addNote(event) {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      import: Math.random() < 0.5
    }
    addNoteServer(noteObject)
    setNewNote("")
  }

  function handleNoteChange (event) {
    setNewNote(event.target.value);
  }

  const toggleImportanceOf = id => {
    const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }
  
    axios.put(url, changedNote).then(response => {
      setNotes(notes.map(n => n.id !== id ? n : response.data))
    })
  }

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={()=> setShowAll(!showAll)} >
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map( note => <Note
          key={note.id}
          note={note}
          toggleImportance={() => toggleImportanceOf(note.id)}
        />)}
      </ul>
      <form onSubmit={addNote}>
        <input
          placeholder="Enter something for new note..."
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App