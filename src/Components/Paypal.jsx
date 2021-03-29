import React, { useEffect, useRef } from 'react';
import axios from 'axios';

const Paypal = ({ money, pId, product, address, country, PIN, contact, ShippingPrice, Quantity, preOrder, productName, avatar, targetPrice, email, userFName, userMob }) => {
    const paypal = useRef()

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, action, err) => {
                return action.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "My Orders",
                            amount: {
                                currency_code: "USD",
                                value: money,
                            }
                        }
                    ]
                })
            },
            onApprove: async (data, action) => {
                const order = await action.order.capture();
                if (preOrder == true) {
                    preOrders()
                } else {
                    sendNotification()
                    getData()
                }
            },
            onError: (err) => {
                alert("Fill the form correctly.")
                window.location.reload()
            }
        }).render(paypal.current)
    }, [])

    const preOrders = () => {
        const DATA = {
            ProductName: productName,
            ProductImage: avatar,
            ProductQuantity: Quantity,
            TargetPrice: targetPrice,
            UserEmail: email,
            FirstName: userFName,
            Mobile: userMob,
            ProductId: pId,
        }
        axios.post("https://trisquare.asia/api/preorders_data", DATA)
            .then(() => alert(`You will be notified when you're target price and preferred quantity has been reached.`))
            .catch(err => alert("Something is wrong."))
    }

    const getData = () => {
        const DATA = {
            id: pId,
            soldProducts: parseInt(product.soldProducts) + parseInt(Quantity),
        }
        axios.put("https://trisquare.asia/api/product_data/update", DATA).then((res => console.log("")))
    }
    const sendNotification = () => {
        const loginstatus = localStorage.getItem("_trisquarestorage")
        if (loginstatus) {
            const newValue = JSON.parse(loginstatus)
            // console.log(newValue.data[0].username)
            const OrderData = {
                ProductName: productName,
                ProductQuantity: Quantity,
                BuyerPaid: money,
                ShippingPrice,
                Address: address,
                PIN,
                Country: country,
                Contact: contact,
                ProductImage: avatar,
                Email: newValue.data[0].email,
                Name: newValue.data[0].username,
            }
            axios.post("https://trisquare.asia/api/orderhistory", OrderData).then(res =>
                alert("Order is Placed."))
        } else {
            alert("Please, Login First!!!")
        }
    }

    return (
        <div>
            <p id="timers">
                <span className="spans" id="timer-days"></span>
                <span className="spans" id="timer-hours"></span>
                <span className="spans" id="timer-mins"></span>
                <span className="spans" id="timer-secs"></span>
            </p>
            <div ref={paypal}></div>
        </div>
    )
}
export default Paypal;


