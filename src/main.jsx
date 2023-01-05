import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'

import './styles/global.css'

import Home from './pages/Home/Home'
import About from './pages/About/About'

const router= createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "sobre",
    element: <About/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
)
