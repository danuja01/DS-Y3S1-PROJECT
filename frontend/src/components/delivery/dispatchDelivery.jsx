import React, { useState, useRef, useEffect } from 'react';
import './deliveryHome.css';
import ProgressBar from './progressBar';
import { getDelivery, addDelivery, getDeliveryById } from '../../services/delivery';
import bike from './bike.gif';
import { useNavigate, useParams } from 'react-router-dom';
import { getAnOrder } from '../../services/order';




const DispatchDelivery = () => {
    const [order_id, setOrderId] = useState();

    const [deliveries, setDeliveries] = useState([]);

    const [status, setStatus] = useState('Pending');
    const [progress, setProgress] = useState(75);
    const progressBarRef = useRef(null);


    const { id } = useParams()
    const [order, setOrder] = useState([])
    const navigation = useNavigate()

    useEffect(() => {


        // Redirect to another page after 5 seconds
        getAnOrder(id).then((response) => {
            setOrder(response.data)
            setOrderId(response.data[0]._id)
            console.log(response.data)
        })
        const redirectTimer = setTimeout(() => {
            navigation(`/payment/${id}`)
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

