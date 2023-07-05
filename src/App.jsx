import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Weather from './Components/weather'
import './Components/CSS/weather.css'
import Messenger from './Components/messenger'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Messenger />
    <Weather />
    </>
  )
}

export default App
