import React, { useState, useRef, useEffect } from 'react';
import './deliveryHome.css';
import ProgressBar from './progressBar';
import { addDelivery, getDeliveryById, getDelivery } from '../../services/delivery';
import { addNotifications } from '../../services/notifications';
import { useParams } from 'react-router-dom';
import { getAnOrder } from '../../services/order';

const DeliveryHome = (props) => {
    const [order_id, setOrderId] = useState("");
    const [shippingAddress, setShippingAddress] = useState("");
    const [deliveries, setDeliveries] = useState([]);
    const [itemsPrice, setItemsPrice] = useState("");
    const [shippingPrice, setShippingPrice] = useState("");
    const [totalPrice, setTotalPrice] = useState("");
    const [status, setStatus] = useState();
    const [deliveryMethod, setDeliveryMethod] = useState('');
    const [progress, setProgress] = useState(25);
    const progressBarRef = useRef(null);
    const [showPopup, setShowPopup] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [order, setOrder] = useState([])

    const { id } = useParams()

    useEffect(() => {
        getAnOrder(id).then((response) => {
            setOrder(response.data)
            setOrderId(response.data[0]._id)
            setItemsPrice(response.data[0].itemsPrice)
            setShippingPrice(response.data[0].shippingPrice)
            setTotalPrice(response.data[0].totalPrice)
            setStatus(response.data[0].status)
            setShippingAddress(response.data[0].shippingAddress)
            console.log(response.data)
        })
    }, [id])


    const userid = localStorage.getItem('id')

    console.log('Deliveries', deliveries);
    console.log("Status", status);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // setStatus('Confirmed');
        if (progress < 100) {
            setProgress(prevProgress => prevProgress + 25);
        }
        setFormSubmitted(true);

        try {
            console.log(order_id)
            const data = {
                order_id,
                shippingAddress,
                status: "Confirmed",
                shippingPrice,
                itemsPrice,
                totalPrice
            };
            const response = await addDelivery(data, true);
            console.log("shipping price", shippingPrice)
            console.log("answers", response);
            if (response) {
                try {
                    const data = {
                        user_id: userid,
                        notification_title: "Delivery",
                        message: "Your Delivery is Confirmed",
                        isRead: false
                    };
                    await addNotifications(data, true);

                } catch (error) {
                    console.log(error);
                }
            } else {
                alert("No Notification")
            }
        } catch (error) {
            console.log(error);
        }




        window.location.replace(`/delivery/${id}/testProgress`);
    };



    return (
        <>
            <ProgressBar progress={progress} progressBarRef={progressBarRef} />

            <div>
                <div>

                    <form className="delivery-form" onSubmit={handleSubmit}>
                        <h1><center>Delivery</center></h1>
                        <label>
                            Order ID:
                            <input type="text" value={order_id} onChange={(e) => setOrderId(e.target.value)} disabled />
                        </label>
                        <label>
                            Shipping Address:
                            <input type="text" value={shippingAddress} onChange={(e) => setShippingAddress(e.target.value)} disabled />
                        </label>
                        <label>
                            Status:
                            <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} disabled />
                        </label>
                        <label>
                            Items Price:
                            <input type="Number" value={itemsPrice} onChange={(e) => setItemsPrice(e.target.value)} disabled />
                        </label>
                        <label>
                            Shipping Price:
                            <input type="Number" value={shippingPrice} onChange={(e) => setShippingPrice(e.target.value)} disabled />
                        </label>
                        <label>
                            Total Price:
                            <input type="Number" value={totalPrice} onChange={(e) => setTotalPrice(e.target.value)} disabled />
                        </label>
                        <label>
                            Delivery Method:
                            <select value={deliveryMethod} onChange={(e) => setDeliveryMethod(e.target.value)}>
                                <option value="Shipping">Shipping</option>
                                <option value="Local Delivery">Local Delivery</option>
                                <option value="Local Pickup">Local Pickup</option>
                            </select>
                        </label>
                        <button type="submit">Confirm</button>
                    </form>
                    {/* </div>
                    ))} */}
                </div>

            </div>
        </>
    );
};

export default DeliveryHome
    ; <></>

