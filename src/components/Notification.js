const Notification = ({ message, messageStatus }) => {
  const infoStyle = {
    color: 'green',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }
  const errorStyle = {
    color: 'red',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }
  
  if (message === null) {
    return null
  } 
  
  if (messageStatus === 'red') {
    return(
      <div style={errorStyle}>
        {message}
      </div>
    )
  } else {
    return(
      <div style={infoStyle}>
        {message}
      </div>
    )
  }
}

export default Notification