import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'

import Friends from './Friends'

function App() {
  function handleClick() {
    alert('button clicked')
  }
  const Click = () => {
alert('wow osame click')
  }

  const addToFiver = (num) =>{
    alert(num +5)
  }

  return (
    <>
      <h1>React Core Concepts 2</h1>
      <Friends></Friends>
      <Users></Users>

      <Team></Team>

<Counter></Counter>
  
      <button onClick={handleClick}>Click Me</button>


      <button onClick={Click}>Click Me</button>

      <button onClick={() => {alert('third clicked')}}>third</button>

      <button onClick={() =>addToFiver(3) }> forth</button>
    </>
  )
}

export default App
