import React, { useState } from 'react';

function StudentLoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle student login logic
  };

  const handleCancel = () => {
    // Handle cancel logic
  };

  const handleRegister = () => {
    // Handle register logic
  };

  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="rollno">Roll Number:</label>
      <input type="text" id="rollno" value={username} onChange={(e) => setUsername(e.target.value)} />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <div>
        <button type="submit">Login</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
      </div>
      <br/>
      <button className="register" onClick={handleRegister}>Register</button>
    </form>
  );
}

export default StudentLoginForm;
