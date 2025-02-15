import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from'react-router-dom'
import Home from './pages/Home'
import Favourites from './pages/Favourites'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
   
    <Router>
    <Navbar></Navbar>
      
    <main className='main-content'>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/favourites" element={<Favourites/>}></Route>
        <Route path="*" element={<h1>Page Not Found</h1>}></Route>

      </Routes>
      
    </main>  
    </Router>
    </>
  )
}



export default App
