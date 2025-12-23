import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import ApiPage from "./pages/ApiPage";
import NotFoundPage from "./pages/NotFoundPage";

import { FavoritesProvider, useFavorites } from "./context/FavoritesContext";

function Navbar() {
  const { favorites } = useFavorites();

  return (
    <nav style={{ display: "flex", gap: "20px", padding: "10px" }}>
      <Link to="/">Home</Link>
      <Link to="/form">Add Product</Link>
      <Link to="/api">API Page</Link>

      <span style={{ marginLeft: "auto" }}>
        ⭐ Favorites: {favorites.length}
      </span>
    </nav>
  );
}

export default function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/api" element={<ApiPage />} />

          {/* 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </FavoritesProvider>
  );
}
