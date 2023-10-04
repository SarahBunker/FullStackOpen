import { useState, useEffect } from 'react'
import AddPersonForm from './assets/components/AddPersonForm';
import PhonebookList from './assets/components/PhonebookList';
import FilterComponent from './assets/components/FilterComponent';
import phonebookService from './services/phonebook';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [filter, setFilter] = useState('');

  async function getPeople() {
    let notes = await phonebookService.getAll();
    setPersons(notes);
  }

  useEffect(() => {
    getPeople();
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterComponent
        filter={filter}
        setFilter={setFilter}
      />
      <AddPersonForm 
        persons={persons}
        setPersons={setPersons}
      />
      <PhonebookList
        persons={persons}
        filter={filter}
        setPersons={setPersons}
      />
    </div>
  )
}

export default App
