import React from "react";
import CurrencyFormat from "react-currency-format";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({
  id,
  image,
  title,
  price,
  rating,
  hideRating,
  hideButton,
}) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutproduct">
      <img className="checkoutproduct_image" src={image} />
      <div className="checkoutproduct_info">
        <p className="checkoutproduct_title">{title}</p>
        <p className="checkoutproduct_price">
          <CurrencyFormat
            renderText={(value) => <strong>{value}</strong>}
            decimalScale={0}
            value={price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"Rp "}
          />
        </p>
        {!hideRating && (
          <div className="checkoutproduct_rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
        )}

        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from Cart</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
