import React from 'react';
import './Nav.css';
import logo from './images/logo.png';

function Nav() {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <div className="login-signup">
        
          <button>Login/Signup</button>
        
      </div>
    </nav>
  );
}

export default Nav;
