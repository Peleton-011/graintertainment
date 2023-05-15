import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
        <div>Hi</div>
        <Routes>
        <Route path="/task/:id" element={<div>This is a test</div>} />

        </Routes>
    </Router>
  )
}

export default App
