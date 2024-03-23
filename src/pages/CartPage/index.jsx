import { useContext } from "react";
import ProductContext from "../../context/ProductContext";
import DefaultLayout from "../../layout/DefaultLayout";
import style from "./CartPage.module.css";

function CartPage() {
  const { cartProducts, removeFromCart } = useContext(ProductContext);

  const handleDelete = (productId) => {
    removeFromCart(productId);
  };

  return (
    <DefaultLayout>
      <div className={style.container}>
        <div className={style.cartHeading}>
          <p>Item</p>
          <p>Price</p>
          <p>Remove</p>
        </div>
        <hr />

        <div className={style.cart}>
          {cartProducts.map((product) => (
            <div key={product.id}>
              <div className={style.cartItem}>
                <div className={style.cartBox}>
                  <img src={product.image || "default-image.jpg"} alt={product?.title || "default title"} />
                  <span>{product.title}</span>
                </div>
                <p>{product.price}</p>
                <button onClick={() => handleDelete(product.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
}

export default CartPage;
