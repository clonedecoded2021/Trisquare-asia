import React, { useState } from 'react'
import '../css/ForgotPage.css'
import { MdEmail } from "react-icons/md"
import { Link } from 'react-router-dom'
import axios from 'axios'

const ForgotPage = () => {
    const [email, setEmail] = useState("")
    const reset = () => {
        axios.post("https://trisquare.asia/api/forgotPassword", { email: email }).then(() => {
<<<<<<< HEAD
            alert("Reset link has been sent to your email.")
=======
            console.log("Reset link has been sent to your email.")
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
        })
    }
    return (
        <div className="forgotPage">
            <div className="forgotPage__modal">
                <h4>Forgot Password?</h4>
                <hr />
                <div className="forgotPage__emailBox">
                    <input type="email" className="forgotPage__email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email...." />
                    <MdEmail className="forgotPage__icon" />
                </div>
                <Link to="/buyer/login" className="forgotPage__resetPassword" onClick={reset}>Reset Password</Link>
            </div>
        </div>
    )
}
export default ForgotPage
