import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'

import tokenService from '../../utils/tokenAuth'
let {removeToken} = tokenService

const NavBar = () => {
  let handleLogout = () => {
    removeToken();
    window.location.reload(true)
  }

  return (
    <div>
        <ul>
            <button className='navBar'><Link to='/cocktails'>Cocktails</Link></button>
            <button><Link to='/cocktails/new'>New Cocktail</Link></button>
            <button  onClick={handleLogout}><Link to='/'>Log out</Link></button>
        </ul>
    </div>
  )
}

export default NavBar