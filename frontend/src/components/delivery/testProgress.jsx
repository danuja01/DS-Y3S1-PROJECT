import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './deliveryHome.css';
import ProgressBar from './progressBar';
import { getDelivery, updateDelivery } from '../../services/delivery';
import GoogleMaps from './googleMap';


const TestProgress = () => {
    const [_id, setId] = useState();
    const [order_id, setOrderId] = useState();
    const [shippingAddress, setShippingAddress] = useState();
    const [shippingPrice, setShippingPrice] = useState();

    const [deliveries, setDeliveries] = useState([]);

    const [status, setStatus] = useState('Pending');
    const [deliveryMethod, setDeliveryMethod] = useState('');
    const [progress, setProgress] = useState(50);
    const progressBarRef = useRef(null);

    const data = [status, shippingAddress, shippingPrice]

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getDelivery(true)
                setDeliveries(response.data);
                console.log("setDele",deliveries);
                setId(response.data._id);
                setOrderId(response.data.order_id);
                setShippingAddress(response.data.shippingAddress);
                setStatus(response.data.status);
                setShippingPrice(response.data.shippingPrice);
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Dispatched');
        if (progress < 100) {
            setProgress(prevProgress => prevProgress + 25);
        }

        try {
            const updData = {
                order_id, 
                shippingAddress ,
                status: "Dispatched", 
                shippingPrice
            };
            const response = await updateDelivery(_id, updData, true);
            console.log(response); // Log the response from the server
            // Do something else with the response, like update the UI
          } catch (error) {
            console.log(error); // Log the error if there is one
          } 

         window.location.replace("/delivery/dispatchDelivery");
    };


    return (
        <>
            <ProgressBar progress={progress} progressBarRef={progressBarRef} />
            <div>

                <form className="delivery-form" onSubmit={handleSubmit}>
                    <GoogleMaps />

                    <h1><center>Delivery Information</center></h1>

                    <div>
                        Order ID: {order_id}
                        <hr />
                        Shipping Address: {shippingAddress}
                        <hr />
                        Status: {status}
                        <hr />
                        Price: {shippingPrice}
                        <div style={{ position: 'relative' }}>
                            <button type='submit' style={{ position: 'absolute', bottom: 0, right: 0 }}>Dispatch</button>
                        </div>
                    </div>
                </form>
            </div>
            <div>
            </div>
        </>
    );
};

export default TestProgress
    ; <></>

