import React from "react";

interface ProductCardProps {
    title: string;
    img: string;
    price: number;
  }
  

 export const ProductCard: React.FC<ProductCardProps> = ({ title, img, price }) => {
  return (
    <div className="items-stretch flex max-w-[437px] flex-col">
      <img
        loading="lazy"
        srcSet={img}
        className="aspect-[1.33] object-contain object-center w-full justify-end items-center overflow-hidden"
        alt={img}
      />
      <div className="border border-[color:var(--Gray,#9F9F9F)] flex w-full flex-col justify-center items-stretch mt-3 px-5 py-2.5 rounded-3xl border-solid">
        <span className="justify-between items-stretch flex gap-5">
          <div className="text-black text-xl leading-7">{title}</div>
          <div className="text-neutral-400 text-xl leading-7">{price}₽</div>
        </span>
      </div>
    </div>
  );
};
