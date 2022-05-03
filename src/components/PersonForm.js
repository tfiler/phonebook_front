import personService from '../services/personService'

const PersonForm = (props) => {
  
  const handleNameChange = (event) => {
    props.setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    props.setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()

    const foundPerson = props.persons.find(person => 
      person.name.normalize() === props.newName.normalize()
    )
      
    if (foundPerson !== undefined) {
      const result = window.confirm(
        `The name ${props.newName} is already present, replace number?`
      )

      if (result) {
        const changedPerson = {...foundPerson, number: props.newNumber}
        
        personService
          .update(foundPerson.id, changedPerson)
          .then(returnedPerson =>
            props.setPersons(props.persons.map(
                person => person.id !== foundPerson.id ? person : returnedPerson
              )
            )
          )
          .catch(error => {
            props.setMessageStatus('red')
            props.setMessage(`'${foundPerson.name}' was already removed from server`)
            setTimeout(() => {
              props.setMessageStatus(null)
              props.setMessage(null)
            }, 5000)
          })
      } else {
        console.log("aborted update");
      }
    } else {
      const personObject = {
        name: props.newName,
        number: props.newNumber,
        id: props.persons.length + 1
      }
  
      personService
        .create(personObject)
        .then(returnedPerson => {
          props.setMessage(`Added ${personObject.name}`)
          setTimeout(() => {
            props.setMessage(null)
          }, 5000) 
          props.setPersons(props.persons.concat(returnedPerson))
          props.setNewName('')
          props.setNewNumber('')
        })
    }
  }
  
  return(
    <form onSubmit={addPerson}>
      <div>
        name: 
        <input 
          value={props.newName} 
          onChange={handleNameChange}
        />
      </div>
      <div>
        number:
        <input 
          value={props.newNumber}
          onChange={handleNumberChange}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm