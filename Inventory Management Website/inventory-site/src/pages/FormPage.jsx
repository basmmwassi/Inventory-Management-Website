import { useState } from "react";

export default function FormPage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (name.length < 3) {
      setError("Name must be at least 3 characters");
      return;
    }

    if (isNaN(price) || price <= 0) {
      setError("Price must be a positive number");
      return;
    }

    if (isNaN(qty) || qty < 1) {
      setError("Quantity must be at least 1");
      return;
    }

    setError("");
    console.log({ name, price, qty });
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Add Product</h1>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px" }}>
        <input
          type="text"
          placeholder="Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          type="number"
          placeholder="Quantity"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Add</button>
      </form>
    </div>
  );
}
