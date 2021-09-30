import React, { useState } from 'react'
import './Nav.css'
import logo from '../image/logo-white.png'
import bars from '../image/bars-solid.svg'

const Nav = () => {
  const [isActive, setActive] = useState('false')
  const handleToggle = () => {
    setActive(!isActive)
  }
  return (
    <div className={isActive ? 'nav' : 'nav collapse'}>
      <div className='nav-menu'>
        <div className='logo'>
          <img className='img1' src={logo} alt='Logo' />
        </div>
        <div className='toggle-icon' onClick={handleToggle}>
          <div className='menu-icon'>
            <img className='drop-icon' src={bars} alt='' />
          </div>
        </div>
        <div className='nav-list'>
          <div className='nav-row'>
            <a className='list active' href='/'>
              Home
            </a>
            <a className='list' href='/'>
              About
            </a>
            <a className='list' href='/'>
              Dishes
            </a>
            <a className='list' href='/'>
              Menu
            </a>
            <a className='list' href='/'>
              Chefs
            </a>
            <a className='list' href='/'>
              Testimonies
            </a>
            <a className='list' href='/'>
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
