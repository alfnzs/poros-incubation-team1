import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import ProductContext from "../../context/ProductContext";
import DefaultLayout from "../../layout/DefaultLayout";
import "./ProductDetailPage.css";

function ProductDetailPage() {
  const [product, setProduct] = useState();
  const { setCartProducts } = useContext(ProductContext);
  const params = useParams();

  useEffect(() => {
    const getData = async () => {
      const response = await api.get(`/products/${params.id}`);
      setProduct(response.data);
    };
    getData();
  }, [params.id]);

  return (
    <DefaultLayout>
      <div className="product-detail">
        <div className="product-image">
          <img
            src={product?.image || "default-image.jpg"}
            alt={product?.title || "default title"}
          />
        </div>
        <div className="deskripsi">
          <h1 className="product-title">{product?.title}</h1>
          <h3 className="description-title">Description : </h3>
          <p className="product-description">{product?.description}</p>
          <p className="product-price">${product?.price}</p>
          <p className="product-stock">{product?.stock}</p>
          <button
            className="add-to-cart-button"
            onClick={() => setCartProducts((prev) => [...prev, product])}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default ProductDetailPage;
