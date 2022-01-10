import React, { useEffect, useState, useCallback } from "react";
import "./Categories.css";
import useProducts from "../../hooks/useProducts.js";
import CategoriesBanner from "./CategoriesBanner.js";
import Product from "../product/Product.js";


const Categories = () => {
  const { list } = useProducts();

  return (
    <section className="Categories-container">
      <CategoriesBanner />
      <div className="Categories-container__tile">
      {list.map((item) => (
          <Product
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </section>
  );
};

export default Categories;
