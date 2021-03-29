import React, { useState, useEffect } from 'react';
import '../css/AdminPurchases.css';
import Modal from "react-modal";
import { Link, useHistory } from 'react-router-dom';
import Image from '../Images/logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GiSplitCross } from 'react-icons/gi';
import axios from 'axios';

const ProductDetails = ({ Pid, productImage, productName, email, mob, product, userName , orderDate}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [status, setStatus] = useState("");
    // const [deposit, setDeposit] = useState()

    // console.log(orderDate)

    const order_date = orderDate.substring(0, orderDate.indexOf("T"));

    const decline = () => {
        axios.delete(`https://trisquare.asia/api/order_history/delete/${Pid}`).then((res) => alert("You have deleted order-history details"))
    }

    const productStatus = (e) => {
        e.preventDefault();
        setStatus(e.target.value);
    }

    return (
        <div className="admin__container">
            <div className='admin__products admin__mainPanel'>
                <div className="admin__divRow1">
                    <img className="productImage" style={{ cursor: "pointer", border: "1px solid gray", padding: "3px", borderRadius: "5px" }} onClick={() => setModalIsOpen(true)} src={process.env.PUBLIC_URL + `/uploads/${productImage}`} alt="image" />
                    <div className="admin__productAbout">
                        <h4 className="admin__productName purchases__heading">{productName}</h4>
                        
                        <p className="orderModal__productDescription para">{`${email} purchased ${product.productQuantity} units of ${productName} on Date:- ${order_date}`} </p>
                        
                    </div>
                    <div className="admin__buttons">
                        <button className="admin__ignore purchases__button" onClick={decline}>REMOVE</button>
                    </div>
                </div>

                <div className="admin__divRow2" style ={{display: "flex",width: "100%"}}>
                    <input type="Text" className="admin__input" value={status} placeholder="Delivery Status" onChange={productStatus} style = {{display: "flex", flex: "0.9"}}/>
                    <button className="admin__emailButton"><a href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${email}&su=Trisquare+product+delivery+status&body=Hi+${userName},The+status+of+your+order+named+${productName}+is+${status}.&ui=2&tf=1&pli=1`} target="_blank" className="admin__emailLink">Send Email</a></button>
                    
                </div>


                <Modal
                    className="orderModal purchase__modal"
                    isOpen={modalIsOpen}
                    shouldCloseOnOverlayClick={true}
                    shouldCloseOnEsc={true}
                    onRequestClose={() => setModalIsOpen(false)}
                >
                    <div className="adminModal purchase__header">
                        <h1 className="orderModal__heading">Product Details</h1>
                        <button
                            className="orderModal__closeButton"
                            onClick={() => setModalIsOpen(false)}
                        >
                            X
                        </button>
                    </div>
                    <img className="orderModal__productImage" src={process.env.PUBLIC_URL + `/uploads/${productImage}`} alt="image" />
                    <h3 className="orderModal__title ">{productName}</h3>
                    <div className="buyerDetails">
                        <div className="buyerDetails__rows"><h5 className="buyerDetalis__header">Order Quantity :- </h5><span className="buyerDetails__span">{product.productQuantity}</span></div>
                        <div className="buyerDetails__rows"><h5 className="buyerDetalis__header">Total Amount Paid :- </h5><span className="buyerDetails__span">{product.buyerPaid}</span></div>
                        <div className="buyerDetails__rows"><h5 className="buyerDetalis__header">Shipping Price :- </h5><span className="buyerDetails__span">{product.shippingPrice}</span></div>
                        <div className="buyerDetails__rows"><h5 className="buyerDetalis__header">Address :-  </h5><span className="buyerDetails__span">{product.address}</span></div>
                        <div className="buyerDetails__rows"><h5 className="buyerDetalis__header">Pin Code :- </h5><span className="buyerDetails__span">{product.pin}</span></div>
                        <div className="buyerDetails__rows"><h5 className="buyerDetalis__header">Country :- </h5><span className="buyerDetails__span">{product.country}</span></div>
                        <div className="buyerDetails__rows"><h5 className="buyerDetalis__header">Date :- </h5><span className="buyerDetails__span">{order_date}</span></div>
                    </div>
                    <div className="orderModal__sellerDescription">
                        <div className="orderModal__sellerEmail para">E-Mail :- {email}</div>
                        <div className="orderModal__sellerMobile para" >Mob:- {mob}</div>
                    </div>
                </Modal>
            </div>
        </div>)
}

const AdminPurchases = ({ products }) => {
    const [admin, setAdmin] = useState(false)
    const [orderHistory, setOrderHistory] = useState();
    const history = useHistory();
    const [disp, setDisp] = useState("none");
    useEffect(async () => {
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
        axios.get("https://trisquare.asia/api/orders_history").then(res => {
            setOrderHistory(res.data)
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
                    <Link to='/buyer/admin/preorders' className="admin__navbarOption "><h4>Pre-Orders</h4></Link>
                    <Link to='/buyer/admin/purchases' className="admin__navbarOption active"><h4>Purchases</h4></Link>
                    <Link to='/buyer/admin/requests' className="admin__navbarOption"><h4>Product Requests</h4></Link>
                    <Link to='/buyer/admin/verifyUser' className="admin__navbarOption"><h4>Verify Users</h4></Link>
                    <Link to='/buyer/admin/buyers' className="admin__navbarOption"><h4>All Buyers</h4></Link>
                    <Link to='/buyer/admin/sellers' className="admin__navbarOption"><h4>All Sellers</h4></Link>
                    <img src={Image} className="admin__image" />
                </div>
                <div className="admin__navbar" style={{ display: `${disp}`, transition: "0.3s" }}>
                    <Link to='/buyer/admin' className="admin__navbarOption"><h4>Home</h4></Link>
                    <Link to='/buyer/admin/preorders' className="admin__navbarOption"><h4>Pre-Orders</h4></Link>
                    <Link to='/buyer/admin/purchases' className="admin__navbarOption active"><h4>Purchases</h4></Link>
                    <Link to='/buyer/admin/requests' className="admin__navbarOption"><h4>Product Requests</h4></Link>
                    <Link to='/buyer/admin/verifyUser' className="admin__navbarOption"><h4>Verify Users</h4></Link>
                    <Link to='/buyer/admin/buyers' className="admin__navbarOption"><h4>All Buyers</h4></Link>
                    <Link to='/buyer/admin/sellers' className="admin__navbarOption"><h4>All Sellers</h4></Link>
                    <img src={Image} className="admin__image" />
                </div>
                <div className="admin__mainPage">
                    <h4 className="admin__heading">Items  Ordered</h4>
                    {orderHistory && orderHistory.sort((a,b) => {
                        return new Date(b.orderDate) - new Date(a.orderDate)
                    }).map((purchase) =>
                    (
                        <ProductDetails key={purchase.id} Pid={purchase.id} productImage={purchase.product_image} productName={purchase.productName} email={purchase.email} mob={purchase.contact} product={purchase} userName={purchase.userName} orderDate={purchase.orderDate}/>)
                    )}
                </div>
            </div>
        )
    } else {
        return <div>Page Not Found</div>
    }
}
export default AdminPurchases;
