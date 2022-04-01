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
  for (const id in storedData) {
    if (productId === id) {
      console.log("matched");
    } else {
      storedData[id] = 1;
      console.log("hello");
    }
  }
  console.log("stored", storedData);
  //   localStorage.setItem("cart", JSON.stringify(storedData));
};
export { getLocalData, setLocalData };
