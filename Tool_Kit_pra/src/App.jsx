import { useState } from 'react'
import './App.css'
import { store } from './App/store'
import Task from './Components/Task'
import { Provider } from 'react-redux'

function App() {
  

  return (
    <>
     <Provider store={store}>
      <Task/>
     </Provider>
    </>
  )
}

export default App
