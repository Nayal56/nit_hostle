import React, { useRef }from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import logo from "../static/images/avatar/logo.png";
import Avatar from '@mui/material/Avatar';
import html2pdf from 'html2pdf.js';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function HostelCard(p) {
  const frontRef = useRef();
  const backRef = useRef();
  const location = useLocation();
  const rollnumber=location.state.rollnumber;
  console.log(rollnumber);

  const Front = styled(Box)({
    width: '50%',
    height: '48%',
    backgroundColor: 'white',
    position: 'fixed',
    right: '25%',
    top: '5%',
    border: '2px solid black',
    borderRadius: '20px',
  });

  const Back = styled(Box)({
    width: '50%',
    height: '45%',
    backgroundColor: 'white',
    position: 'fixed',
    right: '25%',
    top: '55%',
    border: '2px solid black',
    borderRadius: '20px',
  });

  const Image = styled(Box)({
    width: '5.8%',
    height: '13.5%',
    position: 'fixed',
    right: '68%',
    top: '27%',
    border: '2px solid black',
    borderRadius: '20px',
  });

  const generatePDF = () => {
    const options = {
      filename: 'hostel_card.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };

    const content = `
      <html>
        <head>
          <title>Hostel Card</title>
          <style>
            @page {
              size: letter;
              margin: 0;
            }
            body {
              margin: 0;
              font-family: 'Times New Roman', Times, serif;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div style="page-break-before: always;">
            <div class="printpage">
              ${frontRef.current.outerHTML}
            </div>
          </div>
          <div style="page-break-before: always;">
            <div class="printpage">
              ${backRef.current.outerHTML}
            </div>
          </div>
        </body>
      </html>
    `;

    html2pdf().set(options).from(content).save();
  };

  return (
    <div>
      <div className='printpage'>
        <Front ref={frontRef}>
          <div className="logo" style={{ height: 'auto', width: '110px', position: 'relative' }}>
            <img src={logo} alt="Logo" style={{ position: 'absolute', top: 35, left: 25 }} />
          </div>

          <Typography variant="h6" fontWeight="bold" fontFamily="Times New Roman">NATIONAL INSTITUTE OF TECHNOLOGY KURUKSHETRA</Typography> <br />
          <Typography variant="h6" fontWeight="bold" fontFamily="Times New Roman">HARAYANA -136119 (INDIA)</Typography><br />
          <Chip label="HOSTEL CARD" variant="outlined" /><br />
          <Divider />
          <Image>
            <Avatar sx={{ borderRadius: 3, width: 78, height: 85 }} variant="square" src={location.state.img}></Avatar>
          </Image>
          <Typography variant="h6" style={{ textAlign: 'center' }}>ROLL NO : {rollnumber}</Typography> <br />
          <Typography variant="h6" style={{ textAlign: 'center' }}>NAME : {location.state.Name}</Typography> <br />
          <Typography variant="h6" style={{ textAlign: 'center' }}>DEPARTMENT : {location.state.department}</Typography><br />
        </Front>

        <Back ref={backRef}>
          <br />
          <Typography variant="h7" style={{ textAlign: 'left' }}>BLOOD GROUP : {location.state.bloodgroup}</Typography> <br />
          <Typography variant="h7" style={{ textAlign: 'left' }}>DOB : {location.state.date1}</Typography> <br />
          <Typography variant="h7" style={{ textAlign: 'left' }}>STUDENT(M) : {location.state.contactnumber}</Typography> <br />
          <Typography variant="h7" style={{ textAlign: 'left' }}>PARENTS(M) : {location.state.parentm}</Typography> <br />
          <Typography variant="h7" style={{ textAlign: 'left' }}>EMAIL : {location.state.email}</Typography> <br />
          <br /><br />
          <Divider />
          <Typography variant="h7" style={{ textAlign: 'left' }}> HOSTEL CONTACT: ***********</Typography> <br />

         
          <br />
          <Typography variant="h7" style={{ textAlign: 'left' }}> HOSTEL EMAIL- ***************@nitkkr.ac.in</Typography> <br />

        </Back>
      </div>

      <button onClick={generatePDF}>Print PDF</button>
    </div>
  );
}

export default HostelCard;
