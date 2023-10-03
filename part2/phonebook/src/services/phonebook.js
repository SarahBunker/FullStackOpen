import axios from "axios";

async function getAll() {
  try {
    let result = await axios.get('http://localhost:3001/persons');
    return result.data
  } catch (error) {
    alert("Error getting all people in phonebook");
    console.log(error);
  }
}

async function create(newPerson) {
  try {
    let result = await axios.post('http://localhost:3001/persons', newPerson);
    return result.data;
  } catch (error) {
    alert("Error adding new person to phonebook");
    console.log(error);
  }
}

async function update(updatedPerson) {
  try {
    let result = await axios.post('http://localhost:3001/persons', updatedPerson);
    return result.data;
  } catch (error) {
    alert("Error updating person in phonebook");
    console.log(error);
  }
}

export default { getAll, create, update }