import React, { useEffect } from "react";
import "../css/Home.css";
import HowItWorks from "./HowItWorks";
import Request from "./Request";
import Slider from './Slider';
import { HomeSlides } from '../SliderData';
import { Link } from 'react-router-dom';
import Buying from '../Images/buying.png';
import Bullets from '../Images/bullets.png';
import SaveBuy from '../Images/savebuy.jpg';
import Links from "./Links";

const Home = () => {

  return (
    <>
      <p id="timers">
        <span className="spans" id="timer-days"></span>
        <span className="spans" id="timer-hours"></span>
        <span className="spans" id="timer-mins"></span>
        <span className="spans" id="timer-secs"></span>
      </p>
      <Slider SliderData={HomeSlides} button="Group Buy" />
      <HowItWorks />
      <section className="buyingSection">
        <div className="howItWorks__buyHeading headingly1">
          <h1>Trisquare has established a community of likeminded online resellers, ecommerce store owners, and wholesalers wanting to buy the same product.</h1>
        </div>
        <div className="howItWorks__contents">
          <img src={Buying} alt="" className="buying__img " />
        </div>
        <div className="howItWorks__buyHeading headingly2">
          <h1>All our wholesale group-buys feature top selling branded products. These high performing items are carefully selected to follow Amazon reseller requirements.</h1>
        </div>
        <div>
          <Link to="/buyer/cartPage"><button className="howItWorks__button">GROUP BUY</button></Link>
        </div>
      </section>
      <section className="whyTrisquare">
        <div className="howItWorks__whyHeading">
          <h1 className="howItWorks__whyMainHeading">WHY BUY WITH TRISQUARE?</h1>
        </div>
        <img className="bulletImage" src={Bullets} />
        <h4>WE HAVE A LARGE NETWORK OF RESELLERS ALREADY ADVANCING FROM OUR GROUP-BUYS.</h4>
        <h5>This empowers new members of the group-buy to reach higher profit margins.</h5>
        <img className="bulletImage" src={Bullets} />
        <h4>WE REMOVE THE RESTRICTION OF MINIMUM ORDER QUANTITIES</h4>
        <h5>So no costly bulk purchases and storage costs.</h5>
        <img className="bulletImage" src={Bullets} />
        <h4>OUR DEDICATED TEAM HAS DOZENS OF YEARS’ EXPERIENCE IN SOURCING AND RESELLING.</h4>
        <h5>Shows in the fantastic products we work with.</h5>
        <img className="bulletImage" src={Bullets} />
        <h4>WE ARE WHOLE-HEARTEDLY COMMITTED TO OUR COMMUNITY.</h4>
        <h5>Providing excellent customer service.</h5>
        <img className="bulletImage" src={Bullets} />
        <h4>WE ONLY LIST BRANDED LICENSED PRODUCTS.</h4>
        <h5>Whether you are looking for wholesale games, merchandise, or toys. they will all be genuine.</h5>
        <div>
          <Link to="/buyer/cartPage"><button className="howItWorks__button">GROUP BUY</button></Link>
        </div>
      </section>
      <section className="socialMission">
        <div className="socialMission__heading">
          <h1>TRISQUARE SOCIAL MISSION</h1>
        </div>
        <h5>This is a new movement in the fight against big businesses repressing individuals and small businesses from competing with their selling prices.</h5>
        <h5>Large businesses can afford to set their price’s unbelievably low, making it harder for everyone else to compete in the market. Large businesses bulk buy to surpass minimum order quantities and reach economies of scale prices.</h5>
        <h5>We’re here to help with that … Trisquare is the first ever company to join group buying specifically for resellers like you!</h5>
        <h5>Trisquare creates new opportunities for SME’s and online resellers who would have otherwise struggled to enter the market due to high upfront costs.</h5>
        <h5>Success for us is marked by every single person who joins our community, as together we have a stronger foot hold to compete against large and established businesses.</h5>
        <h5>We encourage our members to join forces through the ‘Share it. Profit’ scheme, providing stability, empowerment and equality.</h5>
        <div className="socialMission__contents">
          <img className="buying__logo" src={SaveBuy} alt="" />
        </div>
        <h5>A key part of Trisquare’s vision is the ‘Share it. Profit’ scheme. Supplier and buyers can share a Group Buy campaign via social media to affiliate a larger audience and increase economies of scale. This is a great way to support the Trisquare movement.</h5>
      </section>
      <Request />
    </>
  );
};

export default Home;
