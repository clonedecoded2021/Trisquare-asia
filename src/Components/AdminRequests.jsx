import React, { useState, useEffect } from 'react';
import '../css/AdminRequests.css';
import { Link } from 'react-router-dom';
import Image from '../Images/logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GiSplitCross } from 'react-icons/gi';
import axios from 'axios';

const ProductDetails = ({ Pid, email, request }) => {
    const decline = () => {
        axios.delete(`https://trisquare.asia/api/product_request/delete/${Pid}`).then((res) => console.log("deleted"))
    }
    return (
        <div className="admin__container">
            <div className='admin__products'>
                <div className="admin__productAbout">
                    <h4 className="admin__productName request__para">{`The Customer ${email} is requested for a product :- ${request}`}</h4>
                </div>
                <div className="admin__buttons">
                    <button className="admin__ignore requestPage__button" onClick={decline}>Ignore</button>
                </div>
            </div>
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
                    <img src={Image} className="admin__image" />
                </div>
                <div className="admin__navbar" style={{ display: `${disp}`, transition: "0.3s" }}>
                    <Link to='/buyer/admin' className="admin__navbarOption"><h4>Home</h4></Link>
                    <Link to='/buyer/admin/preorders' className="admin__navbarOption"><h4>Pre-Orders</h4></Link>
                    <Link to='/buyer/admin/purchases' className="admin__navbarOption"><h4>Purchases</h4></Link>
                    <Link to='/buyer/admin/requests' className="admin__navbarOption active"><h4>Product Requests</h4></Link>
                    <Link to='/buyer/admin/verifyUser' className="admin__navbarOption"><h4>Verify Users</h4></Link>
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
