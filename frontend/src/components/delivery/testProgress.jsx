import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './deliveryHome.css';
import ProgressBar from './progressBar';
import { getDelivery, getDeliveryById, updateDelivery } from '../../services/delivery';
import { addNotifications } from '../../services/notifications';
import GoogleMaps from './googleMap';
import { getAnOrder } from '../../services/order';
import { useParams } from 'react-router-dom';
import { updateOrderDeliveryStatus } from '../../services/order';


const TestProgress = () => {
    const [_id, setId] = useState();
    const [order_id, setOrderId] = useState();
    const [shippingAddress, setShippingAddress] = useState();
    const [itemsPrice, setItemsPrice] = useState();
    const [shippingPrice, setShippingPrice] = useState();
    const [totalPrice, setTotalPrice] = useState();

    const [deliveries, setDeliveries] = useState([]);

    const [status, setStatus] = useState('Pending');
    const [deliveryMethod, setDeliveryMethod] = useState('');
    const [progress, setProgress] = useState(50);
    const progressBarRef = useRef(null);

    const data = [status, shippingAddress, shippingPrice]

    const userid = localStorage.getItem('id')
    const updateDeliveryStatus = {
        status: "Confirmed",
    }

    const { id } = useParams()
    const [order, setOrder] = useState([])

    useEffect(() => {
        getAnOrder(id).then((response) => {
            setOrder(response.data)
            setOrderId(response.data[0]._id)
            console.log(response.data)
        })
    }, [id])

    useEffect(() => {
        const fetchData = async () => {

            try {
                const response = await getDeliveryById(id)
                setDeliveries(response.data.data);
                console.log("setDele", deliveries);
                console.log(typeof (order_id))
                setId(response.data._id);
                setShippingAddress(response.data.shippingAddress);
                setStatus(response.data.status);
                console.log("sts", status)
                setItemsPrice(response.data.itemsPrice);
                setShippingPrice(response.data.shippingPrice);
                setTotalPrice(response.data.totalPrice);
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [order_id])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Dispatched');
        if (progress < 100) {
            setProgress(prevProgress => prevProgress + 25);
        }

        try {
            const updData = {
                order_id,
                shippingAddress,
                status: "Dispatched",
                shippingPrice,
                totalPrice,
                itemsPrice
            };
            const response = await updateDelivery(_id, updData, true);
            console.log(response);
            if (response) {
                try {
                    const data = {
                        user_id: userid,
                        notification_title: "Delivery",
                        message: "Your Delivery is Dispatched",
                        isRead: false
                    };
                    await addNotifications(data, true);

                } catch (error) {
                    console.log(error);
                }
            } else {
                alert("No Notification to Deliver")
            }

            await updateOrderDeliveryStatus(id, updateDeliveryStatus)
        } catch (error) {
            console.log(error);
        }




        window.location.replace(`/delivery/${id}/dispatchDelivery`);
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
                        Items Price: {itemsPrice}
                        <hr />
                        Shipping Price: {shippingPrice}
                        <hr />
                        Total Price: {totalPrice}
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

