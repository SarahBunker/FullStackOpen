import { useState } from 'react'
import Person from './assets/components/Person';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [newName, setNewName] = useState('');
  const [newPhoneNumber, setPhoneNumber] = useState('');
  const [newFilter, setNewFilter] = useState('');
  const [filteredPersons, setNewFilteredPersons] = useState(persons);

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

  function checkUnique(name) {
    for (let i = 0; i < persons.length; i ++) {
      if (name === persons[i].name) {
        return false
      }
    }
    return true
  }

  function handleFilterChange(event) {
    let filter = event.target.value;
    setNewFilter(filter);
    let newPeople = persons.filter(person => {
      let name = person.name.toLowerCase();
      return name.includes(filter.toLowerCase());
    })
    setNewFilteredPersons(newPeople);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter: <input 
          onChange={handleFilterChange}
          value={newFilter}
          placeholder='add name filter here'
        />
      </div>
      <h2>Add New</h2>
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
          {filteredPersons.map((person) => (
            <Person key={person.name} person={person} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
