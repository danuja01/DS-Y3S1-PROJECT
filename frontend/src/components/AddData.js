import React, { useState } from "react";
import axios from "axios";

const AddData = () => {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/v1/notification", { name });
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add Data</button>
    </form>
  );
};

export default AddData;
