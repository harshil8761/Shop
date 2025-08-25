import React, { useContext } from "react";
import "./css/Cart.css";
import { ShopContext } from "../context/Shop";

const Cart = () => {
  const { cart, subTotal, removeItem,cartIncre,cartDecre,grandTotal,DiscountTotal,handleCheck } = useContext(ShopContext);
  return (
    <>
      <div className="cart-container">
        <div className="cart-items">
          <h2>My cart</h2>
          <hr />
          {cart.length === 0 ? (
            <p className="empty">Your Cart is Empty</p>
          ) : (
            <>
              {cart.map((item, index) => (
                <div className="cart-item" key={index}>
                  <img src={item.image} alt="Green Shirt" />
                  <div className="item-details">
                    <p className="title"> {item.name} </p>
                    <p className="price"> ₹{item.price} </p>
                  </div>
                  <div className="quantity">
                    <div className="quantity-controls">
                      <button onClick={() => cartDecre(item.id)} >-</button>
                      <p> {item.count} </p>
                      <button  onClick={() => cartIncre(item.id)} >+</button>
                    </div>
                  </div>
                  <div className="item-total"> ₹{item.price * item.count} </div>
                  <button
                    className="remove-btn"
                    onClick={() => removeItem(item.id)}
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </>
          )}
        </div>
        <div className="summary">
          <h2>Order summary</h2>
          <hr />
          <div className="summary-line">
            <span>Subtotal</span>
            <span> ₹{subTotal} </span>
          </div>
          <hr />
          <div className="summary-line">
            <span>DisCount - 5%</span>
            <span> {DiscountTotal} </span>
          </div>
          <hr />
          <div className="summary-total">
            <span>Total</span>
            <span>₹{grandTotal} </span>
          </div>

          <button className="checkout-btn"  onClick={handleCheck} disabled={cart.length === 0} >Checkout</button>
          <p className="secure-checkout">🔒 Secure Checkout</p>
        </div>
      </div>
    </>
  );
};

export default Cart;
