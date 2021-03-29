import React from "react";
import "../css/HowItWorks.css";
import { FaShareAlt } from "react-icons/fa";
import { FaPercent } from "react-icons/fa";
import { RiMessage2Line } from "react-icons/ri";

function HowItWorks() {
  return (
    <section className="howItWorks">
      <div className="howItWorks__heading">
        <h1>How It Works ?</h1>
      </div>
      <div className="howItWorks__contents">
        <div className="howItWorks__content">
          <FaShareAlt className="howItWorks__icons" />
          <h2>CONNECT</h2>
          <h5>With multiple businesses buying the same product as you.</h5>
        </div>
        <div className="howItWorks__content">
          <RiMessage2Line className="howItWorks__icons" />
          <h2>COMMUNICATE</h2>
          <h5>
            With other group buyers in a campaign through the messages tab, and
            share on social media.
          </h5>
        </div>
        <div className="howItWorks__content">
          <FaPercent className="howItWorks__icons" />
          <h2>SAVE</h2>
          <h5>
            Money together by collectively reaching discounted wholesale
            quantities.
          </h5>
        </div>
      </div>
      <div>
<<<<<<< HEAD
        <a href = "https://trisquare.asia//buyer/info/buy.html" ><button className="howItWorks__button">FIND OUT MORE</button></a>
=======
        <a href = "https://trisquare.asia/en/content/4-about-us" ><button className="howItWorks__button">Find Out More</button></a>
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
      </div>
    </section>
  );
}
export default HowItWorks;
