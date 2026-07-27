import React from 'react'
import './Navbar.css';

function Navbar({ username, logout }) {
  return (
    <div className='navbar'>
        <div className='logo'>Employee Management System</div>
        <div className='nav-right'>
          <span className='username'>Welcome {username}</span>
          <button className='logoutBtn' onClick={logout}>Logout</button>
        </div>
    </div>
  )
}

export default Navbar