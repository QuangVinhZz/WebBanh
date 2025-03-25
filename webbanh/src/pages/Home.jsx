import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("../src/data/data.json") // Đọc dữ liệu từ file JSON
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  return (
    <div>
      <div className="row">
        <img src="../src/images/banner.jpg" alt="" className="banner w-100" />
      </div>

      <div className="row">
        <h2 className="text-center my-4">EXPLORE OUR CAKES</h2>
      </div>

      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4">
            <ProductCard product={product} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
