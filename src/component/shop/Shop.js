import React, { useState, useEffect } from "react";
import Cart from "./Cart/Cart";
import Product from "./Product/Product";
import "./Product/Product.css";

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [product, setProduct] = useState([]);

  const handleAddToCart = (mydata) => {
    const newCart = [...cart, mydata];
    setCart(newCart);
  };

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div className="shop_container">
      <div className="product_container">
        {product.map((mydata) => (
          <Product
            key={mydata.id}
            mydata={mydata}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart_container">
       <h2>summery{cart.length}</h2>
      </div>
    </div>
  );
};

export default Shop;
