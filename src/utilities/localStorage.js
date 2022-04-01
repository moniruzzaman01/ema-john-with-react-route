const getLocalData = () => {
  let storedData;
  if (localStorage.getItem("cart")) {
    storedData = JSON.parse(localStorage.getItem("cart"));
  } else {
    storedData = {};
  }
  return storedData;
};

const setLocalData = (productId) => {
  const storedData = getLocalData();
  let quantity = storedData[productId];
  if (quantity) {
    quantity = quantity + 1;
    storedData[productId] = quantity;
  } else {
    storedData[productId] = 1;
  }

  localStorage.setItem("cart", JSON.stringify(storedData));
};
export { getLocalData, setLocalData };
