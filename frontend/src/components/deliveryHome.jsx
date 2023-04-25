import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './deliveryHome.css';
import ProgressBar from './progressBar';
import { getDelivery } from '../services/delivery';


const DeliveryHome = (props) => {
    const [order_id, setOrderId] = useState("");
    const [shippingAddress, setShippingAddress] = useState("");
    const [deliveries, setDeliveries] = useState([]);

    const [status, setStatus] = useState('Pending');
    const [deliveryMethod, setDeliveryMethod] = useState('');
    const [progress, setProgress] = useState(25);
    const progressBarRef = useRef(null);
    const [showPopup, setShowPopup] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    // useEffect(() => {
    //     if (progressBarRef.current) {
    //         progressBarRef.current.style.width = `${progress}%`;
    //         if (progress === 25) {
    //             progressBarRef.current.textContent = 'Pending';
    //         } else if (progress === 50) {
    //             progressBarRef.current.textContent = 'Confirmed';
    //         } else if (progress === 75) {
    //             progressBarRef.current.textContent = 'Dispatched';
    //         }
    //         if (progress === 100) {
    //             progressBarRef.current.textContent = 'Delivered'
    //             progressBarRef.current.classList.add('full');
    //             setShowPopup(true);
    //         } else {
    //             progressBarRef.current.classList.remove('full');
    //         }
    //     }
    // }, [progress]);
    

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await getDelivery(true)
            setDeliveries(response.data);
            console.log(setDeliveries);
            setOrderId(response.data.order_id);
            setShippingAddress(response.data.shippingAddress);
          } catch (error) {
            console.log(error)
          }
        }
        fetchData()
      }, [])

      console.log('Deliveries',deliveries);

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Confirmed');
        if (progress < 100) {
            setProgress(prevProgress => prevProgress + 25);
        }
        setFormSubmitted(true);
        
        window.location.replace(`/testProgress`);
    };


    return (
        <>
            <ProgressBar progress={progress} progressBarRef={progressBarRef} />

            <div>
                {/* {!formSubmitted && ( */}
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
                        Delivery Method:
                        <select value={deliveryMethod} onChange={(e) => setDeliveryMethod(e.target.value)}>
                            <option value="Shipping">Shipping</option>
                            <option value="Local Delivery">Local Delivery</option>
                            <option value="Local Pickup">Local Pickup</option>
                        </select>
                    </label>
                    <button type="submit">Confirm</button>
                </form>
                 {/* )} */}
            </div>
        </>
    );
};

export default DeliveryHome
    ; <></>

