import React from "react";
import "./Product.css";

function Product(props) {
  const { name, price, picture } = props.mydata;
  return (
    <div className="product">
      <img src={picture} alt="" />
      <h2>{name}</h2>
      <p>{price}</p>
      <div>
      <button className="button_style">click</button>
      </div>
    
    </div>
  );
}

export default Product;
