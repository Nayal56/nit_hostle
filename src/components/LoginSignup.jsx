import React, { useState } from 'react';
import StudentLoginForm from './StudentLoginForm';
import AdministratorLoginForm from './AdministratorLoginForm';
import AdminLoginForm from './AdminLoginForm';
import RegisterForm from './RegisterForm';

function LoginSignup() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="popup">
      <div className="popup-buttons">
        <button onClick={() => setSelectedUser('student')}>Student</button>
        <button onClick={() => setSelectedUser('administrator')}>Administrator</button>
        <button onClick={() => setSelectedUser('admin')}>Admin</button>
      </div>
      <div className="popup-content">
        {selectedUser === 'student' && <StudentLoginForm />}
        {selectedUser === 'administrator' && <AdministratorLoginForm />}
        {selectedUser === 'admin' && <AdminLoginForm />}
        {selectedUser === 'register' && <RegisterForm />}
      </div>
    </div>
  );
}

export default LoginSignup;
