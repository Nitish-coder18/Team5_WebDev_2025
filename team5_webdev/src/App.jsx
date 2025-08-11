import Header from './components/header'
import React from 'react'
import { BrowserRouter , Route, Routes,Link } from 'react-router-dom'
import IdolsList from './components/IdolsList'
import Details from './components/Details'
import About from './components/about'


import './App.css'

function App() {
  

  return (
   <BrowserRouter> 
   <Header />
   <About />
   <Routes>
<Route path="/" element={<IdolsList />} />
<Route path="/details/:id" element={<Details />} />





   </Routes>
   

   
   </BrowserRouter>

  )
}

export default App