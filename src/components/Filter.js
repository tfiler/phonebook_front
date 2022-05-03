import React from 'react'

const Filter = (props) => {
  const handleFilterChange = (event) => {
    props.setFilterValue(event.target.value)
  }
  
  return(
    <p>Filter by name: 
      <input 
        value={props.filterValue}
        onChange={handleFilterChange}
      />
    </p>
  )
}

export default Filter