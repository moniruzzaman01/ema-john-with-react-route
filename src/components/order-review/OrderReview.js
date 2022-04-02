import { faHourglass1 } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { removeSelectedLocalData } from "../../utilities/localStorage";
import Cart from "../cart/Cart";
import NotFound from "../not-found/NotFound";
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
        {console.log(cart.length)}
        {cart.length > 0 ? (
          cart.map((product, index) => (
            <ReviewProduct
              key={index}
              product={product}
              removeBtnHandle={removeBtnHandle}
            ></ReviewProduct>
          ))
        ) : (
          <NotFound></NotFound>
        )}
        {/* {cart.map((product, index) => (
          <ReviewProduct
            key={index}
            product={product}
            removeBtnHandle={removeBtnHandle}
          ></ReviewProduct>
        ))} */}
      </div>
      <div className="cart">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default OrderReview;
