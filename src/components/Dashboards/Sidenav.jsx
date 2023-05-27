import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/system';

import HelpIcon from '@mui/icons-material/Help';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Divider from '@mui/material/Divider';

import { Link } from 'react-router-dom';
import Profile from './Record/Profile';




// const pages = ['', '', ''];
const settings = ['Profile', 'Account', 'Logout'];

function Sidenav() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);

  };
  const Student = styled(Box)({
    color: 'inherit',
    padding: '12px',
    marginBottom: '10px',
    color: 'grey',
    // border: '2px solid #ccc',
    textColor:'white',
    // borderRadius: '2px',
    textAlign: 'center',
    alignItems: 'center',
  });

  return (
    (
      <AppBar position="static" sx={{ backgroundColor: 'grey' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              NIT KURUKSHETRA
            </Typography>
  
            <Box 
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {/* {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))} */}
              </Menu>
            </Box>
  
            <Typography
              variant="h5"
              noWrap
              component={Link}
              to=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              NIT KURUKSHETRA
            </Typography>
  
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'flex-end', // Move the box to the right side
                alignItems: 'center', // Vertically align the icons
                gap: '30px', // Add space between the icons
                marginLeft: 'auto', // Move the box to the right side
                width: '10px', // Decrease the width of the box              
              }}
            >
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  width: '1px', // Increase the width of the divider
                  height: '50px', // Increase the height of the divider
                  backgroundColor: 'white', // Set the color of the divider to white
                }}
                />

              <DarkModeIcon />

              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  width: '1px', // Increase the width of the divider
                  height: '50px', // Increase the height of the divider
                  backgroundColor: 'white', // Set the color of the divider to white
                }}
                />

              <HelpIcon />

                <Divider
                orientation="vertical"
                flexItem
                sx={{
                  width: '1px', // Increase the width of the divider
                  height: '50px', // Increase the height of the divider
                  backgroundColor: 'white', // Set the color of the divider to white
                }}
                />
            </Box>

  
            <Box sx={{
                flexGrow: 0,
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                marginTop: '10px',
                marginLeft: '90px',
              }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar  src="/static/images/avatar/1.jpg" />
                  <Student sx={{ my: 2, color: 'white', display: 'block' }}>
                    Student Name
                  </Student>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => {
                  if (setting === 'Profile') {
                    return (
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Link
                          to="/Profile"
                          style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                          {setting}
                        </Link>
                      </MenuItem>
                    );
                  }
                  return (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      {setting}
                    </MenuItem>
                  );
                })}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    )
    );
  };
export default Sidenav;