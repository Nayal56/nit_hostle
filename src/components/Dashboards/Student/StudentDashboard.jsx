import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Switch,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { height, styled } from '@mui/system';
import Rightnav from "../Student/Rightnav";
import MainPage from "../Student/MainPage";
import { Link } from 'react-router-dom';
import {useLocation} from 'react-router-dom';




const StudentDashboard = (p) => {
  const [open, setOpen] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);
  const location = useLocation();
  const [img, setImage1] = useState("");
  const [department,setdepartment]=useState("");
  const [year, setYear] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [parentsMobileNumber, setParentsMobileNumber] = useState('');
  const [address, setAddress] = useState('');
  const [date1,setdate1]=useState('');
  fetch(`http://localhost:5000/getprofile/${location.state.rollNumber}`
  ).then((res)=>{
    console.log("hello");
    console.log(location.state.rollNumber);
    res.json().then((data)=>{
       console.log(data);
       setImage1(data.image);
       setdepartment(data.department);
       setYear(data.year);
       setContactNumber(data.contactNumber);
       setBloodGroup(data.bloodGroup);
       setFatherName(data.fatherName);
       setMotherName(data.motherName);
       setParentsMobileNumber(data.parentsMobileNumber);
       setAddress(data.address);
      setdate1(data.DOB);
    })
    })
    const [name,setname] = useState("");
    const [email, setEmail] = useState("");
    fetch(`http://localhost:5000/getname/${location.state.rollNumber}`
    ).then((res)=>{
      console.log("setname");
      res.json().then((data)=>{
         console.log(data);
         setname(data.Name);
         setEmail(data.email);
      })
      });
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    window.localStorage.clear();
    window.location.href = "./";
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const Student = styled(Box)({
    width: '20px',
    height: '5px',
    padding: '12px',
    top:'55px',
    marginRight:'80px',
    textAlign: 'center',
    alignItems: 'center',
  });

  return (
    <div>
      <AppBar
        position="static"
        color={darkMode ? "default" : "primary"}
        style={{ background: darkMode ? "rgba(255, 255, 0, 0.2)" : "#424242" }}
      >
        <Toolbar>
          <IconButton color="inherit" onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center" }}>
          </Typography>
          <IconButton color="inherit" onClick={handleDarkModeToggle}>
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>

         <Student sx={{ my: 2, color: 'Black', display: 'block' }}>
            <Typography variant="h6">
            {location.state.rollNumber}
            </Typography>  
            </Student>
           
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={handleDrawerClose}>
        <Box
          sx={{
            width: 250,
            backdropFilter: "blur(8px)",
            background: darkMode ? "rgba(255, 255, 0, 0.2)" : "#424242",
            color: "white",
            height: "100vh",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 999,
          }}
          onClick={handleDrawerClose}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "150px",
              mt: "20px",
            }}
          >
            <Avatar
              alt="Profile Picture"
              src={img} // Replace with your image URL
              sx={{ width: 100, height: 100 }}
            />
          </Box>
          <List>
            <ListItem button component={Link} to="/ProfileView"
            state={{rollnumber: location.state.rollNumber,Name:name,department:department,year:year,contactnumber:contactNumber,bloodgroup:bloodGroup,fathername:fatherName,mothername:motherName,parentm:parentsMobileNumber,address:address,img:img,email:email,date1:date1}}>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
            <ListItem button component={Link} to= "/MaintainceForm">
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Maintenance" />
            </ListItem>
            <ListItem button component={Link} to= "/HostelCard"
            state={{rollnumber: location.state.rollNumber,Name:name,department:department,year:year,contactnumber:contactNumber,bloodgroup:bloodGroup,fathername:fatherName,mothername:motherName,parentm:parentsMobileNumber,address:address,img:img,email:email,date1:date1}}>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Hostle Card" />
            </ListItem>
            <ListItem button component={Link} to= "/RebaitForm">
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Apply for Rebate" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Mess Bill " />
            </ListItem>
            <ListItem button component="a" href="https://nitkkr.ac.in/wp-content/uploads/2021/12/No-Dues-form-Latest-05062020.pdf" target="_blank">        
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Apply No-Dues" />
            </ListItem>
          </List>

          <List sx={{ marginTop: "auto" }}>
            <ListItem button onClick={handleLogout}>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Rightnav/>
      <div className="main">
        <MainPage rollnumber={location.state.rollNumber}/>
      </div>
    </div>
  );
};

export default StudentDashboard;
