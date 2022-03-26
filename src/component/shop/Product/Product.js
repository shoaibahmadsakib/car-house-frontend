import React from "react";
import "./Product.css";

function Product(props) {
  const {handleAddToCart,product} = props
  const { name, price, picture } = product;


  return (
    <div className="product">
      <img src={picture} alt="" />
      <h2>{name}</h2>
      <p>{price}</p>
      <div>
      <button onClick={()=>handleAddToCart(product)} className="button_style">Add to cart</button>
      </div>
    
    </div>
  );
}

export default Product;
