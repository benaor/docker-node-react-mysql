import React, { useState, useEffect } from "react";
import ProductAPI from "../services/ProductAPI";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const data = await ProductAPI.findAll();
      setProducts(data);
    } catch (error) {
      console.log("impossible de charger la liste des produits : ");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <h1>HomePage</h1>
      <ul>
        {products && products.map((product) => (
          <li key={product.id}> {product.title} </li>
        ))}
      </ul>
    </>
  );
};

export default HomePage;
