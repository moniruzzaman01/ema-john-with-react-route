import React, { useEffect, useState } from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { getLocalData, setLocalData } from "../../utilities/localStorage";
import Cart from "../cart/Cart";
import Product from "../product/Product";
import "./Order.css";

const Order = () => {
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   fetch("products.json")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);
  const [products, setProducts] = useProducts();

  // const [cart, setCart] = useState([]);
  // //call data from local storage
  // useEffect(() => {
  //   let storedData = getLocalData();
  //   let saved = [];
  //   for (const id in storedData) {
  //     // console.log("qnty", storedData[id]);
  //     const savedData = products.find((product) => product.id === id);
  //     if (savedData) {
  //       const quantity = storedData[id];
  //       savedData.quantity = quantity;
  //       saved.push(savedData);
  //     }
  //   }
  //   setCart(saved);
  // }, [products]);
  const [cart, setCart] = useCart(products);

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
