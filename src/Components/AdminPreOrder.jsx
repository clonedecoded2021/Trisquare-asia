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
<<<<<<< HEAD
    const [status, setStatus] = useState("");

    const decline = () => {
        axios.delete(`https://trisquare.asia/api/preorders/delete/${Pid}`).then((res) => alert("You have deleted pre-oreder details."))
    }

    const productStatus = (e) => {
        e.preventDefault();
        setStatus(e.target.value);
    }
    useEffect(() => {
        axios.get(`https://trisquare.asia/api/product_desc/${Pid}`).then((res) => {
            if (res.data[0].soldProducts >= 0 && res.data[0].soldProducts < res.data[0].units2) {
                setCurrPrice(res.data[0].price1)
            }
            else if (res.data[0].soldProducts >= res.data[0].units2 && res.data[0].soldProducts < res.data[0].units3) {
                setCurrPrice(res.data[0].price2)
            }
            else if (res.data[0].soldProducts >= res.data[0].units3 && res.data[0].soldProducts < res.data[0].units4) {
                setCurrPrice(res.data[0].price3)
            } else {
                setCurrPrice(res.data[0].price4)
            }

        })
    }, [])
    
    console.log(currPrice)
    return (
        <div className="admin__container">
            <div className={currPrice <= preOrder.targetPrice ? "admin__products1 admin__mainPanel " : "admin__products admin__mainPanel"}>
                <div className="admin__divRow1" style = {{background: "transparent"}}>
                    <img className="productImage" style={{ cursor: "pointer", border: "1px solid gray", padding: "3px", borderRadius: "5px" }} onClick={() => setModalIsOpen(true)} src={process.env.PUBLIC_URL + `/uploads/${productUrl}`} alt="image" />
                    <div className="admin__productAbout">
                        <p>{`${preOrder.firstName} requested  ${preOrder.productQuantity} units of ${productName}  at target price $${preOrder.targetPrice}`}</p>
                    </div>
                    <div className="admin__buttons">
                        <button className="admin__ignore preorder__button" onClick={decline}>REMOVE</button>
                    </div>
                </div>

                <div className="admin__divRow2" style ={{display: "flex",width: "100%"}}>
                    <input type="Text" className="admin__input" value={status} placeholder="If anything wants you to write..." onChange={productStatus} style = {{display: "flex", flex: "0.9", background : "white"}}/>
                    <button className="admin__emailButton"><a href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${email}&su=Trisquare+product+Pre+Order+status&body=Hi+${preOrder.firstName},Your+request+for+the+product+:+${productName}+at+${preOrder.targetPrice}+is+now+available.+${status}.&ui=2&tf=1&pli=1`} target="_blank" className="admin__emailLink">Send Email</a></button>
                
                </div>

=======

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
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
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



<<<<<<< HEAD
const AdminPreOrder = () => {
=======
const AdminPreOrder = ({ product }) => {
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
    const [admin, setAdmin] = useState(false);
    const [preOrders, setPreOrders] = useState();
    const history = useHistory();
    const [disp, setDisp] = useState("none");
<<<<<<< HEAD
    // console.log(product)
=======
    console.log(product)
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
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
<<<<<<< HEAD
            // console.log(res.data)
=======
            console.log(res.data)
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
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
<<<<<<< HEAD
                    <Link to='/buyer/admin/buyers' className="admin__navbarOption"><h4>All Buyers</h4></Link>
                    <Link to='/buyer/admin/sellers' className="admin__navbarOption"><h4>All Sellers</h4></Link>
=======
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
                    <img src={Image} className="admin__image" />
                </div>
                <div className="admin__navbar" style={{ display: `${disp}`, transition: "0.3s" }}>
                    <Link to='/buyer/admin' className="admin__navbarOption"><h4>Home</h4></Link>
                    <Link to='/buyer/admin/preorders' className="admin__navbarOption active"><h4>Pre-Orders</h4></Link>
                    <Link to='/buyer/admin/purchases' className="admin__navbarOption"><h4>Purchases</h4></Link>
                    <Link to='/buyer/admin/requests' className="admin__navbarOption"><h4>Product Requests</h4></Link>
                    <Link to='/buyer/admin/verifyUser' className="admin__navbarOption"><h4>Verify Users</h4></Link>
<<<<<<< HEAD
                    <Link to='/buyer/admin/buyers' className="admin__navbarOption"><h4>All Buyers</h4></Link>
                    <Link to='/buyer/admin/sellers' className="admin__navbarOption"><h4>All Sellers</h4></Link>
=======
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
                    <img src={Image} className="admin__image" />
                </div>
                <div className="admin__mainPage">
                    <h4 className="admin__heading">Pre-Orders</h4>
                    {preOrders && preOrders.map((preOrder) =>
                    (
<<<<<<< HEAD
                        <ProductDetails key={preOrder.id} Pid={preOrder.product_id} productUrl={preOrder.product_image} productName={preOrder.productName} email={preOrder.email} mob={preOrder.mob} preOrder={preOrder}  />)
=======
                        <ProductDetails key={preOrder.id} Pid={preOrder.id} productUrl={preOrder.product_image} productName={preOrder.productName} email={preOrder.email} mob={preOrder.mob} preOrder={preOrder} />)
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
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
