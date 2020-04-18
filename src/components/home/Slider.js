import React from "react";
import { Slide } from "react-slideshow-image";
import slide1 from "../../assets/images/slide1.jpg";
import slide2 from "../../assets/images/slide2.jpg";
import slide3 from "../../assets/images/slide3.jpg";

const slideImages = [slide1, slide2, slide3];

const properties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: true,
  pauseOnHover: true,
};
const images = slideImages.map((image) => (
  <div className="each-slide" key={`${image}`}>
    <img
      src={image}
      className="d-block w-100"
      alt={`${image}`}
      style={{ maxHeight: "450px" }}
    />
  </div>
));
const Slider = () => {
  return (
    <div className="slide-container">
      <Slide {...properties}>{images}</Slide>
    </div>
  );
};

export default Slider;
