import { useState } from "react";

function ProductItem({ name, price }) {
  return (
    <div style={{ 
      border: "1px solid #ccc",
      padding: "10px",
      marginBottom: "10px",
      borderRadius: "6px"
    }}>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
    </div>
  );
}

export default function HomePage() {
  const [products] = useState([
    { id: 1, name: "Laptop", price: 3000 },
    { id: 2, name: "Headphones", price: 250 },
    { id: 3, name: "Keyboard", price: 120 }
  ]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products List</h1>

      {products.map((item) => (
        <ProductItem 
          key={item.id} 
          name={item.name} 
          price={item.price} 
        />
      ))}
    </div>
  );
}
