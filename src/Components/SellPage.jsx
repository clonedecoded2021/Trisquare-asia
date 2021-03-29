import React, { useEffect, useState } from 'react';
import { CgNotes } from 'react-icons/cg';
import { ImEarth } from 'react-icons/im';
import { BsGraphUp } from 'react-icons/bs';
import Slider from './Slider';
import { HomeSlides } from '../SliderData';
import Selling from '../Images/Selling.png'
import { Link } from 'react-router-dom';
import Bullets from '../Images/bullets.png';
import Login from './Login';

const SellPage = () => {
    const [userApproved, setUserApproved] = useState(0)
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
    return (
        <div className="sellPage">
            <p id="timers">
                <span className="spans" id="timer-days"></span>
                <span className="spans" id="timer-hours"></span>
                <span className="spans" id="timer-mins"></span>
                <span className="spans" id="timer-secs"></span>
            </p>
            <Slider SliderData={HomeSlides} button="Sell" />
            <section className="howItWorks">
                <div className="howItWorks__heading">
                    <h1>How It Works ?</h1>
                </div>
                <div className="howItWorks__contents">
                    <div className="howItWorks__content">
                        <CgNotes className="howItWorks__icons" />
                        <h2>POST</h2>
                        <h5>Your product by filling out a submission form.</h5>
                    </div>
                    <div className="howItWorks__content">
                        <ImEarth className="howItWorks__icons" />
                        <h2>REACH</h2>
                        <h5>
                            New customers by connecting multiple businesses wanting your product.
                        </h5>
                    </div>
                    <div className="howItWorks__content">
                        <BsGraphUp className="howItWorks__icons" />
                        <h2>SELL</h2>
                        <h5>
                            Your products, increase orders and promote your brand.
                        </h5>
                    </div>
                </div>
                <div>
                    <a href="https://trisquare.asia/buyer/info/sell.html" ><button className="howItWorks__button">FIND OUT MORE</button></a>
                </div>
            </section>
            <section className="buyingSection sellSection">
                <div className="howItWorks__buyHeading headingly1">
                    <h1>You must be able to supply wholesale stock and have the required license for the product. If you are approved be prepared for a leap in sales, thanks to Group-buying!</h1>
                </div>
                <div className="howItWorks__contents">
                    <img src={Selling} alt="" className="buying__img selling__img" />
                </div>
                <div>
                    <Link to="/buyer/sell" onClick={notAuthorized}><button className="howItWorks__button" >Sell</button></Link>
                </div>
            </section>
            <section className="whyTrisquareSell">
                <div className="howItWorks__whyHeading">
                    <h1 className="howItWorks__whyMainHeading">WHY SELL WITH TRISQUARE?</h1>
                </div>
                <img className="bulletImage" src={Bullets} />
                <h4>TRISQUARE INTRODUCES YOU TO THE GROUP-BUY WHOLESALE COMMUNITY</h4>
                <img className="bulletImage" src={Bullets} />
                <h4>
                    TRISQUARE REACHES NEW CUSTOMERS, INCREASING YOUR ORDER VOLUMES</h4>
                <img className="bulletImage" src={Bullets} />
                <h4>TRISQUARE PRODUCES EXPEDIENTIAL REPEAT ORDERS</h4>
                <div>
                    <Link to="/buyer/sell" onClick={notAuthorized}><button className="howItWorks__button" >Sell</button></Link>
                </div>
            </section>
        </div>
    )
}
export default SellPage;