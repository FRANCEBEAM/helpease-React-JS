import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import { SiAnydesk } from 'react-icons/si';


const Navbar = () => {
  return (
    <section className='navbar-section'>
      <div className='navbar-container px-4 pt-10'>
        <div className='logo flex'>
          <SiAnydesk className='helpease-logo' size={34} color="#8338EC" />
          <h1 className='text-black text-2xl font-bold ml-3'>
            HELPEASE
          </h1>
        </div>
      </div>
    </section>
  )
}

export default Navbar
