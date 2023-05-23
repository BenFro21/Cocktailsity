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
    <div className='navContainer'>
        <ul>
            <Link className='navbarLink' to='/cocktails'>Cocktails</Link>
            <Link  className='navbarLink' to='/cocktails/new'>New Cocktail</Link>
            <Link  className='navbarLink' to='/ingredients'>Ingredients</Link>
            <Link  className='navbarLink' to='/ingredients/new'>New Ingredient</Link>
            <Link onClick={handleLogout} className='navbarLink' to='/'>Log out</Link>
        </ul>
    </div>
  )
}

export default NavBar