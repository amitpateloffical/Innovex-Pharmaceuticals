// MySlider.js
import React from "react";
import Slider from "react-slick";
import AutoType from './AutoType';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const MySlider = () => {
  const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={`slider-arrow slider-prev-arrow ${className}`} onClick={onClick}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={`slider-arrow slider-next-arrow ${className}`} onClick={onClick}>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    );
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Slide every 3 seconds
    arrows: true,
    // centerMode: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return ( 
  <>
  
    <Slider {...settings} >
     

      <img height={"500px"} src="https://img.freepik.com/free-vector/laboratory-glassware-tests-composition_1284-24515.jpg?size=626&ext=jpg&ga=GA1.1.1884802103.1674757283&semt=sph" />
      <img  height={"500px"} src="https://img.freepik.com/free-photo/healthy-fresh-garlic-garlic-capsules_1150-48113.jpg?size=626&ext=jpg&ga=GA1.1.1884802103.1674757283&semt=sph"/>
      
    </Slider>
    <div style={{textAlign:'center', marginTop:'30px'}}>
      <AutoType />
    </div>
    
    </>
  );
};

export default MySlider;
