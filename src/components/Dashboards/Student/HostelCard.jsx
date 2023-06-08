import React, { useRef } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import logo from "../static/images/avatar/logo.png";
import Avatar from '@mui/material/Avatar';
import './HostelCard.css';
import { useLocation } from 'react-router-dom';

function HostelCard() {
  const frontRef = useRef();
  const backRef = useRef();
  const location = useLocation();
const Front = styled(Box)({
    width: '40%',
    height: '45%',
    backgroundColor: 'white',
    position: 'fixed',
    right: '25%',
    top: '4%',
    border: '2px solid black',
    borderRadius: '20px',
  });

  const Back = styled(Box)({
    width: '40%',
    height: '45%',
    backgroundColor: 'white',
    position: 'fixed',
    right: '25%',
    top: '52%',
    border: '2px solid black',
    borderRadius: '20px',
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <div className='printpage'>
                <Front ref={frontRef}>
          <div className="logo3" style={{ height: 'auto', width: '90px', position: 'relative' }}>
            <img src={logo} alt="Logo" style={{ position: 'absolute', top: 26, left: 9,width:90 }} />
          </div>

          <h2 className="title">NATIONAL INSTITUTE OF TECHNOLOGY KURUKSHETRA</h2>
          <h2 className="subtitle">HARAYANA - 136119 (INDIA)</h2>
          <Chip label="HOSTEL CARD" variant="outlined" /><br />
          <Divider />
          <Avatar
            className="avatar"
            sx={{ borderRadius: 3, width: 95, height: 105,top:140,left:30, position:'absolute' }}
            variant="square"
            src={location.state.img}
          />
          <div className="info1">
          <p>
            <strong>ROLL NUMBER : {location.state.rollnumber}</strong> 
          </p>
          <p>
            <strong>NAME : {location.state.Name}</strong> 
          </p>
          <p>
            <strong>DEPARTMENT : {location.state.department}</strong>
          </p>
          </div>
            </Front>

        <Back ref={backRef}>
        <div className="info2">
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
          </div>       
          <br />
          <Divider />
          <p> HOSTEL CONTACT: *********** </p> 
          <p> HOSTEL  EMAIL- ***************@nitkkr.ac.in</p><br />

        </Back>
      </div>

      <button onClick={handlePrint}>Print</button>
    </div>
  );
}

export default HostelCard;
