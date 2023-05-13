import React from 'react';
import './Nav.css';
import logo from './images/logo.png';
import { Link, Navigate } from 'react-router-dom';
import Login from './Login';

function Nav() {
  const handleLoginClick = () => {
    // Redirect the user to the Login component when the button is clicked
    return <Navigate to="/login" />;
  }

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="login-signup">
          <button onClick={handleLoginClick}>Login/Signup</button>
      </div>
    </nav>
  );
}

export default Nav;
