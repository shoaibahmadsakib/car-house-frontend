import React, { useState } from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart,handleClick, randomClick } = props;

  console.log(cart);
  // const [generatName, setGeneratName] = useState(cart);

  // function gerarNumero() {

  //   let x = Math.floor((Math.random());
   
  //   setGeneratName(x)
  // }

 
  // console.log(cart);
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
          <button onClick={randomClick}>generatName</button>
        </div>
        <div>
          
        </div>
        <div>
        
         
        </div>
      </div>
    );
  }
};

export default Cart;
