import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

const RightnavContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: '65px',
  right: 0,
  width: '300px',
  height: '100%',
  backgroundColor: 'grey',
  padding: '15px',
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
  flexDirection: 'column',
  alignItems: 'flex-start', // Align the content to the left
  justifyContent: 'flex-start',
  marginTop: '-10px', // Adjust the marginTop value to move the box upwards
  [theme.breakpoints.down('sm')]: {
    height: 'auto',
    padding: '30px', // Adjust the padding for smaller screens if needed
  },
}));

const CalendarContainer = styled(Box)({
  // Adjust the positioning and size of the calendar container
  marginTop: '-26px',
  marginLeft: '-45px',
  width: '100%',
});
const TimeContainer = styled(Box)({
  // Adjust the positioning and size of the calendar container
  marginTop: '-18px',
  marginLeft: '-45px',
  width: '100%',
});

const Notice = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  padding: '30px',
  height: '25%',
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

  return (
    <RightnavContainer>
      <TimeAndDateBox>
        <TimeContainer>
        <Typography variant="h4">
          {dayjs().format('hh:mm:ss A')}
        </Typography><br/>
        </TimeContainer>
        <CalendarContainer>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              showDaysOutsideCurrentMonth
              fixedWeekNumber={5}
            />
          </LocalizationProvider>
        </CalendarContainer>
      </TimeAndDateBox>
      <Notice>
        <NotificationsOutlinedIcon sx={{ fontSize: 25, marginBottom: 10 }} />
        <Typography variant="h4">Notifications</Typography>
      </Notice>
    </RightnavContainer>
  );
};

export default Rightnav;
