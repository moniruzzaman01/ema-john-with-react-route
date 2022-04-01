import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Order from "./components/order/Order";
import OrderReview from "./components/order-review/OrderReview";
import ManageInventory from "./components/manage-inventory/ManageInventory";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/order-review" element={<OrderReview />}></Route>
        <Route path="/manage-inventory" element={<ManageInventory />}></Route>
      </Routes>
    </div>
  );
}

export default App;
