import React from "react";
import "./Product.css";

const Product = ({ product, addToCartHandle }) => {
  const { name, price, img, seller, ratings } = product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="details">
        <h4>{name}</h4>
        <p>Price: ${price}</p>
        <p>
          <small>Manufacturer: {seller} </small>
        </p>
        <p>
          <small>Rating: {ratings} </small>
        </p>
      </div>
      <button onClick={() => addToCartHandle(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
