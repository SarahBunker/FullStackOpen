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

  async function addNoteServer(note) {
    let result = await axios.post('http://localhost:3001/notes', note);
    let newNotes = [...notes, result.data];
    setNotes(newNotes);
  }

  function addNote(event) {
    event.preventDefault();
    const NoteObject = {
      content: newNote,
      import: Math.random() < 0.5
    }
    addNoteServer(NoteObject)
    setNewNote("")
  }

  function handleNoteChange (event) {
    setNewNote(event.target.value);
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
        {notesToShow.map( note => <Note key={note.id} note={note}/>)}
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