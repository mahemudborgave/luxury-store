import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Trending from './components/Trending'
import { Outlet, useLocation } from 'react-router-dom'
import AddButton from './components/AddButton'

function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      <Outlet />
      {location.pathname !== '/add' && <AddButton />}
    </>
  )
}

export default App
