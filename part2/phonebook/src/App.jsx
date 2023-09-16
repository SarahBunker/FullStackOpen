import { useState } from 'react'
import AddPersonForm from './assets/components/AddPersonForm';
import PhonebookList from './assets/components/PhonebookList';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [filter, setFilter] = useState('');

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter:
        <input 
          onChange={(event) => setFilter(event.target.value)}
          value={filter}
          placeholder='add name filter here'
        />
      </div>
      <AddPersonForm 
        persons={persons}
        setPersons={setPersons}
      />
      <PhonebookList
        persons={persons}
        filter={filter}
      />
    </div>
  )
}

export default App
