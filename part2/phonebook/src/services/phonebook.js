import axios from "axios";

async function getAll() {
  try {
    let result = await axios.get('http://localhost:3001/persons');
    return result.data
  } catch (error) {
    alert("Error getting all people in phonebook");
    console.error('There was an error!', error);
  }
}

async function create(newPerson) {
  try {
    let result = await axios.post('http://localhost:3001/persons', newPerson);
    return result.data;
  } catch (error) {
    alert("Error adding new person to phonebook");
    console.error('There was an error!', error);
  }
}

async function update(updatedPerson) {
  try {
    let result = await axios.post('http://localhost:3001/persons', updatedPerson);
    return result.data;
  } catch (error) {
    alert("Error updating person in phonebook");
    console.error('There was an error!', error);
  }
}

async function deletePerson(id) {
  try {
    let result = await axios.delete(`http://localhost:3001/persons/${id}`);
    return id;
  } catch (error) {
    alert(`Error deleting person in phonebook with ID ${id}`);
    console.error('There was an error!', error);
  }
}

export default { getAll, create, update, deletePerson }