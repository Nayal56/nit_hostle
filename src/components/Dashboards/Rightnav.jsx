import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

const RightnavContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: '80px',
  right: 0,
  width: '310px',
  height: '100%',
  backgroundColor: 'grey',
  padding: '18px',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    padding: '12px',
  },
}));

const TimeAndDateBox = styled(Box)(({ theme }) => ({
    backgroundColor: '#ffffff',
    padding: '40px', // Increase the padding value to make the box larger
    height: '40%', // Increase the height value to make the box taller
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
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
      padding: '30px', // Adjust the padding for smaller screens if needed
    },
  }));
  

const Notice = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  padding: '30px',
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
  [theme.breakpoints.down('sm')]: {
    height: 'auto',
    padding: '20px',
  },
}));

const Time = styled('div')(({ theme }) => ({
  fontSize: '23px',
  marginBottom: '10px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '20px',
  },
}));

const Month = styled('div')(({ theme }) => ({
  fontSize: '30px',
  marginBottom: '10px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '26px',
  },
}));

const Day = styled('div')(({ theme }) => ({
  fontSize: '30px',
  marginBottom: '10px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '26px',
  },
}));

const Year = styled('div')(({ theme }) => ({
  fontSize: '30px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '26px',
  },
}));

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
        <Time>
          {' '}
          {currentTime.toLocaleTimeString([], {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true,
          })}
        </Time>
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
