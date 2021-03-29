import React from "react";
import Navbar from "./Navbar";
import "../css/Header.css";
import Image from "../Images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
<<<<<<< HEAD
        <a href = "https://trisquare.asia/en/"><img className="header__logo" src={Image} alt="" /></a>
=======
        <Link to = "/buyer"><img className="header__logo" src={Image} alt="" /></Link>
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
      </div>
      <div className="header__right">
        <Navbar />
      </div>
    </div>
  );
};
export default Header;
