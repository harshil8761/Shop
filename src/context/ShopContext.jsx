import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ShopContext } from "./Shop";
import { all_product } from "../assets/all_Product.js";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(1);
  const nevigate = useNavigate()

  useEffect(() => {
    let storeCart = JSON.parse(localStorage.getItem("ecom")) || [];
    setCart(storeCart);
  }, []);

  const updatedCart = useCallback((newCart) => {
    setCart(newCart);
    localStorage.setItem("ecom", JSON.stringify(newCart));
  }, []);

  const addToCart = useCallback(
    (item) => {
      const existing = cart.find((p) => p.id === item.id);
      let updateCart;
      if (existing) {
        updateCart = cart.map((p) =>
          p.id === item.id ? { ...p, count: p.count + item.count } : p
        );
        toast.success(`Already in Cart Qty ${item.count} increace`);
      } else {
        updateCart = [...cart, { ...item, count: item.count }];
        toast.success("Item added.");
      }
      updatedCart(updateCart);
    },
    [cart, updatedCart]
  );

  const subTotal = useMemo(() => {
    return Array.isArray(cart)
      ? cart.reduce((acum, item) => acum + item.price * item.count, 0)
      : 0;
  }, [cart]);



  const DiscountTotal = useMemo(() => Math.round(subTotal * 0.05),[subTotal]);
  const grandTotal = useMemo(() => Math.round(subTotal - DiscountTotal),[subTotal,DiscountTotal]);

  

  const removeItem = useCallback(
    (id) => {
      const remove = cart.filter((item) => item.id !== id);
      setCart(remove);
      localStorage.setItem("ecom", JSON.stringify(remove));
      toast.success("Item Removed.");
    },
    [cart]
  );

  const cartIncre = useCallback(
    (id) => {

      const updated = cart.map((item) => {
        if (item.id === id) {
          const newItem = {
            ...item,
            count: (item.count ?? 0) + 1,
          };
          console.log("Incrementing item:", newItem);
          return newItem;
        }
        return item;
      });

      updatedCart(updated);
    },
    [cart, updatedCart]
  );

  
  const cartDecre = useCallback(
    (id) => {

      const updated = cart.map((item) => {
        if (item.id === id) {
          const newItem = {
            ...item,
            count: item.count > 1 ? (item.count ?? 0) - 1 : 1,
          };
          console.log("Incrementing item:", newItem);
          return newItem;
        }
        return item;
      });

      updatedCart(updated);
    },
    [cart, updatedCart]
  );

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("ecom");
  }

  const handleCheck = () => {
    clearCart()
    nevigate('/thank')
  }

  const shopVal = {
    all_product,
    addToCart,
    cart,
    subTotal,
    removeItem,
    count,
    setCount,
    cartIncre,
    cartDecre,
    grandTotal,
    DiscountTotal,
    handleCheck
  };
  return (
    <ShopContext.Provider value={shopVal}>{children}</ShopContext.Provider>
  );
};

export default ShopProvider;
