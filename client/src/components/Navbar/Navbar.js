import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import { Icon,Input, Button, Select  } from 'semantic-ui-react'
import {useLogout} from '../../Hooks/useLogout'
import {useAuthContext} from '../../Hooks/useAuthContext'
const NavBar = (props) => {
  const options = [
    { key: 'all', text: 'All', value: 'all' },
    { key: 'articles', text: 'Ticker', value: 'ticker' },
    { key: 'knowledges', text: 'Knowledge', value: 'knowledges' },
  ]
  const {logout} = useLogout()
  const {user} = useAuthContext()
  const handleClick = () => {
    logout()
  }
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
              {user && (
                <>
                 <Link to='/{user.user._id}' key='{user.user._id}'><b>{user.user.firstname} {user.user.lastname}</b></Link>
              <Link onClick={handleClick} to='/'>Log out</Link>
            </>
              )}
              {!user && (
                <>
                   <Link to='/login'><li>Login/Register</li> </Link>
                </>
               
              )}
              
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