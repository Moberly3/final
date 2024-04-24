import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,          // Show dot indicators
    infinite: true,      // Infinite looping 
    speed: 500,          // Animation speed
    slidesToShow: 3,     // Number of slides to show at once
    slidesToScroll: 1    // Number of slides to scroll
  };

  return (
    <div style={{ margin: '30px' }}>
      <Slider {...settings}>
        <div>
          <h3>Slide 1</h3>
          <img src="/images/photo1.jpg" alt="Slide 1" />
        </div>
        <div>
          <h3>Slide 2</h3>
          <img src="/images/photo2.jpg" alt="Slide 2" />
        </div>
        <div>
          <h3>Slide 3</h3>
          <img src="/images/photo3.jpg" alt="Slide 3" />
        </div>
        <div>
          <h3>Slide 5</h3>
          <img src="/images/photo5.jpg" alt="Slide 5" />
        </div>
        <div>
          <h3>Slide 6</h3>
          <img src="/images/photo6.jpg" alt="Slide 6" />
        </div>
        <div>
          <h3>Slide 7</h3>
          <img src="/images/photo7.jpg" alt="Slide 7" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
