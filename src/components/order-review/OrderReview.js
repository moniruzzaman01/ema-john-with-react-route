import React from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { removeSelectedLocalData } from "../../utilities/localStorage";
import Cart from "../cart/Cart";
import ReviewProduct from "../review-product/ReviewProduct";
import "./OrderReview.css";

const OrderReview = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  // console.log(cart);
  const removeBtnHandle = (product) => {
    // console.log(product);
    const rest = cart.filter((data) => product.id !== data.id);
    setCart(rest);
    //remove from local storage
    removeSelectedLocalData(product.id);
  };

  return (
    <div className="order-review">
      <div className="review-products">
        {cart.map((product, index) => (
          <ReviewProduct
            key={index}
            product={product}
            removeBtnHandle={removeBtnHandle}
          ></ReviewProduct>
        ))}
      </div>
      <div className="cart">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default OrderReview;
