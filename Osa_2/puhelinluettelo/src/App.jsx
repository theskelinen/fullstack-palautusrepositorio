import { useState } from 'react'

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
