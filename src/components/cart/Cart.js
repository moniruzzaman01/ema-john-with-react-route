import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  // console.log(cart);
  let quantity = 0;
  let totalPrice = 0;
  let shippingCharge = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    totalPrice = totalPrice + product.price * product.quantity;
    shippingCharge = shippingCharge + product.shipping;
  }
  const tax = totalPrice * 0.1;
  const grandTotal = totalPrice + shippingCharge + tax;
  return (
    <div className="cart">
      <div className="elements">
        <h3>Cart Items :</h3>
        <p>Selected Items: {quantity} </p>
        <p>Total Price: {totalPrice} </p>
        <p>Total Shipping Fee: {shippingCharge} </p>
        <p>Tax: {tax.toFixed(2)} </p>
        <h4>Grand Total: {grandTotal} </h4>
      </div>
    </div>
  );
};

export default Cart;
