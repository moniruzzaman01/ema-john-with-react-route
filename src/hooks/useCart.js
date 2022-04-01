import { useEffect, useState } from "react";
import { getLocalData } from "../utilities/localStorage";

const useCart = (products) => {
  const [cart, setCart] = useState([]);
  //call data from local storage
  useEffect(() => {
    let storedData = getLocalData();
    let saved = [];
    for (const id in storedData) {
      // console.log("qnty", storedData[id]);
      const savedData = products.find((product) => product.id === id);
      if (savedData) {
        const quantity = storedData[id];
        savedData.quantity = quantity;
        saved.push(savedData);
      }
    }
    setCart(saved);
  }, [products]);
  return [cart, setCart];
};
export default useCart;
