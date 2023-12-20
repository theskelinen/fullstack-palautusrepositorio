import { useState } from 'react'

const Person = ({ person }) => 
  <p>
    {person.name}
  </p>

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas" }
  ]) 
  const [newName, setNewName] = useState("")

  const addName = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName
    }

    if (persons.some(person => person.name === personObject.name)) {
      window.alert(`${personObject.name} is already added to phonebook`)
    }
    else {
      setPersons(persons.concat(personObject))
    }
    setNewName("")
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: 
          <input
            value={newName} 
            onChange={handleNameChange} 
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person =>
          <Person key={person.name} person={person} />
        )}
      </div>
    </div>
  )

}

export default App
