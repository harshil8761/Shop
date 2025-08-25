import React, { useContext, useState } from "react";
import "./ProductDis.css";
import { ShopContext } from "../../context/Shop";

const ProductDis = ({ product }) => {
  const { addToCart, cart, cartIncre, cartDecre } = useContext(ShopContext);
  const { image, name, price, description, id } = product;

  // 👇 local quantity state only for this product
  const [count, setCount] = useState(1);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 1 ? prev - 1 : 1));

  // check if product already in cart
  const inCart = cart.find((item) => item.id === id);

  return (
    <div className="container1">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-details">
        <h1 className="Product-name">{name}</h1>
        <p className="sku">SKU: 00{id}</p>
        <p className="price">₹{price}</p>
        <p className="description">{description}</p>

        {/* If not in cart, show custom qty selector */}
        {!inCart ? (
          <>
            <div className="quantity">
              <label>Quantity *</label>
              <div className="quantity-controls">
                <button onClick={decrement}>-</button>
                <p>{count}</p>
                <button onClick={increment}>+</button>
              </div>
            </div>
            <button
              className="btn btn-cart"
              onClick={() =>
                addToCart({ id, name, image, price, count })
              }
            >
              Add to Cart
            </button>
          </>
        ) : (
          // If already in cart, show increment/decrement from context
          <div className="quantity-controls">
            <button onClick={() => cartDecre(id)}>-</button>
            <p>{inCart.count}</p>
            <button onClick={() => cartIncre(id)}>+</button>
          </div>
        )} 
      </div>
    </div>
  );
};

export default ProductDis;
