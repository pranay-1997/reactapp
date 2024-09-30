import React from 'react'

const App1 = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Hello {props.name} a.k.a {props.heroName}</h1>
    </div>
  )
}

export default App1