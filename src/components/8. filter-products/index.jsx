import { useEffect, useState } from "react";
import "./filter.css";

function FilterProducts() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [currentSelectedCategory, setCurrentSelectedCategory] = useState("All");
  const [filteredItems, setFilteredItems] = useState([]);

  async function fetchProducts() {
    try {
      setLoading(true);
      const apiResponse = await fetch("https://dummyjson.com/products", {
        method: "GET",
      });
      const result = await apiResponse.json();

      if (result && result.products && result.products.length > 0) {
        setLoading(false);
        setProducts(result.products);
        setFilteredItems(result.products);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (currentSelectedCategory === "All") {
      setFilteredItems(products);
    } else {
      setFilteredItems(
        products.filter(
          (productItem) =>
            productItem.category.toLowerCase() ===
            currentSelectedCategory.toLowerCase()
        )
      );
    }
  }, [currentSelectedCategory, products]);

  const uniqueCategories =
    products && products.length > 0
      ? ["All", ...new Set(products.map((productItem) => productItem.category))]
      : [];

  if (loading) {
    return <h3>Fetching the products! Please wait...</h3>;
  }

  return (
    <div className="filter-products-container">
      <h1>Filter Products By Category</h1>
      <div className="filter-categories-container">
        {uniqueCategories.map((uniqueCategoryItem) => (
          <button
            key={uniqueCategoryItem}
            onClick={() => setCurrentSelectedCategory(uniqueCategoryItem)}
            className={
              currentSelectedCategory === uniqueCategoryItem ? "active" : ""
            }
          >
            {uniqueCategoryItem}
          </button>
        ))}
      </div>
      <ul className="list-of-products">
        {filteredItems.length > 0 ? (
          filteredItems.map((productItem) => (
            <li key={productItem.id}>
              <p>{productItem.title}</p>
              <button>{productItem.category}</button>
            </li>
          ))
        ) : (
          <h3>No products available.</h3>
        )}
      </ul>
    </div>
  );
}

export default FilterProducts;
