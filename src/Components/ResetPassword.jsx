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
        } else {
            alert("Password Not Matched")
        }
    }

    return (
        <div className = "resetPassword">
            <div className = "resetPassword__container">
            <form onSubmit = {newPassword} className = "resetPassword__form">
                <h1 className = "passLabel">Reset Your Password</h1>
                <input type = "password" className = "resetPassword__password passInput" placeholder = "Type Your New Password" value = {password1} onChange = {e => setPassword1(e.target.value)}/>
                <input type = "password" className = "resetPassword__cPassword passInput" placeholder = "Confirm Your Password" value = {password2} onChange = {e => setPassword2(e.target.value)}/>
                <button type = "submit" className = "passResetBtn">Reset Password</button>
            </form>
            </div>
        </div>
    )
}

export default ResetPassword;
