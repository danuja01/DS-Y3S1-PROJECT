import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import { useLocation, useParams } from 'react-router-dom'
import { updateOrderPaymentStatus } from '../services/order'

function PayPal() {
  const { id } = useParams()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const subtotal = parseFloat(queryParams.get('subtotal')) || 0
  const shipping = parseFloat(queryParams.get('shipping')) || 0

  const updatePaymentStatus = {
    isPaid: true,
  }

  const total = subtotal + shipping

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-lg" style={{ width: '70%', hight: '100%' }}>
        <h3 className="text-2xl font-bold mb-4 text-center">Shampoo</h3>
        <img className="w-32 h-auto mb-4 rounded-lg shadow-md" src="assets/images/homeopathy-burlington 1.png" alt="shampoo" />
        <p className="text-center">
          <span className="text-lg font-bold">Total Pay: {total}</span>
        </p>
        <PayPalScriptProvider options={{ 'client-id': import.meta.env.VITE_CLIENT_ID }}>
          <PayPalButtons
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: total,
                    },
                  },
                ],
              })
            }}
            onApprove={async (data, actions) => {
              const details = await actions.order.capture()
              const name = details.payer.name.given_name

              // Update payment status
              await updateOrderPaymentStatus(id, updatePaymentStatus)

              alert('Transaction completed by ' + name)
            }}
          />
        </PayPalScriptProvider>
      </div>
    </div>
  )
}

export default PayPal
