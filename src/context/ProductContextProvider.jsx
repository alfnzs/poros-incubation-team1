import { useState } from "react";
import ProductContext from "./ProductContext";

function ProductContextProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  const removeFromCart = (productId) => {
    const updatedCart = cartProducts.filter(
      (product) => product.id !== productId
    );
    setCartProducts(updatedCart);
  };

  return (
    <ProductContext.Provider
      value={{ cartProducts, setCartProducts, removeFromCart }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;
