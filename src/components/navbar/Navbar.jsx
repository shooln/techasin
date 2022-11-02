import React from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='techsain__navbar'>
      <div className='techsain__navbar-links'>
        <div className='techsain__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='techsain__navbar-links_container'>
            <p><a href="#home">Home</a></p>
            <p><a href="#services">Services</a></p>
            <p><a href="#blog">Our Work</a></p>
            <p><a href="#contact">Contact</a></p>
        </div>
      </div>
      <div className='techsain__navbar-sign'>
        <button type="button">Sign In</button>
      </div>
    </div>
  )
}

export default Navbar