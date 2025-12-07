import { useState } from 'react'
import './App.css'
import Hero from './sections/Hero/Hero'
import Skills from './sections/skills/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero/>
      <Skills/>
    </>
  )
}

export default App
