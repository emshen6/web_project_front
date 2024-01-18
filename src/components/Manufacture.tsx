import React from 'react'
import {Card} from "./Card";
import {categories} from "../data/categories.js";


export const Manufacture = () => {
  return (
    <div className="flex items-stretch flex-col pb-7">
      <div className="text-black text-4xl font-manrope self-stretch text-left mx-11">
        Производство
      </div>
      <div className="flex items-center justify-center h-screen">
        <div className="items-start flex overflow-x-scroll p-4 rounded-md scrollbar scrollbar-thumb-black scrollbar-thin">
          <div className="flex space-x-4">
            {categories.map((category) => (
              <Card key={category.index} title={category.title} img={category.img} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}