import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="brand">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="links">
        <Link to="/home">Home</Link>
        <Link to="/order">Order</Link>
        <Link to="/order-review">Order Review</Link>
        <Link to="manage-inventory">Manage Inventory</Link>
      </div>
    </nav>
  );
};

export default Header;
