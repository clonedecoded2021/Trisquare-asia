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
        </div>
    )
}

export default EmailVerification
