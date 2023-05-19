import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './deliveryHome.css';
import ProgressBar from './progressBar';
import { getDelivery, getDeliveryById, updateDelivery } from '../../services/delivery';
import { addNotifications } from '../../services/notifications';
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

    // const userid = localStorage.getItem('id')
    const orderId = localStorage.getItem('id')
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getDeliveryById(orderId, true)
                setDeliveries(response.data);
                console.log("setDele", deliveries);
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

        // try {
        //     const updData = {
        //         order_id, 
        //         shippingAddress ,
        //         status: "Dispatched", 
        //         shippingPrice
        //     };
        //     const response = await updateDelivery(_id, updData, true);
        //     console.log(response); 
        //   } catch (error) {
        //     console.log(error); 
        //   } 

        try {
            const data = {
                user_id: userid,
                notification_title: "Delivery",
                message: "Your Delivery is Dispatched",
                isRead: false
            };
            const response = await addNotifications(data, true);

        } catch (error) {
            console.log(error);
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
                        Order ID: {"001"}
                        <hr />
                        Shipping Address: {"No, 250/3A, Bellanwila"}
                        <hr />
                        Status: {"Confirmed"}
                        <hr />
                        Price: {"1000"}
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

