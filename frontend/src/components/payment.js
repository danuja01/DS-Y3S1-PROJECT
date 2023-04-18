import { useState } from "react";
import { Link } from "react-router-dom";
import PaymentDataService from "../services/payment/payment";

export function PaymentForm() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    var data = {
      amount: amount,
      currency: currency,
      card: {
        cardNumber: cardNumber,
        cvv: cvv,
        expirationDate: expirationDate,
        nameOnCard: nameOnCard,
      },
    };

    PaymentDataService.createPayment(data)
      .then((response) => {
        alert("Payment successful!");
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleSubmit2 = (event) => {
    event.preventDefault();

    PaymentDataService.postToPayPal()
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="currency">Currency</label>
          <select
            type="text"
            id="currency"
            value={currency}
            onChange={(event) => setCurrency(event.target.value)}
            required
          >
            <option value="">--Select--</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </div>
        <div>
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(event) => setCardNumber(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={(event) => setCvv(event.target.value)}
            minLength={3}
            maxLength={3}
            required
          />
        </div>
        <div>
          <label htmlFor="expirationDate">Expiration Date</label>
          <input
            type="text"
            id="expirationDate"
            value={expirationDate}
            onChange={(event) => setExpirationDate(event.target.value)}
            pattern="^\d{2}\/\d{4}$"
            required
          />
        </div>
        <div>
          <label htmlFor="nameOnCard">Name on Card</label>
          <input
            type="text"
            id="nameOnCard"
            value={nameOnCard}
            onChange={(event) => setNameOnCard(event.target.value)}
            required
          />
        </div>
        <button type="submit">Credit/ Debit card</button>
      </form>
      <div>
        <form
          action="http://localhost:4003/api/v1/payments/paypal"
          method="get"
        >
          <button>PayPal</button>
        </form>
      </div>
    </div>
  );
}
