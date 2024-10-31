import { useState } from 'react'

import './App.css'
import { Home } from './Components/Home/home'
import { Header } from './Components/Header/header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home/>
    
    </>
  )
}

export default App
