import React,{useState} from 'react';
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
    width: '18%',
    height: '30%',
    backgroundColor: 'grey',
    position: 'fixed',
    right:'65%',
    top: '35%',
    border: '2px solid black',
    borderRadius: '20px',
  });
  
  const MessBillBox = styled(Box)({
    width: '18%',
    height: '30%',
    backgroundColor: 'grey',
    position: 'fixed',
    right:'30%',
    top: '35%',
    border: '2px solid black',
    borderRadius: '20px',

  });
  
  const OneBox = styled(Box)({
    width: '18%',
    height: '30%',
    backgroundColor: 'grey',
    position: 'fixed',  
    right:'65%',
    top: '68%',
    border: '2px solid black',
    borderRadius: '20px',
  });
  
  const TwoBox = styled(Box)({
    width: '18%',
    height: '30%',
    backgroundColor: 'grey',
    position: 'fixed',
    right:'30%',
    top: '68%',
    border: '2px solid black',
    borderRadius: '20px',
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
