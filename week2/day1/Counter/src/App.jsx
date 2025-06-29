import { useState } from 'react'
import './App.css'
import Display from './Display'
import ButtonOne from './ButtonOne'
import ButtonTwo from './ButtonTwo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Display count={count}/>
      <ButtonOne setCount={setCount}/>
      
      <ButtonTwo setCount={{setCount,count}}/>
    </>
  )
}

export default App
