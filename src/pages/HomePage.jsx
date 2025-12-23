import { useState } from "react";
import { useFavorites } from "../context/FavoritesContext";

function ProductItem({ name, price }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "6px",
      }}
    >
      <h3>{name}</h3>
      <p>Price: ${price}</p>
    </div>
  );
}

export default function HomePage() {
  const [products] = useState([
    { id: 1, name: "Laptop", price: 3000 },
    { id: 2, name: "Headphones", price: 250 },
    { id: 3, name: "Keyboard", price: 120 },
  ]);

  const { favorites, removeFavorite } = useFavorites();

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

      {/* ===== Favorites Section ===== */}
      {favorites.length > 0 && (
        <div style={{ marginTop: "30px" }}>
          <h2>My Favorites ⭐</h2>

          {favorites.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "6px",
              }}
            >
              <p style={{ margin: 0 }}>{item.title}</p>

              <button
                onClick={() => removeFavorite(item.id)}
                style={{ marginTop: "8px", cursor: "pointer" }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
