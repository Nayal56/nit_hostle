import React, { useState } from 'react';

function Login() {
  const [selectedUserType, setSelectedUserType] = useState('student');
  const [rollNumber, setRollNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleUserTypeChange = (event) => {
    setSelectedUserType(event.target.value);
  };

  const handleRollNumberChange = (event) => {
    setRollNumber(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Selected user type: ${selectedUserType}`);
    console.log(`Roll number: ${rollNumber}`);
    console.log(`Password: ${password}`);
    // Add logic to handle form submission here
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div>
        <label>
          <input
            type="radio"
            value="admin"
            checked={selectedUserType === 'admin'}
            onChange={handleUserTypeChange}
          />
          Admin
        </label>
        <label>
          <input
            type="radio"
            value="supervisor"
            checked={selectedUserType === 'supervisor'}
            onChange={handleUserTypeChange}
          />
          Supervisor
        </label>
        <label>
          <input
            type="radio"
            value="student"
            checked={selectedUserType === 'student'}
            onChange={handleUserTypeChange}
          />
          Student
        </label>
      </div>
      <div>
        <label>
          Roll Number:
          <input type="text" value={rollNumber} onChange={handleRollNumberChange} />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default Login;
