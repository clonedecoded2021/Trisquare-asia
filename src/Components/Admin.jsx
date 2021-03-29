import React, { useState, useEffect } from 'react';
import '../css/Admin.css';
import Modal from "react-modal";
import { Link } from 'react-router-dom';
import Image from '../Images/logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GiSplitCross } from 'react-icons/gi';
import axios from 'axios';

const ProductDetails = ({ Pid, productUrl, businessName, productDesc, productName, email, mob, product }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [reason, setReason] = useState("")
<<<<<<< HEAD
    const [deposit, setDeposit] = useState()
=======
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d

    const approval = () => {
        const data = {
            id: Pid,
            approval: 1,
<<<<<<< HEAD
            deposit: deposit
        }
        axios.put("https://trisquare.asia/api/product_data/approval/update", data).then(() => {
            alert("product updated")
        })
        window.location.reload()
    }
    const decline = () => {
        axios.delete(`https://trisquare.asia/api/product_data/delete/${Pid}`).then((res) => alert("product deleted"))
=======
        }
        axios.put("https://trisquare.asia/api/product_data/approval/update", data).then(() => {
            console.log("updated")
        })
        window.location.reload()

    }
    const decline = () => {
        axios.delete(`https://trisquare.asia/api/product_data/delete/${Pid}`).then((res) => console.log("deleted"))
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
        window.location.reload()
    };

    const productRemoval = (e) => {
        e.preventDefault();
        setReason(e.target.value);
    }
    if (!product.approval || product.approval === "null") {
        return (
            <>
                <div className="admin__container">
                    <div className='admin__products admin__mainPanel'>
                        <div className="admin__divRow1">
                            <img className="productImage" style={{ cursor: "pointer", border: "1px solid gray", padding: "3px", borderRadius: "5px" }} onClick={() => setModalIsOpen(true)} src={process.env.PUBLIC_URL + `/uploads/${productUrl}`} alt="image" />
                            <div className="admin__productAbout">
                                <h4 className="admin__productName">{productName}</h4>
                                <p className="admin__productDesc">{productDesc}</p>
                            </div>
                            <div className="admin__buttons admin__button">
                                <button className=" admin__accept admin__accepts" onClick={approval}>Accept</button>
                                <button className="admin__ignore admin__ignores" onClick={decline}>Ignore</button>
                            </div>
                        </div>
                        <div className="admin__divRow2">
                            <input type="Text" className="admin__input" value={reason} placeholder="Reason for removal" onChange={productRemoval} />
                            <button className="admin__emailButton"><a href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${email}&su=Trisquare+product+removed&body=Hi+${businessName},The+product+named+${productName}+you+have+submitted+to+publish+has+been+removed+for+${reason}.&ui=2&tf=1&pli=1`} target="_blank" className="admin__emailLink">Send Email</a></button>
<<<<<<< HEAD
                            <input type="number" className="admin__input admin__inputs1" value={deposit} placeholder="Pre-Orders Deposit Charge" onChange={(e) => {
                                setDeposit(e.target.value)
                            }} />
=======
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
                        </div>
                        <Modal
                            className="orderModal"
                            isOpen={modalIsOpen}
                            shouldCloseOnOverlayClick={true}
                            shouldCloseOnEsc={true}
                            onRequestClose={() => setModalIsOpen(false)}
                        >
                            <div className="adminModal adminModal__header">
                                <h1 className="orderModal__heading">Product Details</h1>
                                <button
                                    className="orderModal__closeButton"
                                    onClick={() => setModalIsOpen(false)}
                                >
                                    X
                        </button>
                            </div>
                            <img className="orderModal__productImage" src={process.env.PUBLIC_URL + `/uploads/${productUrl}`} alt="image" />
                            <h3 className="orderModal__title">{productName}</h3>
                            <p className="orderModal__productDescription para">{productDesc}</p>
                            <div className="buyerDetails">
                                <div className="buyerDetails__rows"><h5 className="buyerDetalis__header">Asia Shipping Price :- </h5><span className="buyerDetails__span">${product.AsiaShippingPrice}</span></div>
                                <div className="buyerDetails__rows"><h5 className="buyerDetalis__header">Europe Shipping Price :- </h5><span className="buyerDetails__span">${product.EuropeShippingPrice}</span></div>
                                <div className="buyerDetails__rows"><h5 className="buyerDetalis__header">Africa Shipping Price :- </h5><span className="buyerDetails__span">${product.AfricaShippingPrice}</span></div>
                                <div className="buyerDetails__rows"><h5 className="buyerDetalis__header">Australia Shipping Price :- </h5><span className="buyerDetails__span">${product.AustraliaShippingPrice}</span></div>
                                <div className="buyerDetails__rows"><h5 className="buyerDetalis__header">North America Shipping Price :-  </h5><span className="buyerDetails__span">$ {product.NorthAmericaShippingPrice}</span></div>
                                <div className="buyerDetails__rows"><h5 className="buyerDetalis__header">South America Shipping Price :- </h5><span className="buyerDetails__span">$ {product.SouthAmericaShippingPrice}</span></div>
                                <div className="buyerDetails__rows"><h5 className="buyerDetalis__header">Antarctica Shipping Price :- </h5><span className="buyerDetails__span">$ {product.AntarcticaShippingPrice}</span></div>

                            </div>
                            <div className="orderModal__sellerDescription">
                                <div className="orderModal__sellerName para">{product.country}</div>
                                <div className="orderModal__sellerName para">{businessName}</div>
                                <div className="orderModal__sellerEmail para">{email}</div>
                                <div className="orderModal__sellerMobile para" >{mob}</div>
                            </div>
                        </Modal>
                    </div>

                </div>
            </>
        )
    }
    return (
        <div></div>
    )
}

const Admin = ({ products }) => {
    const [admin, setAdmin] = useState(false)
    const [disp, setDisp] = useState("none");
    const handleToggle = () => {
        if (disp === "none") {
            setDisp("block")
        } else {
            setDisp("none")
        }
    }
    useEffect(async () => {
        const loginstatus = localStorage.getItem("_trisquarestorage")
        if (loginstatus) {
            const newValue = JSON.parse(loginstatus)
            newValue.data[0].email === "buyer@trisquare.asia" ? setAdmin(true) : setAdmin(false);
        } else {
            setAdmin(false)
        }
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
                    <Link to='/buyer/admin' className="admin__navbarOption active"><h4>Home</h4></Link>
                    <Link to='/buyer/admin/preorders' className="admin__navbarOption"><h4>Pre-Orders</h4></Link>
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
                <div className="admin__navbar" style={{ display: `${disp}` }}>
                    <Link to='/buyer/admin' className="admin__navbarOption active"><h4>Home</h4></Link>
                    <Link to='/buyer/admin/preorders' className="admin__navbarOption"><h4>Pre-Orders</h4></Link>
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
                    <h4 className="admin__heading">Pending Approvals</h4>
                    {products && products.map((product) =>
                        product.approval === 0 ?
                            (
                                <ProductDetails key={product.id} Pid={product.id} productUrl={product.product_image_name} businessName={product.businessName} productDesc={product.description} productName={product.productName} email={product.email} mob={product.mob} product={product} />) : ""
                    )
                    }
                </div>
            </div>
        )
    } else {
    } return <div>Page Not Found</div>
}


export default Admin;
