import React from 'react'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/Navbar/Navbar'
import About from '../components/About'
import Project from '../components/Projects'
import Contact from '../components/Contact'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FontPage from '../components/HomePage/HomePage'

const Home = () => {

  return (
    <Router>
    <div className="Home ui container">
          <NavBar/>

          <Routes>
            <Route path='/' element={<FontPage />}>
            </Route>
            <Route path='/about' element={<About />}>
            </Route>
            <Route path='/project' element={<Project />}>
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