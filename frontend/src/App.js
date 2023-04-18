import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Review from "./components/Review";
import AddData from "./components/AddData";
import { PaymentForm } from "./components/payment";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<PaymentForm />} />
          <Route path="/AddData" element={<AddData />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
