import React, { useContext,  useState } from "react";
import { ShopContext } from "../context/Shop";
import Item from '../components/Item/Item'
import './css/ProductCate.css'

const ProductCate = ({ cate }) => {
    const {all_product} = useContext(ShopContext)
    const [sortType,setSortType] = useState("All");

    let product = all_product.filter(item => item.category === cate);

      if (sortType === "Price: Low to High") {
        product = [...product].sort((a,b) => a.price - b.price);
      }else if(sortType === "Price: High to Low"){
        product = [...product].sort((a,b) => b.price - a.price);
      }
      


  return (
    <div className="container mini-container">
      <section className="product-section">
        <div className="product-header">
          <p> {product.length}  Products</p>
          <div className="sort">
            Sort by:
            <select value={sortType} onChange={(e) => setSortType(e.target.value)} >
              <option>All</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>
        <div className="container  product-grid">
            {
              product.map((item,index) => {
                 if (cate === item.category) {
                  return  <Item key={index} products={item} id={item.id} name={item.name} price={item.price} image={item.image} />
                 }
              })
            }
        </div>
      </section>
    </div>
  );
};

export default ProductCate;
