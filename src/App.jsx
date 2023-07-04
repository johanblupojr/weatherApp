import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WeatherApp from './Components/openWeather'
import Weather from './Components/weather'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Weather />
    </>
  )
}

export default App
