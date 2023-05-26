import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

const RightnavContainer = styled(Box)({
  position: 'fixed',
  top: '80px',
  right: 0,
  width: '310px',
  height: '100%',
  backgroundColor: '#f0f0f0',
  padding: '18px',
});

const TimeAndDateBox = styled(Box)({
  backgroundColor: '#ffffff',
  padding: '100px',
  height: '30%',
  top: '80px',
  marginBottom: '10px',
  fontFamily: 'Arial, sans-serif',
  color: '#333333',
  fontWeight: 'bold',
  border: '2px solid #ccc',
  borderRadius: '20px',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center', // Add this line to center align vertically
});

const Notice = styled(Box)({
    backgroundColor: '#ffffff',
    padding: '100px',
    height: '60%',
    top: '80px',
    marginBottom: '10px',
    fontFamily: 'Arial, sans-serif',
    color: '#333333',
    fontWeight: 'bold',
    border: '2px solid #ccc',
    borderRadius: '20px',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  });

const Time = styled('div')({

  fontSize: '23px',
  marginBottom: '10px',
});

const Month = styled('div')({
  fontSize: '30px',
  marginBottom: '10px',
});

const Day = styled('div')({
  fontSize: '30px',
  marginBottom: '15px',
});

const Year = styled('div')({
  fontSize: '30px',
});

const Rightnav = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
  
      return () => {
        clearInterval(timer);
      };
    }, []);

  const currentMonth = currentTime.toLocaleDateString([], { month: 'long' });
  const currentDay = currentTime.getDate();
  const currentYear = currentTime.getFullYear();

  return (
    <RightnavContainer>
      <TimeAndDateBox>
        <Time> {currentTime.toLocaleTimeString([], {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true,
          })}</Time>
        <Month>{currentMonth}</Month>
        <Day>{currentDay}</Day>
        <Year>{currentYear}</Year>
      </TimeAndDateBox>
      <Notice>
      <NotificationsOutlinedIcon sx={{ fontSize: 25, marginBottom: 10 }} />
      <Typography variant="h4">Notifications</Typography>
      </Notice>
    </RightnavContainer>
  );
};

export default Rightnav;


