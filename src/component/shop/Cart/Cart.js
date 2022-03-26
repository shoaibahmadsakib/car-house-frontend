import React, { useState } from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart, handleClick, randomClick } = props;

  // console.log(cart);
  if (cart.length > 4) {
    alert("dont select more then four");
    return alert;
  } else {
    return (
      <div className="Cart_style">
        {cart.map((details) => {
          return (
            <div key={details.id}>
              <div className="cart_display">
                <img src={details.picture} height="30px" width="40px" alt="" />
                <p>{details.name}</p>
              </div>
            </div>
          );
        })}

        <div className="cart_button_style">
          <button onClick={handleClick}>remove</button>
          <button onClick={randomClick}>Suggest Name</button>
        </div>
      </div>
    );
  }
};

export default Cart;
