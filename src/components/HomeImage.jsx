import React from "react";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";


import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import GroupsIcon from '@mui/icons-material/Groups';
import Groups2Icon from '@mui/icons-material/Groups2';
import GavelIcon from '@mui/icons-material/Gavel';
import Divider from '@mui/material/Divider';
import { Grid } from '@mui/material';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const CarouselContainer = styled('div')({
  width: '1348px',
  position: '',
});

const CarouselImage = styled('img')({
  width: '1345px',
  height: '580px',
});

const BoxContainer = styled(Box)({
  width: '102%',
  height: '100%',
  backgroundColor: '#FF0000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid white',
  borderRadius: '20px',
  textAlign: 'center',
  
});

const HomeImage = () => {

  const homebox = {
    top:'100px',
    width: '160%',
    color: 'white',
    padding: '10px',
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set the duration between slide transitions in milliseconds
  };

  return ( 
        <div className="home-image-container" style={{ maxWidth: '800px', margin: '0 auto' }}>      
        <Container>        
          <CarouselContainer>
          <Slider {...settings}>
            <div>
              <CarouselImage src={img1} alt="Hostel" />
            </div>
            <div>
              <CarouselImage src={img2} alt="Hostel" />
            </div>
            <div>
              <CarouselImage src={img3} alt="Hostel" />
            </div>
            <div>
              <CarouselImage src={img4} alt="Hostel" />
            </div>
          </Slider>
        </CarouselContainer>
        <br/>
        <div style={homebox}>
        {/* <Divider style={{ color: 'black' }} /> */}
        <Grid container spacing={2}>
          <Grid item xs={6} md={3}>
            <BoxContainer>
            <Link to="/HostelRules" style={{ textDecoration: 'none' }}>
              <GavelIcon style={{ color: 'white' }}/>
              <Typography color="white">Hostel Rules & Conducts</Typography>
              </Link>
            </BoxContainer>
          </Grid>

          <Grid item xs={6} md={3}>
            <BoxContainer>
            <a href="https://nitkkr.ac.in/?page_id=28409" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}>
              <TextSnippetIcon style={{ color: 'white' }}/>
              <Typography color="white">Hostel Notifications</Typography>
              </a>
            </BoxContainer>
          </Grid>
          <Grid item xs={6} md={3}>
            <BoxContainer>
            <Link to="/Girls" style={{ textDecoration: 'none' }}>
              <Groups2Icon style={{ color: 'white' }}/>
              <Typography color="white">Girls Hostels</Typography>
              </Link>
            </BoxContainer>
          </Grid>
          <Grid item xs={6} md={3}>
            <BoxContainer>
            <Link to="/Boys" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>
              <GroupsIcon style={{ color: 'white' }}/>
              <Typography color="white">Boys Hostels</Typography>
              </Link>
            </BoxContainer>
          </Grid>
        </Grid>
        </div>
      </Container>
    </div>
  );
}

export default HomeImage;