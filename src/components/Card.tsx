import React from "react";

interface CardProps {
    title: string;
    img: string;
  }
  

 export const Card: React.FC<CardProps> = ({ title, img }) => {
  return (
    <div className="flex-shrink-0 w-[437px] bg-white p-4 shadow-md rounded-md">
        <img srcSet={img} alt={img}/>
        <h2 className="text-black text-3xl font-manrope text-left font-medium w-full mt-6">{title}</h2>
    </div>
  );
};
