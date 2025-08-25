import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { IoCartOutline, IoClose, IoMenu } from "react-icons/io5";
import { ShopContext } from "../../context/Shop";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {cart} = useContext(ShopContext)

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">T SHOP</Link>
      </div>
      <div className="navbar">
        <div className={`nav ${isOpen ? "active" : ""}`}>
          <ul>
            <Link to="/new">
              <li>New</li>
            </Link>
            <Link to="/men">
              <li>Men</li>
            </Link>
            <Link to="/women">
              <li>Women</li>
            </Link>
          </ul>
        </div>
        <div className="menu">
          <Link className="cart" to="/cart">
            <IoCartOutline className="cart-icon" />
            <span className="cart-count"> {cart.length} </span>
          </Link>
                    {isOpen ? (
            <IoClose className="menu-icon" onClick={() => setIsOpen(false)} />
          ) : (
            <IoMenu className="menu-icon" onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

