import React from 'react';
import './Navbar.scss';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="left">
          <div className="logo">
            <Link to='/' className='link'><img src='new.png' alt="Logo" /></Link>
          </div>
        </div>
        <div className="right">
          <NavLink to='/' activeClassName='active-link' className='link'>
            HOME
          </NavLink>
          <NavLink to='/about' activeClassName='active-link' className='link'>
            ABOUT US
          </NavLink>
          <NavLink to='/gallery' activeClassName='active-link' className='link'>
            GALLERY
          </NavLink>
          <Link to='/reserve' className='link'>
            <button>RESERVATION</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
