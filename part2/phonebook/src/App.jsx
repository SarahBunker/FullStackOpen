import { useState } from 'react'
import Person from './assets/components/Person';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  function handleAddPerson(event) {
    event.preventDefault();
    let newPerson = {"name": newName};
    if (!checkUnique(newName)) {
      alert(`${newName} is already listed.`);
      return;
    }
    let newPersons = [...persons, newPerson];
    setPersons(newPersons);
    setNewName("");
  }

  function handleNameChange(event) {
    setNewName(event.target.value);
  }

  function checkUnique(name) {
    for (let i = 0; i < persons.length; i ++) {
      if (name === persons[i].name) {
        return false
      }
    }
    return true
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
          <button type="submit" onClick={handleAddPerson}>add</button>
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
