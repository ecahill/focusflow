import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskPanel from './components/TaskPanel'

function App() {

  return (
    (
      <div className="App">
        <h1>FocusFlow</h1>
        <TaskPanel />
      </div>
    )
  )
}

export default App
