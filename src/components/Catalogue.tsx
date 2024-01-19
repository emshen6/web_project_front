import React, { useState } from "react";
import { catalogue } from "../data/catalogue";
import { categories } from "../data/categories";
import { ProductCard } from "./ProductCard";
import classNames from 'classnames';


export const Catalogue: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryChange = (category: string) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updatedCategories);
  };

  const filteredProducts = selectedCategories.length
    ? catalogue.filter((product) => selectedCategories.includes(product.category))
    : catalogue;

  return (
    <div className="grid grid-cols-4">
      <div>
        {Array.from(new Set(categories.map((category) => category.title))).map((category) => (
          <div className="text-left ml-10 text-xl mt-10">
            <label key={category}>
              <input
                type="checkbox"
                value={category}
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
              {category}
            </label>
          </div>
        ))}
      </div>

      <div className="col-span-3 p-4">
        <div className="text-black text-4xl font-medium text-left whitespace-nowrap self-start">
          Каталог
        </div>
        <div className="grid grid-cols-3 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
          {filteredProducts.map((product) => (
              <ProductCard
              key={product.id}
              title={product.name}
              img={product.img}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>

  );
};


