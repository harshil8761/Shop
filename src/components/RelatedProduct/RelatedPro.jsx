import React, { useContext } from "react";
import Item from "../Item/Item";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/Shop";

const RelatedPro = () => {
  const { id } = useParams();
  const { all_product } = useContext(ShopContext);

  const curProduct = all_product.find((item) => item.id === Number(id));
  if (!curProduct) return null;

  const relatedProduct = all_product.filter(
    (p) => p.category === curProduct.category && p.id !== curProduct.id
  );

  return (
    <>
      <h1>Related Product</h1>
      <div className="container">
        <div className="newdrop" >
          {relatedProduct.map((item) => {
            if (item.id > 4) {
              return (
                <Item
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                />
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default RelatedPro;
