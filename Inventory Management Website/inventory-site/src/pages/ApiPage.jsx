import { useEffect, useState } from "react";

export default function ApiPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => {
        setProducts(result);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch products");
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 style={{ padding: "20px" }}>Loading...</h2>;
  if (error) return <h2 style={{ color: "red", padding: "20px" }}>{error}</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Real Store Products</h1>

      {products.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ddd",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "6px",
          }}
        >
          <h3>{item.title}</h3>

          <img
            src={item.image}
            alt={item.title}
            width="150"
            style={{ borderRadius: "6px" }}
          />

          <p>Price: ${item.price}</p>

          <a
            href={`https://www.google.com/search?q=${encodeURIComponent(
              item.title + " buy"
            )}`}
            target="_blank"
            style={{ color: "blue" }}
          >
            Buy this product
          </a>
        </div>
      ))}
    </div>
  );
}
