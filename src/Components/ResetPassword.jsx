<<<<<<< HEAD
import React, { useState } from 'react';
import '../css/ResetPassword.css';
import axios from "axios";
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux'
import reducer from '../reducer'

const ResetPassword = (props) => {
    const dispatch = useDispatch(reducer);
    const [password1, setPassword1] = useState("")
    const [password2, setPassword2] = useState("")
    const history = useHistory()

    const newPassword = () => {
        // console.log("running")
        if (password1 === password2) {
            const email = props.match.params.email
            const DATA = {
                password: `${password1}`,
            }
            axios.put(`https://trisquare.asia/api/forgot_Password/change_password/${email}`, DATA)

            history.push("/buyer/")
            localStorage.removeItem("_trisquarestorage");
            dispatch({
                type: "setUser",
                userIn: false,
                userOut: true,
            });
            window.location.reload()
=======
import React, {useState} from 'react';
import '../css/ResetPassword.css';
import axios from "axios";
import { useHistory } from 'react-router';

const ResetPassword = (props) => {
    const [password1 , setPassword1] = useState("")
    const [password2 , setPassword2] = useState("")
    const history = useHistory()

    const newPassword = () => {
        if (password1 === password2){
            const email = props.match.params.email
            axios.get(`https://trisquare.asia/api/forgot_Password/${email}` , {password : password1} ,(err , response) => {
                if (err) alert(err)
                history("/buyer")
            })
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
        } else {
            alert("Password Not Matched")
        }
    }

    return (
<<<<<<< HEAD
        <div className="resetPassword">
            <div className="resetPassword__container">
                <form onSubmit={newPassword} className="resetPassword__form">
                    <h1 className="passLabel">Reset Your Password</h1>
                    <input type="password" className="resetPassword__password passInput" placeholder="Type Your New Password" value={password1} onChange={e => setPassword1(e.target.value)} required />
                    <input type="password" className="resetPassword__cPassword passInput" placeholder="Confirm Your Password" value={password2} onChange={e => setPassword2(e.target.value)} required />
                    <button type="submit" className="passResetBtn">Reset Password</button>
                </form>
=======
        <div className = "resetPassword">
            <div className = "resetPassword__container">
            <form onSubmit = {newPassword} className = "resetPassword__form">
                <h1 className = "passLabel">Reset Your Password</h1>
                <input type = "password" className = "resetPassword__password passInput" placeholder = "Type Your New Password" value = {password1} onChange = {e => setPassword1(e.target.value)}/>
                <input type = "password" className = "resetPassword__cPassword passInput" placeholder = "Confirm Your Password" value = {password2} onChange = {e => setPassword2(e.target.value)}/>
                <button type = "submit" className = "passResetBtn">Reset Password</button>
            </form>
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
            </div>
        </div>
    )
}

export default ResetPassword;
