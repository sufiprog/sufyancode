import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import HireMe from './pages/HireMe'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/hire' element={<HireMe/>} />
        </Routes>
        <Footer />
    </>
  )
}

export default App