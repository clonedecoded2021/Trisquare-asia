import React, { useState } from "react";
import "../css/Request.css";
import { Link, useHistory } from "react-router-dom";
import Modal from "react-modal";
import Axios from 'axios';
import axios from 'axios';

function Request() {
  const history = useHistory()
  const [userRequest, setUserRequest] = useState("");
  const [emailVerified, setEmailVerified] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [email, setEmail] = useState("")
  const [userName, setUserName] = useState("")
  const [userId, setUserId] = useState("")
  const [userType, setUserType] = useState("")
  const sendEmail = () => {
    const loginstatus = localStorage.getItem("_trisquarestorage")
    if (loginstatus) {
      setEmailVerified(true)
      const newValue = JSON.parse(loginstatus)
      if (newValue.data[0].emailVerified === 1) {
        if (userRequest) {
          Axios.post("https://trisquare.asia/api/product_request", {
            email: newValue.data[0].email,
            request: userRequest,
            username: newValue.data[0].username,
          }).then(() => alert("Email Sent"))
            .then(() => setUserRequest(""))
        } else {
          alert("Please Fill The Input.")
        }
      } else {
        alert("Your Email Is Not Verified")
        setEmailVerified(false)
        setUserId(newValue.data[0].id)
        setUserName(newValue.data[0].username)
        setEmail(newValue.data[0].email)
        setUserType(newValue.data[0].userType)
      }
    } else {
      alert("please Login first!!!")
    }
  }
  const verify = () => {
    setModalIsOpen(false)
    axios.post(`https://trisquare.asia/api/email_verification/${email}/${userId}`, { userName: userName, userType: userType })
    history.push('/buyer/')
    window.location.reload()
  }

  if (emailVerified) {
    return (
      <section className="request">
        <h1 className="request__heading">REQUEST A PRODUCT</h1>
        <h3 className="requesting__para para1">
          Copy and paste a URL of the product that you want to see listed on
          Trisquare.
      </h3>
        <input className="request__input" placeholder="Enter The Full https URL of your product" value={userRequest} onChange={(e) => setUserRequest(e.target.value)} />
        <h3 className="requesting__para para2">
          Accepted products will become available for you to group buy with other
          resellers.
      </h3>
        <div>
          <button onClick={sendEmail} className="request__button">REQUEST THIS PRODUCT</button>
        </div>
      </section>
    );
  } else {
    return (
      <div>
        <Modal
          className="orderModal cartPage__modal verify__modal"
          isOpen={modalIsOpen}
          shouldCloseOnOverlayClick={false}
          shouldCloseOnEsc={true}
          onRequestClose={() => setModalIsOpen(false)}
          ariaHideApp={false}
        >
          <h2 className="orderModal__heading cartPage__modalHeader orderModal__heading1"  >Your E-Mail is not verified</h2>
          <p className="orderModal__heading orderModal__heading1" >Please press the button below to start the verification process, a message will be sent to your email account, please verify to use this website. </p>
          <div className="cartPage__modalButtons">
            <div>
              <button className="cartPage__modalButton modalButton1 modalButton1s" onClick={verify} >Verify E-Mail</button>

            </div>
            <div>
              <Link to="/buyer/" className="cartPage__modalButton modalButton2 modalButton1s" onClick={() => {
                setModalIsOpen(false)
                window.location.reload()
              }}>Close</Link>

            </div>
          </div>
        </Modal>
      </div>
    )
  }
}
export default Request;
