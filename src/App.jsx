import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Trending from './components/Trending'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Trending />
    </>
  ) 
}

export default App
