import { useState } from 'react'
import './App.css'
import Toggle from './components/toggle'
import Box1 from './components/box'

function App() {
  const [color, setColor] = useState(localStorage.getItem("theem")|| "white" )
  const[font,fontColor]=useState(localStorage.getItem("ftheem")|| "black" )

  return (
    <div style={{backgroundColor:color, color:font}}>
        <Toggle setColor={{setColor,fontColor}}/>
        <h1>hello</h1>
        <Box1/>
    </div>
  )
}

export default App