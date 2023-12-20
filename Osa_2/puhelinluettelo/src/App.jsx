import { useState } from 'react'

const Person = ({ person }) => 
  <p>
    {person.name} {person.number}
  </p>

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas",
      number: "045 678 8765"
    }
  ]) 
  const [newName, setNewName] = useState("")

  const [newNumber, setNewNumber] = useState("")

  const addName = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName,
      number: newNumber
    }

    if (persons.some(person => person.name === personObject.name)) {
      window.alert(`${personObject.name} is already added to phonebook`)
    }
    else {
      setPersons(persons.concat(personObject))
    }
    setNewName("")
    setNewNumber("")
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
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
          number: 
          <input
            value={newNumber} 
            onChange={handleNumberChange}
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
