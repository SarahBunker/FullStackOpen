import Note from "./components/Note"

const App = ({notes}) => {
  function notesDisplay() {
    return (
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
    )
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        <li>{notes[0].content}</li>
        <li>{notes[1].content}</li>
        <li>{notes[2].content}</li>
      </ul>
      <h2>Another list</h2>
      {notesDisplay()}
    </div>
  )
}

export default App