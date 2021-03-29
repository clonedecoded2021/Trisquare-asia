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
<<<<<<< HEAD
                alert("Fill the form correctly.")
                window.location.reload()
=======
                console.log(err)
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
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
<<<<<<< HEAD
            .then(() => alert(`You will be notified when you're target price and preferred quantity has been reached.`))
            .catch(err => alert("Something is wrong."))
=======
            .then(() => alert("To confirm you are a serious buyer of this product, you will now be invited to pay a fully refundable deposit of $25USD. You will be notified when you're target price and preferred quantity has been reached."))
            .catch(err => console.log(err))
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
    }

    const getData = () => {
        const DATA = {
            id: pId,
<<<<<<< HEAD
            soldProducts: parseInt(product.soldProducts) + parseInt(Quantity),
        }
        axios.put("https://trisquare.asia/api/product_data/update", DATA).then((res => console.log("")))
=======
            soldProducts: product.soldProducts + Quantity,
        }
        axios.put("https://trisquare.asia/api/product_data/update", DATA).then((res => console.log(res)))
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
    }
    const sendNotification = () => {
        const loginstatus = localStorage.getItem("_trisquarestorage")
        if (loginstatus) {
            const newValue = JSON.parse(loginstatus)
<<<<<<< HEAD
            // console.log(newValue.data[0].username)
=======
            console.log(productName)
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
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
<<<<<<< HEAD
                alert("Order is Placed."))
=======
                console.log(res))
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
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


