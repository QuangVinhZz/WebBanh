import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("../src/data/data.json")
      .then((response) => response.json())
      .then((data) => {
        const foundProduct = data.find((p) => p.id === parseInt(id));
        setProduct(foundProduct);
      })
      .catch((error) => console.error("Error loading product data:", error));
  }, [id]);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-detail">
      <h2>Chi tiet san pham: </h2>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p className="price">Price: ${product.price}</p>
    </div>
  );
};

export default ProductDetail;
