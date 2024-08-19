import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './HomePage.css';
import Wipes from "./assets/Wipes.png";
import BodyLotion from "./assets/BodyLotion.png";
import img1 from "./assets/img1.png";
import baby1 from "./assets/baby1.png";

const HomePage: React.FC = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <main className="main-container">

      <section className="slider-section">
        <div className="slider-container">
          <Slider {...sliderSettings}>
            <div className="slider-item">
              <img src={Wipes} alt="Baby Wipes" className="slider-image" />
              <div className="text-content">
                <h2>BEST SELLING FAMILY FAVE</h2>
                <h1>Baby Wipes</h1>
                <p>Gentle, moisturizing, perfect for sensitive skin—our wipes are all-time MVPs.</p>
                <button>Shop Wipes</button>
              </div>
            </div>
            <div className="slider-item">
              <img src={BodyLotion} alt="Body Lotion" className="slider-image" />
              <div className="text-content">
                <h2>HYDRATING FORMULA</h2>
                <h1>Body Lotion</h1>
                <p>At the heart of our all the formulas is our proprietary squalane,
                a moisturizing superhero that baby's skin already knows and loves.</p>
                <button>Shop Lotion</button>
              </div>
            </div>
          </Slider>
        </div>
      </section>

      <section className="identity-section">
        <div className="image-text-container">
          <img src={img1} alt="Our Identity" className="section-image" />
          <div className="text-content">
            <h2>OUR IDENTITY</h2>
            <h1>Thoughtfully Made, Inside And Out</h1>
            <p>On the outside our products are beautifully designed and radically simple- because we understand
            that just because you are a parent, it doesn't mean you have to sacrifice your identity.</p>
          </div>
        </div>
        <div className="image-text-container">
          <img src={baby1} alt="Powered By Clean Science" className="section-image" />
          <div className="text-content">
            <h1>Powered By Clean Science</h1>
            <p>At the heart of all our formulas is our proprietary squalane,
            a moisturizing superhero that baby’s skin already knows and loves.</p>
          </div>
        </div>
      </section>

      <section className="banner-section">
        <h2>Black Friday Sale</h2>
        <h4>We make quality-driven, ethical and mindful products, that promote wellness and activity.</h4>
        <button className="shop-now">Shop Now</button>
      </section>
    </main>
  );
};

export default HomePage;
