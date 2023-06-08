import React,{useState} from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import ConstructionIcon from '@mui/icons-material/Construction';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';
import { Link } from 'react-router-dom';



const Header = styled(Box)({
  width: '69%',
  height: '8%',
  backgroundColor: '#696969',
  position: 'relative',
  padding: '47px',
  top: '1px',
  left:'-2px',
  border: '1px solid white',
});

const MaintenanceBox = styled(Box)({
  width: '13.5%',
  height: '20%',
  backgroundColor:' #6F8792',
  position: 'fixed',
  right:'70%',
  top: '40%',
  border: '.5px solid white',
  borderRadius: '20px',
});

const MessBillBox = styled(Box)({
  width: '13.5%',
  height: '20%',
  backgroundColor:' #6F8792',
  position: 'fixed',
  right:'55%',
  top: '40%',
  border: '.5px solid white',
  borderRadius: '20px',

});

const OneBox = styled(Box)({
  width: '13.5%',
  height: '20%',
  backgroundColor:' #6F8792',
  position: 'fixed',  
  right:'40%',
  top: '40%',
  border: '.5px solid white',
  borderRadius: '20px',
});

const TwoBox = styled(Box)({
  width: '13.5%',
  height: '20%',
  backgroundColor:' #6F8792',
  position: 'fixed',
  right:'25%',
  top: '40%',
  border: '.5px solid white',
  borderRadius: '20px',
});

const Footer = styled(Box)({
  width: '69%',
  height: '1px',
  backgroundColor: '#696969',
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
    <MaintenanceBox
     component={Link} to= "/MaintainceForm"
     style={{ textDecoration: 'none' }}
     >
      <ConstructionIcon
      style={{
        width: '48px', // Adjust the desired width
        height: '48px', // Adjust the desired height
        color: 'red', // Adjust the desired color
      }}
    />  
    <h4>Maintenance</h4>    

    </MaintenanceBox>      
        <MessBillBox>
        <AccountBalanceWalletRoundedIcon
         style={{
          width: '48px', // Adjust the desired width
          height: '48px', // Adjust the desired height
          color: 'red', // Adjust the desired color
        }}
        /> 
        <h4>Mess Bill</h4>    
        </MessBillBox>
        <OneBox 
        component={Link} to= "/RebaitForm"
        style={{ textDecoration: 'none' }}
        >
        <DepartureBoardIcon
         style={{
          width: '48px', // Adjust the desired width
          height: '48px', // Adjust the desired height
          color: 'red', // Adjust the desired color
        }}
        />
        <h4>Rebate</h4>    
        </OneBox>
        <TwoBox 
        component="a" 
        href="https://nitkkr.ac.in/wp-content/uploads/2021/12/No-Dues-form-Latest-05062020.pdf" 
        target="_blank"
        style={{ textDecoration: 'none' }}
        >
        <ExitToAppRoundedIcon
         style={{
          width: '48px', // Adjust the desired width
          height: '48px', // Adjust the desired height
          color: 'red', // Adjust the desired color
        }}
        />        
        <h4>No-Dues</h4>    
        </TwoBox>
        <Footer>
        <Typography variant="h5">******HOSTEL NAME******</Typography>
        


        </Footer>
    </div>
  );
}

export default MainPage;