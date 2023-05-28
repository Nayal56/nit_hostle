import React from "react";
import Nav from "./Nav";
<<<<<<< HEAD
=======
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import HomeImage from "./HomeImage";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
>>>>>>> 03f909109f81afb114f30203f09f7ee14d2dc8dc

const Home = () => {
  return (
    <div>
<<<<<<< HEAD
      <Nav/>
=======
      <Nav />
      <h1>Welcome to our Hostel</h1>
      {/* <HomeImage></HomeImage>  */}
      {/* <div className="carousel">
        <Slider {...settings}>
          <div>
            <img className="carousel-image" src={img1} alt="Hostel" />
          </div>
          <div>
            <img className="carousel-image" src={img2} alt="Hostel" />
          </div>
        </Slider>
      </div> */}
>>>>>>> 03f909109f81afb114f30203f09f7ee14d2dc8dc
    </div>
  );
}

export default Home;
