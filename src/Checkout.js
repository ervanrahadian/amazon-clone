import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <div className="checkout_desc">
          <h3 className="checkout_welcome">
            Hello, {user ? user.email : "Guest"}
          </h3>
          <h2 className="checkout_title">
            {basket.length ? "Shopping Cart" : "Your Amazon Cart is empty."}
          </h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
