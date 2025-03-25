import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const MenuPricing = () => {
  const [cakes, setCakes] = useState([]);

  useEffect(() => {
    fetch("../src/data/data.json")
      .then((response) => response.json())
      .then((data) => setCakes(data))
      .catch((error) => console.error("Error loading cake data:", error));
  }, []);

  const addToCart = (product) => {
    console.log("Added to cart:", product);
  };

  return (
    <div>
      <div className="menu-header">
        <h2>Menu & Pricing</h2>
        <p>Check out our delicious cakes at affordable prices!</p>
      </div>
      <div className="cake-list">
        {cakes.map((cake) => (
          <ProductCard key={cake.id} product={cake} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default MenuPricing;
