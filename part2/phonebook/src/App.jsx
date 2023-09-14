import { useState } from 'react'
import Person from './assets/components/Person';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setPhoneNumber] = useState('')

  function handleAddPerson(event) {
    event.preventDefault();
    if (!checkUnique(newName)) {
      alert(`${newName} is already listed.`);
      return;
    }
    let newPerson = {"name": newName, "phoneNumber": newPhoneNumber};
    let newPersons = [...persons, newPerson];
    setPersons(newPersons);
    setNewName("");
    setPhoneNumber("");
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
            onChange={(event) => setNewName(event.target.value)}
            value={newName}
            placeholder='Type full name'
          />
        </div>
        <div>number: <input 
            onChange={(event) => setPhoneNumber(event.target.value)}
            value={newPhoneNumber}
            placeholder='801 867 5309'
          />
        </div>
        <div>
          <button type="submit" onClick={handleAddPerson}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person) => (
            <Person key={person.name} person={person} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
