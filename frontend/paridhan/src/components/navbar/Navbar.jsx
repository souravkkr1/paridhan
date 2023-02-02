import React from 'react'
import style from './navbar.module.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <h1>Navbar</h1>
      <Link to="/">Home</Link>
      <Link to="/men">Men</Link>
      <Link to="/women">Women</Link>
      <Link to="/kids">Kids</Link>
      <Link to="/sports">Sports</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/cart">Cart</Link>
    </div>
  )
}

export default Navbar
