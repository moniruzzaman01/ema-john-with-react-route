import React from "react";
import "./ReviewProduct.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ReviewProduct = ({ product }) => {
  //   console.log("product", product);
  return (
    <div className="review-product">
      <div>
        <img src={product.img} alt="" />
      </div>
      <div className="details">
        <p>{product.name}</p>
        <p>
          <small>
            Price: <span>${product.price}</span>
          </small>
        </p>
        <p>
          <small>
            Shipping Charge: <span>${product.shipping}</span>
          </small>
        </p>
      </div>
      <div className="icon">
        <FontAwesomeIcon icon={faTrashAlt} />
      </div>
    </div>
  );
};

export default ReviewProduct;
