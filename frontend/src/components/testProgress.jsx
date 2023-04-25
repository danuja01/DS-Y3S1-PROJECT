import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './deliveryHome.css';
import ProgressBar from './progressBar';
import { getDelivery } from '../services/delivery';
import GoogleMaps from './googleMap';




const TestProgress = () => {
    const [order_id, setOrderId] = useState();
    const [shippingAddress, setShippingAddress] = useState();
    const [deliveries, setDeliveries] = useState([]);

    const [status, setStatus] = useState('Pending');
    const [deliveryMethod, setDeliveryMethod] = useState('');
    const [progress, setProgress] = useState(50);
    const progressBarRef = useRef(null);
    const [formSubmitted, setFormSubmitted] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getDelivery(true)
                setDeliveries(response.data);
                console.log(setDeliveries);
                setOrderId(response.data.order_id);
                setShippingAddress(response.data.shippingAddress);
                setStatus(response.data.status);
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Dispatched');
        if (progress < 100) {
            setProgress(prevProgress => prevProgress + 25);
        }
        setFormSubmitted(true);

    };



    return (
        <>
            <ProgressBar progress={progress} progressBarRef={progressBarRef} />
            <div>
                <GoogleMaps />

                <form className="delivery-form" onSubmit={handleSubmit}>
                    <h1><center>Delivery Information</center></h1>
                    <h1>YOU HAVE CONFIRMED</h1>
                    <div class="grid gap-4 sm:grid-cols-3 sm:gap-6 ">
                        <label for="order_id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Order ID:
                            <input type="text" name="order_id" id="order_id" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={order_id} onChange={(e) => setOrderId(e.target.value)} disabled />
                        </label>
                        <label for="shippingAddress" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Shipping Address:
                            <input type="text" name="shippingAddress" id="shippingAddress" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500' value={shippingAddress} onChange={(e) => setShippingAddress(e.target.value)} disabled />
                        </label>
                        <label for="status" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Status:
                            <input type="text" name="status" id="status" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500' value={status} onChange={(e) => setStatus(e.target.value)} disabled />
                        </label>
                    </div>
                    <button type="submit">Dispatch</button>
                </form>
            </div>
        </>
    );
};

export default TestProgress
    ; <></>

