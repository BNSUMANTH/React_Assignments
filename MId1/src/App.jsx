import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Landingpage } from './components/landingpage'
import { Tasks } from './components/tasks'
import { About } from './components/about'
import { Nav } from './components/nav'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/tasks' element={<Tasks/>}/>
      </Routes>
    </>
  )
}

export default App
