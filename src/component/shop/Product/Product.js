import React from "react";
import "./Product.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

function Product(props) {
  const { handleAddToCart, product } = props;
  const { name, price, picture } = product;

  return (
    <div className="product">
      <img src={picture} alt="" />
      <h2> Name:{name}</h2>
      <p>price:${price}</p>
     
        <button
          onClick={() => handleAddToCart(product)}
          className="button_style">
          Add to cart
          <FontAwesomeIcon className="icon_style" icon={faShoppingBag} />
        </button>
      
   
    </div>
  );
}

export default Product;
