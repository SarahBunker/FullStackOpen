import React from 'react';
import Person from './Person';
import phonebookService from '../../services/phonebook';

const PhonebookList = ({persons, filter, setPersons}) => {
  let filteredPersons = persons.filter(person => {
    let name = person.name.toLowerCase();
    return name.includes(filter.toLowerCase());
  })

  async function handleDelete(id) {
    await phonebookService.deletePerson(id);
    let newPersonList = persons.filter(person => person.id != id);
    setPersons(newPersonList);
  }

  return (
    <div>
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
          <Person key={person.name} person={person} handleDelete={handleDelete} />
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default PhonebookList;