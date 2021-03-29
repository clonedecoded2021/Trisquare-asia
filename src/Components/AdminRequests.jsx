import React, { useState, useEffect } from 'react';
import '../css/AdminRequests.css';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import Modal from "react-modal";
=======
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
import Image from '../Images/logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GiSplitCross } from 'react-icons/gi';
import axios from 'axios';

const ProductDetails = ({ Pid, email, request }) => {
<<<<<<< HEAD
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [emailMessage, setEmailMessage] = useState("")
    const decline = () => {
        axios.delete(`https://trisquare.asia/api/product_request/delete/${Pid}`).then((res) => alert("You have deleted product request."))
    }
    const sendEmail = () => {
        axios.post("https://trisquare.asia/api/product_request/send_to_user", {
            email: email,
            emailMessage: emailMessage,
        }).then(() => alert("Email Sent To User."))
=======
    const decline = () => {
        axios.delete(`https://trisquare.asia/api/product_request/delete/${Pid}`).then((res) => console.log("deleted"))
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
    }
    return (
        <div className="admin__container">
            <div className='admin__products'>
<<<<<<< HEAD
                <div className="admin__productAbout admin__productRequestAbout" onClick={() => setModalIsOpen(true)}>
                    <p className="admin__productName request__para">{`The Customer ${email} is requested for a product :- ${request}`}</p>
                </div>
                <div className="admin__buttons admin__buttonsRequest">
                    <button className="admin__ignore requestPage__button" onClick={decline}>Delete</button>
                </div>
            </div>
            <Modal
                className="orderModal admin_Request_Modal"
                isOpen={modalIsOpen}
                shouldCloseOnOverlayClick={true}
                shouldCloseOnEsc={true}
                onRequestClose={() => setModalIsOpen(false)}
            >
                <div className="adminModal admin__userModalHeader">
                    <h1 className="orderModal__heading">Product Request Details</h1>
                    <button
                        className="orderModal__closeButton"
                        onClick={() => setModalIsOpen(false)}
                    >
                        X
                    </button>
                </div>
                <div className="orderModal__userDescription admin_Request_Modal_Description">
                    <div className="adminProductLinkDiv">
                        <h1 className="productLink__modalHeading">Product Link : </h1>
                        <p className="productLink__modalPara"><a className="adminProductRequests" href={`${request}`} >{request}</a></p>
                    </div>
                    <textarea name="adminEmailMessage" className="adminEmailMessage" placeholder="Reply To the customer" value={emailMessage} onChange={(e) => { setEmailMessage(e.target.value) }}></textarea>
                    <button className="adminEmailSend" onClick={sendEmail}>Send</button>
                </div>
            </Modal>
=======
                <div className="admin__productAbout">
                    <h4 className="admin__productName request__para">{`The Customer ${email} is requested for a product :- ${request}`}</h4>
                </div>
                <div className="admin__buttons">
                    <button className="admin__ignore requestPage__button" onClick={decline}>Ignore</button>
                </div>
            </div>
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
        </div>)
}

const AdminRequests = ({ products }) => {
    const [admin, setAdmin] = useState(false)
    const [request, setRequest] = useState()
    const [disp, setDisp] = useState("none");
    useEffect(() => {
        const loginstatus = localStorage.getItem("_trisquarestorage")
        if (loginstatus) {
            const newValue = JSON.parse(loginstatus)
<<<<<<< HEAD
            newValue.data[0].email === "buyer@trisquare.asia" ? setAdmin(true) : setAdmin(true);
=======
            newValue.data[0].email === "buyer@trisquare.asia" ? setAdmin(true) : setAdmin(false);
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
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
        axios.get("https://trisquare.asia/api/request__orders").then(res => setRequest(res.data))
    }, [])

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
                    <Link to='/buyer/admin/requests' className="admin__navbarOption active"><h4>Product Requests</h4></Link>
                    <Link to='/buyer/admin/verifyUser' className="admin__navbarOption"><h4>Verify Users</h4></Link>
<<<<<<< HEAD
                    <Link to='/buyer/admin/buyers' className="admin__navbarOption"><h4>All Buyers</h4></Link>
                    <Link to='/buyer/admin/sellers' className="admin__navbarOption"><h4>All Sellers</h4></Link>
=======
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
                    <img src={Image} className="admin__image" />
                </div>
                <div className="admin__navbar" style={{ display: `${disp}`, transition: "0.3s" }}>
                    <Link to='/buyer/admin' className="admin__navbarOption"><h4>Home</h4></Link>
                    <Link to='/buyer/admin/preorders' className="admin__navbarOption"><h4>Pre-Orders</h4></Link>
                    <Link to='/buyer/admin/purchases' className="admin__navbarOption"><h4>Purchases</h4></Link>
                    <Link to='/buyer/admin/requests' className="admin__navbarOption active"><h4>Product Requests</h4></Link>
                    <Link to='/buyer/admin/verifyUser' className="admin__navbarOption"><h4>Verify Users</h4></Link>
<<<<<<< HEAD
                    <Link to='/buyer/admin/buyers' className="admin__navbarOption"><h4>All Buyers</h4></Link>
                    <Link to='/buyer/admin/sellers' className="admin__navbarOption"><h4>All Sellers</h4></Link>
=======
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
                    <img src={Image} className="admin__image" />
                </div>
                <div className="admin__mainPage">
                    <h4 className="admin__heading">Requested Products</h4>
                    {request && request.map((request) =>
                    (
                        <ProductDetails key={request.id} Pid={request.id} email={request.email} request={request.request} />)
                    )}
                </div>
            </div>
        )
    } else {
        return <div>Page Not Found</div>
    }
}
export default AdminRequests;
