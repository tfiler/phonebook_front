import React from 'react'
import personService from '../services/personService'

const Persons = (props) => {
  
  const deletePersonHandler = id => {
    personService.del(id).then(
      personService
      .getAll()
      .then(() => {
        
        personService
          .getAll()
          .then(initialPersons => {
            props.setPersons(initialPersons)
          })
        })
    )
  }

  return(
    <div>
      {props.persons
        .filter(person => person.name.includes(props.filterValue))
        .map(person => 
          <div key={person.id}>
            {person.name}
            {person.number}
            <button onClick={() => deletePersonHandler(person.id)}>delete</button>
          </div>)
      }
      
    </div>
  )
}

export default Persons