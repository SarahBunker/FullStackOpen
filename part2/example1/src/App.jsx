import { useState } from "react"
import Note from "./components/Note"

const App = ({notesInitial}) => {
  const [notes, setNotes] = useState(notesInitial);
  const [newNote, setNewNote] = useState("");

  function addNote(event) {
    event.preventDefault();
    const NoteObject = {
      content: newNote,
      import: Math.random() < 0.5,
      id: notes.length + 1,
    }
    setNotes(notes.concat(NoteObject));
    setNewNote("")
  }

  function handleNoteChange (event) {
    setNewNote(event.target.value);
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map( note => <Note key={note.id} note={note}/>)}
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