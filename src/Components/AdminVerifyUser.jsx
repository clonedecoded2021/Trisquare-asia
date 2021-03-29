import React, { useState, useEffect } from 'react';
import '../css/AdminVerifyUser.css';
import Modal from "react-modal";
import { Link } from 'react-router-dom';
import Image from '../Images/logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GiSplitCross } from 'react-icons/gi';
import axios from 'axios';

const ProductDetails = ({ Pid, Email, Mob, fName, lName, BName, userType, City, Country, Allow, PIN, userName, Address, Data }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const approval = () => {
        const DATA = {
            id: Pid,
            approved: 1,
        }
        axios.put("https://trisquare.asia/api/user_data/update", DATA).then((res) => alert("user is now approved."))
            .then(() => window.location.reload())
    }
    const decline = () => {
        axios.delete(`https://trisquare.asia/api/user_data/delete/${Pid}`).then((res) => alert("user deleted."))
            .then(() => window.location.reload())
    }
    return (
        <div className="admin__container">
            <div className="admin__products admin__userVerify">
                <div className="admin__productAbout" onClick={() => setModalIsOpen(true)} style={{ cursor: "pointer" }}>
                    <p>{`${fName} ${lName} recently registered as a ${userType} in your site.`}</p>
                </div>
                <div className="admin__buttons">
                    <button className="admin__accept preorder__button" onClick={approval}>Accept</button>
                    <button className="admin__ignore preorder__button" onClick={decline}>Block</button>
                </div>
                <Modal
                    className="orderModal"
                    isOpen={modalIsOpen}
                    shouldCloseOnOverlayClick={true}
                    shouldCloseOnEsc={true}
                    onRequestClose={() => setModalIsOpen(false)}
                >
                    <div className="adminModal admin__userModalHeader">
                        <h1 className="orderModal__heading">New Users Details</h1>
                        <button
                            className="orderModal__closeButton"
                            onClick={() => setModalIsOpen(false)}
                        >
                            X
                    </button>
                    </div>
                    <div className="orderModal__userDescription">
                        <div className="userDetails__rows"><h5 className="userDetalis__header">Full Name :- </h5><span className="userDetails__span">{`${fName} ${lName}`}</span></div>
                        <div className="userDetails__rows"><h5 className="userDetalis__header">User Type :- </h5><span className="userDetails__span">{userType}</span></div>
                        <div className="userDetails__rows"><h5 className="userDetalis__header">Business Name :- </h5><span className="userDetails__span">{BName}</span></div>
                        <div className="userDetails__rows"><h5 className="userDetalis__header">UserName :- </h5><span className="userDetails__span">{userName}</span></div>
                        <div className="userDetails__rows"><h5 className="userDetalis__header">E-Mail :- </h5><span className="userDetails__span">{Email}</span></div>
                        <div className="userDetails__rows"><h5 className="userDetalis__header">Mobile Number :- </h5><span className="userDetails__span">{Mob}</span></div>
                        <div className="userDetails__rows"><h5 className="userDetalis__header">Address :-  </h5><span className="userDetails__span">{Address}</span></div>
                        <div className="userDetails__rows"><h5 className="userDetalis__header">City :-  </h5><span className="userDetails__span">{City}</span></div>
                        <div className="userDetails__rows"><h5 className="userDetalis__header">Country :- </h5><span className="userDetails__span">{Country}</span></div>
                        <div className="userDetails__rows"><h5 className="userDetalis__header">Pin Code :- </h5><span className="userDetails__span">{PIN}</span></div>
                    </div>
                </Modal>
            </div>
        </div>)
}

const AdminVerifyUser = () => {
    const [admin, setAdmin] = useState(false);
    const [data, setData] = useState();
    const [disp, setDisp] = useState("none");
    useEffect(() => {
        const loginstatus = localStorage.getItem("_trisquarestorage")
        if (loginstatus) {
            const newValue = JSON.parse(loginstatus)
            newValue.data[0].email === "buyer@trisquare.asia" ? setAdmin(true) : setAdmin(false);
        } else {
            setAdmin(false)
        }
    }, [])
    const handleToggle = () => {
        if (disp === "none") {
            setDisp("block")
        } else {
            setDisp("none")
        }
    }
    useEffect(() => {
        axios.get("https://trisquare.asia/api/get_user_data").then(res => {
            setData(res.data)
        })
    }, [])


    // console.log(data)
    if (admin) {
        return (
            <div className="admin">
                <p id="timers">
                    <span className="spans" id="timer-days"></span>
                    <span className="spans" id="timer-hours"></span>
                    <span className="spans" id="timer-mins"></span>
                    <span className="spans" id="timer-secs"></span>
                </p>
                <div className="hamburgerIcon" onClick={handleToggle}>
                    {
                        disp === "none" ? <GiHamburgerMenu className="hamIcon" /> : <GiSplitCross className="crossIcon" />
                    }
                </div>
                <div className="admin__navbar extraNavbar">
                    <Link to='/buyer/admin' className="admin__navbarOption"><h4>Home</h4></Link>
                    <Link to='/buyer/admin/preorders' className="admin__navbarOption"><h4>Pre-Orders</h4></Link>
                    <Link to='/buyer/admin/purchases' className="admin__navbarOption"><h4>Purchases</h4></Link>
                    <Link to='/buyer/admin/requests' className="admin__navbarOption"><h4>Product Requests</h4></Link>
                    <Link to='/buyer/admin/verifyUser' className="admin__navbarOption active"><h4>Verify Users</h4></Link>
                    <Link to='/buyer/admin/buyers' className="admin__navbarOption"><h4>All Buyers</h4></Link>
                    <Link to='/buyer/admin/sellers' className="admin__navbarOption"><h4>All Sellers</h4></Link>
                    <img src={Image} className="admin__image" />
                </div>
                <div className="admin__navbar" style={{ display: `${disp}`, transition: "0.3s" }}>
                    <Link to='/buyer/admin' className="admin__navbarOption"><h4>Home</h4></Link>
                    <Link to='/buyer/admin/preorders' className="admin__navbarOption"><h4>Pre-Orders</h4></Link>
                    <Link to='/buyer/admin/purchases' className="admin__navbarOption"><h4>Purchases</h4></Link>
                    <Link to='/buyer/admin/requests' className="admin__navbarOption"><h4>Product Requests</h4></Link>
                    <Link to='/buyer/admin/verifyUser' className="admin__navbarOption active"><h4>Verify Users</h4></Link>
                    <Link to='/buyer/admin/buyers' className="admin__navbarOption"><h4>All Buyers</h4></Link>
                    <Link to='/buyer/admin/sellers' className="admin__navbarOption"><h4>All Sellers</h4></Link>
                    <img src={Image} className="admin__image" />
                </div>
                <div className="admin__mainPage">
                    <h4 className="admin__heading">New Users Details</h4>
                    {data && data.map((data) =>
                        data.approved === 0 ?
                            (
                                <ProductDetails key={data.id} Pid={data.id} userName={data.username} Address={data.address} fName={data.first_name} lName={data.last_name} Mob={data.mobile} Country={data.country} PIN={data.pin} BName={data.business} Email={data.email} userType={data.user_type} City={data.city} Allow={data.allow} Data={data} />) : ""
                    )
                    }
                </div>
            </div>
        )
    } else {
        return <div>Page Not Found</div>
    }
}
export default AdminVerifyUser;
