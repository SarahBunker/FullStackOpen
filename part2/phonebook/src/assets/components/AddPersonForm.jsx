import React from 'react';
import { useState } from 'react';
import phonebookService from '../../services/phonebook';

const AddPersonForm = ({setPersons, persons}) => {
  const [newName, setNewName] = useState('');
  const [newPhoneNumber, setPhoneNumber] = useState('');

  async function addPerson(newPerson) {
    let personAdded = await phonebookService.create(newPerson);
    return personAdded;
  }

  function handleAddPerson(event) {
    event.preventDefault();
    if (!checkUnique(newName)) {
      alert(`${newName} is already listed.`);
      return;
    }
    let newPerson = {"name": newName, "phoneNumber": newPhoneNumber};
    addPerson(newPerson);

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

  return (
    <>
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
    </>
  );
};

export default AddPersonForm;