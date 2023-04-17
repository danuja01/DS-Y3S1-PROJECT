import React, { useState } from "react";

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCVC, setCardCVC] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // do something with the form data
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Card Number:
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          placeholder="1234 5678 9012 3456"
          required
        />
      </label>
      <label>
        Card Name:
        <input
          type="text"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
          placeholder="John Doe"
          required
        />
      </label>
      <label>
        Expiration Date:
        <input
          type="text"
          value={cardExpiry}
          onChange={(e) => setCardExpiry(e.target.value)}
          placeholder="MM/YY"
          required
        />
      </label>
      <label>
        CVC:
        <input
          type="text"
          value={cardCVC}
          onChange={(e) => setCardCVC(e.target.value)}
          placeholder="123"
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PaymentForm;
