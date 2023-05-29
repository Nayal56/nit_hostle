import React from "react";
import Nav from "./Nav";
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

const Home = () => {
  return (
    <div>
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
    </div>
  );
}
export default Home;
