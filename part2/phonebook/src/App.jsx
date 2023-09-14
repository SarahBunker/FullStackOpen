import { useState } from 'react'
import Person from './assets/components/Person';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  function handleNewPhone(event) {
    event.preventDefault();
    let newPerson = {"name": newName};
    let newPersons = [...persons, newPerson];
    setPersons(newPersons);
  }

  function handleNameChange(event) {
    setNewName(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input 
            onChange={handleNameChange}
            value={newName}
            placeholder='Type full name'
          />
        </div>
        <div>
          <button type="submit" onClick={handleNewPhone}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <Person key={person.name} person={person} />)}
      </ul>
    </div>
  )
}

export default App
