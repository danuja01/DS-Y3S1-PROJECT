import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useLocation } from 'react-router-dom';

function PayPal() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const subtotal = queryParams.get('subtotal');
  const shipping = queryParams.get('shipping');

  const total = (subtotal ? subtotal : 0) + (shipping ? shipping : 0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-4 text-center">
            Urid Capsule Ayurvedic Medicine for Kidney Stone Pain I Helps Reduce Bladder Infection
        </h3>
        <img
          className="w-32 h-auto mb-4 rounded-lg shadow-md"
          src="assets/images/product1.png"
          alt="Urid Capsule Ayurvedic Medicine for Kidney Stone Pain I Helps Reduce Bladder Infection"
        />
        <p className="text-center">
          <span className="text-lg font-bold">{total}</span>
        </p>
        <PayPalScriptProvider
          options={{ "client-id": import.meta.env.VITE_CLIENT_ID }}
        >
          <PayPalButtons
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: total, // use the subtotal variable here
                    },
                  },
                ],
              });
            }}
            onApprove={async (data, actions) => {
              const details = await actions.order.capture();
              const name = details.payer.name.given_name;
              alert("Transaction completed by " + name);
            }}
          />
        </PayPalScriptProvider>
      </div>
    </div>
  );
}

export default PayPal;
