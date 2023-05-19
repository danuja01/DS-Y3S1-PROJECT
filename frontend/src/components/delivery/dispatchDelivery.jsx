import React, { useState, useRef, useEffect } from 'react';
import './deliveryHome.css';
import ProgressBar from './progressBar';
import { getDelivery, addDelivery, getDeliveryById } from '../../services/delivery';
import bike from './bike.gif';




const DispatchDelivery = () => {
    const [order_id, setOrderId] = useState();

    const [deliveries, setDeliveries] = useState([]);

    const [status, setStatus] = useState('Pending');
    const [progress, setProgress] = useState(75);
    const progressBarRef = useRef(null);

    // const orderId = localStorage.getItem('id')

    useEffect(() => {
        // const fetchData = async () => {
        //     try {
        //         const response = await getDelivery(true)
        //         setDeliveries(response.data);
        //         console.log(setDeliveries);
        //         setOrderId(response.data.order_id);
        //     } catch (error) {
        //         console.log(error)
        //     }
        // }
        // fetchData()

        // Redirect to another page after 5 seconds
        const redirectTimer = setTimeout(() => {
            window.location.replace("/");
        }, 3500);

        // Clear the timer when the component unmounts
        return () => clearTimeout(redirectTimer);
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Dispatched');
        if (progress < 100) {
            setProgress(prevProgress => prevProgress + 25);
        }
        window.location.replace("/");
    };


    return (
        <>
            <ProgressBar progress={progress} progressBarRef={progressBarRef} />
            <div>
                <center>
                    <br /><br /><br />
                    <h1><b>Order {order_id} is now DISPATCHED... </b></h1>
                    <img src={bike} alt="Delivery bike" />

                </center>
            </div>
        </>
    );
};

export default DispatchDelivery
    ; <></>

