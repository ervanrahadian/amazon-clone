import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, alt, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <CurrencyFormat
            renderText={(value) => <strong>{value}</strong>}
            decimalScale={0}
            value={price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"Rp "}
          />
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt={alt} />
      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
}

export default Product;
