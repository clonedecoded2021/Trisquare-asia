import React, { useState, useEffect} from 'react'
import '../css/EmailVerification.css';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import reducer from '../reducer'

const EmailVerification = () => {
    const dispatch = useDispatch(reducer);
    useEffect(() => {
        const signOut = () => {
            localStorage.removeItem("_trisquarestorage");
            dispatch({
                type: "setUser",
                userIn: false,
                userOut: true,
            });
        }
        signOut()
    }, [])
    return (
        <div className="emailVerification__modal">
            <h1 className = "modal__heading">Your Email is successfully verified.</h1>
            <Link to="/buyer/" className="emailVerification__link">Back to Trisquare</Link>
        </div>
    )
}

export default EmailVerification;