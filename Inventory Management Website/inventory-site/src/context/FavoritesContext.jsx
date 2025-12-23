import { createContext, useContext, useMemo, useState } from "react";

const FavoritesContext = createContext(null);

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]); // array of products

  function addFavorite(product) {
    setFavorites((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) return prev;
      return [...prev, product];
    });
  }

  function removeFavorite(productId) {
    setFavorites((prev) => prev.filter((p) => p.id !== productId));
  }

  function isFavorite(productId) {
    return favorites.some((p) => p.id === productId);
  }

  const value = useMemo(
    () => ({ favorites, addFavorite, removeFavorite, isFavorite }),
    [favorites]
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) {
    throw new Error("useFavorites must be used inside FavoritesProvider");
  }
  return ctx;
}
