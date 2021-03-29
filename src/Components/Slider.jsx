import React, { useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Slider = ({ SliderData, button }) => {
  const [current, setCurrent] = useState(0);
  const [userApproved, setUserApproved] = useState(0)
  // const [interval , setInterval] = useState(0)
  useEffect(() => {
    const loginstatus = localStorage.getItem("_trisquarestorage")
    if (loginstatus) {
      const newValue = JSON.parse(loginstatus)
      console.log(newValue.data[0])
      setUserApproved(newValue.data[0].approved)
    }
  })

  const notAuthorized = () => {
    if (userApproved == 0) {
      console.log("ksdbvkj")
      alert("You are not verified by the admin yet.")
    } else {
      return
    }
  }
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  setTimeout(nextSlide, 8000);


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
          {button === "Sell" ? <Link to="/buyer/sell" className="home__main__link" onClick={notAuthorized}>
            SELL
            </Link> : <Link to="/buyer/cartPage" className="home__main__link">
            GROUP BUY
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
