import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import FilterBar from "../../components/FilterBar";
import style from "./HomePage.module.css";
import api from "../../api";
import DefaultLayout from "../../layout/DefaultLayout";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const getData = async () => {
      const productResponse = await api.get("/products");
      const categoryResponse = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const categoriesData = await categoryResponse.json();

      setProducts(productResponse.data);
      setCategories(categoriesData);
    };

    getData();
  }, []);

  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = products.filter(
    (product) => !selectedCategory || product.category === selectedCategory
  );

  return (
    <DefaultLayout>
      <div className={style.container}>
        <FilterBar
          categories={categories}
          selectedCategory={selectedCategory}
          onFilter={handleFilter}
        />
        <main className={style.gridContainer}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </main>
      </div>
    </DefaultLayout>
  );
}

export default HomePage;
