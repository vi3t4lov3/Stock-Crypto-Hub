import React from 'react';
import Home from './pages/Home'
import Footer from './components/Footer/Footer'
import NavBar from './components/Navbar/Navbar'
// import About from '../components/AboutUs/AboutUs'
// import Contact from './components/Contact/Contact'
import Profile from './components/Profile/Profile'
import Login from './components/Auth/Auth'
import { useAuthContext } from './Hooks/useAuthContext'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  const { user } = useAuthContext()
  return (
    <div className="App ui container">
      <BrowserRouter>
        <NavBar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={ <Home />} 
            />
            <Route 
              path="/profile" 
              element={user ? <Profile /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/login" 
              element={!user ? <Login /> : <Navigate to="/" />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
