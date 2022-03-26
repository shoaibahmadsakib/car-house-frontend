import React from "react";
import "./Product.css";

function Product(props) {
  const {handleAddToCart,mydata} = props
  const { name, price, picture } = mydata;


  return (
    <div className="product">
      <img src={picture} alt="" />
      <h2>{name}</h2>
      <p>{price}</p>
      <div>
      <button onClick={()=>handleAddToCart()} className="button_style">Add to cart</button>
      </div>
    
    </div>
  );
}

export default Product;
