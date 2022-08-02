import React from 'react'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/Navbar/Navbar'
import About from '../components/About'
import Contact from '../components/Contact'
import HomePage from '../components/HomePage/HomePage'
import Profile from '../components/Profile/Profile'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Home = () => {

  return (
    <Router>
    <div className="Home ui container">
          <NavBar/>

          <Routes>
            <Route path='/' element={<HomePage />}>
            </Route>
            <Route path='/about' element={<About />}>
            </Route>
            <Route path='/profile' element={<Profile />}>
            </Route>
 
            <Route path='/contact' element={<Contact />}>
            </Route>
          </Routes>

         <Footer/> 
    </div>
    </Router>
    
  )
}

export default Home