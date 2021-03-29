<<<<<<< HEAD
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
=======
import React from 'react'
import { Modal } from 'react-modal'

const EmailVerification = () => {
    return (
        <div>
            <Modal
                className="orderModal"
                isOpen={true}
                shouldCloseOnOverlayClick={true}
                shouldCloseOnEsc={true}
            >
                <h1>Hello , Your Email is Verified</h1>
            </Modal>
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
        </div>
    )
}

<<<<<<< HEAD
export default EmailVerification;
=======
export default EmailVerification
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
