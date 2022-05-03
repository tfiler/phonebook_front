import { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'
import Notification from './components/Notification'
import personService from './services/personService'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterValue, setFilterValue] = useState('')
  const [message, setMessage] = useState(null)
  const [messageStatus, setMessageStatus] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} messageStatus={messageStatus} />
      <PersonForm
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        persons={persons}
        setPersons={setPersons}
        setMessageStatus={setMessageStatus}
        setMessage={setMessage}
      />

      
      <h2>Numbers</h2>
      <Filter
        setFilterValue={setFilterValue}
        filterValue={filterValue}
      />

      <Persons
        persons={persons}
        setPersons={setPersons}
        filterValue={filterValue}
      />
    </div>
  )
}

export default App;
