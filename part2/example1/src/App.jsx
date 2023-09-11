import { useState } from "react"
import Note from "./components/Note"

const App = ({notesInitial}) => {
  const [notes, setNotes] = useState(notesInitial);
  const [newNote, setNewNote] = useState('a new note...');

  function addNote(event) {
    event.preventDefault();
    console.log("button clicked", event.target);
  }

  function handleNoteChange (event) {
    console.log(event.target.value);
    setNewNote(event.target.value);
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map( note => <Note key={note.id} note={note}/>)}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App