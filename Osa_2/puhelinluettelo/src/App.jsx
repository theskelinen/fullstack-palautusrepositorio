import { useState } from 'react'

const Person = ({ person }) => 
  <p>
    {person.name} {person.number}
  </p>

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
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

  const [newFilter, setNewFilter] = useState("")

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  const personsToShow = newFilter === ""
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
        <div>
          filter shown with 
          <input
            value={newFilter} 
            onChange={handleFilterChange}
          />
        </div>
      <h2>add a new</h2>
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
        {personsToShow.map(person =>
          <Person key={person.name} person={person} />
        )}
      </div>
    </div>
  )

}

export default App
