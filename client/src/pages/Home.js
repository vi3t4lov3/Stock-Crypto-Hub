import React, {useState, useEffect} from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/Navbar'
import Profile from '../components/Profile'
import About from '../components/About'
import Project from '../components/Projects'
import Skill from '../components/Skills'
import Contact from '../components/Contact'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Home = () => {
  // const [currentPage, setCurrentPage] = useState('Home');
  const [gitRepos, setGitRepos] = useState(null);
  useEffect (() => {
    const url = `https://api.github.com/users/vi3t4lov3/repos`;
    // axios.get(url) //using axios
    fetch(url)
    .then(res => {
      return res.json();
    })
    .then(data => {
      setGitRepos(data)
      // console.log(data)
    })
    .catch(error => { console.log(error)}) 
  }, []);

  const title ='Tu Nguyen'
  const styles ={
    title: {
      color: '#060D35', 
      fontWeight: 'light'
    }
    
  }
  return (
    <Router>
    <div className="Home container">
    <NavBar title={title} style={styles.title}/>
          <Routes>
            <Route path='/' element={<Profile />}>
            </Route>
            <Route path='/about' element={<About />}>
            </Route>
            <Route path='/project' element={<Project />}>
            </Route>
            <Route path='/skill' element={<Skill />}>
            </Route>
            <Route path='/contact' element={<Contact />}>
            </Route>
          </Routes>
          {gitRepos && <Footer gitRepos={gitRepos} /> }
    </div>
    </Router>
    
  )
}

export default Home