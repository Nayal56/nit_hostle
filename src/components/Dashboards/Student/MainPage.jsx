import React,{useState} from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const Header = styled(Box)({
  width: '69%',
  height: '8%',
  backgroundColor: 'skyblue',
  position: 'relative',
  padding: '47px',
  top: '1px',
  left:'-2px',
  border: '1px solid white',
});

const MaintenanceBox = styled(Box)({
  width: '13.5%',
  height: '20%',
        backgroundColor:'#FF0AF0',
  position: 'fixed',
  right:'70%',
  top: '40%',
  border: '2px solid black',
  borderRadius: '20px',
});

const MessBillBox = styled(Box)({
  width: '13.5%',
  height: '20%',
          backgroundColor:'#FF0AF0',
  position: 'fixed',
  right:'55%',
  top: '40%',
  border: '2px solid black',
  borderRadius: '20px',

});

const OneBox = styled(Box)({
  width: '13.5%',
  height: '20%',
          backgroundColor:'#FF0AF0',
  position: 'fixed',  
  right:'40%',
  top: '40%',
  border: '2px solid black',
  borderRadius: '20px',
});

const TwoBox = styled(Box)({
  width: '13.5%',
  height: '20%',
  backgroundColor:'#FF0AF0',
  position: 'fixed',
  right:'25%',
  top: '40%',
  border: '2px solid black',
  borderRadius: '20px',
});

const Footer = styled(Box)({
  width: '69%',
  height: '1px',
  backgroundColor: 'skyblue',
  position: 'relative',
  padding: '47px',
  top: '340px',
  left:'-2px',
  border: '1px solid white',

});

function MainPage(p) {
  const [name,setname] = useState("");
  fetch(`http://localhost:5000/getname/${p.rollnumber}`
  ).then((res)=>{
    console.log("setname");
    res.json().then((data)=>{
       console.log(data);
       setname(data.Name);
    })
    });
  return (
    <div className='main'>
      <Header>
      <Typography variant="h4" textAlign="left">
          Welcome, {name}    
        </Typography>
      </Header>
      <MaintenanceBox>
          <Typography variant="h5">Maintenance</Typography>
        </MaintenanceBox>
        <MessBillBox>
          <Typography variant="h5">Mess Bill</Typography>
        </MessBillBox>
        <OneBox>
          <Typography variant="h5">Box1</Typography>
        </OneBox>
        <TwoBox>
          <Typography variant="h5">Box2</Typography>
        </TwoBox>
        <Footer>
        <Typography variant="h5">******HOSTEL NAME******</Typography>
        {/* <Typography variant="h5">Year:</Typography>
        <Typography variant="h5">DOB:</Typography>
        <Typography variant="h5">Blood Group:</Typography>
        <Typography variant="h5">Address:</Typography> */}



        </Footer>
    </div>
  );
}

export default MainPage;