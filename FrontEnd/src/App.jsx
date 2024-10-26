import { useState } from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Navbar from "./Components/Navbar.jsx"
import HomePage from "./Components/HomePage"
import ProductPage from "./Components/ProductPage"
// import CollectionPage from "./Components/CollectionPage"

import './App.css'

function App() {

  return (
   <Router>
      <div className='min-h-screen  bg-gray-100'> 
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage/>}/>
          {/* <Route path="/about" element={<CollectionPage />}/> */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}

        </Routes>
      </div>
  </Router>
  )
}

export default App
