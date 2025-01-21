import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Trending from './components/Trending.jsx'
import NotAvailable from './components/NotAvailable.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import AddVideoDetail from './components/AddVideoDetail.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Trending />} />
      <Route path='/home' element={<Trending />} />
      <Route path='/not' element={<NotAvailable />} />
      <Route path='/add' element={<AddVideoDetail />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
