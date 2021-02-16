import React, { useEffect, useState } from 'react';
import '../css/CartPage.css';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useDispatch, connect } from 'react-redux';
import reducer from '../reducer';
import Card from './Card';
import Modal from "react-modal";
import { Link, Redirect, useHistory } from "react-router-dom";
import axios from 'axios';

function CartPage({ userIn, userOut, price }) {
    const history = useHistory()
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch(reducer)
    const [searchVal, setSearchVal] = useState("")
    const [products, setProducts] = useState([]);
    const [pending, setPending] = useState(true);
    const [proProduct, setProProduct] = useState([])
    const [filter, setFilter] = useState("")
    const [emailVerified, setEmailVerified] = useState(0);
    const [modalIsOpen, setModalIsOpen] = useState(true);
    const [userData, setUserData] = useState(false)
    const [email, setEmail] = useState("")
    const [userId, setUserId] = useState("")
    const [userName, setUserName] = useState("")
    useEffect(() => {
        axios.get("https://trisquare.asia/api/product_data").then((res) => {
            setProducts(res.data)
        })

    }, [])

    useEffect(() => {
        const loginstatus = localStorage.getItem("_trisquarestorage")
        setPending(false)
        if (loginstatus) {
            setUserData(true)
            const newValue = JSON.parse(loginstatus)
            setUserName(newValue.data[0].username)
            setEmail(newValue.data[0].email)
            setEmailVerified(newValue.data[0].emailVerified)
        } else {
            setUserData(false)
        }
    }, [])
    const filterSelect = (e) => {
        setFilter(e.target.value)
        var val = e.target.value
        setProducts(sortData(products, val))
    }
    const sortData = (data, val) => {
        if (data) {
            const sortedData = [...data];
            return sortedData.sort(function (a, b) {
                if (val === "") {
                    console.log("filter na ba ")
                    console.log(proProduct)
                    return a.product.time > b.product.time ? -1 : 1;
                } else if (val === "price__asc") {
                    console.log("filter ==== asce")
                    console.log(a.product.price1)
                    console.log(b.product.price1)
                    return a.product.price1 > b.product.price1 ? 1 : -1;
                } else if (val === "price__des") {
                    console.log("filter ==== desc")
                    return a.product.price1 > b.product.price1 ? -1 : 1;
                } else if (val === "solds") {
                    console.log("filter ==== solds")
                    return a.product.soldProducts > b.product.soldProducts ? -1 : 1;
                } else if (val === "duration") {
                    console.log("filter ==== duration")
                    return a.product.orderDeadline > b.product.orderDeadline ? 1 : -1;
                }
            })
        } else {
            console.log("data na bate")
        }
    };
    const verify = () => {
        setModalIsOpen(false)
        axios.post(`https://trisquare.asia/api/email_verification/${email}/${userId}`, { userName: userName })
        history.push('/buyer')
        window.location.reload()
    }
    const searchFunction = (e) => {
        setSearchTerm(e.target.value)
        const search = e.target.value
        console.log(search)
        products && setProducts(products.filter((product) => {
            if (search == "") {
                console.log("run hole baa")
                return product
            } else if (
                product.productName.toLowerCase()
                    .includes(search.toLowerCase())) {
                return product
            }
        }))
    }

    if (pending) return <div>Loading...</div>
    if (!pending) {
        if (!userData) return <Redirect to="/buyer/login" />
        if (userData) {
            if (emailVerified === 1) {
                return (
                    <div className="cartPage">
                        <p id="timers">
                            <span className="spans" id="timer-days"></span>
                            <span className="spans" id="timer-hours"></span>
                            <span className="spans" id="timer-mins"></span>
                            <span className="spans" id="timer-secs"></span>
                        </p>
                        <div className="cartPage__searchBar">
                            <div className="lockIcons">
                                {userIn ? <LockOpenOutlinedIcon /> : <LockOutlinedIcon />}
                            </div>
                            <div className="cartPage__searchFilterContainer">
                                <div className="cartPage__filterrs">
                                    <select className="cartPage__filters" name="filter" onChange={filterSelect}>
                                        <option className="cartPage__filter" value="">Sort</option>
                                        <option className="cartPage__filter" value="price__asc">Prices Low to High</option>
                                        <option className="cartPage__filter" value="price__des">Price High to Low</option>
                                        <option className="cartPage__filter" value="duration">Ending Soon</option>
                                        <option className="cartPage__filter" value="solds">Most Units Sold</option>
                                    </select>
                                </div>
                                <form className="cartPage__searchMain">
                                    <input className="cartPage__searchInput" type="text" placeholder="Search Your product here" onChange={(e) => setSearchTerm(e.target.value)} onSubmit={searchFunction} />
                                </form>
                            </div>
                        </div>
                        <div className="cartPage__container">
                            <div className="cartPage__main">
                                <div className="productCard">
                                    {
                                        products && products.filter((product) => {
                                            if (searchTerm == "") {
                                                return product
                                            } else if (
                                                product.productName.toLowerCase()
                                                    .includes(searchTerm.toLowerCase())) {
                                                return product
                                            }
                                        }).map((product) => product.approval === 1 ? (
                                            <Card
                                                key={product.id}
                                                className="productCard__product"
                                                src={product.product_image_name}
                                                title={product.productName}
                                                product={product}
                                                Pid={product.id}
                                                quantity={product.productQuantity}
                                                sold={product.soldProducts}
                                            />
                                        ) : (""))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className="cartPage__container">
                        <Modal
                            className="orderModal cartPage__modal verify__modal"
                            isOpen={modalIsOpen}
                            shouldCloseOnOverlayClick={false}
                            shouldCloseOnEsc={true}
                            onRequestClose={() => setModalIsOpen(false)}
                        >
                            <h2 className="orderModal__heading cartPage__modalHeader orderModal__heading1"  >Your E-Mail is not verified</h2>
                            <p className="orderModal__heading orderModal__heading1" >Please press the button below to start the verification process, a message will be sent to your email account, please verify to use this website. </p>
                            <div className="cartPage__modalButtons verify__buttons">
                                <div>
                                    <button className="cartPage__modalButton modalButton1 modalButton1s" onClick={verify} >Verify E-Mail</button>

                                </div>
                                <div>
                                    <Link to="/buyer" className="cartPage__modalButton modalButton2 modalButton1s" onClick={() => window.location.reload()}>Close</Link>

                                </div>
                            </div>
                        </Modal></div>
                )
            }

        }
    }
}
const mapStateToProps = (state) => {
    return {
        userIn: state.userIn,
        userOut: state.userOut,
        loading: state.pending,
    }
}
export default connect(mapStateToProps)(CartPage);