import React from "react";
import main_img from "../img/main.png";
import { Manufacture } from "./Manufacture";
import { Details } from "./Details";
import AboutUs from "./AboutUs";
import img from "../img/sparks.png";

export const MainPage = () => {
  return (
    <div className="bg-white flex flex-col pt-6 p-5">
      <img srcSet={main_img} alt="main" />
      <AboutUs />
      <Manufacture />
      <Details />

      <div className="flex flex-col gap-[24px] items-center flex-nowrap relative mt-[500px] mb-[150px] mr-[0px]">
        <div className="flex gap-[33px] items-center shrink-0 flex-nowrap relative ml-[50px]">
          <span className="h-[75px] shrink-0 font-['Manrope'] text-[55px] font-normal text-[#000] relative text-left">
            Мастерство в каждой детали
          </span>
          <img srcSet={img} alt="img" />
        </div>
        <span className="h-[75px] shrink-0 font-['Manrope'] text-[55px] font-normal text-[#000] relative text-left">
          Опыт и качество для вашего бизнеса
          <br />
        </span>
      </div>
    </div>
  );
};
