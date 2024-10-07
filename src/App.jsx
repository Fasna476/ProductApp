import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddP from './components/AddP'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Navbar/>
   <Routes>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/add" element={<AddP/>} />
      </Routes>   
    </>
  )
}

export default App
