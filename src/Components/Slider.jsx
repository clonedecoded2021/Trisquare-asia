import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Slider = ({ SliderData, button }) => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <IoIosArrowBack className="left-arrow" onClick={prevSlide} />
      <IoIosArrowForward className="right-arrow" onClick={nextSlide} />
      <a href="https://trisquare.asia/en/" >
        <h1 className="home__main__header">
          THE SOCIAL MARKETPLACE WHERE RESELLERS GROUP-BUY TO DISCOUNT WHOLESALE
          PRICES
        </h1>
        <button className="home__main__button">
          {button === "Sell" ? <Link to="/buyer/sell" className="home__main__link">
            Sell
            </Link> : <Link to="/buyer/cartPage" className="home__main__link">
            Group Buy
            </Link>}
        </button>
        {SliderData?.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img src={slide.img} alt="travel image" className="image" />
              )}
            </div>
          );
        })}</a>
    </section>
  )
}
export default Slider;
