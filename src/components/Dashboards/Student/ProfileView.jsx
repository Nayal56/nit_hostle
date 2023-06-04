import React from 'react';
import './ProfileView.css';
import Divider from '@mui/material/Divider';
import logo from '../static/images/avatar/logo.png';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const ProfileView = () => {
  const location = useLocation();
 const rollnumber = location.state.rollnumber;
  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
        <div className='update'>
      <Link to="/Profile"
      state={{rollnumber:rollnumber}}
      >Edit Profile</Link>        
        </div>
    <div className="container">
      <div className="details">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <h2 className="title">NATIONAL INSTITUTE OF TECHNOLOGY KURUKSHETRA</h2>
        <h2 className="subtitle">HARAYANA - 136119 (INDIA)</h2>
        <Divider />

        <div className='room'>
          <p>
            <strong>ROOM NUMBER :</strong> 
          </p>
          <br/><br/>
        </div>

        <div className="avatar-container">
          <Avatar
            className="avatar"
            sx={{ borderRadius: 3, width: 95, height: 105 }}
            variant="square"
            src={location.state.img}
          />
        </div>

        <div className="info">
          <p>
            <strong>ROLL NUMBER : {location.state.rollnumber}</strong> 
          </p>
          <p>
            <strong>NAME : {location.state.Name}</strong> 
          </p>
          <p>
            <strong>DEPARTMENT : {location.state.department}</strong>
          </p>
          <p>
            <strong>BLOOD GROUP : {location.state.bloodgroup}</strong>
          </p>
          <p>
            <strong>DOB : {location.state.date1}</strong>
          </p>
          <p>
            <strong>STUDENT(M) : {location.state.contactnumber}</strong>
          </p>
          <p>
            <strong>PARENTS(M) : {location.state.parentm}</strong>
          </p>
          <p>
            <strong>EMAIL : {location.state.email}</strong>
          </p>
          <p>
            <strong>FATHER'S NAME : {location.state.fathername}</strong>
          </p>
          <p>
            <strong>MOTHER'S NAME : {location.state.mothername}</strong>
          </p>
        </div>

       
      </div>
    </div>
     <button className="print-button" onClick={handlePrint}>
          Print
        </button>
    </div>
  );
};

export default ProfileView;
