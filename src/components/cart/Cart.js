import React from "react";

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
    <div>
      <p>Selected Items: {quantity} </p>
      <p>Total Price: {totalPrice} </p>
      <p>Total Shipping Fee: {shippingCharge} </p>
      <p>Tax: {tax.toFixed(2)} </p>
      <h4>Grand Total: {grandTotal} </h4>
    </div>
  );
};

export default Cart;
