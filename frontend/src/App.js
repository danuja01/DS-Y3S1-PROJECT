import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddData from "./components/AddData";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AddData" element={<AddData />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
