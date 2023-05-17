import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <div>
        <ul>
            <button><Link to='/cocktails'>Cocktails</Link></button>
            <li><Link to='/cocktails/nex'>New Cocktail</Link></li>
            <li>Sign in</li>
        </ul>
    </div>
  )
}

export default NavBar