import React from 'react'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/Navbar/Navbar'
import About from '../components/AboutUs/AboutUs'
import Contact from '../components/Contact/Contact'
import HomePage from '../components/HomePage/HomePage'
import Profile from '../components/Profile/Profile'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from '../components/Auth/Auth'

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
            <Route path='/login' element={<Auth />}>
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