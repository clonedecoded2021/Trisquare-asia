import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "../css/ProductDescription.css";
import { Link, useHistory } from "react-router-dom";
import HourglassFullIcon from "@material-ui/icons/HourglassFull";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Modal from "react-modal";
import Countries from "./Countries"
import Paypal from "./Paypal";
import { connect } from 'react-redux'
import axios from 'axios'

function ProductDescription({ product, pId, solds, quantities, countryName }) {
  const history = useHistory()
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalWillOpen, setModalWillOpen] = useState(false);
  const [checkout, setCheckout] = useState(false)
  const [quantity, setQuantity] = useState(0)
  const [totalCost, setTotalCost] = useState(0)
  const [price, setPrice] = useState(product.price1);
  const [cPrice, setCPrice] = useState(price);
  const [address, setAddress] = useState("");
  const [widths, setWidths] = useState(0);
  const [country, setCountry] = useState("USA")
  const [continents, setContinents] = useState("")
  const [newCurr, setNewCurr] = useState("")
  const [targetPriceModal, setTargetPriceModal] = useState(false)
  const [targetPrice, setTargetPrice] = useState(0)
  const [targetTotalCost, setTargetTotalCost] = useState(0)
  const [pin, setPin] = useState("")
  const [contact, setContact] = useState("")
  const [shippingPrice, setShippingPrice] = useState();
  const [grandTotal, setGrandTotal] = useState();
  const [userEmail, setUserEmail] = useState("");
  const [userFName, setUserFName] = useState("");
  const [userMob, setUserMob] = useState("");
  const [currency, setCurrency] = useState()
  const [fCharge, setFCharge] = useState()
  const [userType, setUserType] = useState("")

  const surCharge = 12


  useEffect(() => {
    const setprice = () => {
      const sold = solds - (-quantity);
      if (sold >= 0 && sold < product.units2) {
        setCPrice(product.price1)
      }
      else if (sold >= product.units2 && sold < product.units3) {
        setCPrice(product.price2)
      }
      else if (sold >= product.units3 && sold < product.units4) {
        setCPrice(product.price3)
      } else {
        setCPrice(product.price4)
      }
    }
    setprice()
    const subTotal = () => {
      const total = quantity * cPrice;
      setTotalCost(total)
    }
    subTotal()

  }, [quantity, cPrice])


  useEffect(() => {
    const targetTotal = () => {
      const total = quantity * targetPrice;
      setTargetTotalCost(total)
    }
    // console.log(product.frieght1 + 11)
    targetTotal()
    // console.log(fCharge)
  }, [quantity, targetPrice])

  // console.log(product)
  var endDate = new Date(product.orderDeadline).getTime();
  var timer = setInterval(function () {
    let now = new Date().getTime();
    let t = endDate - now;
    // console.log(endDate - now);
    if (t >= 0) {
      let days = Math.floor(t / (1000 * 60 * 60 * 24));
      let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      let secs = Math.floor((t % (1000 * 60)) / 1000);

      document.getElementById("timer-days").innerHTML = days +
        "<span class='labeling'>DAYs</span>";
      document.getElementById("timer-hours").innerHTML = ("0" + hours).slice(-2) +
        "<span class='labeling'>HRs</span>";
      document.getElementById("timer-mins").innerHTML = ("0" + mins).slice(-2) +
        "<span class='labeling'>MINs</span>";
      document.getElementById("timer-secs").innerHTML = ("0" + secs).slice(-2) +
        "<span class='labeling'>SECs</span>";
    } else {
      document.getElementById("timer").innerHTML = "The countdown is over!";
    }
  }, 1000);

  const unit1 = product.units1 - 0;
  const unit2 = product.units2 - product.units1;
  const unit3 = product.units3 - product.units2;
  const unit4 = product.units4 - product.units3;
  var sold1 = solds - 0;
  var sold2 = solds - product.units1;
  var sold3 = solds - product.units2;
  var sold4 = solds - product.units3;
  var wide1 = sold1 / unit1;
  var wide2 = sold2 / unit2;
  var wide3 = sold3 / unit3;
  var wide4 = sold4 / unit4;
  var wides1 = wide1 * 7;
  var wides2 = wide2 * 29;
  var wides3 = wide3 * 29;
  var wides4 = wide4 * 29;
  useEffect(() => {
    const setwidth = () => {
      if (solds >= 0 && solds <= product.units1) {
        setWidths(wides1)
      }
      else if (solds > product.units1 && solds <= product.units2) {
        setWidths(7 + wides2)
      }
      else if (solds > product.units2 && solds <= product.units3) {
        setWidths(36 + wides3)
      }
      else if (solds > product.units3 && solds <= product.units4) {
        setWidths(65 + wides4)
      }
      else {
        setWidths(100)
      }
    }
    setwidth()
  }, [])

  const calculate = (e) => {
    const curr = e.target.value
    if (grandTotal === isNaN) {
      return
    } else {
      if (currency == "") {
        return
      } else {
        fetch(`https://api.exchangeratesapi.io/latest?base=USD`)
          .then(res => res.json())
          .then(data => {
            const result = (data.rates[curr] * grandTotal).toFixed(2);
            setNewCurr(result)
          });
      }
    }
  }
  const preOrders = () => {
    const DATA = {
      ProductName: product.productName,
      ProductImage: product.product_image_name,
      ProductQuantity: quantity,
      TargetPrice: targetPrice,
      UserEmail: userEmail,
      FirstName: userFName,
      Mobile: userMob,
      ProductId: product.id,
    }

    console.log(DATA)
    axios.post("https://trisquare.asia/api/preorders_data", DATA)
      .then(() => alert(`Thank you for using our buy at your target price service, we do appreciate your business and the opportunity to work with you. Please note the use of this service requires a $${product.deposit} fully refundable deposit. Once your deposit has been received, we will allocate extra resource to push this campaign forward for a speedy delivery.`))
      .catch(err => alert("Something is wrong."))
  }

  useEffect(() => {

    const shippingCost = () => {
      if (continents == "Asia") {
        totalCost < 25 ? setGrandTotal(totalCost + product.AsiaShippingPrice + surCharge + fCharge) : setGrandTotal(totalCost + product.AsiaShippingPrice + fCharge)
        return setShippingPrice(product.AsiaShippingPrice)
      }
      else if (continents == "Europe") {
        totalCost < 25 ? setGrandTotal(totalCost + product.EuropeShippingPrice + surCharge + fCharge) : setGrandTotal(totalCost + product.EuropeShippingPrice + fCharge)
        return setShippingPrice(product.EuropeShippingPrice)
      }
      else if (continents == "South America") {
        totalCost < 25 ? setGrandTotal(totalCost + product.SouthAmericaShippingPrice + surCharge + fCharge) : setGrandTotal(totalCost + product.SouthAmericaShippingPrice + fCharge)
        return setShippingPrice(product.SouthAmericaShippingPrice)
      }
      else if (continents == "Antarctica") {
        totalCost < 25 ? setGrandTotal(totalCost + product.AntarcticaShippingPrice + surCharge + fCharge) : setGrandTotal(totalCost + product.AntarcticaShippingPrice + fCharge)
        return setShippingPrice(product.AntarcticaShippingPrice)
      }
      else if (continents == "North America") {
        totalCost < 25 ? setGrandTotal(totalCost + product.NorthAmericaShippingPrice + surCharge + fCharge) : setGrandTotal(totalCost + product.NorthAmericaShippingPrice + fCharge)
        return setShippingPrice(product.NorthAmericaShippingPrice)
      }
      else if (continents == "Africa") {
        totalCost < 25 ? setGrandTotal(totalCost + product.AfricaShippingPrice + surCharge + fCharge) : setGrandTotal(totalCost + product.AfricaShippingPrice + fCharge)
        return setShippingPrice(product.AfricaShippingPrice)
      }
      else if (continents == "Australia") {
        totalCost < 25 ? setGrandTotal(totalCost + product.AustraliaShippingPrice + surCharge + fCharge) : setGrandTotal(totalCost + product.AustraliaShippingPrice + fCharge)
        return setShippingPrice(product.AustraliaShippingPrice)
      }
      else {
        setGrandTotal(0)
        return setShippingPrice(0)
      }
    }
    const Frieght = () => {
      if (quantity >= product.friUnits1 && quantity < product.friUnits2) {
        setFCharge(product.frieght1)
      } else if (quantity >= product.friUnits2 && quantity < product.friUnits3) {
        setFCharge(product.frieght2)
      } else if (quantity >= product.friUnits3 && quantity < product.friUnits4) {
        setFCharge(product.frieght3)
      } else if (quantity >= product.friUnits4) {
        setFCharge(product.frieght4)
      }
      else {
        setFCharge(0)
      }
    }
    Frieght()
    shippingCost()
    // setGrandTotal(totalCost + product.AustraliaShippingPrice + fCharge)
  }, [continents, fCharge, quantity])

  useEffect(async () => {
    const loginstatus = localStorage.getItem("_trisquarestorage")
    if (loginstatus) {
      const newValue = JSON.parse(loginstatus)
      setUserEmail(newValue.data[0].email)
      setUserMob(newValue.data[0].mobile)
      setUserFName(newValue.data[0].first_name)
      setUserType(newValue.data[0].user_type)
    } else {
      alert("Please, Login First")
      history.push('/buyer/login')
    }
  }, [])

  const savedPrice = product.price1 - cPrice;
  const savings = quantity * savedPrice;

  const savePrice = cPrice - targetPrice;
  const saving = quantity * savePrice


  return (
    <div className="productDescription">
      <h1 className="productDescription__heading">{product.productName}</h1>
      <h2 className="productDescription__price">
        <span className="productDescription__mainPrice">${cPrice}</span>
        <span className="productDescription__cutPrice">${product.price1}</span>
      </h2>
      <div className="productDescription__description">
        <p >
          {product.description}
        </p>
        <p className="productDescription__descriptions">
          <div className="productDescriptions__spanDiv"><span className="productDescriptions__span">Length - </span>{`${" "} ${product.productLength}${product.lengthVariable}`}</div>
          <div className="productDescriptions__spanDiv"><span className="productDescriptions__span">Width - </span>{` ${product.productWidth}${product.widthVariable}`}</div>
          <div className="productDescriptions__spanDiv"><span className="productDescriptions__span">Weight - </span>{` ${product.productWeight}${product.weightVariable}`}</div>
        </p>
      </div>

      <div className="productDescription__buttons">
        <a className="description" href={`${product.productUrl}`} ><Button className="productDescription__button retailerWebsite">
          Visit Product Website
        </Button></a>
        <div className="modal">
          <Button
            className="productDescription__button buyNow"
            onClick={() => setModalIsOpen(true)}
          >
            Buy Now At Current Price
          </Button>
          <Button
            className="productDescription__button buyNow"
            onClick={() => setTargetPriceModal(true)}
            disabled = {cPrice <= product.price4 ? true : false}
          >
            Buy At Your Target Price
          </Button>
          <Modal
            className="orderModal order_Modal"
            isOpen={modalIsOpen}
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
            onRequestClose={() => setModalIsOpen(false)}
            ariaHideApp={false}
          >
            <div className="orderModal__header">
              <h1 className="orderModal__heading">Order Summary</h1>
              <button
                className="orderModal__closeButton"
                onClick={() => setModalIsOpen(false)}
              >
                X
                </button>
            </div>
            <h3 className="orderModal__title">{product.productName}</h3>
            <div className="orderModal__details">
              <div className="orderModal__row">
                <label className="orderModal__label">My Order Quantity</label>
                <input className="orderModal__input" type="number" placeholder="0" value={quantity} onChange={(e) => {
                  setQuantity(e.target.value)
                  // subTotal(e)
                }} />
              </div>
              <div className="orderModal__row">
                <label className="orderModal__label">
                  Current Cost Per Unit
                  </label>
                <input className="orderModal__input active" placeholder={`$ ${price}`} value={(e) => e.target.placeholder} readOnly />
              </div>
              <div className="orderModal__row">
                <label className="orderModal__label">
                  Cost Per Unit When My Order is Placed
                  </label>
                <input className="orderModal__input active" placeholder={`$ ${cPrice}`} value={(e) => e.target.placeholder} readOnly />
              </div>
              <div className="orderModal__row">
                <label className="orderModal__label">
                  Your Saving
                  </label>
                <input className="orderModal__input active" placeholder={`${savings == "NaN" ? 0 : savings.toFixed(2)}`} disabled={true} readOnly />
              </div>

              <div className="orderModal__row">
                <label className="orderModal__label">Total</label>
                <input className="orderModal__input active" value={`$ ${totalCost == 0 ? 0 : totalCost.toFixed(2)}`} readOnly />
              </div>
            </div>
            <Button className="orderModal__checkout" onClick={() => {
              if (quantity === 0) {
                alert("Please fill Order Quantity")
              } else {
                setModalWillOpen(true)
                setModalIsOpen(false)
              }
            }} >
              CHECKOUT
                  </Button>

          </Modal>
          <Modal
            className="orderModal shippingModal"
            isOpen={modalWillOpen}
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
            onRequestClose={() => setModalWillOpen(false)}
            ariaHideApp={false}
          >
            <div className="orderModal__header shippingModal__header">
              <h1 className="orderModal__heading shippingModal__heading">Shipping Address</h1>
              <button
                className="orderModal__closeButton"
                onClick={() => setModalWillOpen(false)}
              >
                X
                </button>
            </div>
            <h3 className="orderModal__title">{product.productName}</h3>

            <form onSubmit={() => setCheckout(true)} id = "form2">
              <div className="continentDiv ">
                <label className="orderModal__label labelDivs1">
                  Continents
              </label>
                <select id="continent"
                  name="continent"
                  className="inputs labelDivs2"
                  value={continents}
                  required
                  onChange={e => {
                    setContinents(e.target.value)
                  }}>
                  <option value="">Continent</option>
                  <option value="Asia">Asia</option>
                  <option value="Europe">Europe + UK</option>
                  <option value="Africa">Africa</option>
                  <option value="South America">South America</option>
                  <option value="North America">North America</option>
                  <option value="Australia">Australia</option>
                  <option value="Antarctica">Antarctica</option>
                </select>
              </div>

              <div className="countryDiv ">
                <label className="orderModal__label labelDivs1">
                  Country
              </label>
                <Countries name="country" className="labelDivs2" />
              </div>
              <div className="divRow">
                <div className="divColumn1">
                  <label className="orderModal__label mainLabels">
                    Postal Code
                </label>
                  <input className="orderModal__input" required value={pin} onChange={e => setPin(e.target.value)} pattern="[0-9a-zA-Z]{6}" />
                </div>
                <div className="divColumn2">
                  <label className="orderModal__label mainLabels">
                    Contact no.
                </label>
                  <input className="orderModal__input orderModal__inputs" placeholder="Contact No. with Country Code" required value={contact} onChange={e => setContact(e.target.value)} />
                </div>
              </div>

              <label className="orderModal__label mainLabels">
                Shipping Address
            </label>
              <textarea className="orderModal__textarea" rows="4" cols="40" placeholder="Type Your Full Address Here..." required value={address} onChange={e => setAddress(e.target.value)} />

              <div className="divRow">
                <div className="divColumn1">
                  <label className="orderModal__label mainLabels">
                    Shipping Charge
                </label>
                  <input className="orderModal__input" disabled={true} placeholder="Shipping Charge" value={shippingPrice} readOnly required />
                </div>
                <div className="divColumn2">
                  <label className="orderModal__label mainLabels">
                    Surcharge (order below $25)
                </label>
                  <input className="orderModal__input" disabled={true} placeholder="" value={totalCost >= 25 ? 0 : 12} readOnly />
                </div>
              </div>
              <div className="divRow">
                <div className="divColumn2">
                  <label className="orderModal__label mainLabels">
                    Charge for multiple products
                </label>
                  <input className="orderModal__input" disabled={true} placeholder="" value={fCharge} readOnly />
                </div>
              </div>

              <label className="orderModal__label">
                Grand Total
            </label>
              <input className="orderModal__input" disabled={true} placeholder="0" value={grandTotal} readOnly required />
              <div className="currencyConverter">
                <select id="currency"
                  name="currency"
                  className="inputs"
                  value={currency}
                  onChange={e => {
                    setCurrency(e.target.value)
                    calculate(e)
                  }}>
                  <option value="">Select payment Currency</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="CNY">CNY</option>
                  <option value="GBP">GBP</option>
                </select>
                <input type="number" className="orderModal__input" value={`${newCurr}`} disabled={true} readOnly />
              </div>
              {
                checkout ?
                  (<Paypal className="paypalButton" money={grandTotal.toFixed(2)} pId={product.id} product={product} address={address} PIN={pin} contact={contact} productName={product.productName} continent={continents} country={countryName} ShippingPrice={shippingPrice} Quantity={quantity} preOrder={false} email={userEmail} avatar={product.product_image_name} />) : (
                    <Button className="orderModal__checkout" onClick={
                      () => {
                        const valid = document.getElementById("form2").checkValidity()
                        if (valid) {
                          setCheckout(true)
                        } else {
                          alert("Please, fill the form correctly.")
                          setCheckout(false)
                        }
                      }
                    } >
                      ORDER NOW
                    </Button>)
              }
            </form>
          </Modal>
          <Modal
            className="orderModal targetModal"
            isOpen={targetPriceModal}
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
            onRequestClose={() => {
              setTargetPriceModal(false)
              window.location.reload()
            }}
            ariaHideApp={false}
          >
            <div className="orderModal__header target__header">
              <h1 className="orderModal__heading target__heading">Set Your Target Price</h1>
              <button
                className="orderModal__closeButton"
                onClick={() => {
                  setTargetPriceModal(false)
                  window.location.reload()
                }}
              >
                X
                </button>
            </div>
            <h3 className="orderModal__title">{product.productName}</h3>
            <div className="orderModal__details">
              <div className="orderModal__row">
                <label className="orderModal__label">My Order Quantity</label>
                <input className="orderModal__input" placeholder="0" value={quantity} onChange={(e) => {
                  setQuantity(e.target.value)
                }} />
              </div>
              <div className="orderModal__row targetPriceModal">
                <label className="orderModal__label ">
                  Target Price
                </label>
                <form className="targetPriceModal__form" onChange={(e) => {
                  setTargetPrice(e.target.value)
                }}>
                  <div className="targetPrice__radioModal">
                    {cPrice > product.price1 ? (
                      <div className="targetPrice__RadioModal">
                      <input className="orderModal__input active targetPriceModal__input" type="radio" name="target" value={product.price1} />
                      <label className="orderModal__label targetPriceModal__label">
                        {product.price1}
                      </label>
                    </div>
                    ) : ""}
                    {cPrice > product.price2 ? (
                      <div className="targetPrice__RadioModal">
                      <input className="orderModal__input active targetPriceModal__input" type="radio" name="target" value={product.price2} />
                      <label className="orderModal__label targetPriceModal__label">
                        {product.price2}
                      </label>
                    </div>
                    ) : ""}
                    {cPrice > product.price3 ? (
                      <div className="targetPrice__RadioModal">
                      <input className="orderModal__input active targetPriceModal__input" type="radio" name="target" value={product.price3} />
                      <label className="orderModal__label targetPriceModal__label">
                        {product.price3}
                      </label>
                    </div>
                    ) : ""}
                    
                    {cPrice > product.price4 ? (
                      <div className="targetPrice__RadioModal">
                      <input className="orderModal__input active targetPriceModal__input" type="radio" name="target" value={product.price4} />
                      <label className="orderModal__label targetPriceModal__label">
                        {product.price4}
                      </label>
                    </div>
                    ) : ""}
                    
                  </div>
                </form>
              </div>
              <div className="orderModal__row">
                <label className="orderModal__label">
                  Current Price
                  </label>
                <input className="orderModal__input active" placeholder={`$ ${cPrice}`} value={(e) => e.target.placeholder} readOnly />
              </div>
              <div className="orderModal__row">
                <label className="orderModal__label">
                  Your Saving
                  </label>
                <input className="orderModal__input active" placeholder={saving.toFixed(2)} disabled={true} readOnly />
              </div>

              <div className="orderModal__row">
                <label className="orderModal__label">Total</label>
                <input className="orderModal__input active" value={`$ ${targetTotalCost == 0 ? 0 : targetTotalCost.toFixed(2)}`} disabled={true} readOnly />
              </div>
            </div>
            {
              checkout ?
                (<Paypal className="paypalButton" money={product.deposit} pId={product.id} product={product} Quantity={quantity} preOrder={true} productName={product.productName} avatar={product.product_image_name} targetPrice={targetPrice} email={userEmail} userFName={userFName} userMob={userMob} />) : (
                  <Button className="orderModal__checkout" onClick={() => {
                    if (targetPrice == 0 || quantity == 0) {
                      alert("Please fill the form correctly.")
                    } else {
                      if (product.deposit == 0) {
                        preOrders()
                        setCheckout(false)
                      } else {
                        setCheckout(true)
                        alert(`Thank you for using our buy at your target price service, we do appreciate your business and the opportunity to work with you. Please note the use of this service requires a $${product.deposit} fully refundable deposit. Once your deposit has been received, we will allocate extra resource to push this campaign forward for a speedy delivery.`)
                      }
                    }
                  }}>
                    Notify Me
                  </Button>
                )}
          </Modal>
        </div>
      </div>
      <div className="container">
        <div className="skill">
          <div className="container1__price">
            <h5>${product.price1}</h5>
            <h5>${product.price2}</h5>
            <h5>${product.price3}</h5>
            <h5>${product.price4}</h5>
          </div>
          <div className="percent">
            <div className="progress" style={{ width: `${widths}%` }}></div>
          </div>
          <div className="container1__units">
            <div className="container1__units__unit">
              <h5>{product.units1}units</h5>
            </div>
            <div className="container1__units__unit">
              <h5>{product.units2}units</h5>
            </div>
            <div className="container1__units__unit">
              <h5>{product.units3}units</h5>
            </div>
            <div className="container1__units__unit">
              <h5>{product.units4}units</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="productDescription__options">
        <div className="productDescription__deration option">
          <HourglassFullIcon className="productDescription__derationIcon icon" />
          <div className="optionDiv">
            <span className="productDescription__span">Time Remaining</span>
            <p id="timer">
              <span className="spans" id="timer-days"></span>
              <span className="spans" id="timer-hours"></span>
              <span className="spans" id="timer-mins"></span>
              <span className="spans" id="timer-secs"></span>
            </p>
          </div>
        </div>
        <div className="productDescription__deration option">
          <ShoppingCartIcon className="productDescription__purchasedIcon icon" />
          <div className="optionDiv">
            <span className="productDescription__span">
              Total {product.units} Purchased
            </span>
            <h4 className="productDescription__purchasedUnits">{`${solds}`}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    countryName: state.country,
  }
}
export default connect(mapStateToProps)(ProductDescription);
