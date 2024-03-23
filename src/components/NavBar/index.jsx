import { useContext } from "react";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import ProductContext from "../../context/ProductContext";

function NavBar() {
  const logo = "https://cdn-icons-png.flaticon.com/512/25/25694.png";
  const { cartProducts } = useContext(ProductContext);

  return (
    <nav className={style.navBarContainer}>
      <Link to={"/"}>
        <img className={style.logo} src={logo} alt="logo" />
      </Link>
      <h1 className={style.title}>
        FAKE STORE TEAM 1
      </h1>
      <Link to={"/cart"} className={style.cart}>
        Cart
        {cartProducts.length > 0 && <div className={style.cartIndicator}>{cartProducts.length}</div>}
      </Link>
    </nav>
  );
}

export default NavBar;
