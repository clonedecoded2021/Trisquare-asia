import React, { useState, useEffect } from 'react';
import '../css/AdminPreOrder.css';
import Modal from "react-modal";
import { Link, useHistory } from 'react-router-dom';
import Image from '../Images/logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GiSplitCross } from 'react-icons/gi';
import axios from 'axios';

const ProductDetails = ({ Pid, productUrl, productName, email, mob, preOrder }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currPrice, setCurrPrice] = useState(0);

    const decline = () => {
        axios.delete(`https://trisquare.asia/api/preorders/delete/${Pid}`).then((res) => console.log("deleted"))
    }
    return (
        <div className="admin__container">
            <div className={currPrice <= preOrder.TargetPrice ? "admin__products1" : "admin__products"}>
                <img className="productImage" style={{ cursor: "pointer", border: "1px solid gray", padding: "3px", borderRadius: "5px" }} onClick={() => setModalIsOpen(true)} src={process.env.PUBLIC_URL + `/uploads/${productUrl}`} alt="image" />
                <div className="admin__productAbout">
                    <p>{`${preOrder.firstName} requested  ${preOrder.productQuantity} units of ${productName}  at target price $${preOrder.targetPrice}`}</p>
                </div>
                <div className="admin__buttons">
                    <button className="admin__ignore preorder__button" onClick={decline}>REMOVE</button>
                </div>
                <Modal
                    className="orderModal"
                    isOpen={modalIsOpen}
                    shouldCloseOnOverlayClick={true}
                    shouldCloseOnEsc={true}
                    onRequestClose={() => setModalIsOpen(false)}
                >
                    <div className="adminModal">
                        <h1 className="orderModal__heading">Pre-Order Details</h1>
                        <button
                            className="orderModal__closeButton"
                            onClick={() => setModalIsOpen(false)}
                        >
                            X
                    </button>
                    </div>
                    <img className="orderModal__productImage" src={process.env.PUBLIC_URL + `/uploads/${productUrl}`} alt="ProductImage" />
                    <h3 className="orderModal__title">{productName}</h3>
                    <p className="orderModal__productDescription para">{`${preOrder.firstName} requested  ${preOrder.productQuantity} units of  ${productName}  at target price $${preOrder.targetPrice}`}</p>
                    <div className="orderModal__sellerDescription">
                        <div className="orderModal__sellerName para">{preOrder.firstName}</div>
                        <div className="orderModal__sellerEmail para">{email}</div>
                        <div className="orderModal__sellerMobile para" >{mob}</div>
                    </div>
                </Modal>
            </div>
        </div>)
}



const AdminPreOrder = ({ product }) => {
    const [admin, setAdmin] = useState(false);
    const [preOrders, setPreOrders] = useState();
    const history = useHistory();
    const [disp, setDisp] = useState("none");
    console.log(product)
    useEffect(() => {
        const loginstatus = localStorage.getItem("_trisquarestorage")
        if (loginstatus) {
            const newValue = JSON.parse(loginstatus)
            console.log(newValue.data)
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
        axios.get("https://trisquare.asia/api/preorders_data").then(res => {
            setPreOrders(res.data)
            console.log(res.data)
        })
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
                    <Link to='/buyer/admin/preorders' className="admin__navbarOption active"><h4>Pre-Orders</h4></Link>
                    <Link to='/buyer/admin/purchases' className="admin__navbarOption"><h4>Purchases</h4></Link>
                    <Link to='/buyer/admin/requests' className="admin__navbarOption"><h4>Product Requests</h4></Link>
                    <Link to='/buyer/admin/verifyUser' className="admin__navbarOption"><h4>Verify Users</h4></Link>
                    <img src={Image} className="admin__image" />
                </div>
                <div className="admin__navbar" style={{ display: `${disp}`, transition: "0.3s" }}>
                    <Link to='/buyer/admin' className="admin__navbarOption"><h4>Home</h4></Link>
                    <Link to='/buyer/admin/preorders' className="admin__navbarOption active"><h4>Pre-Orders</h4></Link>
                    <Link to='/buyer/admin/purchases' className="admin__navbarOption"><h4>Purchases</h4></Link>
                    <Link to='/buyer/admin/requests' className="admin__navbarOption"><h4>Product Requests</h4></Link>
                    <Link to='/buyer/admin/verifyUser' className="admin__navbarOption"><h4>Verify Users</h4></Link>
                    <img src={Image} className="admin__image" />
                </div>
                <div className="admin__mainPage">
                    <h4 className="admin__heading">Pre-Orders</h4>
                    {preOrders && preOrders.map((preOrder) =>
                    (
                        <ProductDetails key={preOrder.id} Pid={preOrder.id} productUrl={preOrder.product_image} productName={preOrder.productName} email={preOrder.email} mob={preOrder.mob} preOrder={preOrder} />)
                    )
                    }
                </div>
            </div>
        )
    } else {
        return <div>Page Not Found</div>
    }
}
export default AdminPreOrder;
