import React, { useState, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import "../css/Sell.css";
import Countries from "./Countries";
import { connect } from "react-redux";
import Modal from "react-modal";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import axios from "axios";
import Login from './Login'

function Sell({ countryName, userIn, userOut }) {
  const history = useHistory()
=======
import Axios from 'axios';

function Sell({ countryName, userIn, userOut }) {
  const history = useHistory()
  const [modalIsOpen, setModalIsOpen] = useState(false);
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [mob, setMob] = useState("");
  const [mobile, setMobile] = useState();
  const [productUrl, setProductUrl] = useState("");
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productLength, setProductLength] = useState("");
  const [productWidth, setProductWidth] = useState("");
  const [productWeight, setProductWeight] = useState("");
  const [productAbout, setProductAbout] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [orderDeadline, setOrderDeadline] = useState();
  const [units1, setUnits1] = useState("");
  const [units2, setUnits2] = useState("");
  const [units3, setUnits3] = useState("");
  const [units4, setUnits4] = useState("");
  const [price1, setPrice1] = useState("");
  const [price2, setPrice2] = useState("");
  const [price3, setPrice3] = useState("");
  const [price4, setPrice4] = useState("");
  const [fprice1, setFprice1] = useState("");
  const [fprice2, setFprice2] = useState("");
  const [fprice3, setFprice3] = useState("");
  const [fprice4, setFprice4] = useState("");
  const [shippingPrice, setShippingPrice] = useState("");
  const [piecesPerBox, setPiecesPerBox] = useState("");
  const [pin, setPin] = useState("");
  const [fileUrl, setFileUrl] = useState(null);
  const [currency, setCurrency] = useState("USD");
  const [units, setUnits] = useState("Units");
  const [length, setLength] = useState("cm");
  const [width, setWidth] = useState("cm");
<<<<<<< HEAD
  const [weight, setWeight] = useState("gm");
=======
  const [weight, setWeight] = useState("g");
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
  const [emailVerified, setEmailVerified] = useState(0);
  const [pending, setPending] = useState(true);
  const [continents, setContinents] = useState("");
  const [shipPriceArray, setShipPriceArray] = useState([]);
  const [sPrice1, setSPrice1] = useState()
  const [sPrice2, setSPrice2] = useState()
  const [sPrice3, setSPrice3] = useState()
  const [sPrice4, setSPrice4] = useState()
  const [sPrice5, setSPrice5] = useState()
  const [sPrice6, setSPrice6] = useState()
  const [sPrice7, setSPrice7] = useState()
  const [sPrice11, setSPrice11] = useState()
  const [sPrice22, setSPrice22] = useState()
  const [sPrice33, setSPrice33] = useState()
  const [sPrice44, setSPrice44] = useState()
  const [sPrice55, setSPrice55] = useState()
  const [sPrice66, setSPrice66] = useState()
  const [sPrice77, setSPrice77] = useState()
  const [userEmail, setUserEmail] = useState()
  const [userId, setUserId] = useState()
  const [userName, setUserName] = useState()
<<<<<<< HEAD
  const [frPrice1, setFrPrice1] = useState()
  const [frPrice11, setFrPrice11] = useState()
  const [frPrice2, setFrPrice2] = useState()
  const [frPrice22, setFrPrice22] = useState()
  const [frPrice3, setFrPrice3] = useState()
  const [frPrice33, setFrPrice33] = useState()
  const [frPrice4, setFrPrice4] = useState()
  const [frPrice44, setFrPrice44] = useState()
  const [userType, setUserType] = useState()
  const [userData, setUserData] = useState(true)
  const [friUnits1, setFriUnits1] = useState()
  const [friUnits2, setFriUnits2] = useState()
  const [friUnits3, setFriUnits3] = useState()
  const [friUnits4, setFriUnits4] = useState()
  const [userApproved, setUserApproved] = useState(0)
=======
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    setFileUrl(file)
  };

<<<<<<< HEAD
  // const submission = () => {
  //   // console.log("chal raha hai")
  //   // history.push("/buyer/")
  //   alert("your product has been submitted “Thanks for submitting your product, Admin will now check and verify your post”")
  // };
=======
  const submission = () => {
    return <Redirect to="/buyer/sell" />
  };
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d

  const calculate = (e) => {
    const amount = e.target.value
    const name = e.target.name
    if (amount === isNaN) {
      return
    } else {
      if (currency == "") {
        return
      } else {
        fetch(`https://api.exchangeratesapi.io/latest?base=${currency}`)
          .then(res => res.json())
          .then(data => {
            const result = (data.rates["USD"] * amount).toFixed(2);
            if (name == "price1") {
              setPrice1(result)
            } else if (name == "price2") {
              setPrice2(result)
            } else if (name == "price3") {
              setPrice3(result)
            } else if (name == "price4") {
              setPrice4(result)
            }
            else if (name == "SP1") {
              setSPrice1(result)
            }
            else if (name == "SP2") {
              setSPrice2(result)
            }
            else if (name == "SP3") {
              setSPrice3(result)
            }
            else if (name == "SP4") {
              setSPrice4(result)
            }
            else if (name == "SP5") {
              setSPrice5(result)
            }
            else if (name == "SP6") {
              setSPrice6(result)
            }
            else if (name == "SP7") {
              setSPrice7(result)
<<<<<<< HEAD
            } else if (name == "FR1") {
              setFrPrice11(result)
            }
            else if (name == "FR2") {
              setFrPrice22(result)
            }
            else if (name == "FR3") {
              setFrPrice33(result)
            }
            else if (name == "FR4") {
              setFrPrice44(result)
            } else {
              return
            }
            // console.log(result)
=======
            } else {
              return
            }
            console.log(result)
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
          });
      }
    }
  }

  useEffect(() => {
<<<<<<< HEAD
    setUserData(false)
=======
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
    const loginstatus = localStorage.getItem("_trisquarestorage")
    if (loginstatus) {
      const newValue = JSON.parse(loginstatus)
      setPending(false)
<<<<<<< HEAD
      setUserData(true)
      setUserId(newValue.data[0].id)
      setUserName(newValue.data[0].username)
      setUserEmail(newValue.data[0].email)
      setEmailVerified(newValue.data[0].emailVerified)
      setUserType(newValue.data[0].userType)
      setUserApproved(newValue.data[0].approved)
    }
  })

  const verify = () => {
    // console.log(email, userId, userName)
    axios.post(`https://trisquare.asia/api/email_verification/${userEmail}/${userId}`, { userName: userName, userType: userType })
    history.push('/buyer/')
=======
      setEmailVerified(newValue.data[0].emailVerified)
      if (newValue.data[0].emailVerified === 0) {
        setModalIsOpen(true)
        setUserId(newValue.data[0].id)
        setUserName(newValue.data[0].username)
        setUserEmail(newValue.data[0].email)
      }
    }
  }, [])
  const verify = () => {
    setModalIsOpen(false)
    Axios.post(`https://trisquare.asia/api/email_verification/${userEmail}/${userId}`, { userName: userName })
    history.push('/buyer')
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
    window.location.reload()
  }


  useEffect(() => {
    const shippingCost = () => {
      if (continents == "Asia") {
        console.log(shipPriceArray)
        return setShippingPrice(shipPriceArray.Asia)
      } else if (continents == "Europe") {
        return setShippingPrice(shipPriceArray.Europe)
      } else if (continents == "South America") {
        return setShippingPrice(shipPriceArray.SouthAmerica)
      } else if (continents == "Antarctica") {
        return setShippingPrice(shipPriceArray.Antarctica)
      } else if (continents == "North America") {
        return setShippingPrice(shipPriceArray.NorthAmerica)
      } else if (continents == "Africa") {
        return setShippingPrice(shipPriceArray.Africa)
      } else if (continents == "Australia") {
        return setShippingPrice(shipPriceArray.Australia)
      } else {
        return setShippingPrice(0)
      }
    }
    shippingCost()
  }, [continents])


<<<<<<< HEAD
  if (!userData) return <Redirect to="/buyer/login" />
  if (userData) {
    if (emailVerified == 1) {
      if (userApproved == 1) {
=======
  if (pending) return <div>Loading...</div>
  if (!pending) {
    if (userOut) return <Redirect to="/login" />
    if (userIn) {
      if (emailVerified === 1) {
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
        return (
          <div className="sell">
            <p id="timers">
              <span className="spans" id="timer-days"></span>
              <span className="spans" id="timer-hours"></span>
              <span className="spans" id="timer-mins"></span>
              <span className="spans" id="timer-secs"></span>
            </p>
            <div className="sell__heading">
              <h1 className="sell__headingMajor">SUBMISSION</h1>
              <h4 className="sell__headerMinor">
                LIST YOUR WHOLESALE PRODUCTS BELOW.
<<<<<<< HEAD
          </h4>
=======
        </h4>
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
            </div>
            <div className="sell__container">
              <form
                className="sell__form"
<<<<<<< HEAD
                // onSubmit={submission}
                action="https://trisquare.asia/api/product_data"
                method="post"
                encType="multipart/form-data"
              // target="_blank"
                id = "form1"
=======
                onSubmit={submission}
                action="https://trisquare.asia/api/product_data"
                method="post"
                encType="multipart/form-data"
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
              >
                <h1 className="sell__formHeading">PRODUCT SUBMISSION FORM</h1>
                <input
                  className="sell__businessName input"
                  type="text"
                  placeholder="Business E-Mail"
                  required
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="sell__businessName input"
                  type="number"
                  placeholder="Business Contact Number"
                  required
                  name="mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
                <input
                  className="sell__businessName input"
                  type="text"
                  placeholder="Business Name"
                  required
                  name="businessName"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                />
                <div className="sell__product">
                  <label className="sell__productDescription label">
                    Product Description :-
<<<<<<< HEAD
                  </label>
=======
                </label>
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
                  <div className="sell__productImage">
                    <label className="imageLabel">Upload a Product Image : - </label>
                    <div className="file_button_container">
                      <input type="file" required onChange={onFileChange} name="avatar" />
                    </div>
                  </div>
                  <div className="sell__productInput">
                    <input
                      className="sell__productUrl input"
                      type="url"
                      placeholder="Product Url"
                      required
                      name="productUrl"
                      value={productUrl}
                      onChange={(e) => setProductUrl(e.target.value)}
                    />
                    <input
                      className="sell__inputName input"
                      type="text"
                      placeholder="Enter Your Product Name"
                      required
                      name="product"
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                    />
                    <select
                      className="sell__selectCategories input"
                      name="selectCategories"
                      value={productCategory}
                      required
                      onChange={(e) => setProductCategory(e.target.value)}
                    >
                      <option value="">Select Product Category</option>
                      <option value="Building & Construction">
                        Building & Construction
<<<<<<< HEAD
                        </option>
                      <option value="PPE & Medical Equipment">
                        PPE & Medical Equipment
                        </option>
                      <option value="Nails & Cosmetics">Nails & Cosmetics</option>
                      <option value="Electrical Appliances">
                        Electrical Appliances
                        </option>
                      <option value="Food & Product Packaging">
                        Food & Product Packaging
                        </option>
=======
                      </option>
                      <option value="PPE & Medical Equipment">
                        PPE & Medical Equipment
                      </option>
                      <option value="Nails & Cosmetics">Nails & Cosmetics</option>
                      <option value="Electrical Appliances">
                        Electrical Appliances
                      </option>
                      <option value="Food & Product Packaging">
                        Food & Product Packaging
                      </option>
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
                      <option value="Hair & Hair Products">Hair & Hair Products</option>
                      <option value="Sporting Equipment">Sporting Equipment</option>
                      <option value="Footwear">Footwear</option>
                      <option value="Furniture">Furniture</option>
                      <option value="Automobile Parts">Automobile Parts</option>
                      <option value="Machinery & Parts">Machinery & Parts</option>
                      <option value="Chemicals">Chemicals</option>
                      <option value="Textiles">Textiles</option>
                      <option value="Fashion Jewellery">Fashion Jewellery</option>
                      <option value="Promotional & Gifts">Promotional & Gifts</option>
<<<<<<< HEAD
                      <option value="Services">Services</option>
=======
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
                    </select>
                    <div className="sell__divs">
                      <input
                        className="sell__productLength input"
                        type="number"
                        required
                        name="productLength"
                        placeholder={`Product Length in ${length}`}
                        value={productLength}
<<<<<<< HEAD
                        onChange={(e) => {
                          setProductLength(e.target.value)
                        }}
                      />
                      <select id="length"
                        name="length_unit"
=======
                        onChange={(e) => setProductLength(e.target.value)}
                      />
                      <select id="length"
                        name="lengthunit"
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
                        className="inputs1"
                        required
                        value={length}
                        onChange={e => {
                          setLength(e.target.value)
                        }}>
<<<<<<< HEAD
                        <option value="Cm">cm</option>
                        <option value="M">mtr</option>
=======
                        <option value="Cm">Cm</option>
                        <option value="M">M</option>
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d

                      </select>
                    </div>
                    <div className="sell__divs">
                      <input
                        className="sell__productWidth input"
                        type="number"
                        required
                        name="productWidth"
                        placeholder={`Product Width in ${width}`}
                        value={productWidth}
                        onChange={(e) => setProductWidth(e.target.value)}
                      />
                      <select id="width"
<<<<<<< HEAD
                        name="width_unit"
=======
                        name="widthunit"
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
                        className="inputs1"
                        value={width}
                        onChange={e => {
                          setWidth(e.target.value)
                        }}>
<<<<<<< HEAD
                        <option value="Cm">cm</option>
                        <option value="M">mtr</option>
=======
                        <option value="Cm">Cm</option>
                        <option value="M">M</option>
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
                      </select>
                    </div>
                    <div className="sell__divs">
                      <input
                        className="sell__productWeight input"
                        type="number"
                        required
                        name="productWeight"
                        placeholder={`Product weight in ${weight}`}
                        value={productWeight}
                        onChange={(e) => setProductWeight(e.target.value)}
                      />
                      <select id="weight"
<<<<<<< HEAD
                        name="weight_unit"
=======
                        name="weightunit"
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
                        className="inputs1"
                        value={weight}
                        onChange={e => {
                          setWeight(e.target.value)
                        }}>
                        <option value="G">gm</option>
<<<<<<< HEAD
                        <option value="Kg">kg</option>
                      </select>
                    </div>
                    <textarea
                      className="signup__address aboutTheProduct"
=======
                        <option value="Kg">Kg</option>
                      </select>
                    </div>
                    <textarea
                      className="signup__address"
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
                      placeholder="About The Product"
                      value={productAbout}
                      required
                      name="description"
                      onChange={(e) => setProductAbout(e.target.value)}
                    />
                    <label className="sell__productDescription label" >
                      Set Last date for Ordering.
<<<<<<< HEAD
                      </label>
=======
                    </label>
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
                    <input
                      className="sell__deadline input"
                      name="deadline"
                      required
                      name="orderDeadline"
                      value={orderDeadline}
                      onChange={(e) => setOrderDeadline(e.target.value)} type="date" />
                  </div>
                </div>
                <div className="sell__divs">
                  <label className="sell__wholesaleUnit label">
                    Wholesale Unit Bracket :-
<<<<<<< HEAD
                      </label>
=======
                    </label>
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
                  <select id="units"
                    name="units"
                    className="inputs0"
                    value={units}
                    name="numberunit"
                    required
                    onChange={e => {
                      setUnits(e.target.value)
                    }}>
                    <option value="Units">Units</option>
                    <option value="Pcs">Pcs</option>
                    <option value="Kg">Kg</option>
<<<<<<< HEAD
                    <option value="Ctns">Ctns</option>
=======
                    <option value="Ktns">Ctns</option>
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
                    <option value="Mtr">Mtr</option>
                  </select>
                </div>
                <div className="sell__wholesaleUnitDiv">
                  <input
                    className="input smallerInput"
                    type="number"
                    placeholder={`1 ${units}`}
                    value={units1}
                    name="unit1"
                    required
                    onChange={(e) => setUnits1(e.target.value)}
                  />
                  <input
                    className="input smallerInput"
                    type="number"
                    placeholder={`10 ${units}`}
                    value={units2}
                    name="unit2"
                    required
                    onChange={(e) => setUnits2(e.target.value)}
                  />
                  <input
                    className="input smallerInput"
                    type="number"
                    placeholder={`100 ${units}`}
                    value={units3}
                    name="unit3"
                    required
                    onChange={(e) => setUnits3(e.target.value)}
                  />
                  <input
                    className="input smallerInput"
                    type="number"
                    placeholder={`500+ ${units}`}
                    value={units4}
                    name="unit4"
                    required
                    onChange={(e) => setUnits4(e.target.value)}
                  />
                </div>
                <input
                  className="sell__orderQuantity input"
                  type="number"
                  placeholder={`Personal order quantity in ${units}`}
                  value={productQuantity}
                  required
                  name="quantity"
                  onChange={(e) => setProductQuantity(e.target.value)}
                />
                <div className="sell__wholesale">
                  <label className="sell__wholesalePrice label">
                    Wholesale Price Bracket in {currency}:-
<<<<<<< HEAD
                    </label>
=======
                  </label>
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
                  <select id="currency"
                    name="currency"
                    className="inputs"
                    value={currency}
                    onChange={e => {
                      setCurrency(e.target.value)
                    }}>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="CNY">CNY</option>
                    <option value="GBP">GBP</option>
                  </select>
                </div>
                <div className="sell__wholesalePriceDiv">
                  <input
                    className="input smallerInput"
                    type="number"
                    placeholder={currency}
                    value={fprice1}
                    name="price1"
                    required
                    onChange={e => {
                      calculate(e)
                      setFprice1(e.target.value)
                    }}
                  />
                  <input
                    className="input smallerInput"
                    type="number"
                    placeholder={currency}
                    value={fprice2}
                    name="price2"
                    required
                    onChange={e => {
                      calculate(e)
                      setFprice2(e.target.value)
                    }}
                  />
                  <input
                    className="input smallerInput"
                    type="number"
                    placeholder={currency}
                    value={fprice3}
                    name="price3"
                    required
                    onChange={e => {
                      calculate(e)
                      setFprice3(e.target.value)
                    }}
                  />
                  <input
                    className="input smallerInput"
                    type="number"
                    placeholder={currency}
                    value={fprice4}
                    name="price4"
                    required
                    onChange={e => {
                      calculate(e)
                      setFprice4(e.target.value)
                    }}
                  />
                </div>
                <label className="label">Price Shown In Website in USD($):-</label>
                <div className="sell__wholesalePriceDiv">
                  <input
                    className="input smallerInput"
                    type="number"
                    placeholder="$"
                    value={price1}
                    readOnly
                    name="usdprice1"
                  />
                  <input
                    className="input smallerInput"
                    type="number"
                    placeholder="$"
                    value={price2}
                    readOnly
                    name="usdprice2"
                  />
                  <input
                    className="input smallerInput"
                    type="number"
                    placeholder="$"
                    value={price3}
                    readOnly
                    name="usdprice3"
                  />
                  <input
                    className="input smallerInput"
                    type="number"
                    placeholder="$"
                    value={price4}
                    readOnly
                    name="usdprice4"
                  />
                </div>
                <div className="sell__Address">
                  <Countries className="sell__country" name="country" />
                  <input
                    className="sell__postalCode input"
                    type="text"
                    name="pin"
<<<<<<< HEAD
                    // pattern="[0-9a-zA-Z]"
                    maxLength="10"
=======
                    pattern="[0-9a-zA-Z]{6}"
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
                    placeholder="Postal Code"
                    value={pin}
                    required
                    onChange={(e) => setPin(e.target.value)}
                  />
                </div>

<<<<<<< HEAD
                <label className="label">Frieght Charges Setup:-</label>
                <div className="sell__shippingPrice">
                  <div className="sell__continents__price">
                    <input type="number" className="priceLabel" name="friUnits1" placeholder={`For 1 ${units}`} required value={friUnits1} onChange={(e) => setFriUnits1(e.target.value)} />
                    <input type="number" className="inputs pricetag" required value={frPrice1} name="FR1" onChange={e => {
                      setFrPrice1(e.target.value)
                      calculate(e)
                    }}
                      placeholder={`Frieght Charge in ${currency}`} />
                    <input type="number" className="inputs disabledPriceTag" placeholder="$" value={frPrice11} name="Frieght1" readOnly />
                  </div>

                  <div className="sell__continents__price">
                    <input type="number" className="priceLabel" name="friUnits2" placeholder={`For 10 ${units}`} required value={friUnits2} onChange={(e) => setFriUnits2(e.target.value)} />
                    <input type="number" className="inputs pricetag" required value={frPrice2} name="FR2" onChange={e => {
                      setFrPrice2(e.target.value)
                      calculate(e)
                    }}
                      placeholder={`Frieght Charge in ${currency}`} />
                    <input type="number" className="inputs disabledPriceTag" value={frPrice22} placeholder="$" name="Frieght2" readOnly />
                  </div>
                  <div className="sell__continents__price">
                    <input type="number" className="priceLabel" name="friUnits3" placeholder={`For 100 ${units}`} required value={friUnits3} onChange={(e) => setFriUnits3(e.target.value)} />
                    <input type="number" className="inputs pricetag" required value={frPrice3} name="FR3" onChange={e => {
                      setFrPrice3(e.target.value)
                      calculate(e)
                    }}
                      placeholder={`Frieght Charge in ${currency}`} />
                    <input type="number" className="inputs disabledPriceTag" value={frPrice33} placeholder="$" name="Frieght3" readOnly />
                  </div>
                  <div className="sell__continents__price">
                    <input type="number" className="priceLabel" name="friUnits4" placeholder={`For 1000 ${units}`} required value={friUnits4} onChange={(e) => setFriUnits4(e.target.value)} />
                    <input type="number" className="inputs pricetag" required value={frPrice4} name="FR4" onChange={e => {
                      setFrPrice44(e.target.value)
                      calculate(e)
                    }}
                      placeholder={`Frieght Charge in ${currency}`} />
                    <input type="number" className="inputs disabledPriceTag" value={frPrice44} placeholder="$" name="Frieght4" readOnly />
                  </div>
                </div>




                <label className="label">Continent wise shipping prices:-</label>
                <div className="sell__shippingPrice">
                  <div className="sell__continents__price">
                    <label className="priceLabel">Asia</label>
=======
                <label className="label">Continent wise shipping prices:-</label>
                <div className="sell__shippingPrice">
                  <div className="sell__continents__price">
                    <label className="priceLabel"><h4>Asia</h4></label>
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
                    <input type="number" className="inputs pricetag" required value={sPrice11} name="SP1" onChange={e => {
                      setSPrice11(e.target.value)
                      calculate(e)
                    }}
                      placeholder={`Shipping Price in ${currency}`} />
                    <input type="number" className="inputs disabledPriceTag" placeholder="$" value={sPrice1} name="AsiaSP1" readOnly />
                  </div>
                  <div className="sell__continents__price">
<<<<<<< HEAD
                    <label className="priceLabel">Africa</label>
=======
                    <label className="priceLabel"><h4>Africa</h4></label>
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
                    <input type="number" className="inputs pricetag" required value={sPrice22} name="SP2" onChange={e => {
                      setSPrice22(e.target.value)
                      calculate(e)
                    }}
                      placeholder={`Shipping Price in ${currency}`} />
                    <input type="number" className="inputs disabledPriceTag" value={sPrice2} placeholder="$" name="AfricaSP2" readOnly />
                  </div>
                  <div className="sell__continents__price">
<<<<<<< HEAD
                    <label className="priceLabel">Europe + UK</label>
=======
                    <label className="priceLabel"><h4>Europe</h4></label>
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
                    <input type="number" className="inputs pricetag" required value={sPrice33} name="SP3" onChange={e => {
                      setSPrice33(e.target.value)
                      calculate(e)
                    }}
                      placeholder={`Shipping Price in ${currency}`} />
                    <input type="number" className="inputs disabledPriceTag" value={sPrice3} placeholder="$" name="EuropeSP3" readOnly />
                  </div>
                  <div className="sell__continents__price">
<<<<<<< HEAD
                    <label className="priceLabel">South America</label>
=======
                    <label className="priceLabel"><h4>South America</h4></label>
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
                    <input type="number" className="inputs pricetag" required value={sPrice44} name="SP4" onChange={e => {
                      setSPrice44(e.target.value)
                      calculate(e)
                    }}
                      placeholder={`Shipping Price in ${currency}`} />
                    <input name="currencyA" type="number" className="inputs disabledPriceTag" value={sPrice4} placeholder="$" name="SouthAmericaSP4" readOnly />
                  </div>
                  <div className="sell__continents__price">
<<<<<<< HEAD
                    <label className="priceLabel">North America</label>
=======
                    <label className="priceLabel"><h4>North America</h4></label>
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
                    <input type="number" className="inputs pricetag" required value={sPrice55} name="SP5" onChange={e => {
                      setSPrice55(e.target.value)
                      calculate(e)
                    }}
                      placeholder={`Shipping Price in ${currency}`} />
                    <input name="currencyNAm" type="number" className="inputs disabledPriceTag" value={sPrice5} placeholder="$" name="NorthAmericaSP5" readOnly />
                  </div>
                  <div className="sell__continents__price">
<<<<<<< HEAD
                    <label className="priceLabel">Antarctica</label>
=======
                    <label className="priceLabel"><h4>Antarctica</h4></label>
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
                    <input type="number" className="inputs pricetag" required value={sPrice66} name="SP6" onChange={e => {
                      setSPrice66(e.target.value)
                      calculate(e)
                    }}
                      placeholder={`Shipping Price in ${currency}`} />
                    <input name="currencyAnt" type="number" className="inputs disabledPriceTag" value={sPrice6} placeholder="$" name="AntarcticaSP6" readOnly />
                  </div>
                  <div className="sell__continents__price">
<<<<<<< HEAD
                    <label className="priceLabel">Australia</label>
=======
                    <label className="priceLabel"><h4>Australia</h4></label>
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
                    <input type="number" className="inputs pricetag" required value={sPrice77} name="SP7" onChange={e => {
                      setSPrice77(e.target.value)
                      calculate(e)
                    }}
                      placeholder={`Shipping Price in ${currency}`} />
                    <input name="currencyAus" type="number" className="inputs disabledPriceTag" value={sPrice7} placeholder="$" name="AustraliaSP7" readOnly />
                  </div>
                </div>
                <button
                  className="sell__submitButton"
                  type="submit"
<<<<<<< HEAD
                  onClick={() => {
                    const valid = document.getElementById("form1").checkValidity()
                    if (valid) {
                      alert("Your product is submitted. Thanks for Submitting your product, admin will check and verify your post.")
                    } else {
                      alert("fill the form correctly.")
                  }
                }}
                >
                  SUBMIT
            </button>
=======
                >
                  SUBMIT
          </button>
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
              </form>
            </div>
          </div>
        )
<<<<<<< HEAD
      } else {
        return <Redirect to="/buyer/sellPage" />
      }
    }
    else {
      return (
        <div>
          <Modal
            className="orderModal cartPage__modal verify__modal"
            isOpen={true}
            shouldCloseOnOverlayClick={false}
            shouldCloseOnEsc={true}
            onRequestClose={false}
          >
            <h2 className="orderModal__heading cartPage__modalHeader orderModal__heading1"  >Your E-Mail is not verified</h2>
            <p className="orderModal__heading orderModal__heading1 " >Please press the button below to start the verification process, a message will be sent to your email account, please verify to use this website. </p>
            <div className="cartPage__modalButtons">
              <div>
                <button className="cartPage__modalButton modalButton1 modalButton1s" onClick={verify} >Verify E-Mail</button>

              </div>
              <div>
                <Link to="/buyer/" className="cartPage__modalButton modalButton2 modalButton1s" onClick={() => window.location.reload()}>Close</Link>

              </div>
            </div>
          </Modal>
        </div>
      )
=======
      }
      else {
        return (
          <div>
            <Modal
              className="orderModal cartPage__modal verify__modal"
              isOpen={true}
              shouldCloseOnOverlayClick={false}
              shouldCloseOnEsc={true}
              onRequestClose={false}
            >
              <h2 className="orderModal__heading cartPage__modalHeader orderModal__heading1"  >Your E-Mail is not verified</h2>
              <p className="orderModal__heading orderModal__heading1 " >Please press the button below to start the verification process, a message will be sent to your email account, please verify to use this website. </p>
              <div className="cartPage__modalButtons">
                <div>
                  <button className="cartPage__modalButton modalButton1 modalButton1s" onClick={verify} >Verify E-Mail</button>

                </div>
                <div>
                  <Link to="/buyer/" className="cartPage__modalButton modalButton2 modalButton1s" onClick={() => window.location.reload()}>Close</Link>

                </div>
              </div>
            </Modal>
          </div>
        )
      }
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
    }
  }
}

const mapStateToProps = (state) => {
  return {
    countryName: state.country,
    userIn: state.userIn,
    userOut: state.userOut,
  };
};
export default connect(mapStateToProps)(Sell);