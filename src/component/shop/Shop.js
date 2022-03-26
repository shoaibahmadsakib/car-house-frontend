import React, { useState, useEffect } from "react";
import Cart from "./Cart/Cart";
import Product from "./Product/Product";
import "./Product/Product.css";

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleClick = () => {
    setCart([])
  };

  const randomClick =()=>{
  const randomNumber =   Math.floor(Math.random()*cart.length);
  console.log(randomNumber);
   const finalSuggest =  cart.find((products, index) => index === randomNumber)
  setCart([finalSuggest])
  }

  // array.find((product, index) => index === randomNumber)
  return (
    <div className="shop_container">
      <div className="product_container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart_container">
        <Cart cart ={cart} 
        randomClick={randomClick}
        handleClick={handleClick}
        ></Cart>
      </div>
    </div>
  );
};

export default Shop;
