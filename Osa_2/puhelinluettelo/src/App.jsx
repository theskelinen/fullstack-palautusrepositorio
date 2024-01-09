import { useState, useEffect } from 'react'
import axios from 'axios'

const Person = ({ person }) => 
  <p>
    {person.name} {person.number}
  </p>

const Persons = ({ persons }) => 
  <div>
  {persons.map(person =>
    <Person key={person.name} person={person} />
  )}
  </div>

const Filter = ({handleFilterChange, newFilter}) => 
  <div>
  filter shown with 
  <input
    value={newFilter} 
    onChange={handleFilterChange}
  />
  </div>

const PersonForm = (props) => 
<form onSubmit={props.addName}>
  <div>
    name: 
    <input
      value={props.newName} 
      onChange={props.handleNameChange} 
    />
  </div>
  <div>
    number: 
    <input
      value={props.newNumber} 
      onChange={props.handleNumberChange}
    />
  </div>
  <div>
    <button type="submit">add</button>
  </div>
</form>

const App = () => {
  const [persons, setPersons] = useState([])

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
      axios
      .post("http://localhost:3001/persons", personObject)
      .then(response => {
        setPersons(persons.concat(response.data))
      })
    }
    setNewName("")
    setNewNumber("")
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const [newFilter, setNewFilter] = useState("")

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const personsToShow = newFilter === ""
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }
  
  useEffect(hook, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        handleFilterChange={handleFilterChange}
        newFilter={newFilter}
      />
      <h2>add a new</h2>
      <PersonForm 
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addName={addName}
        newName={newName}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} />
    </div>
  )

}

export default App
