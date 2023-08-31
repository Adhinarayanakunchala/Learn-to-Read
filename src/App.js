import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Pic1 from "./assets/pic1.jpg";
import Pic2 from "./assets/pic2.jpg";
import Pic3 from "./assets/pic3.jpg";
import Pic4 from "./assets/pic4.jpg";
const App =()=>{

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000,
  };
  return(
    <>
   <div className="slider-container">
      <Slider {...settings}>
        <div className="slide">
          <img src={Pic1} alt="Image 1" />
        </div>
        <div className="slide">
          <img src={Pic2} alt="Image 2" />
        </div>
        <div className="slide">
          <img src={Pic3} alt="Image 3" />
        </div>
        <div className="slide">
          <img src={Pic4} alt="Image 4" />
        </div>
      </Slider>
    </div><br/>
    <div className="top-text1">
      <h2>Why Gowest Education</h2>
      <p>Since our founding, our primary goal has been to provide immigration in all over country and universities.
         Our impact is speak louder than our word.</p>
    </div>
    <div className="top-text2">
      <h2>Services Offered</h2>
      <p>Welcome to the Immigration Services Center, the most efficient Visa Service Provider for all immigration and coaching.
         Checkout our service for country.</p>
    </div>
    <div className="container">
      <span className="s1">
        <h5>Transparent Process and Expert Squad</h5><p/>
        <p>Transparent Process and Expert Squad Rest assured for our clients
           with the highly expert squad working for them at all the times and ensure
            a high transparency at each and every stage of the application process.</p>
      </span>
      <span className="s2">
        <h5>Country/University/Course Selection</h5><p/>
        <p>Thorough analysis of student profile by experts to let you make a right decision apt for your career.
        Thorough analysis of student profile by experts to let you make a right decision apt for your career.
        </p>
      </span>
      <span className="s3">
        <h5>Student Counseling</h5><p/>
        <p>We ensure that our students are well versed with the process and educational/career prospects with ample options. 
          We always ensure to give our students with 
          the freedom to opt for the career path apt for them</p>
      </span>
      <span className="s4">
        <h5>Financial Assistance</h5><p/>
        <p>We work closely with multiple financial institutions to provide our
           students with required financial assistance at an attractive rates  assistance at an attractive rates.</p>
      </span>
      <span className="s5">
        <h5>Visa Assistance</h5><p/>
        <p>Ensure an error free visa application processing for all types of Visas wiz. work Permits,Student,Tourist & Visit
           visas for all countries.</p>
      </span>
      <span className="s6">
        <h5>Travel Assistance</h5><p/>
        <p>Providing our students with the flight tickets at reasonable prices and pre-departure
           sessions for a hassle free flight.</p>
      </span>

    </div>
    <div className="text-bottom">
      <h4>Join students over 1000+ like you</h4>
      <p>“Visited multiple consultants before stepping in to Go West but the assistance
         and Guidance provided by them has been simply amazing. Efforts and dedication by team during the entire process has been well appreciated. 
        Thanks a ton for the valuable services provided.”</p>
    </div>
    <div className="A">
      <h5>Adinarayana</h5>
    </div>
    
    </>
  )
};
export default App;