import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import { Icon,Input, Button, Select  } from 'semantic-ui-react'

const NavBar = (props) => {
  const options = [
    { key: 'all', text: 'All', value: 'all' },
    { key: 'articles', text: 'Ticker', value: 'ticker' },
    { key: 'knowledges', text: 'Knowledge', value: 'knowledges' },
  ]
  return (
    <>
      <div className="Navbar">
          <div className="nav-logo"> 
          <Link to='/'>
            <h1><Icon name='home' size='large' /> SC Hub</h1>
          </Link>
          </div>
          <div className="nav-right">
            <ul className="nav-link">
              <Link to='/'><li>Home</li> </Link>
              <Link to='/profile'><li>Profile</li> </Link>
              <Link to='/contact'><li>Contact</li> </Link>
              <Link to='/login'><li>Login</li> </Link>
              <Link to='/register'><li>Register</li> </Link>
            </ul>
            <div className="nav-search">
            <Input type='text' placeholder='Search...' action>
              <input />
              <Select compact options={options} defaultValue='ticker' />
              <Button type='submit'>Search</Button>
            </Input>
            </div>
        </div>
      </div>
    </>
   
  )
}

export default NavBar