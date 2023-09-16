import React from 'react';
import Person from './Person';

const PhonebookList = ({persons, filter}) => {

  let filteredPersons = persons.filter(person => {
    let name = person.name.toLowerCase();
    return name.includes(filter.toLowerCase());
  })


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
          <Person key={person.name} person={person} />
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default PhonebookList;