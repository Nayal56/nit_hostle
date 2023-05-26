import React from 'react';
import "./styledash.css"
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const Header = styled(Box)({
  width: '80%',
  height: '22%',
  backgroundColor: 'skyblue',
  position: 'relative',
  padding: '47px',
  top: '47px',
  left:'-2%',
  border: '1px solid white',
});

const MaintenanceBox = styled(Box)({
    width: '20%',
    height: '30%',
    backgroundColor: 'grey',
    position: 'fixed',
    right:'65%',
    top: '35%',
    border: '2px solid white',
  });
  
  const MessBillBox = styled(Box)({
    width: '20%',
    height: '30%',
    backgroundColor: 'grey',
    position: 'fixed',
    right:'30%',
    top: '35%',
    border: '2px solid white',
  });
  
  const OneBox = styled(Box)({
    width: '20%',
    height: '30%',
    backgroundColor: 'grey',
    position: 'fixed',  
    right:'65%',
    top: '68%',
    border: '2px solid white',
  });
  
  const TwoBox = styled(Box)({
    width: '20%',
    height: '30%',
    backgroundColor: 'grey',
    position: 'fixed',
    right:'30%',
    top: '68%',
    border: '2px solid white',
  });

function MainPage() {
  return (
    <div className='main'>
      <Header>
        <Typography variant="h3">Hello</Typography>
      </Header>
      <MaintenanceBox>
      <Typography variant="h3">Maintain</Typography>
      </MaintenanceBox>
      <MessBillBox>
      <Typography variant="h3">Mess Bill</Typography>
      </MessBillBox>
      <OneBox>
      <Typography variant="h3">box 1</Typography>
      </OneBox>
      <TwoBox> 
      <Typography variant="h3">box 2</Typography>
      </TwoBox>
    </div>
  );
}

export default MainPage;
