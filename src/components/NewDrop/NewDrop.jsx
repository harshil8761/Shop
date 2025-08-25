import React from "react";
import "./NewDrop.css";
import { useContext } from "react";
import { ShopContext } from "../../context/Shop";
import Item from "../Item/Item";

const NewDrop = () => {
  const { all_product } = useContext(ShopContext);
  return (
    <>
      <h1>New Drops</h1>
      <div className="container">
        <div className="newdrop">
          {all_product.map((item, index) => {
            if (item.id <= 8) {
              return (
                <Item
                  key={index}
                  id={item.id}
                  products={item}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                />
              );
            } else {
              <p>Product Not Found</p>;
            }
          })}
        </div>
      </div>
    </>
  );
};

export default NewDrop;
