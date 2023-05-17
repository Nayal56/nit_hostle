import React, { useState } from 'react';
import './Nav.css';
import logo from './images/logo.png';
import { Link, useNavigate } from 'react-router-dom';

function Nav() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedUser, setSelectedUser] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // TODO: Handle login logic here
    console.log("Logging in as", selectedUser, "with username:", username, "and password:", password);
    setShowPopup(false);
  };

  const handleCancel = () => {
    setSelectedUser("");
    setId("");
    setUsername("");
    setPassword("");
    setShowPopup(false);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleRegister = () => {
    console.log('Register link clicked');
    navigate('/register');
  };
  
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
        <button onClick={togglePopup}>Login/Signup</button>
        {showPopup && (
          <div className="popup">
            <div className="popup-buttons">
              <button onClick={() => setSelectedUser("student")}>Student</button>
              <button onClick={() => setSelectedUser("administrator")}>Administrator</button>
              <button onClick={() => setSelectedUser("admin")}>Admin</button>
            </div>
            <div className="popup-content">
              {selectedUser && (
                <form onSubmit={handleLogin}>
                  {selectedUser === "student" && (
                    <>
                      <label htmlFor="rollno">Roll Number:</label>
                      <input
                        type="text"
                        id="rollno"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      <label htmlFor="password">Password:</label>
                      <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </>
                  )}
                  {(selectedUser === "administrator") && (
                    <>
                      <label htmlFor="email">Email:</label>
                      <input
                        type="text"
                        id="email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      <label htmlFor="password">Password:</label>
                      <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </>
                  )}
                  {selectedUser === "admin" && (
                    <>
                      <label htmlFor="id">ID:</label>
                      <input
                        type="text"
                        id="id"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                      />
                      <label htmlFor="password">Password:</label>
                      <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </>
                  )}
                  <div>
                    <button type="submit">Login</button>
                    <button type="button" onClick={handleCancel}>
                      Cancel
                    </button>
                  </div>
                </form>
              )}
               {!selectedUser && <h3>Please select the user type !!!</h3>}
              {selectedUser === "student" && (
                <div>
                  <p>If not registered, click here to <Link onClick={handleRegister}>register</Link>.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
