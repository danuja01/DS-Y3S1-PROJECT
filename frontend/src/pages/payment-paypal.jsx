import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import { useParams } from 'react-router-dom'
import { updateOrderPaymentStatus, getAnOrder } from '../services/order'
import { useState, useEffect } from 'react'

function PayPal() {
  const { id } = useParams()
  const [order, setOrder] = useState([])

  useEffect(() => {
    getAnOrder(id).then((response) => {
      setOrder(response.data)
      console.log(response.data)
    })
  }, [id])

  const updatePaymentStatus = {
    isPaid: true,
  }

  return (
    <div className="flex flex-wrap justify-center items-center h-screen">
      {order.map((orderItem) => (
        <div key={orderItem._id} className="bg-white shadow-lg rounded-lg mx-4 my-4 p-6">
          <h1 className="text-2xl font-bold mb-2">PayPal</h1>
          <h1 className="text-1xl font-bold mb-4">Order ID: {orderItem._id}</h1>
          <p className="text-gray-500 mt-2">Buyer: {orderItem.buyer[0].name}</p>
          <p className="text-gray-500 mt-2">Email: {orderItem.buyer[0].email}</p>
          <p className="text-gray-500 mt-2">Shipping Address: {orderItem.shippingAddress}</p>
          <p className="text-gray-500 mt-2">Payment Method: {orderItem.paymentMethod}</p>
          <p className="text-gray-500 mt-2">Items Price: {orderItem.itemsPrice}</p>
          <p className="text-gray-500 mt-2">Shipping Price: {orderItem.shippingPrice}</p>
          <p className="text-gray-500 mt-2">Total Price: {orderItem.totalPrice}</p>
          <p className="text-gray-500 mt-2">Commission: {orderItem.commission}</p>
          <p className="text-gray-500 mt-2">Status: {orderItem.status}</p>
          <p className="text-gray-500 mt-2">Delivered? : {orderItem.isDelivered ? 'Yes' : 'No'}</p>
          <p className="text-gray-500 mt-2">Created At: {orderItem.createdAt}</p>
          <p className="text-gray-500 mt-2 mb-8">Updated At: {orderItem.updatedAt}</p>

          <p className="mb-8">
            <span className="text-lg font-bold">Total Pay = {orderItem.totalPrice + orderItem.commission}</span>
          </p>
          <PayPalScriptProvider options={{ 'client-id': import.meta.env.VITE_CLIENT_ID }}>
            <PayPalButtons
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: (orderItem.totalPrice + orderItem.commission).toFixed(2),
                      },
                    },
                  ],
                })
              }}
              onApprove={async (data, actions) => {
                const details = await actions.order.capture()
                const name = details.payer.name.given_name

                // Update payment status
                await updateOrderPaymentStatus(orderItem._id, updatePaymentStatus)

                alert('Transaction completed by ' + name)
              }}
              onCancel={() => {
                alert('Payment cancelled by the user.')
              }}
              onError={() => {
                alert('An error occurred during payment processing.')
              }}
            />
          </PayPalScriptProvider>
        </div>
      ))}
    </div>
  )
}

export default PayPal
