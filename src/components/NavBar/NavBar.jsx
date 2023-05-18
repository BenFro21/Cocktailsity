import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'


const NavBar = () => {
  return (
    <div>
        <ul>
            <button className='navBar'><Link to='/cocktails'>Cocktails</Link></button>
            <button><Link to='/cocktails/new'>New Cocktail</Link></button>
            <button onClick={localStorage.removeItem('token')}><Link to='/'>Log out</Link></button>
        </ul>
    </div>
  )
}

export default NavBar