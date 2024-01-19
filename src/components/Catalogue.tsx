import React from "react";
import { catalogue } from "../data/catalogue.js";
import { ProductCard } from "./ProductCard";


const Catalogue = () => {
  return (
    <div className="grid grid-cols-4">
      <div className="ml-10 mt-10">

      </div>

      <div className="col-span-3 p-4">
        <div className="text-black text-4xl font-medium text-left whitespace-nowrap self-start">
          Каталог
        </div>
        <div className="grid grid-cols-3 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
          {catalogue.map((product) => (
              <ProductCard
              key={product.index}
              title={product.title}
              img={product.img}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
