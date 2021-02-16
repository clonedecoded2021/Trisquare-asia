require('dotenv').config({ path: ".env" });
const nodemailer = require('nodemailer');

exports.sendConfirmationEmail = function ({ userEmail, userId, userName }) {
    return new Promise((res, rej) => {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.Email,
                pass: process.env.PASS
            }
        })

        const message = {
            from: process.env.Email,
            to: userEmail, // in production uncomment this
            // to: process.env.GOOGLE_USER,
            subject: 'Your App - Activate Account',
            html: `
        <h3> Hello ${userName} </h3>
        <p>Thank you for registering into our Application. Much Appreciated! Just one last step is laying ahead of you...</p>
        <p>To activate your account please follow this link: <a target="_" href="http://localhost:3001/api/activate/${userEmail}/${userId}">http://localhost:3001/activate </a></p>
        <p>Cheers</p>
        <p>Your Application Team</p>
      `
        }

        transporter.sendMail(message, function (err, info) {
            if (err) {
                rej(err)
            } else {
                res(info)
            }
        })
    })
}
exports.sendForgotPasswordEmail = function ({ userEmail }) {
    return new Promise((res, rej) => {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.Email,
                pass: process.env.PASS
            }
        })

        const message = {
            from: process.env.Email,
            to: userEmail, // in production uncomment this
            // to: process.env.GOOGLE_USER,
            subject: 'Your App - Activate Account',
            html: `
        <p>Thank you for using our Application. We are here to make your life easy.</p>
        <p>To reset your password please follow this link: <a target="_" href="http://localhost:3001/api/forgot_Password/${userEmail}">http://localhost:3001/activate </a></p>
        <p>Cheers</p>
        <p>Your Application Team</p>
      `
        }

        transporter.sendMail(message, function (err, info) {
            if (err) {
                rej(err)
            } else {
                res(info)
                console.log("message has been sent!")
            }
        })
    })
}