import "./Home.css";
import Nav from "./Nav";
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";

function Home() {
  return (
    <div>
      <Nav />
      <h1>Welcome to our Hostel</h1>
      <p>
        We provide comfortable and affordable accommodations for students and
        travelers.
      </p>
      <div className="gallery">
        <div>
          <span>
            <img className="img1" src={img1} alt="Hostel" />
            <img className="img2" src={img2} alt="Hostel" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
