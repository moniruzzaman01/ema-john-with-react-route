import React, { useEffect, useState } from "react";
import { setLocalData } from "../../utilities/localStorage";
import Cart from "../cart/Cart";
import Product from "../product/Product";
import "./Order.css";

const Order = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCartHandle = (product) => {
    let newCart;
    const exist = cart.find((data) => product.id === data.id);
    if (exist) {
      product.quantity = product.quantity + 1;
      const rest = cart.filter((data) => data.id !== product.id);
      newCart = [...rest, product];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);

    setLocalData(product.id);
  };
  // console.log(cart);

  return (
    <div className="order">
      <div className="products">
        {products.map((product, index) => (
          <Product
            key={index}
            product={product}
            addToCartHandle={addToCartHandle}
          ></Product>
        ))}
      </div>
      <div className="cart">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Order;
