import React from "react";
import "./HomeImage.css";
import Nav from "./Nav";
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import GroupsIcon from '@mui/icons-material/Groups';
import Groups2Icon from '@mui/icons-material/Groups2';
import Divider from '@mui/material/Divider';
import { Grid } from '@mui/material';

function HomeImage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  });

  const CarouselContainer = styled('div')({
    width: '10%',
    position: 'relative',
  });

  const CarouselImage = styled('img')({
    width: '10%',
    height: 'auto',
  });

  const BoxContainer = styled(Box)({
    width: '100%',
    height: '100%',
    backgroundColor: 'grey',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid white',
    borderRadius: '20px',
    textAlign: 'center',
  });

  return (
    <div>
      <Container>
        <CarouselContainer>
          <Slider {...settings}>
            <div>
              <CarouselImage src={img1} alt="Hostel" />
            </div>
            <div>
              <CarouselImage src={img2} alt="Hostel" />
            </div>
            {/* <div>
              <CarouselImage src={img3} alt="Hostel" />
            </div>
            <div>
              <CarouselImage src={img4} alt="Hostel" />
            </div> */}
          </Slider>
        </CarouselContainer>
        <Divider />
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <BoxContainer>
              <Typography variant="h3">box 1</Typography>
            </BoxContainer>
          </Grid>
          <Grid item xs={6} md={4}>
            <BoxContainer>
              <Groups2Icon />
              <Typography>Girls Hostels</Typography>
            </BoxContainer>
          </Grid>
          <Grid item xs={6} md={4}>
            <BoxContainer>
              <GroupsIcon />
              <Typography>Boys Hostels</Typography>
            </BoxContainer>
          </Grid>
        </Grid>
        <Typography variant="body2" align="center" color="textSecondary" sx={{ mt: 4 }}>
          Copyright © 2022 National Institute of Technology Kurukshetra. All Rights Reserved.
        </Typography>
      </Container>
    </div>
  );
}

export default HomeImage;
