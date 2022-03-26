import React, { useState } from "react";
import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;

  const handleClick =()=>{
 if(handleClick == true){
   return cart.length =""
 }
  }
  console.log(cart);
  if (cart.length > 4) {
    alert("dont select more then four");
    return alert;
  } else {
    return (

      <div className="Cart_style">
        {cart.map((details) => {
          return <div key={details.id}>{details.name}</div>;
        })}

        <div>
          <button onClick={handleClick}>remove</button>
        </div>
      </div>
    );
  }
};

export default Cart;
