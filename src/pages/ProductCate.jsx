import React, { useContext, useState } from "react";
import { ShopContext } from "../context/Shop";
import Item from "../components/Item/Item";
import "./css/ProductCate.css";

const ProductCate = ({ cate }) => {
  const { all_product } = useContext(ShopContext);
  const [sortType, setSortType] = useState("All");


  let product = all_product.filter((item) => {
    const price = item.price
    let inRange = true;
    if (sortType === "low") {
      inRange = price >= 0 && price <= 499
    }else if(sortType === "high"){
      inRange = price >= 599 && price <= 999
    }else{
      inRange = true
    }
    return item.category === cate && inRange
  })


  return (
    <div className="container mini-container">
      <section className="product-section">
        <div className="product-header">
          <p> {product.length} Products</p>
          <div className="sort">
            Sort by:
            <select
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
            >
              <option value='all' >All</option>
              <option value="low" >Price: Low </option>
              <option value="high" >Price: High</option>
            </select>
          </div>
        </div>
        <div className="container  product-grid">
          {product.map((item, index) => {
            return (
              <Item
                key={index}
                products={item}
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ProductCate;
