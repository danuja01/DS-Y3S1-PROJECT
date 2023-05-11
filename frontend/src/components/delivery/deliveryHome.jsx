import React, { useState, useRef, useEffect } from 'react';
import './deliveryHome.css';
import ProgressBar from './progressBar';
import { addDelivery, getDeliveryById } from '../../services/delivery';


const DeliveryHome = (props) => {
    const [order_id, setOrderId] = useState("");
    const [shippingAddress, setShippingAddress] = useState("");
    const [deliveries, setDeliveries] = useState([]);
    const [shippingPrice, setShippingPrice] = useState(0);

    const [status, setStatus] = useState();
    const [deliveryMethod, setDeliveryMethod] = useState('');
    const [progress, setProgress] = useState(25);
    const progressBarRef = useRef(null);
    const [showPopup, setShowPopup] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const orderId = localStorage.getItem('id')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getDeliveryById(orderId, true)
                setDeliveries(response.data);
                console.log(setDeliveries);
                setOrderId(response.data.order_id);
                setShippingAddress(response.data.shippingAddress);
                setShippingPrice(response.data.shippingPrice);
                setStatus(response.data.status);
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

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
            const data = {
                order_id, 
                shippingAddress ,
                status: "Confirmed", 
                shippingPrice
            };
            const response = await addDelivery(data, true); 

            console.log("shipping price", shippingPrice)
            console.log("answers",response); 
        } catch (error) {
            console.log(error); 
        }

        window.location.replace(`/delivery/testProgress`);
    };



    return (
        <>
            <ProgressBar progress={progress} progressBarRef={progressBarRef} />

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
                        Price:
                        <input type="Number" value={shippingPrice} onChange={(e) => setShippingPrice(e.target.value)} disabled />
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
            </div>
        </>
    );
};

export default DeliveryHome
    ; <></>

